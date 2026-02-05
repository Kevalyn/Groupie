# Groupie MVP

Mobile-first PWA for Poland/EU to create and join groups that coordinate shared purchases or subscription slots. **Groupie does not process payments or manage subscription logins.**

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- Socket.io for realtime chat
- PWA manifest + service worker stub

## Quick start
1. Create a `.env` file:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/groupie"
```

2. Install dependencies:

```bash
npm install
```

3. Generate Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Run the app:

```bash
npm run dev
```

Open `http://localhost:3000`.

## MVP Notes
- SMS OTP is mocked. Use any phone number. The test code is `123456`.
- The “Boost group” feature records a placeholder `1 PLN` boost in the database but does not process payments.
- Chat uses Socket.io. Messages are stored in Postgres.
- CSRF is enforced for state-changing API routes via a double-submit token.

## Folder structure
- `src/app` – routes and pages
- `src/components` – UI utilities
- `src/lib` – auth, prisma, validation, rate limiting
- `prisma/schema.prisma` – database schema
- `public/manifest.webmanifest` – PWA manifest
- `public/sw.js` – service worker stub

## Security & privacy
- Minimal data stored: phone, display name, trust score, group data
- No payment data or account credentials are collected
- Basic rate limiting is applied to auth and chat endpoints

## Next steps
- Add UI for creating groups
- Add moderation dashboard for reports/blocks
- Add push notification integration (service worker is ready for it)
