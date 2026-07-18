# Keram Travel

Arabic-first, bilingual travel discovery and enquiry website for Keram Travel in Saudi Arabia.

## Local development

Requirements: Node.js 22.13+ and pnpm.

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and add the Supabase project URL and publishable anon key. Never use a Supabase service-role key in browser-accessible configuration.

## Verification

```bash
pnpm lint
pnpm build
pnpm test
```

## Architecture

The public site uses Next.js-compatible App Router conventions through Vinext, TypeScript, locale-prefixed Arabic and English routes, and a server-side enquiry endpoint. Supabase stores enquiries under Row Level Security. See `docs/ARCHITECTURE.md` and `docs/DATABASE.md`.

## Deployment

GitHub is intended to remain the source of truth. Production deployment, domains, secrets, and paid-plan activation require explicit approval. See `docs/DEPLOYMENT.md`.
