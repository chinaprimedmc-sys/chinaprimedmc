import type { LinkAction, MediaAsset } from "@/types/component-library";

export type JournalCategory =
  | "Destinations"
  | "Travel Guides"
  | "Visa"
  | "Food"
  | "Culture"
  | "Luxury Hotels"
  | "Festivals"
  | "Adventure"
  | "Family Travel"
  | "Photography"
  | "Luxury Travel"
  | "Train Travel"
  | "Nature"
  | "History"
  | "Shopping"
  | "Industry News";

export type JournalTagType =
  "city" | "province" | "theme" | "travel-style" | "season" | "audience" | "experience";

export type JournalTag = {
  slug: string;
  label: string;
  type: JournalTagType;
};

export type JournalAuthor = {
  name: string;
  role: string;
  avatar?: MediaAsset;
};

export type JournalContentBlock =
  | {
      type: "heading";
      id: string;
      title: string;
      level?: 2 | 3;
    }
  | {
      type: "paragraph";
      body: string;
    }
  | {
      type: "image";
      image: MediaAsset;
      caption?: string;
    }
  | {
      type: "quote";
      quote: string;
      attribution?: string;
    }
  | {
      type: "list";
      style: "ordered" | "unordered";
      items: string[];
    }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    }
  | {
      type: "callout";
      tone: "note" | "warning";
      title?: string;
      body: string;
    }
  | {
      type: "cta";
      eyebrow?: string;
      title: string;
      description: string;
      primary: LinkAction;
      secondary?: LinkAction;
      image?: MediaAsset;
    }
  | {
      type: "faq";
      question: string;
      answer: string;
    };

export type JournalRelatedManual = {
  destinations?: string[];
  tours?: string[];
  experiences?: string[];
  articles?: string[];
};

export type JournalCitation = {
  name: string;
  url: string;
  publisher: string;
  publishedAt?: string;
};

export type JournalArticle = {
  slug: string;
  title: string;
  dek: string;
  excerpt: string;
  category: JournalCategory;
  tags: string[];
  author: JournalAuthor;
  publishedAt: string;
  updatedAt?: string;
  /** 仅在原始文章明确提供 sources_verified_at 时存在。 */
  lastFactCheckedAt?: string;
  readingTime: string;
  featured?: boolean;
  editorPick?: boolean;
  hero: {
    image: MediaAsset;
    eyebrow?: string;
    mode?: "image" | "text";
  };
  gallery: MediaAsset[];
  content: JournalContentBlock[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalPath?: string;
    ogImage?: MediaAsset;
  };
  related?: JournalRelatedManual;
  citations?: JournalCitation[];
  conversion?: {
    eyebrow: string;
    title: string;
    description: string;
    label: string;
    href?: string;
    image?: MediaAsset;
  };
  sourcePath?: string;
  editorial?: {
    contentType?: "inspiration" | "route" | "practical" | "comparison" | "operator";
    decisionStage?: "discover" | "evaluate" | "prepare" | "decide";
    keyAnswer?: string;
    operatorRead?: string;
    watchFor?: string;
    changeWhen?: string;
    appliesTo?: string[];
    relatedJourneyReason?: string;
    tradeOff?: string;
    travelerFit?: string;
  };
};

export type JournalCardArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  tags: string[];
  image?: MediaAsset;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  editorPick?: boolean;
};

/** Journal 首页可安全序列化的轻量数据，不包含正文、图库或引用。 */
export type JournalSummary = JournalCardArticle & {
  updatedAt?: string;
};
