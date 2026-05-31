import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const failures = [];

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

[
  "index.html",
  "styles.css",
  "app.js",
  ".nojekyll",
  ".github/workflows/pages.yml",
  "site.webmanifest",
  "assets/favicon.svg",
  "assets/heavyster-logo-3d.svg",
  "assets/heavyster-social-card.svg",
  "assets/heavyster-yard.svg",
  "docs/MONETIZATION.md",
  "docs/MONETIZATION_COMMAND.json",
  "docs/PILOT_LAUNCH_COMMAND.json",
  "docs/GLOBAL_LAUNCH_PASSPORT.json",
  "docs/SIMPLE_GLOBAL_UX_GUARD.json",
  "docs/CALM_COMMAND_CENTER.json",
  "docs/SERENITY_MODE.json",
  "docs/HEAVENLY_FOCUS.json",
  "docs/CALM_BACKEND_SCAFFOLD.json",
  "docs/PRODUCT_SPEC.md",
  "docs/DATA_MODEL.md",
  "docs/API_SMOKE_FIXTURES.json",
  "docs/API_IMPLEMENTATION_CONTRACT.json",
  "docs/BUILD_BACKLOG.md"
].forEach((path) => {
  assert(existsSync(join(root, path)), `${path} is missing.`);
});

const index = read("index.html");
const css = read("styles.css");
const app = read("app.js");
const manifest = read("site.webmanifest");
const workflow = read(".github/workflows/pages.yml");
const fixturePack = JSON.parse(read("docs/API_SMOKE_FIXTURES.json"));
const implementationContract = JSON.parse(read("docs/API_IMPLEMENTATION_CONTRACT.json"));
const monetizationCommand = JSON.parse(read("docs/MONETIZATION_COMMAND.json"));
const pilotLaunchCommand = JSON.parse(read("docs/PILOT_LAUNCH_COMMAND.json"));
const globalLaunchPassport = JSON.parse(read("docs/GLOBAL_LAUNCH_PASSPORT.json"));
const simpleGlobalUxGuard = JSON.parse(read("docs/SIMPLE_GLOBAL_UX_GUARD.json"));
const calmCommandCenter = JSON.parse(read("docs/CALM_COMMAND_CENTER.json"));
const serenityMode = JSON.parse(read("docs/SERENITY_MODE.json"));
const heavenlyFocus = JSON.parse(read("docs/HEAVENLY_FOCUS.json"));
const calmBackendScaffold = JSON.parse(read("docs/CALM_BACKEND_SCAFFOLD.json"));

