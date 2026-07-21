export const imageUploadMaxBytes = 12 * 1024 * 1024;
export const imageUploadMaxDimension = 12_000;
export const imageUploadMaxPixels = 40_000_000;

const mimeTypes = {
  avif: "image/avif",
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
} as const;

type ImageExtension = keyof typeof mimeTypes;

export type ValidatedImage = {
  extension: ImageExtension;
  mimeType: (typeof mimeTypes)[ImageExtension];
  width: number;
  height: number;
};

export function validateImageUpload(bytes: Uint8Array, declaredType: string): ValidatedImage {
  if (!bytes.length || bytes.length > imageUploadMaxBytes) {
    throw new Error("Image size is invalid.");
  }

  const image = detectImage(bytes);
  if (!image || image.mimeType !== declaredType) {
    throw new Error("File contents do not match the selected image format.");
  }
  if (
    image.width < 1 ||
    image.height < 1 ||
    image.width > imageUploadMaxDimension ||
    image.height > imageUploadMaxDimension ||
    image.width * image.height > imageUploadMaxPixels
  ) {
    throw new Error("Image dimensions are too large.");
  }

  return image;
}

function detectImage(bytes: Uint8Array): ValidatedImage | null {
  return detectPng(bytes) || detectJpeg(bytes) || detectWebp(bytes) || detectAvif(bytes);
}

function detectPng(bytes: Uint8Array): ValidatedImage | null {
  const signature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  if (
    bytes.length < 24 ||
    !signature.every((value, index) => bytes[index] === value) ||
    text(bytes, 12, 4) !== "IHDR"
  )
    return null;
  return {
    extension: "png",
    mimeType: mimeTypes.png,
    width: readUint32BigEndian(bytes, 16),
    height: readUint32BigEndian(bytes, 20),
  };
}

function detectJpeg(bytes: Uint8Array): ValidatedImage | null {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff) return null;

  let offset = 2;
  while (offset + 8 < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = bytes[offset + 1];
    offset += 2;
    if (marker === 0xd8 || marker === 0xd9) continue;
    if (marker === 0xda) break;
    if (offset + 2 > bytes.length) break;
    const segmentLength = readUint16BigEndian(bytes, offset);
    if (segmentLength < 2 || offset + segmentLength > bytes.length) break;
    if (isJpegStartOfFrame(marker) && segmentLength >= 7) {
      return {
        extension: "jpg",
        mimeType: mimeTypes.jpg,
        height: readUint16BigEndian(bytes, offset + 3),
        width: readUint16BigEndian(bytes, offset + 5),
      };
    }
    offset += segmentLength;
  }
  return null;
}

function detectWebp(bytes: Uint8Array): ValidatedImage | null {
  if (bytes.length < 30 || text(bytes, 0, 4) !== "RIFF" || text(bytes, 8, 4) !== "WEBP") {
    return null;
  }

  const chunk = text(bytes, 12, 4);
  if (chunk === "VP8X") {
    return {
      extension: "webp",
      mimeType: mimeTypes.webp,
      width: 1 + readUint24LittleEndian(bytes, 24),
      height: 1 + readUint24LittleEndian(bytes, 27),
    };
  }
  if (chunk === "VP8 " && bytes[23] === 0x9d && bytes[24] === 0x01 && bytes[25] === 0x2a) {
    return {
      extension: "webp",
      mimeType: mimeTypes.webp,
      width: readUint16LittleEndian(bytes, 26) & 0x3fff,
      height: readUint16LittleEndian(bytes, 28) & 0x3fff,
    };
  }
  if (chunk === "VP8L" && bytes[20] === 0x2f) {
    const bits = readUint32LittleEndian(bytes, 21);
    return {
      extension: "webp",
      mimeType: mimeTypes.webp,
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }
  return null;
}

function detectAvif(bytes: Uint8Array): ValidatedImage | null {
  if (bytes.length < 32 || text(bytes, 4, 4) !== "ftyp") return null;
  const compatibleBrands = text(bytes, 8, Math.min(bytes.length - 8, 32));
  if (!compatibleBrands.includes("avif") && !compatibleBrands.includes("avis")) return null;

  for (let offset = 4; offset + 16 <= bytes.length; offset += 1) {
    if (text(bytes, offset, 4) === "ispe") {
      return {
        extension: "avif",
        mimeType: mimeTypes.avif,
        width: readUint32BigEndian(bytes, offset + 8),
        height: readUint32BigEndian(bytes, offset + 12),
      };
    }
  }
  return null;
}

function isJpegStartOfFrame(marker: number) {
  return marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
}

function text(bytes: Uint8Array, offset: number, length: number) {
  return String.fromCharCode(...bytes.subarray(offset, offset + length));
}

function readUint16BigEndian(bytes: Uint8Array, offset: number) {
  return (bytes[offset] << 8) | bytes[offset + 1];
}

function readUint16LittleEndian(bytes: Uint8Array, offset: number) {
  return bytes[offset] | (bytes[offset + 1] << 8);
}

function readUint24LittleEndian(bytes: Uint8Array, offset: number) {
  return bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16);
}

function readUint32BigEndian(bytes: Uint8Array, offset: number) {
  return (
    bytes[offset] * 0x1000000 +
    (bytes[offset + 1] << 16) +
    (bytes[offset + 2] << 8) +
    bytes[offset + 3]
  );
}

function readUint32LittleEndian(bytes: Uint8Array, offset: number) {
  return (
    bytes[offset] +
    bytes[offset + 1] * 0x100 +
    bytes[offset + 2] * 0x10000 +
    bytes[offset + 3] * 0x1000000
  );
}
