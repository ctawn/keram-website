# Architecture

## Responsibilities

- App Router pages: localized public experience and SEO rendering
- `app/data.ts`: temporary version-controlled package content
- `app/api/enquiries/route.ts`: server validation and Supabase REST insertion
- Supabase Postgres: durable enquiry storage
- Supabase dashboard: approved initial content/operations interface
- GitHub: intended source of truth
- Vercel: intended preview and commercial production host after plan approval

Public pages are pre-renderable. No privileged Supabase credential is used. A future custom administration surface requires a separate authorization design and approval.

## Localization

Arabic and English use `/ar` and `/en`. Root traffic redirects to Arabic. Locale layouts set language and writing direction explicitly.
