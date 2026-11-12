# Website fonts

Inter and Newsreader, distributed under the SIL Open Font License 1.1. The accompanying OFL files are retained from this repository's existing `assets/fonts` distribution. The web files retain their embedded author notices; `manifest.json` records those notices and SHA-256 hashes.

Upstream sources:

- https://github.com/google/fonts/tree/main/ofl/inter
- https://github.com/google/fonts/tree/main/ofl/newsreader

These exact WOFF2 subsets were already used by this site's `next/font/google` output, recovered from `.next/dev/static/media` and matched to its generated `app/layout.css`. They are bundled unchanged to remove the build-time dependency on Google's font servers. They are not newly downloaded or regenerated files.

`styles/fonts.css` preserves the generated font-face definitions: Inter normal 400/500/600/700 and Newsreader normal/italic 400/500, all existing Unicode subsets, swap behavior and fallback metrics. The three Latin files remain preloaded from the root layout. Other subsets load when matching characters occur. Static regular TTF files under `assets/fonts` remain for social-card generation.

When upgrading fonts, replace the affected files and their notices together, record hashes and source, and recheck weight/style, character coverage, layout and preload behavior. A new font revision should use a new asset filename for cache correctness.
