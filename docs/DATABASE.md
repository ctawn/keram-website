# Database

The initial migration creates `public.enquiries` with validation constraints, timestamps, status, locale, and source attribution.

Row Level Security is enabled. Anonymous users may insert a new website enquiry but receive no select, update, or delete permission. Administrative access should occur through authenticated, least-privilege operations in Supabase until a custom admin is approved.

Before production:

- Apply the migration to separate preview and production projects.
- Add server-side abuse protection and rate limiting.
- Confirm retention and deletion periods with legal counsel.
- Test policies using anonymous and authenticated roles.
- Configure backups appropriate to business criticality.
