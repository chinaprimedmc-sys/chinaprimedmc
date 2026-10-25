import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const articleDirectory = "content/journal/articles";
const articleFiles = (await readdir(articleDirectory)).filter((file) => file.endsWith(".md"));
const rows = [];

for (const file of articleFiles) {
  const source = await readFile(path.join(articleDirectory, file), "utf8");
  const draft = section(source, "## Draft", [
    "## Suggested structured data",
    "## Structured Data Recommendation",
    "## SEO & GEO Review",
    "## Sources",
    "## Review Notes",
  ]);
  const sourceSection = section(source, "## Sources", "## Review Notes");
  const paragraphs = draft
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(
      (paragraph) =>
        paragraph &&
        !paragraph.startsWith("#") &&
        !paragraph.startsWith("-") &&
        !paragraph.startsWith("|") &&
        !paragraph.startsWith(">"),
    );
  const text = draft
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*_`>|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  rows.push({
    slug: file.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, ""),
    words: text ? text.split(/\s+/).length : 0,
    headings: (draft.match(/^#{2,3}\s+/gm) ?? []).length,
    questions: (draft.match(/^#{2,3}\s+.*\?/gm) ?? []).length,
    citations: (sourceSection.match(/https?:\/\//g) ?? []).length,
    images: (draft.match(/!\[[^\]]*\]\([^)]+\)/g) ?? []).length,
    longParagraphs: paragraphs.filter((paragraph) => paragraph.length > 720).length,
  });
}

rows.sort((left, right) => left.words - right.words || left.slug.localeCompare(right.slug));

const failures = [];
const thin = rows.filter((row) => row.words < 650);
const imageBlocks = rows.filter((row) => row.images > 0);
const overlyDense = rows.filter((row) => row.longParagraphs > 2);

if (thin.length) failures.push(`Thin Markdown articles: ${format(thin, "words")}`);
if (imageBlocks.length) failures.push(`Markdown image blocks: ${format(imageBlocks, "images")}`);
if (overlyDense.length) {
  failures.push(`Articles with more than two very long paragraphs: ${format(overlyDense, "longParagraphs")}`);
}

const report = {
  markdownArticles: rows.length,
  averageWords: Math.round(rows.reduce((sum, row) => sum + row.words, 0) / rows.length),
  shortest: rows.slice(0, 12),
  withoutCitations: rows.filter((row) => row.citations === 0).map((row) => row.slug),
  withoutQuestionHeadings: rows.filter((row) => row.questions === 0).map((row) => row.slug),
};

console.log(JSON.stringify(report, null, 2));

if (failures.length) {
  console.error("Journal quality audit failed.");
  failures.forEach((failure) => console.error(failure));
  process.exit(1);
}

console.log(`Journal quality audit passed: ${rows.length} text-only Markdown articles checked.`);

function section(source, startMarker, endMarkers) {
  const start = source.indexOf(startMarker);
  if (start === -1) return "";
  const contentStart = start + startMarker.length;
  const markers = Array.isArray(endMarkers) ? endMarkers : [endMarkers];
  const end = markers
    .map((marker) => source.indexOf(marker, contentStart))
    .filter((index) => index !== -1)
    .sort((left, right) => left - right)[0];
  return source.slice(contentStart, end ?? source.length).trim();
}

function format(items, field) {
  return items.map((item) => `${item.slug} (${item[field]})`).join(", ");
}
