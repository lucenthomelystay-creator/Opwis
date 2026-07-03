# Optionwise API

Base path: `/api`.

- `POST /login` phone/password login returning JWT.
- `POST /logout` client-side token invalidation hook.
- `GET /dashboard` aggregate cards and chart payloads.
- `POST /excel/import` multipart Excel/CSV import with duplicate phone upsert.
- `GET /investors`, `POST /investor`, `PUT /investor/:id`, `DELETE /investor/:id`.
- `POST /interest/generate` preview or commit monthly interest.
- `GET /transactions` ledger feed.
- `POST /withdrawal/request`, `PUT /withdrawal/status/:id`.
- `GET /reports` report catalog.
- `GET /notifications` notification center.
