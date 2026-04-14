# Security Policy

## Overview

This document describes the security posture, known risks, and responsible disclosure process for the **fabriziogamboa** personal portfolio project.

The application is a static frontend (React + Vite) with a lightweight Express.js backend that handles a single contact form endpoint, forwarding messages to Discord via a bot.

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 8, TypeScript, Tailwind CSS 4 |
| Backend | Node.js 24, Express.js 5 |
| Bot | Discord.js 14 |
| Server | Nginx (reverse proxy) |
| Container | Docker (multi-stage, Alpine) |
| CI/CD | GitHub Actions + Dependabot |

---

## Supported Versions

Only the latest version on the `main` branch receives security fixes. No LTS or versioned releases are maintained.

---

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please **do not open a public issue**.

Report it privately through one of the following channels:

- **GitHub Security Advisory**: [Report a vulnerability](../../security/advisories/new)
- **Direct contact**: Open a confidential discussion or email the maintainer

Include in your report:
- A clear description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (optional)

You can expect an initial response within **7 days**. This is a personal project maintained by one person; please be patient.

---

## Current Security Measures

### Environment Variables & Secrets
- Sensitive values (`DISCORD_BOT_TOKEN`, `DISCORD_USER_ID`) are stored as **Enviorment Variables** and never committed to the repository.
- An `.env.example` file documents required variables without exposing values.
- `.env` is listed in `.gitignore`.

### Rate Limiting
- The `/api/contact` endpoint enforces a **10-minute per-IP cooldown** using an in-memory `Map`.
- Returns HTTP `429 Too Many Requests` when the limit is exceeded.
- Respects `X-Forwarded-For` headers (set by Nginx proxy).

### Input Validation
- Basic presence check on `name`, `email`, and `message` fields.
- Returns HTTP `400 Bad Request` for missing fields.

### Dependency Monitoring
- **Dependabot** is configured to scan both `frontend/` and `backend/` packages weekly.
- **OpenSSF Scorecard** runs weekly via GitHub Actions to assess supply-chain security.

### Container Hardening
- Multi-stage Docker build minimizes the final image surface.
- Base image is `node:24-alpine` (minimal OS footprint).
- No secrets are stored inside the image at rest.

---

## Known Risks & Mitigations

The following risks have been identified and are documented here for transparency. Each item includes its severity and the recommended remediation.

### CRITICAL

#### C-1 — CORS Allows All Origins
- **Location**: [backend/server.js](backend/server.js)
- **Issue**: `app.use(cors())` with no options accepts requests from any origin.
- **Impact**: Any external site can make authenticated-looking requests to the API.
- **Remediation**:
  ```js
  app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(',') }));
  ```

#### C-2 — No Input Sanitization
- **Location**: [backend/server.js](backend/server.js)
- **Issue**: `name`, `email`, and `message` fields are forwarded to Discord without format validation or length limits.
- **Impact**: Potential injection of Markdown/Discord formatting, oversized payloads, or malformed email addresses.
- **Remediation**: Add email regex validation, enforce max lengths, and escape special characters before embedding in Discord messages.

---

## Dependency Management

| Ecosystem | Scan Frequency | Tool |
|---|---|---|
| `backend/` npm | Weekly | Dependabot |
| `frontend/` npm | Weekly | Dependabot |
| Supply chain | Weekly | OpenSSF Scorecard |

Run manually at any time:

```bash
cd backend && npm audit
cd frontend && npm audit
```

---

## Scope

This security policy covers only the code in this repository. It does **not** cover:

- The Discord API or Discord infrastructure.
- GitHub Actions infrastructure.
- The hosting/cloud platform where the container is deployed.
- Third-party npm packages (these are tracked by Dependabot).

---

## Changelog

| Date | Change |
|---|---|
| 2026-04-13 | Initial SECURITY.md created |