assert(index.includes("Content-Security-Policy"), "index.html is missing the CSP meta tag.");
assert(index.includes("Heavyster | Heavy Equipment Rental Listings"), "index.html has the wrong title.");
assert(index.includes("USD 9") && index.includes("USD 99"), "index.html is missing the listing pricing model.");
assert(index.includes("1% confirmed-booking success fee"), "index.html is missing the phase-two success fee model.");
assert(index.includes('id="listingGrid"'), "index.html is missing the marketplace listing grid.");
assert(index.includes('id="marketSearchAssist"'), "index.html is missing Marketplace Search Assist.");
assert(index.includes('id="marketQuickPresets"'), "index.html is missing Marketplace Quick Presets.");
assert(index.includes('id="marketResultBrief"'), "index.html is missing the simple Marketplace Result Brief.");
assert(index.includes('id="marketDecisionCard"'), "index.html is missing the simple Marketplace Decision Card.");
assert(index.includes('id="buyerEnquiryReceipt"'), "index.html is missing the Buyer Enquiry Receipt.");
assert(index.includes('id="marketScaleGuard"'), "index.html is missing the Marketplace Scale Guard.");
assert(index.includes('id="catalogFocusBar"'), "index.html is missing the Catalog Focus Bar.");
assert(index.includes('id="catalogPager"'), "index.html is missing the Catalog Pager.");
assert(index.includes('id="marketAnswer"'), "index.html is missing Marketplace Answer layer.");
assert(index.includes('id="marketEnquiryStarter"'), "index.html is missing Marketplace Enquiry Starter.");
assert(index.includes('id="marketConfidenceStrip"'), "index.html is missing Marketplace Buyer Confidence Strip.");
assert(index.includes('id="marketSupplyLens"'), "index.html is missing Marketplace Supply Lens.");
assert(index.includes('id="marketSmartViews"'), "index.html is missing Marketplace Smart Views.");
assert(index.includes('id="marketFilterTrail"'), "index.html is missing the active marketplace filter trail.");
assert(index.includes('id="resultIntelligence"'), "index.html is missing Marketplace Result Intelligence.");
assert(index.includes('id="compactCatalog"'), "index.html is missing the compact catalog table.");
assert(index.includes('id="listingBuilder"'), "index.html is missing the supplier listing builder.");
assert(index.includes('id="supplierListingStarter"'), "index.html is missing the simple Supplier Listing Starter.");
assert(index.includes('id="paidListingActivation"'), "index.html is missing the Paid Listing Activation pricing panel.");
assert(index.includes('id="supplierActivationReceipt"'), "index.html is missing the Supplier Activation Receipt.");
assert(index.includes('id="categoryDirectory"'), "index.html is missing the category directory.");
assert(index.includes('id="adminSupplierQueue"'), "index.html is missing the founder admin queue.");
assert(index.includes('id="supplierTable"') && index.includes('id="studioHealth"') && index.includes('id="studioOps"') && index.includes('id="supplierDecisionCard"'), "index.html is missing the Supplier Studio 2.0 workspace.");
assert(index.includes('id="trustChecklist"'), "index.html is missing the verification checklist.");
assert(index.includes('id="bookingFeeOutput"'), "index.html is missing the commission calculator.");
assert(index.includes('id="quickSearchButton"') && index.includes('id="scrollTopButton"'), "index.html is missing floating quick actions.");
assert(index.includes('id="commandPulse"') && index.includes('id="commandRoutes"') && index.includes('id="commandRoleTabs"') && index.includes('id="commandWorkspace"') && index.includes('id="commandModuleRail"'), "index.html is missing Command Center controls.");
assert(index.includes('id="workflowDock"') && index.includes('id="workflowDockTabs"') && index.includes('id="workflowDockPath"') && index.includes('id="workflowDockSearchButton"'), "index.html is missing Workflow Dock controls.");
assert(index.includes('id="workflowDockGuide"') && index.includes('id="workflowDockPrevButton"') && index.includes('id="workflowDockNextButton"'), "index.html is missing guided workflow movement controls.");
assert(index.includes('id="simplicityBar"') && index.includes('id="simplicityIntents"') && index.includes('id="simplicityFocus"') && index.includes('id="simplicityPrimaryButton"') && index.includes('id="simplicityModeButton"'), "index.html is missing Simplicity Bar controls.");
assert(index.includes('id="demoFlightScenes"') && index.includes('id="copyDemoFlightButton"'), "index.html is missing Demo Flight Deck controls.");
assert(index.includes('id="boardroomThesis"') && index.includes('id="boardroomGates"') && index.includes('id="copyBoardroomButton"'), "index.html is missing Boardroom Snapshot controls.");
assert(index.includes('id="pilotPackWeeks"') && index.includes('id="pilotPackGates"') && index.includes('id="copyPilotPackButton"'), "index.html is missing 30-Day Pilot Pack controls.");
assert(index.includes('id="founderWorkbenchFlow"') && index.includes('id="copyFounderWorkbenchButton"'), "index.html is missing Founder Workbench controls.");
assert(index.includes('id="founderMorningSignals"') && index.includes('id="copyFounderMorningButton"'), "index.html is missing Founder Morning Brief controls.");
assert(index.includes('id="founderDailyQueue"') && index.includes('id="copyFounderDailyButton"'), "index.html is missing Founder Daily Moves controls.");
assert(index.includes('id="founderCallSheetCards"') && index.includes('id="copyFounderCallSheetButton"'), "index.html is missing Founder Supplier Call Sheet controls.");
assert(index.includes('id="buyerWorkbenchFlow"') && index.includes('id="buyerMissionControl"') && index.includes('id="buyerRentalMissionBrief"') && index.includes('id="copyBuyerWorkbenchButton"'), "index.html is missing Buyer Workbench controls.");
assert(index.includes('id="supplierWorkbenchFlow"') && index.includes('id="copySupplierWorkbenchButton"'), "index.html is missing Supplier Workbench controls.");
assert(index.includes('id="shortlistToggleButton"') && index.includes('id="shortlistTray"'), "index.html is missing shortlist controls.");
assert(index.includes('id="searchRescue"'), "index.html is missing Smart Match Rescue.");
assert(index.includes('id="jobsitePackage"') && index.includes('id="copyJobsiteButton"'), "index.html is missing Jobsite Planner controls.");
assert(index.includes('id="passportScore"') && index.includes('id="copyPassportButton"'), "index.html is missing Trust Passport controls.");
assert(index.includes('id="rfqMetrics"') && index.includes('id="copyRfqButton"'), "index.html is missing RFQ Command Room controls.");
assert(index.includes('id="awardMatrix"') && index.includes('id="copyAwardButton"'), "index.html is missing Award Intelligence controls.");
assert(index.includes('id="quoteGuardBoard"') && index.includes('id="copyQuoteButton"'), "index.html is missing Quote Guard controls.");
assert(index.includes('id="mobilizeChecklist"') && index.includes('id="copyMobilizeButton"'), "index.html is missing Mobilization Control Tower controls.");
assert(index.includes('id="dealTrailSteps"') && index.includes('id="copyDealTrailButton"'), "index.html is missing Direct Deal Trail controls.");
assert(index.includes('id="yardBoard"') && index.includes('id="copyYardButton"'), "index.html is missing Yard Availability OS controls.");
assert(index.includes('id="storefrontFleet"') && index.includes('id="copyStorefrontButton"'), "index.html is missing Supplier Fleet Storefront controls.");
assert(index.includes('id="fleetImportQueue"') && index.includes('id="copyFleetImportButton"'), "index.html is missing Fleet Import Console controls.");
assert(index.includes('id="proofVaultQueue"') && index.includes('id="copyProofVaultButton"'), "index.html is missing Proof Vault controls.");
assert(index.includes('id="revenueDeskQueue"') && index.includes('id="copyRevenueDeskButton"'), "index.html is missing Listing Revenue Desk controls.");
assert(index.includes('id="leadDeskQueue"') && index.includes('id="copyLeadDeskButton"'), "index.html is missing Supplier Lead Desk controls.");
assert(index.includes('id="accountHealthSignals"') && index.includes('id="copyAccountHealthButton"'), "index.html is missing Supplier Account Health Radar controls.");
assert(index.includes('id="supplierSuccessQueue"') && index.includes('id="copySupplierSuccessButton"'), "index.html is missing Supplier Success Daily Queue controls.");
assert(index.includes('id="pageFactoryQueue"') && index.includes('id="copyPageFactoryButton"'), "index.html is missing Market Page Factory controls.");
assert(index.includes('id="launchRoomTimeline"') && index.includes('id="copyLaunchRoomButton"'), "index.html is missing Market Launch Room controls.");
assert(index.includes('id="marketTwinScenarios"') && index.includes('id="marketTwinVerdict"') && index.includes('id="copyMarketTwinButton"'), "index.html is missing Market Twin controls.");
assert(index.includes('id="liquidityFlywheelLoops"') && index.includes('id="copyLiquidityFlywheelButton"'), "index.html is missing Liquidity Flywheel controls.");
assert(index.includes('id="founderAutopilotQueue"') && index.includes('id="copyFounderAutopilotButton"'), "index.html is missing Founder Autopilot controls.");
assert(index.includes('id="demandExchangeTickets"') && index.includes('id="copyDemandExchangeButton"'), "index.html is missing Demand Exchange controls.");
assert(index.includes('id="proofDemandEvidence"') && index.includes('id="copyProofDemandButton"'), "index.html is missing Proof of Demand Room controls.");
assert(index.includes('id="supplierCommitmentPackages"') && index.includes('id="copySupplierCommitmentButton"'), "index.html is missing Supplier Commitment Room controls.");
assert(index.includes('id="listingActivationQueue"') && index.includes('id="copyListingActivationButton"'), "index.html is missing Listing Activation Room controls.");
assert(index.includes('id="trustLedgerRows"') && index.includes('id="copyTrustLedgerButton"'), "index.html is missing Trust & Revenue Ledger controls.");
assert(index.includes('id="marketSignalMatrix"') && index.includes('id="marketSignalCommand"') && index.includes('id="copyMarketMatrixButton"'), "index.html is missing Market Signal Matrix controls.");
assert(index.includes('id="commandPaletteEyebrow"') && index.includes('id="commandPaletteInput"') && index.includes('id="commandPaletteResults"'), "index.html is missing Universal Command Palette controls.");
assert(index.includes('id="workflowMenu"') && index.includes('data-nav-target="#trust-revenue-ledger"'), "index.html is missing grouped workflow navigation.");
assert(index.includes('id="workflowMenuSearch"') && index.includes('id="workflowMenuFilters"') && index.includes('id="workflowMenuEmpty"'), "index.html is missing searchable workflow menu controls.");
assert(index.includes('data-workflow-role="Buyer"') && index.includes('data-workflow-role="Supplier"') && index.includes('data-workflow-role="Founder"'), "index.html is missing workflow role grouping metadata.");
assert(index.includes('id="demandRequest"') && index.includes('id="demandRadar"'), "index.html is missing demand capture or demand radar.");
assert(index.includes('id="huntSignalList"') && index.includes('id="outreachScript"'), "index.html is missing the supplier hunt growth engine.");
assert(index.includes('id="marketOpportunityList"') && index.includes('id="marketPageBrief"'), "index.html is missing market maker mode.");
assert(index.includes("assets/heavyster-logo-3d.svg"), "index.html is missing the 3D logo asset.");
assert(!/\son[a-z]+\s*=/i.test(index), "index.html contains an inline event handler.");
assert(!/https?:\/\//i.test(index + css + app), "Project files should not require remote assets.");
assert(index.includes("styles.css?v=20260531-calm-backend-scaffold-v139"), "index.html is missing the CSS cache-bust token.");
assert(index.includes("app.js?v=20260531-calm-backend-scaffold-v139"), "index.html is missing the JS cache-bust token.");
assert(index.includes('id="fleetIndexPanel"'), "index.html is missing the Fleet Index marketplace layer.");
assert(index.includes('id="pilotCommandStrip"'), "index.html is missing the Pilot Command Strip.");
assert(!/font-size:\s*[^;]*vw/i.test(css), "styles.css should not scale font sizes with viewport width.");
assert(index.includes('<option value="fit">Best buyer fit</option>'), "index.html is missing the buyer fit sort option.");
assert(index.includes('id="enquiryMode"') && index.includes('id="enquiryComposer"'), "index.html is missing Direct Enquiry Composer controls.");
assert(index.includes('id="responseRoute"'), "index.html is missing Supplier Response Route controls.");
assert(index.includes('id="responseTracker"'), "index.html is missing Direct Enquiry Response Tracker controls.");
assert(index.includes('id="replyQualityGate"'), "index.html is missing Supplier Reply Quality Gate controls.");
assert(index.includes('id="replyClarifier"'), "index.html is missing Supplier Reply Clarifier controls.");
assert(index.includes('id="decisionReceipt"'), "index.html is missing Buyer Decision Receipt controls.");
assert(index.includes('id="decisionRouter"'), "index.html is missing Buyer Decision Action Router controls.");
assert(index.includes('id="listingRoiProof"'), "index.html is missing Supplier Listing ROI Proof controls.");
assert(index.includes('id="supplierRenewalClosePack"'), "index.html is missing Supplier Renewal Close Pack controls.");
assert(app.includes('const DATA_VERSION = "20260531-heavyster-calm-backend-scaffold-v139";'), "app.js DATA_VERSION is missing or changed.");
assert(index.includes('id="build-phase"') && index.includes("Current version: v139") && index.includes("Temporary build page"), "index.html is missing the temporary Build Phase version page.");
assert(index.includes('class="build-badge"') && index.includes("v139") && css.includes(".build-badge"), "Project is missing the visible Build v139 header badge.");
assert(index.includes('class="build-cockpit-board"') && index.includes("v139 Calm Backend Scaffold") && css.includes(".build-cockpit-board"), "Project is missing the v139 Build Cockpit.");
assert(index.includes('class="saas-blueprint"') && index.includes("v118 SaaS Foundation Blueprint") && css.includes(".saas-blueprint"), "Project is missing the v118 SaaS Foundation Blueprint.");
assert(index.includes('class="release-ledger"') && index.includes("v139 Calm Backend Scaffold") && css.includes(".release-ledger-card"), "Project is missing the v139 Release Ledger.");
assert(app.includes('label: "Build Phase"') && app.includes('"#build-phase"'), "app.js is missing Build Phase navigation metadata.");
assert(css.includes(".build-phase-section") && css.includes(".build-version-pill") && css.includes(".build-status-grid") && css.includes(".build-control-strip") && css.includes(".build-cockpit-board") && css.includes(".saas-blueprint") && css.includes(".launch-readiness-gate") && css.includes(".backend-sprint-board") && css.includes(".supplier-account-mvp") && css.includes(".supplier-onboarding-runway") && css.includes(".backend-data-contract") && css.includes(".schema-api-blueprint") && css.includes(".api-smoke-console") && css.includes(".backend-fixture-pack") && css.includes(".backend-implementation-contract") && css.includes(".monetization-command-contract") && css.includes(".pilot-launch-command-contract") && css.includes(".global-launch-passport-contract") && css.includes(".simple-global-ux-contract") && css.includes(".calm-command-contract") && css.includes(".serenity-mode-contract") && css.includes(".heavenly-focus-contract") && css.includes(".calm-backend-scaffold") && css.includes(".release-ledger"), "styles.css is missing Build Phase styling.");
assert(workflow.includes("actions/configure-pages@v5") && workflow.includes("actions/upload-pages-artifact@v3") && workflow.includes("actions/deploy-pages@v4"), "Pages workflow is missing the official Pages deploy actions.");
assert(workflow.includes("npm run check") && workflow.includes('find _site -name "*.zip" -delete') && workflow.includes('find _site -name "*.log" -delete'), "Pages workflow is missing static verification or artifact cleanup.");
assert(app.includes("localStorage"), "app.js should persist prototype state locally.");
assert(app.includes("renderListings") && app.includes("renderSupplierTable") && app.includes("getSupplierStudioModel") && app.includes("renderPricingCalculator"), "app.js is missing core renderers.");
assert(app.includes("renderMarketplaceSearchAssist") && app.includes("getMarketplaceSearchAssistItems") && app.includes("applyMarketplaceSearchAssist"), "app.js is missing Marketplace Search Assist logic.");
assert(app.includes("marketplaceQuickPresets") && app.includes("renderMarketplaceQuickPresets") && app.includes("applyMarketplaceQuickPreset") && css.includes(".market-quick-presets"), "app.js is missing Marketplace Quick Presets logic.");
assert(app.includes("renderMarketplaceResultBrief") && app.includes("getMarketplaceResultBriefModel") && app.includes("handleMarketplaceResultBriefAction") && css.includes(".market-result-brief"), "app.js is missing simple Marketplace Result Brief logic or styling.");
assert(app.includes("renderMarketplaceDecisionCard") && app.includes("getMarketplaceDecisionModel") && app.includes("handleMarketplaceDecisionAction") && css.includes(".market-decision"), "app.js is missing simple Marketplace Decision Card logic.");
assert(app.includes("renderBuyerEnquiryReceipt") && app.includes("getBuyerEnquiryReceiptModel") && app.includes("handleBuyerEnquiryReceiptAction") && app.includes("buildBuyerEnquiryReceiptText") && css.includes(".buyer-enquiry-receipt"), "app.js is missing Buyer Enquiry Receipt logic or styling.");
assert(app.includes("renderMarketplaceScaleGuard") && app.includes("getMarketplaceScaleGuardModel") && app.includes("handleMarketplaceScaleGuardAction") && app.includes("buildMarketplaceScaleGuardText") && css.includes(".market-scale-guard"), "app.js is missing Marketplace Scale Guard logic or styling.");
assert(app.includes("renderCatalogFocusBar") && app.includes("getCatalogFocusBarModel") && app.includes("handleCatalogFocusAction") && app.includes("buildCatalogFocusText") && css.includes(".catalog-focus-bar") && css.includes(".catalog-focus-actions"), "app.js is missing Catalog Focus Bar logic or styling.");
assert(app.includes("renderCatalogPager") && app.includes("getCatalogPagerModel") && app.includes("getPagedCatalogListings") && app.includes("handleCatalogPageAction") && app.includes("resetCatalogPage") && css.includes(".catalog-pager") && css.includes(".catalog-page-controls"), "app.js is missing Catalog Pager logic or styling.");
assert(app.includes("renderSupplierDecisionCard") && app.includes("getSupplierDecisionModel") && app.includes("handleSupplierDecisionAction") && css.includes(".supplier-decision"), "app.js is missing simple Supplier Decision Card logic.");
assert(index.includes('id="supplierAccountStarter"') && app.includes("renderSupplierAccountStarter") && app.includes("getSupplierAccountStarterModel") && app.includes("handleSupplierAccountStarterAction") && app.includes("buildSupplierAccountStarterText") && css.includes(".supplier-account-starter"), "Project is missing the v119 Supplier Account Starter.");
assert(index.includes('id="huntCommand"') && index.includes('id="huntTargetQueue"') && app.includes("getSupplierHuntTargets") && app.includes("getSupplierTargetFitScore") && app.includes("handleSupplierHuntAction") && app.includes("buildSupplierHuntQueueText") && css.includes(".hunt-command") && css.includes(".hunt-target"), "Project is missing the v120 Supplier Hunt Queue.");
assert(index.includes('id="huntCallSheet"') && index.includes('id="copyHuntCallSheetButton"') && app.includes("renderSupplierHuntCallSheet") && app.includes("getSupplierHuntCallSheetModel") && app.includes("handleSupplierHuntCallAction") && app.includes("buildSupplierHuntCallSheetText") && css.includes(".hunt-call-sheet"), "Project is missing the v121 Hunt Call Sheet.");
assert(index.includes('id="huntOutcomeGate"') && app.includes("renderSupplierHuntOutcomeGate") && app.includes("getSupplierHuntOutcomeModel") && app.includes("handleSupplierHuntOutcomeAction") && app.includes("buildSupplierHuntOutcomeText") && css.includes(".hunt-outcome-gate"), "Project is missing the v122 Hunt Outcome Gate.");
assert(index.includes('id="launch-readiness-gate"') && index.includes('id="copyLaunchReadinessButton"') && app.includes("buildLaunchReadinessText") && css.includes(".launch-readiness-gate"), "Project is missing the v123 Launch Readiness Gate.");
assert(index.includes('id="backend-sprint-board"') && index.includes('id="copyBackendSprintButton"') && app.includes("buildBackendSprintText") && css.includes(".backend-sprint-board"), "Project is missing the v124 Backend Sprint Board.");
assert(index.includes('id="supplier-account-mvp"') && index.includes('id="copySupplierAccountMvpButton"') && app.includes("buildSupplierAccountMvpText") && css.includes(".supplier-account-mvp"), "Project is missing the v125 Supplier Account MVP Preview.");
assert(index.includes('id="supplier-onboarding-runway"') && index.includes('id="copySupplierOnboardingButton"') && app.includes("buildSupplierOnboardingRunwayText") && css.includes(".supplier-onboarding-runway"), "Project is missing the v126 Supplier Onboarding Runway.");
assert(index.includes('id="backend-data-contract"') && index.includes('id="copyBackendDataContractButton"') && app.includes("buildBackendDataContractText") && css.includes(".backend-data-contract"), "Project is missing the v127 Backend Data Contract.");
assert(index.includes('id="schema-api-blueprint"') && index.includes('id="copySchemaApiBlueprintButton"') && app.includes("buildSchemaApiBlueprintText") && css.includes(".schema-api-blueprint"), "Project is missing the v128 Schema + API Blueprint.");
assert(index.includes('id="api-smoke-console"') && index.includes('id="copyApiSmokeConsoleButton"') && app.includes("buildApiSmokeConsoleText") && css.includes(".api-smoke-console"), "Project is missing the v129 API Smoke Console.");
assert(index.includes('id="backend-fixture-pack"') && index.includes('id="copyBackendFixturePackButton"') && app.includes("buildBackendFixturePackText") && css.includes(".backend-fixture-pack"), "Project is missing the v130 Backend Fixture Pack.");
assert(fixturePack.version === "v130 Backend Fixture Pack" && fixturePack.supplier_account?.id === "sup_gulf_lift_services" && fixturePack.equipment_listing?.id === "listing_liebherr_130t_mobile_crane" && fixturePack.phase_one_guardrail.includes("Supplier keeps rental payment direct"), "docs/API_SMOKE_FIXTURES.json is missing the v130 supplier fixture pack.");
assert(index.includes('id="backend-implementation-contract"') && index.includes('id="copyBackendImplementationContractButton"') && app.includes("buildBackendImplementationContractText") && css.includes(".backend-implementation-contract"), "Project is missing the v131 Backend Implementation Contract.");
assert(implementationContract.version === "v131 Backend Implementation Contract" && implementationContract.required_tables?.length === 7 && implementationContract.route_contracts?.length === 7 && implementationContract.blocked_routes?.includes("/api/rental-payments") && implementationContract.phase_one_guardrail.includes("Supplier keeps rental payment direct"), "docs/API_IMPLEMENTATION_CONTRACT.json is missing the v131 route-table contract.");
assert(index.includes('id="monetizationCommand"') && index.includes('id="monetization-command-contract"') && index.includes('id="copyMonetizationCommandButton"') && app.includes("renderMonetizationCommand") && app.includes("buildMonetizationCommandText") && css.includes(".monetization-command") && css.includes(".monetization-command-contract"), "Project is missing the v132 Monetization Command.");
assert(monetizationCommand.version === "v132 Monetization Command" && monetizationCommand.phase_one?.active_listing?.monthly_usd === 9 && monetizationCommand.phase_one?.active_listing?.annual_usd === 99 && monetizationCommand.phase_two?.success_fee?.includes("1%") && monetizationCommand.guardrails?.some((item) => item.includes("No rental payment")), "docs/MONETIZATION_COMMAND.json is missing the v132 monetization model.");
assert(index.includes('id="pilotLaunchCommand"') && index.includes('id="pilot-launch-command-contract"') && index.includes('id="copyPilotLaunchCommandButton"') && app.includes("renderPilotLaunchCommand") && app.includes("buildPilotLaunchCommandText") && css.includes(".pilot-launch-command") && css.includes(".pilot-launch-command-contract"), "Project is missing the v133 Pilot Launch Command.");
assert(pilotLaunchCommand.version === "v133 Pilot Launch Command" && pilotLaunchCommand.targets?.anchor_suppliers === 6 && pilotLaunchCommand.targets?.paid_listings === 24 && pilotLaunchCommand.targets?.annual_listing_arr_usd === 2376 && pilotLaunchCommand.guardrails?.some((item) => item.includes("direct")), "docs/PILOT_LAUNCH_COMMAND.json is missing the v133 launch model.");
assert(index.includes('id="globalLaunchPassport"') && index.includes('id="global-launch-passport-contract"') && index.includes('id="copyGlobalLaunchPassportButton"') && app.includes("renderGlobalLaunchPassport") && app.includes("buildGlobalLaunchPassportText") && css.includes(".global-launch-passport") && css.includes(".global-launch-passport-contract"), "Project is missing the v134 Global Launch Passport.");
assert(globalLaunchPassport.version === "v134 Global Launch Passport" && globalLaunchPassport.currency_rule?.includes("USD") && globalLaunchPassport.guardrails?.some((item) => item.includes("direct")) && globalLaunchPassport.launch_queue?.length >= 4, "docs/GLOBAL_LAUNCH_PASSPORT.json is missing the v134 global launch model.");
assert(index.includes('id="simpleGlobalUxGuard"') && index.includes('id="simple-global-ux-contract"') && index.includes('id="copySimpleGlobalUxGuardButton"') && app.includes("renderSimpleGlobalUxGuard") && app.includes("buildSimpleGlobalUxGuardText") && css.includes(".simple-global-ux-guard") && css.includes(".simple-global-ux-contract"), "Project is missing the v135 Simple Global UX Guard.");
assert(simpleGlobalUxGuard.version === "v135 Simple Global UX Guard" && simpleGlobalUxGuard.rule?.includes("one next action") && simpleGlobalUxGuard.complexity_budget?.next_actions_per_screen === 1 && simpleGlobalUxGuard.ai_rules?.some((item) => item.includes("removes")), "docs/SIMPLE_GLOBAL_UX_GUARD.json is missing the v135 simplicity model.");
assert(index.includes('id="calmCommandCenter"') && index.includes('id="calm-command-contract"') && index.includes('id="copyCalmCommandCenterButton"') && app.includes("renderCalmCommandCenter") && app.includes("buildCalmCommandCenterText") && app.includes("handleCalmCommandAction") && css.includes(".calm-command-center") && css.includes(".calm-command-contract"), "Project is missing the v136 Calm Command Center.");
assert(calmCommandCenter.version === "v136 Calm Command Center" && calmCommandCenter.rule?.includes("Remove noise") && calmCommandCenter.global_core_objects?.length === 7 && calmCommandCenter.ai_rule?.includes("removes manual work") && calmCommandCenter.monetization_rule?.includes("0% rental take"), "docs/CALM_COMMAND_CENTER.json is missing the v136 calm command model.");
assert(index.includes('id="serenityModePanel"') && index.includes('id="serenity-mode-contract"') && index.includes('id="copySerenityModeButton"') && app.includes("renderSerenityModePanel") && app.includes("buildSerenityModeText") && app.includes("handleSerenityModeAction") && css.includes(".serenity-mode-panel") && css.includes(".serenity-mode-contract"), "Project is missing the v137 Serenity Mode.");
assert(serenityMode.version === "v137 Serenity Mode" && serenityMode.rule?.includes("Breathe first") && serenityMode.design_tokens?.length >= 5 && serenityMode.monetization_rule?.includes("USD 9/month") && serenityMode.ai_rule?.includes("removes manual work"), "docs/SERENITY_MODE.json is missing the v137 serenity model.");
assert(index.includes('id="heavenlyFocusPanel"') && index.includes('id="heavenly-focus-contract"') && index.includes('id="copyHeavenlyFocusButton"') && app.includes("renderHeavenlyFocusPanel") && app.includes("buildHeavenlyFocusText") && app.includes("handleHeavenlyFocusAction") && css.includes(".heavenly-focus-panel") && css.includes(".heavenly-focus-contract"), "Project is missing the v138 Heavenly Focus.");
assert(heavenlyFocus.version === "v138 Heavenly Focus" && heavenlyFocus.rule?.includes("Stillness wins") && heavenlyFocus.focus_steps?.length === 4 && heavenlyFocus.monetization_rule?.includes("0% rental take") && heavenlyFocus.ai_rule?.includes("next action easier"), "docs/HEAVENLY_FOCUS.json is missing the v138 heavenly focus model.");
assert(index.includes('id="calm-backend-scaffold"') && index.includes('id="copyCalmBackendScaffoldButton"') && app.includes("buildCalmBackendScaffoldText") && css.includes(".calm-backend-scaffold"), "Project is missing the v139 Calm Backend Scaffold.");
assert(calmBackendScaffold.version === "v139 Calm Backend Scaffold" && calmBackendScaffold.rule?.includes("Quiet backend") && calmBackendScaffold.records?.length === 6 && calmBackendScaffold.phase_one_guardrail?.includes("No rental payment") && calmBackendScaffold.acceptance?.length >= 5, "docs/CALM_BACKEND_SCAFFOLD.json is missing the v139 scaffold model.");
assert(app.includes("renderSupplierListingStarter") && app.includes("getSupplierListingStarterModel") && app.includes("handleSupplierListingStarterAction") && app.includes("buildSupplierListingStarterText") && css.includes(".supplier-listing-starter"), "app.js is missing simple Supplier Listing Starter logic or styling.");
assert(app.includes("renderPaidListingActivation") && app.includes("getPaidListingActivationModel") && app.includes("handlePaidListingActivationAction") && app.includes("buildPaidListingActivationText") && css.includes(".paid-listing-activation"), "app.js is missing Paid Listing Activation logic or styling.");
assert(app.includes("renderSupplierActivationReceipt") && app.includes("getSupplierActivationReceiptModel") && app.includes("handleSupplierActivationReceiptAction") && app.includes("buildSupplierActivationReceiptText") && css.includes(".supplier-activation-receipt"), "app.js is missing Supplier Activation Receipt logic or styling.");
assert(app.includes("renderMarketplaceAnswer") && app.includes("getMarketplaceAnswerModel") && app.includes("handleMarketplaceAnswerAction") && css.includes(".market-answer"), "app.js is missing Marketplace Answer logic.");
assert(app.includes("renderMarketplaceEnquiryStarter") && app.includes("getMarketplaceEnquiryStarterModel") && app.includes("handleMarketplaceEnquiryStarterAction") && css.includes(".market-enquiry-starter"), "app.js is missing Marketplace Enquiry Starter logic.");
assert(app.includes("renderMarketplaceConfidenceStrip") && app.includes("getMarketplaceConfidenceModel") && app.includes("handleMarketplaceConfidenceAction") && css.includes(".market-confidence"), "app.js is missing Marketplace Buyer Confidence Strip logic.");
assert(app.includes("renderMarketplaceSupplyLens") && app.includes("getMarketplaceSupplyLensModel") && app.includes("applyMarketplaceSupplyLens"), "app.js is missing Marketplace Supply Lens logic.");
assert(app.includes("marketplaceSmartViews") && app.includes("renderMarketplaceSmartViews") && app.includes("applyMarketplaceSmartView"), "app.js is missing Marketplace Smart Views logic.");
assert(app.includes("renderMarketplaceFilterTrail") && app.includes("clearMarketplaceFilter") && app.includes("clearAllMarketplaceFilters"), "app.js is missing active filter trail logic.");
assert(app.includes("renderMarketplaceIntelligence") && app.includes("getMarketplaceIntelligenceModel") && app.includes("handleMarketplaceIntelligenceAction"), "app.js is missing Marketplace Result Intelligence logic.");
assert(app.includes("renderFleetIndex") && app.includes("getFleetIndexModel") && app.includes("handleFleetIndexAction"), "app.js is missing Fleet Index marketplace logic.");
assert(app.includes("renderPilotCommandStrip") && app.includes("getPilotCommandModel") && app.includes("handlePilotCommandAction"), "app.js is missing Pilot Command Strip logic.");
assert(app.includes("handleShortlistAction") && app.includes("buildShortlistCompareText") && app.includes("shortlist-command"), "app.js is missing Shortlist Command logic.");
assert(app.includes("renderCompactCatalog") && app.includes("renderCategoryDirectory") && app.includes("renderAdminBoard"), "app.js is missing scalable UX renderers.");
assert(app.includes("renderCommandCenter") && app.includes("getCommandCenterModel") && app.includes("getCommandWorkspace"), "app.js is missing Command Center rendering or model logic.");
assert(app.includes("renderWorkflowDock") && app.includes("getWorkflowDockModel") && app.includes("getWorkflowDockSteps"), "app.js is missing Workflow Dock rendering or model logic.");
assert(app.includes("renderWorkflowGuide") && app.includes("getWorkflowGuideModel") && app.includes("openWorkflowGuideTarget"), "app.js is missing guided workflow movement logic.");
assert(app.includes("renderSimplicityBar") && app.includes("getSimplicityBarModel") && app.includes("getSimpleRouteSummary") && app.includes("getSimpleRouteFocus") && app.includes("getSimplicityIntents") && app.includes("handleSimplicityIntent") && app.includes("openSimplicityTarget") && app.includes("SIMPLE_UX_RELEASE") && css.includes(".simplicity-bar") && css.includes(".simplicity-intents") && css.includes(".simplicity-focus") && css.includes("body.simple-mode"), "Project is missing Simplicity Bar logic or styling.");
assert(app.includes("renderDemoFlightDeck") && app.includes("getDemoFlightDeckModel") && app.includes("buildDemoFlightDeckText"), "app.js is missing Demo Flight Deck rendering or copy text.");
assert(app.includes("renderBoardroomSnapshot") && app.includes("getBoardroomSnapshotModel") && app.includes("buildBoardroomSnapshotText"), "app.js is missing Boardroom Snapshot rendering or copy text.");
assert(app.includes("renderPilotPack") && app.includes("getPilotPackModel") && app.includes("buildPilotPackText"), "app.js is missing 30-Day Pilot Pack rendering or copy text.");
assert(app.includes("renderFounderWorkbench") && app.includes("getFounderWorkbenchModel") && app.includes("buildFounderWorkbenchText"), "app.js is missing Founder Workbench rendering or copy text.");
assert(app.includes("renderFounderMorningBrief") && app.includes("getFounderMorningBriefModel") && app.includes("buildFounderMorningBriefText"), "app.js is missing Founder Morning Brief rendering or copy text.");
assert(app.includes("renderFounderDailyMoves") && app.includes("getFounderDailyMovesModel") && app.includes("buildFounderDailyMovesText"), "app.js is missing Founder Daily Moves rendering or copy text.");
assert(app.includes("renderFounderCallSheet") && app.includes("getFounderCallSheetModel") && app.includes("buildFounderCallSheetText"), "app.js is missing Founder Supplier Call Sheet rendering or copy text.");
assert(app.includes("renderBuyerWorkbench") && app.includes("getBuyerWorkbenchModel") && app.includes("getBuyerMissionControlModel") && app.includes("getBuyerRentalMissionBriefModel") && app.includes("handleBuyerMissionAction") && app.includes("buildBuyerRentalMissionBriefText") && app.includes("buildBuyerWorkbenchText"), "app.js is missing Buyer Workbench rendering or copy text.");
assert(app.includes("renderSupplierWorkbench") && app.includes("getSupplierWorkbenchModel") && app.includes("buildSupplierWorkbenchText"), "app.js is missing Supplier Workbench rendering or copy text.");
assert(app.includes("openCommandPalette") && app.includes("renderCommandPalette") && app.includes("getCommandPaletteItems") && app.includes("renderCommandPaletteContext") && app.includes("getCommandPaletteContextModel") && app.includes("sortCommandPaletteForRole") && app.includes("getCommandPaletteItemRole"), "app.js is missing Universal Command Palette logic.");
assert(index.includes('id="commandPaletteQuick"') && app.includes("renderCommandPaletteQuickActions") && app.includes("getCommandPaletteQuickActions") && app.includes("activateCommandPaletteQuickAction") && css.includes(".command-palette-quick"), "Project is missing role-aware command palette quick actions.");
assert(app.includes("syncNavigationState") && app.includes("closeWorkflowMenu") && app.includes("renderWorkflowMenu"), "app.js is missing workflow navigation state handling.");
assert(app.includes("renderSimpleNavigation") && app.includes("getSimpleNavigationTargets") && css.includes(".topnav.is-simple-nav"), "Project is missing role-aware simple navigation.");
assert(app.includes("getDefaultWorkflowMenuRole") && app.includes("getActiveWorkflowRole") && app.includes("prepareWorkflowMenuForOpen") && app.includes("getVisibleWorkflowActiveLink") && app.includes("getWorkflowMenuFallbackHeadline") && css.includes("body.simple-mode .workflow-menu-filters button.is-active"), "Project is missing simple-mode focused workflow drawer filtering.");
assert(index.includes('id="topPrimaryAction"') && index.includes('id="topSecondaryActionButton"') && app.includes("renderTopActions") && app.includes("getTopActionModel"), "Project is missing role-aware top actions.");
assert(app.includes("syncCommandRoleToHash") && app.includes("const roleChanged = syncCommandRoleToHash()"), "Project is missing hash-aware command role syncing.");
assert(index.includes('id="brandHomeLink"') && index.includes('id="brandSubtitle"') && app.includes("renderBrandContext") && app.includes("getBrandContextModel"), "Project is missing role-aware brand home context.");
assert(app.includes("workflowMenuQuery") && app.includes("workflowMenuRole") && app.includes("workflowScope") && css.includes(".workflow-menu.is-focused-role"), "app.js is missing workflow menu search state.");
assert(index.includes('id="workflowMenuStatus"') && app.includes("updateWorkflowMenuStatus") && css.includes(".workflow-menu-status"), "Project is missing Workflow Drawer status polish.");
assert(css.includes(".workflow-dock-rail") && css.includes(".workflow-role-short") && app.includes("centerWorkflowDockStep"), "Project is missing Workflow Dock usability polish.");
assert(app.includes("stabilizeHashScroll") && app.includes("hashchange"), "app.js is missing stable hash scrolling.");
assert(app.includes("renderNoResultsAdvisor") && app.includes("renderShortlistTray"), "app.js is missing buyer recovery or shortlist renderers.");
assert(app.includes("renderShortlistCompare") && app.includes("getShortlistCompareModel") && app.includes("getShortlistSuggestion"), "app.js is missing shortlist compare logic.");
assert(app.includes("getBuyerFitScore") && app.includes('sort === "fit"') && app.includes("fit-explainer"), "app.js is missing Buyer Fit Score logic.");
assert(app.includes("renderDirectEnquiryComposer") && app.includes("getDirectEnquiryModel") && app.includes("enquiryMode"), "app.js is missing Direct Enquiry Composer logic.");
assert(app.includes("renderSupplierResponseRoute") && app.includes("getSupplierResponseRouteModel") && app.includes("getPreferredSupplierChannel"), "app.js is missing Supplier Response Route logic.");
assert(app.includes("renderResponseTracker") && app.includes("getResponseTrackerModel") && app.includes("handleResponseTrackerAction"), "app.js is missing Direct Enquiry Response Tracker logic.");
assert(app.includes("renderReplyQualityGate") && app.includes("getReplyQualityGateModel") && app.includes("reply-quality-head"), "app.js is missing Supplier Reply Quality Gate logic.");
assert(app.includes("renderReplyClarifier") && app.includes("getReplyClarifierModel") && app.includes("buildReplyClarifierText"), "app.js is missing Supplier Reply Clarifier logic.");
assert(app.includes("renderDecisionReceipt") && app.includes("getDecisionReceiptModel") && app.includes("buildDecisionReceiptText"), "app.js is missing Buyer Decision Receipt logic.");
assert(app.includes("renderDecisionRouter") && app.includes("getDecisionRouterModel") && app.includes("buildDecisionRouterText"), "app.js is missing Buyer Decision Action Router logic.");
assert(app.includes("renderListingRoiProof") && app.includes("getListingRoiProofModel") && app.includes("buildListingRoiProofText"), "app.js is missing Supplier Listing ROI Proof logic.");
assert(app.includes("renderSupplierRenewalClosePack") && app.includes("getSupplierRenewalClosePackModel") && app.includes("buildSupplierRenewalCloseText"), "app.js is missing Supplier Renewal Close Pack logic.");
assert(app.includes("renderSearchRescue") && app.includes("getSearchRescueSuggestions"), "app.js is missing Smart Match Rescue rendering or suggestions.");
assert(app.includes("renderJobsitePlanner") && app.includes("buildJobsiteBriefText"), "app.js is missing Jobsite Planner rendering or copy text.");
assert(app.includes("renderTrustPassport") && app.includes("buildTrustPassportText"), "app.js is missing Trust Passport rendering or copy text.");
assert(app.includes("renderRfqRoom") && app.includes("buildRfqText"), "app.js is missing RFQ room rendering or copy text.");
assert(app.includes("renderAwardRoom") && app.includes("buildAwardMemoText"), "app.js is missing Award Intelligence rendering or copy text.");
assert(app.includes("renderQuoteGuard") && app.includes("buildQuoteGuardText"), "app.js is missing Quote Guard rendering or copy text.");
assert(app.includes("renderMobilizationTower") && app.includes("buildMobilizationText"), "app.js is missing Mobilization Control Tower rendering or copy text.");
assert(app.includes("renderDealTrail") && app.includes("getDealTrailModel") && app.includes("buildDealTrailText"), "app.js is missing Direct Deal Trail rendering, model, or copy text.");
assert(app.includes("renderYardAvailability") && app.includes("buildYardUpdateText"), "app.js is missing Yard Availability OS rendering or copy text.");
assert(app.includes("renderSupplierStorefront") && app.includes("buildSupplierStorefrontText"), "app.js is missing Supplier Fleet Storefront rendering or copy text.");
assert(app.includes("renderFleetImport") && app.includes("buildFleetImportText"), "app.js is missing Fleet Import Console rendering or copy text.");
assert(app.includes("renderProofVault") && app.includes("buildProofVaultText"), "app.js is missing Proof Vault rendering or copy text.");
assert(app.includes("renderRevenueDesk") && app.includes("buildRevenueDeskText"), "app.js is missing Listing Revenue Desk rendering or copy text.");
assert(app.includes("renderLeadDesk") && app.includes("buildLeadDeskText"), "app.js is missing Supplier Lead Desk rendering or copy text.");
assert(app.includes("renderAccountHealth") && app.includes("buildAccountHealthText"), "app.js is missing Supplier Account Health Radar rendering or copy text.");
assert(app.includes("renderSupplierSuccessQueue") && app.includes("buildSupplierSuccessText"), "app.js is missing Supplier Success Daily Queue rendering or copy text.");
assert(app.includes("renderPageFactory") && app.includes("buildPageFactoryText"), "app.js is missing Market Page Factory rendering or copy text.");
assert(app.includes("renderLaunchRoom") && app.includes("buildLaunchRoomText"), "app.js is missing Market Launch Room rendering or copy text.");
assert(app.includes("renderMarketTwin") && app.includes("getMarketTwinVerdict") && app.includes("buildMarketTwinText"), "app.js is missing Market Twin rendering, verdict, or copy text.");
assert(app.includes("renderLiquidityFlywheel") && app.includes("buildLiquidityFlywheelText"), "app.js is missing Liquidity Flywheel rendering or copy text.");
assert(app.includes("renderFounderAutopilot") && app.includes("buildFounderAutopilotText"), "app.js is missing Founder Autopilot rendering or copy text.");
assert(app.includes("renderDemandExchange") && app.includes("buildDemandExchangeText"), "app.js is missing Demand Exchange rendering or copy text.");
assert(app.includes("renderProofDemandRoom") && app.includes("buildProofDemandText"), "app.js is missing Proof of Demand Room rendering or copy text.");
assert(app.includes("renderSupplierCommitmentRoom") && app.includes("buildSupplierCommitmentText"), "app.js is missing Supplier Commitment Room rendering or copy text.");
assert(app.includes("renderListingActivationRoom") && app.includes("buildListingActivationText"), "app.js is missing Listing Activation Room rendering or copy text.");
assert(app.includes("renderTrustRevenueLedger") && app.includes("buildTrustLedgerText"), "app.js is missing Trust & Revenue Ledger rendering or copy text.");
assert(app.includes("renderMarketSignalMatrix") && app.includes("renderMarketSignalCommand") && app.includes("handleMarketSignalCommandAction") && app.includes("getMarketSignalMatrixModel") && app.includes("buildMarketSignalMatrixText"), "app.js is missing Market Signal Matrix rendering or copy text.");
assert(app.includes("saveDemandSignal") && app.includes("renderDemandRadar"), "app.js is missing demand signal capture or radar rendering.");
assert(app.includes("renderSupplierHunt") && app.includes("buildSupplierHuntText"), "app.js is missing supplier hunt rendering or copy text.");
assert(app.includes("renderMarketMaker") && app.includes("buildMarketBriefText"), "app.js is missing market maker rendering or launch brief text.");
assert(app.includes("renderCommissionCalculator"), "app.js is missing the phase-two commission calculator.");
assert(app.includes("quickSearchButton") && app.includes("scrollTopButton"), "app.js is missing floating quick action handlers.");
assert(app.includes("navigator.clipboard.writeText"), "app.js is missing direct enquiry copy support.");
assert(css.includes("letter-spacing: 0"), "styles.css should keep letter spacing neutral.");
assert(!/letter-spacing:\s*-/i.test(css), "styles.css contains negative letter spacing.");
assert(manifest.includes('"name": "Heavyster"'), "site.webmanifest has the wrong app name.");

if (failures.length) {
  console.error("Static check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Heavyster static check passed.");
