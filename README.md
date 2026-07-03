# Optionwise

Optionwise is a production-ready scaffold for replacing Excel-based investor administration with a premium fintech web app.

## Stack

- Next.js 15, React 19, TypeScript, TailwindCSS, Framer-ready UI patterns, Recharts.
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
