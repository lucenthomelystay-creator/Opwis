# Optionwise

Optionwise is a production-ready scaffold for replacing Excel-based investor administration with a premium fintech web app.

## Stack

- TanStack Start, React 19, TypeScript, TailwindCSS, shadcn-style UI primitives, Framer Motion and Recharts.
- Express, Prisma ORM, PostgreSQL, JWT auth, bcrypt passwords, Helmet and rate limiting.
- Excel import with `xlsx`, duplicate investor upsert by unique phone number, local uploads ready for S3 migration.

## Features

- Administrator portal: dashboard, investors, interest management, transactions, capital ledger, Excel upload, notifications, reports, settings.
- Investor portal: portfolio summary, charts, transaction history and withdrawal request entry point.
- Prisma schema for users, investors, transactions, interest history, withdrawal requests, notifications, audit logs and Excel imports.
- Docker Compose for PostgreSQL, API and web development.

## Quick start

```bash
cp .env.example .env
npm install
npm --workspace apps/api run prisma:generate
docker compose up postgres -d
npm --workspace apps/api run prisma:migrate
npm --workspace apps/api run seed
npm run dev
```

Default admin: `+10000000000` / `admin123`.

## Excel import

Use `samples/investor-import-template.csv` as a starting point. The importer detects common aliases such as Investor Name, Phone Number, Capital and Interest %.

## API documentation

See `docs/API.md`.


## Web framework update

The web workspace now uses TanStack Start on Vite with file-based routes in `apps/web/src/routes`, shared React components in `apps/web/src/components`, TailwindCSS styling, and shadcn-style primitives in `apps/web/src/components/ui`. Run `npm --workspace apps/web run dev` for local development and `npm --workspace apps/web run build` for production.

### Vercel

Use the repository root as the project root. The included `vercel.json` runs `npm install --workspace apps/web --include-workspace-root=false`, builds `apps/web`, and serves the TanStack Start output from `apps/web/.output/public`.


## Network-restricted environments

If npm or GitHub access is blocked by a proxy in an automation container, see `docs/ENVIRONMENT_LIMITATIONS.md`. The helper `scripts/export-for-github.sh` creates a Git bundle and patch files that can be copied to a machine with GitHub access and pushed manually.
