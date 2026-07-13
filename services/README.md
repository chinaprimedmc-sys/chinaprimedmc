# Services

External data access, API clients, server actions, and integration logic live here.

Rules:

- Keep network and persistence logic out of UI components.
- Validate all external data with Zod before it enters features.
- Keep B2C and future B2B service clients separate.
