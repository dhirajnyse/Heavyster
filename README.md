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
- Command Center with role workspaces for buyer, supplier, and founder workflows
- Compact catalog row view for large inventory UX
- Smart Match Rescue on the hero search for zero-result buyer recovery
- Smart no-results recovery with nearby matches and one-click filter relaxation
- Buyer shortlist and comparison tray
- Jobsite Planner that turns a project note into a package of matched machines and supply gaps
- Trust Passport with machine readiness score, proof stack, and buyer risk radar
- RFQ Command Room for shortlist readiness and copy-ready supplier quote packets
- Award Intelligence for supplier ranking and copy-ready buyer award memos
- Quote Guard for rental quote clarity, hidden cost detection, and copy-ready supplier clarification
- Mobilization Control Tower for pre-dispatch readiness and buyer-supplier handoff
- Yard Availability OS for supplier freshness scoring and copy-ready update queues
- Supplier Fleet Storefront for verified supplier mini-sites, fleet lanes, proof stack, and buyer-ready profile packets
- Fleet Import Console for bulk machine intake, validation gaps, and paid-listing revenue preview
- Proof Vault for document expiry, inspection proof, operator proof, and buyer-ready verification packets
- Listing Revenue Desk for paid listings, renewal risk, annual upsell, paused inventory, and copy-ready billing follow-up
- Supplier Lead Desk for direct enquiry scoring, response urgency, reply playbooks, and copy-ready supplier replies
- Supplier Account Health Radar for churn risk, expansion upside, health signals, and next-best save actions
- Demand request capture for unmet searches
- Founder demand radar for supplier acquisition signals
- Supplier hunt growth engine with revenue math and copy-ready outreach
- Market Maker Mode for region/category expansion scoring and launch briefs
- Supplier Studio 2.0 with supplier-specific fleet, profile readiness, storefront publishing, document gaps, freshness, and listing revenue preview
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
