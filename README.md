# Heavyster

Heavyster is a phase-one SaaS/listing platform for heavy equipment rental companies.

The first version is intentionally simple:

- Rental companies create accounts and list equipment.
- Each listing can include photos, machine specs, region, availability, documents, and direct contact routes.
- Customers send direct rental enquiries to the rental company.
- Heavyster does not collect rental payments or rental commission in phase one.
- Monetization is USD 9 per month or USD 99 per year per active equipment listing.
- Phase two can add an optional 1% confirmed-booking success fee only when Heavyster provides booking workflow value.

## Current Prototype

This folder contains a static product prototype with:

- Marketplace search and filtered equipment listings
- Compact catalog row view for large inventory UX
- Smart no-results recovery with nearby matches and one-click filter relaxation
- Buyer shortlist and comparison tray
- Trust Passport with machine readiness score, proof stack, and buyer risk radar
- RFQ Command Room for shortlist readiness and copy-ready supplier quote packets
- Demand request capture for unmet searches
- Founder demand radar for supplier acquisition signals
- Supplier hunt growth engine with revenue math and copy-ready outreach
- Market Maker Mode for region/category expansion scoring and launch briefs
- Supplier SaaS workspace preview
- Supplier onboarding and listing builder preview
- Category directory and founder admin board
- Verification checklist for licenses, insurance, inspection, and lead routing
- Pricing calculator for the listing model
- Phase-two commission calculator for confirmed bookings
- 3D-style corporate SVG logo and social card

## Founder Docs

- `docs/PRODUCT_SPEC.md`
- `docs/MONETIZATION.md`
- `docs/DATA_MODEL.md`
- `docs/BUILD_BACKLOG.md`
- `docs/BRAND.md`
- `docs/ROADMAP.md`

## Run

Open `index.html` in a browser, or serve the folder with:

```bash
npm start
```

## Check

```bash
npm run check
```
