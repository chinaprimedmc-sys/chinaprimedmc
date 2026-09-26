"use client";

import { ArrowUpRight, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  getJournalDecision,
  formatJournalTitle,
  journalDecisions,
  journalSearchText,
  type JournalDecisionId,
} from "@/content/journal/presentation";
import { trackEvent } from "@/lib/analytics/events";
import type { JournalSummary } from "@/types/journal";
import styles from "./journal-hub.module.css";

type ActiveDecision = JournalDecisionId | "all";

type JournalGuideExplorerProps = {
  articles: JournalSummary[];
};

const validDecisions = new Set<JournalDecisionId>(journalDecisions.map(({ id }) => id));
const initialGuideCount = 3;

export function JournalGuideExplorer({ articles }: JournalGuideExplorerProps) {
  const [activeDecision, setActiveDecision] = useState<ActiveDecision>("all");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const matches = useMemo(
    () => findMatches(articles, activeDecision, query),
    [activeDecision, articles, query],
  );
  const visibleMatches = showAll ? matches : matches.slice(0, initialGuideCount);
  const hasFilters = activeDecision !== "all" || query.trim().length > 0;
  const activeLabel =
    journalDecisions.find((decision) => decision.id === activeDecision)?.label ??
    "Recommended starting points";

  useEffect(() => {
    // URL 是筛选状态的可分享来源，返回和前进时必须恢复同一组结果。
    const applyUrlState = () => {
      const params = new URLSearchParams(window.location.search);
      const rawDecision = params.get("decision") as JournalDecisionId | null;
      setActiveDecision(rawDecision && validDecisions.has(rawDecision) ? rawDecision : "all");
      setQuery(params.get("q") ?? "");
      setShowAll(false);
    };

    applyUrlState();
    window.addEventListener("popstate", applyUrlState);
    return () => window.removeEventListener("popstate", applyUrlState);
  }, []);

  useEffect(() => {
    const normalizedQuery = query.trim();
    if (!normalizedQuery) return;

    const timeout = window.setTimeout(() => {
      trackEvent("journal_search", {
        query_length: normalizedQuery.length,
        result_count: matches.length,
      });
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [matches.length, query]);

  const updateDecision = (decision: ActiveDecision) => {
    setActiveDecision(decision);
    setShowAll(false);
    updateUrl(decision, query, "push");
    trackEvent("topic_select", { topic: decision });
  };

  const updateQuery = (value: string) => {
    setQuery(value);
    setShowAll(false);
    // 键入过程只替换当前历史记录，避免返回键逐字回退。
    updateUrl(activeDecision, value, "replace");
  };

  const reset = () => {
    setActiveDecision("all");
    setQuery("");
    setShowAll(false);
    updateUrl("all", "", "push");
  };

  return (
    <div className={styles.finder}>
      <div className={styles.finderIntro}>
        <p className={styles.sectionLabel}>Decision Finder</p>
        <h2>Start with the decision in front of you</h2>
        <p>
          Choose the question closest to your trip. We will surface the most useful guides first.
        </p>
      </div>

      <div className={styles.finderLayout}>
        <div className={styles.finderControls}>
          <label className={styles.search}>
            <span className={styles.controlLabel}>Search the Journal</span>
            <span className={styles.searchField}>
              <Search size={17} strokeWidth={1.7} aria-hidden="true" />
              <input
                type="search"
                value={query}
                placeholder="Routes, places or practical questions"
                onChange={(event) => updateQuery(event.target.value)}
              />
              {query ? (
                <button type="button" aria-label="Clear search" onClick={() => updateQuery("")}>
                  <X size={16} aria-hidden="true" />
                </button>
              ) : null}
            </span>
          </label>

          <label className={styles.mobileDecisionSelect}>
            <span className={styles.controlLabel}>Choose a planning question</span>
            <select
              value={activeDecision}
              onChange={(event) => updateDecision(event.target.value as ActiveDecision)}
            >
              <option value="all">All planning questions</option>
              {journalDecisions.map((decision) => (
                <option key={decision.id} value={decision.id}>
                  {decision.label}
                </option>
              ))}
            </select>
          </label>

          <div className={styles.decisionList} role="group" aria-label="Journal planning questions">
            {journalDecisions.map((decision) => (
              <button
                key={decision.id}
                type="button"
                className={styles.decisionButton}
                aria-pressed={activeDecision === decision.id}
                onClick={() => updateDecision(activeDecision === decision.id ? "all" : decision.id)}
              >
                <strong>{decision.label}</strong>
                <span>{decision.description}</span>
              </button>
            ))}
          </div>
        </div>

        <div id="journal-finder-results" className={styles.finderResults} aria-live="polite">
          <div className={styles.resultsHeader}>
            <div>
              <p>{hasFilters ? `${matches.length} matching guides` : "Editor recommended"}</p>
              <h3>{activeLabel}</h3>
            </div>
            {hasFilters ? (
              <button type="button" className={styles.resetButton} onClick={reset}>
                Clear all
              </button>
            ) : null}
          </div>

          {visibleMatches.length ? (
            <div className={styles.resultList}>
              {visibleMatches.map((article) => (
                <Link
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  className={styles.resultLink}
                  data-journal-event="article_open"
                  data-article-slug={article.slug}
                  data-placement="decision-finder"
                >
                  <span className={styles.resultMeta}>
                    {article.category} <span aria-hidden="true">|</span> {article.readingTime}
                  </span>
                  <strong>{formatJournalTitle(article.title)}</strong>
                  <span className={styles.resultExcerpt}>{article.excerpt}</span>
                  <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3>No exact guide matches this search</h3>
              <p>Try a place name, a shorter question or browse all planning decisions.</p>
              <button type="button" onClick={reset}>
                Reset the Journal
              </button>
            </div>
          )}

          <div className={styles.resultActions}>
            {matches.length > initialGuideCount ? (
              <button
                type="button"
                className={styles.showAllButton}
                onClick={() => setShowAll((current) => !current)}
              >
                {showAll
                  ? "Show fewer guides"
                  : `View all ${matches.length}${hasFilters ? " matching" : ""} guides`}
              </button>
            ) : null}

            <Link href="#complete-journal" className={styles.completeIndexLink}>
              Browse the complete Journal <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function findMatches(articles: JournalSummary[], decision: ActiveDecision, query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  return articles
    .filter((article) => {
      const matchesDecision = decision === "all" || getJournalDecision(article) === decision;
      const matchesQuery = !normalizedQuery || journalSearchText(article).includes(normalizedQuery);
      return matchesDecision && matchesQuery;
    })
    .sort((left, right) => {
      const editorialPriority =
        Number(Boolean(right.editorPick)) - Number(Boolean(left.editorPick));
      if (editorialPriority) return editorialPriority;
      const featuredPriority = Number(Boolean(right.featured)) - Number(Boolean(left.featured));
      if (featuredPriority) return featuredPriority;
      return right.publishedAt.localeCompare(left.publishedAt);
    });
}

function updateUrl(decision: ActiveDecision, query: string, mode: "push" | "replace") {
  const params = new URLSearchParams(window.location.search);
  if (decision === "all") params.delete("decision");
  else params.set("decision", decision);
  if (query.trim()) params.set("q", query.trim());
  else params.delete("q");
  const nextUrl = `${window.location.pathname}${params.size ? `?${params.toString()}` : ""}`;
  window.history[mode === "push" ? "pushState" : "replaceState"]({}, "", nextUrl);
}
