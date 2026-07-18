# Deployment

## Environments

- Local: `.env.local`, never committed
- Preview: separate non-production environment values
- Production: production Supabase project and approved public domain

## Proposed release flow

1. Verify clean Git state and approved branch.
2. Run lint, build, tests, and browser checks.
3. Push the verified commit to GitHub.
4. Confirm Vercel builds that exact commit.
5. Apply reviewed Supabase migrations.
6. Configure production environment variables.
7. Verify localized pages and a test enquiry.
8. Enable the domain only after approval.

## Rollback

Reassign Vercel production to the prior verified deployment. Database changes are additive in the initial migration; roll back application code first and preserve enquiry records.

No deployment currently exists. Vercel Pro is required for commercial use under current Vercel terms and must not be purchased without approval.
