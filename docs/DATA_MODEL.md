# Heavyster Data Model

## Supplier

- id
- legal_name
- display_name
- country
- city
- service_regions
- phone
- email
- whatsapp
- website
- verification_status
- billing_customer_id
- created_at
- updated_at

## SupplierProfilePage

Use this to turn a rental company into a public verified fleet storefront.

- id
- supplier_id
- slug
- headline
- branch
- service_area
- response_target
- years_in_market
- storefront_score
- fleet_lanes
- service_items
- proof_items
- public_profile_url
- copied_at
- created_at
- updated_at

## SupplierStudioWorkspace

Use this when the supplier manages its fleet, profile readiness, storefront publishing, and listing revenue.

- id
- supplier_id
- active_listing_ids
- profile_completion_score
- storefront_publish_status
- document_gap_count
- availability_freshness_score
- current_monthly_listing_revenue
- current_annual_listing_revenue
- modeled_listing_revenue_upside
- updated_at

## ListingRevenueDesk

Use this when Heavyster tracks phase-one listing subscription revenue without touching the rental payment.

- id
- supplier_id
- active_paid_listing_count
- pending_listing_count
- monthly_listing_revenue
- annualized_listing_revenue
- annual_plan_share
- renewal_risk_count
- paused_listing_count
- draft_listing_count
- revenue_score
- revenue_status
- renewal_playbook
- copy_ready_revenue_packet
- copied_at
- updated_at

## ListingRevenueRow

- id
- revenue_desk_id
- supplier_id
- listing_id
- package_name
- billing_plan
- billing_status
- paid_listing_count
- renewal_days_remaining
- monthly_revenue_equivalent
- annualized_revenue
- demand_signal
- renewal_action
- row_score
- created_at
- updated_at

## SupplierAccountHealth

Use this when Heavyster needs to retain and expand suppliers by combining revenue, proof, lead, yard, storefront, and import signals.

- id
- supplier_id
- health_score
- health_status
- risk_signal_count
- listing_arr
- direct_enquiry_pipeline_value
- expansion_arr_visible
- revenue_health_score
- proof_health_score
- lead_response_score
- yard_freshness_score
- storefront_strength_score
- import_upside_score
- next_best_actions
- copy_ready_health_plan
- copied_at
- updated_at

## SupplierAccountHealthAction

- id
- account_health_id
- supplier_id
- action_type
- action_label
- action_detail
- action_priority
- target_module
- expected_impact
- action_status
- created_at
- updated_at

## SupplierSuccessQueue

Use this when founders need a daily cross-supplier operating list that decides who to call first.

- id
- queue_date
- average_supplier_health
- call_first_supplier_id
- at_risk_account_count
- hot_lead_count
- renewal_risk_listing_count
- proof_gap_count
- visible_expansion_arr
- queue_rows
- daily_operating_rhythm
- copy_ready_daily_queue
- copied_at
- created_at
- updated_at

## SupplierSuccessQueueRow

- id
- queue_id
- supplier_id
- representative_listing_id
- supplier_health_score
- urgency_score
- priority_class
- primary_action_label
- primary_action_status
- reason_summary
- listing_arr
- direct_enquiry_pipeline_value
- expansion_arr
- target_module
- created_at
- updated_at

## SupplierLeadDesk

Use this when a supplier tracks direct enquiries and response workflow without Heavyster collecting payment.

- id
- supplier_id
- lead_ids
- active_lead_id
- open_lead_count
- hot_lead_count
- pipeline_value
- response_priority_score
- response_playbook
- copy_ready_reply
- copied_at
- updated_at

## SupplierLead

- id
- supplier_id
- listing_id
- buyer_name
- requested_equipment
- project_summary
- project_location
- requested_start_window
- requested_duration
- budget_signal
- channel
- received_at
- requested_terms
- lead_score
- lead_priority
- response_status
- created_at

## FleetImportBatch

Use this when a supplier imports many machines before they become paid listings.

- id
- supplier_id
- source_filename
- row_count
- modeled_machine_count
- ready_listing_count
- validation_score
- projected_monthly_listing_revenue
- projected_annual_listing_revenue
- import_status
- copy_ready_publish_plan
- copied_at
- created_at
- updated_at

## FleetImportRow

- id
- import_batch_id
- supplier_id
- equipment_name
- category
- region
- quantity
- has_photos
- has_documents
- has_availability
- has_rate_terms
- has_contact_route
- validation_score
- validation_status
- publish_action
- matching_listing_id
- created_at

## ProofVaultItem

Use this when suppliers need to keep license, insurance, inspection, load-test, operator, and permit proof buyer-ready.

- id
- supplier_id
- listing_id
- proof_type
- proof_target
- proof_status
- holder
- expires_at
- days_to_expiry
- trust_score
- buyer_safe_label
- refresh_action
- copied_at
- created_at
- updated_at

## CommandCenter

Use this when Heavyster needs one simple control layer across buyer, supplier, and founder workflows.

- id
- active_listing_id
- buyer_readiness_score
- supplier_pipeline_value
- founder_demand_signal_count
- active_market_opportunity_id
- route_cards
- active_role
- role_workspace_summary
- module_launcher_items
- last_opened_module
- created_at
- updated_at

## UniversalCommandPaletteEvent

Use this when Heavyster needs to understand how users find equipment, suppliers, markets, and workflow modules.

- id
- user_id
- query_text
- result_count
- selected_result_type: equipment, supplier, market, buyer_workflow, supplier_workflow, founder_workflow, action
- selected_result_label
- selected_anchor
- selected_listing_id
- selected_supplier_id
- selected_market_opportunity_id
- launched_at
- created_at

## EquipmentListing

- id
- supplier_id
- category
- subcategory
- make
- model
- year
- capacity
- attachments
- operator_available
- delivery_available
- service_radius
- city
- country
- availability_status
- rental_terms_summary
- listing_status
- billing_plan
- created_at
- updated_at

## ListingPhoto

- id
- listing_id
- url
- caption
- sort_order
- created_at

## VerificationDocument

- id
- supplier_id
- listing_id
- document_type
- document_status
- expiry_date
- file_url
- notes
- created_at

## TrustPassport

Use this to explain why a machine is ready, risky, or still needs verification before a buyer sends an enquiry.

- id
- listing_id
- readiness_score
- verdict
- proof_items
- risk_items
- next_actions
- copied_at
- created_at
- updated_at

## JobsitePlan

Use this when a buyer describes a job and Heavyster suggests a complete rental package before RFQ.

- id
- buyer_project_note
- project_type
- region
- start_window
- planned_roles
- matched_listing_ids
- missing_roles
- package_readiness_score
- copied_at
- sent_to_shortlist_at
- created_at
- updated_at

## SearchRescueEvent

Use this when an exact search returns no matching live supply and the buyer needs recovery options.

- id
- search_query
- region_filter
- availability_filter
- result_count
- suggested_listing_ids
- action_taken
- demand_signal_id
- created_at

## Enquiry

- id
- listing_id
- supplier_id
- customer_name
- customer_company
- customer_email
- customer_phone
- project_location
- requested_start_date
- requested_duration
- message
- enquiry_status
- created_at

## RfqPacket

Use this when a buyer converts shortlisted machines into a controlled quote request.

- id
- buyer_project_note
- listing_ids
- average_readiness_score
- verified_supplier_count
- available_now_count
- supplier_routes
- quote_checklist
- copied_at
- created_at

## AwardDecision

Use this when a buyer compares shortlisted suppliers and records why one should receive the rental award.

- id
- rfq_packet_id
- buyer_project_note
- candidate_listing_ids
- recommended_listing_id
- award_score
- award_status
- decision_reasons
- supplier_matrix
- award_conditions
- copied_at
- created_at

## QuoteGuardReview

Use this when a buyer or founder reviews a supplier quote before mobilization.

- id
- award_decision_id
- listing_id
- supplier_id
- quoted_amount
- currency
- hire_duration_days
- normalized_daily_rate
- modeled_rate_band_low
- modeled_rate_band_high
- included_terms
- missing_terms
- clarity_score
- quote_status
- clarification_notes
- copied_at
- created_at

## MobilizationHandoff

Use this when the buyer needs a pre-dispatch control packet after award but before payment or site movement.

- id
- award_decision_id
- listing_id
- supplier_id
- mobilization_score
- dispatch_status
- checklist_items
- package_gap_summary
- handoff_notes
- copied_at
- created_at

## AvailabilityRefresh

Use this when a supplier or founder reconfirms listing freshness before serious enquiries are routed.

- id
- supplier_id
- listing_id
- previous_availability_status
- refreshed_availability_status
- freshness_score
- last_supplier_confirmation_at
- refresh_action
- demand_pressure_count
- notes
- copied_at
- created_at

## DemandSignal

Use this when a buyer search has no exact match or when a buyer saves an unmet rental need.

- id
- requested_equipment
- category_hint
- region
- urgency
- requested_duration
- source
- signal_count
- status
- created_at
- updated_at

## SupplierHunt

Use this to convert a demand signal into a founder-led supplier recruitment play.

- id
- demand_signal_id
- target_persona
- target_category
- priority_score
- visible_supply_count
- target_listing_count
- projected_monthly_listing_revenue
- projected_annual_listing_revenue
- required_proof_items
- outreach_copy
- hunt_status
- created_at
- updated_at

## MarketOpportunity

Use this to decide which region and equipment category deserves a launch page and supplier push.

- id
- region
- category
- demand_signal_count
- visible_supply_count
- supply_gap_count
- launch_score
- target_listing_count
- projected_annual_listing_revenue
- page_slug
- launch_steps
- launch_brief
- opportunity_status
- created_at
- updated_at

## MarketPageFactoryPage

Use this to convert market opportunities into focused pages that can scale across regions and equipment categories.

- id
- market_opportunity_id
- page_title
- page_slug
- readiness_score
- page_status: launch, prepare, watch
- demand_signal_count
- urgent_signal_count
- visible_supply_count
- verified_supply_count
- supplier_target_count
- proof_gap_count
- projected_annual_listing_revenue
- launch_gate_summary
- page_pack_copy
- created_at
- updated_at

## MarketPageFactoryGate

Use this to make every generated page safe to publish before buyers see it.

- id
- market_page_factory_page_id
- gate_type: demand_proof, live_supply, verified_proof, supplier_target, listing_revenue
- gate_status: ready, review, gap
- gate_detail
- next_action
- created_at
- updated_at

## MarketLaunchRoom

Use this to execute a selected market page as a focused founder sprint.

- id
- market_page_factory_page_id
- launch_score
- launch_status: run_sprint, prep_sprint, recruit_first
- target_supplier_invites
- first_week_listing_arr_target
- demand_signal_count
- visible_supply_count
- verified_supply_count
- proof_gap_count
- sprint_packet_copy
- created_at
- updated_at

## MarketLaunchStep

Use this to keep the first seven days simple and measurable.

- id
- market_launch_room_id
- day_label
- step_label
- owner_role
- step_status: ready, review, gap
- step_detail
- completed_at

## MarketLaunchSupplier

Use this to rank suppliers for a specific page launch.

- id
- market_launch_room_id
- supplier_id
- matched_listing_id
- rank
- fit_score
- supplier_status: invite, verify, warm
- reason
- opened_at
- created_at
- updated_at

## MarketTwin

Use this to simulate whether a market page is strong enough to scale.

- id
- market_launch_room_id
- selected_scenario
- twin_score
- twin_status: dominate_wedge, open_wedge, build_proof
- modeled_paid_listing_count
- modeled_monthly_listing_revenue
- modeled_annual_listing_revenue
- demand_coverage_percent
- trust_score
- response_score
- founder_decision
- twin_memo_copy
- created_at
- updated_at

## MarketTwinRisk

Use this to show why a market should or should not be pushed harder.

- id
- market_twin_id
- risk_type: supply_density, trust_burden, lead_response, revenue_pull
- risk_score
- risk_status: ready, review, gap
- risk_detail
- recommended_action
- created_at
- updated_at

## LiquidityFlywheel

Use this to decide whether a local category market is compounding or still needs founder force.

- id
- market_twin_id
- flywheel_score
- flywheel_status: compounding, turning, founder_push
- bottleneck_loop
- strongest_loop
- modeled_listing_arr
- founder_decision
- flywheel_memo_copy
- created_at
- updated_at

## LiquidityFlywheelLoop

Use this to score each loop in the marketplace liquidity engine.

- id
- liquidity_flywheel_id
- loop_type: demand_to_page, page_to_supply, supply_to_trust, trust_to_response, response_to_revenue
- loop_score
- loop_status: ready, review, gap
- loop_detail
- recommended_action
- owner_role
- created_at
- updated_at

## FounderAutopilot

Use this when Heavyster converts a liquidity bottleneck into owner-assigned founder work.

- id
- liquidity_flywheel_id
- autopilot_score
- autopilot_status: autopilot_ready, run_this_week, founder_push
- primary_command_id
- unlocked_arr_estimate
- open_command_count
- autopilot_brief_copy
- copied_at
- created_at
- updated_at

## FounderAutopilotCommand

Use this to dispatch the next weekly action to founder, growth, trust, success, or revenue owners.

- id
- founder_autopilot_id
- owner_role
- command_label
- command_detail
- due_window
- command_status: dispatch, tighten, protect
- status_class: ready, review, gap
- impact_arr_estimate
- destination_anchor
- completed_at
- created_at
- updated_at

## DemandExchange

Use this when unmet buyer searches become supplier-facing opportunity tickets.

- id
- market_opportunity_id
- active_ticket_id
- exchange_score
- exchange_status: supplier_pull, recruit_now, seed_demand
- total_exchange_arr
- supplier_invite_copy
- copied_at
- created_at
- updated_at

## DemandExchangeTicket

Use this to show a rental company why a category and region deserves its fleet.

- id
- demand_exchange_id
- region
- category
- buyer_signal_count
- visible_supply_count
- supply_gap_count
- supplier_pull_score
- ticket_status: invite, warm, capture
- best_fit_supplier_persona
- required_proof_items
- modeled_listing_arr
- selected_at
- created_at
- updated_at

## DemandExchangeLane

Use this to explain the supplier conversion path from demand proof to paid listing.

- id
- demand_exchange_id
- lane_label
- lane_detail
- lane_value
- lane_status
- status_class: ready, review, gap
- created_at
- updated_at

## ProofOfDemandRoom

Use this when a founder turns Demand Exchange data into supplier sales proof.

- id
- demand_exchange_id
- market_opportunity_id
- proof_score
- proof_status: proof_ready, sales_ready, collect_proof
- proof_value_arr
- primary_objection
- proof_pack_copy
- copied_at
- created_at
- updated_at

## ProofOfDemandEvidence

Use this to show the evidence chain behind a paid listing pitch.

- id
- proof_of_demand_room_id
- evidence_label
- evidence_detail
- evidence_value
- evidence_status
- status_class: ready, review, gap
- created_at
- updated_at

## ProofOfDemandObjection

Use this to answer supplier objections before outreach.

- id
- proof_of_demand_room_id
- objection_label
- objection_answer
- owner_role
- objection_status
- status_class: ready, review, gap
- resolved_at
- created_at
- updated_at

## SupplierCommitmentRoom

Use this when proof of demand becomes a paid listing close plan.

- id
- proof_of_demand_room_id
- market_opportunity_id
- commitment_score
- commitment_status: close_now, close_with_proof, nurture
- recommended_package_id
- ready_gate_count
- commitment_note_copy
- copied_at
- created_at
- updated_at

## SupplierCommitmentPackage

Use this to model the listing package a supplier should buy first.

- id
- supplier_commitment_room_id
- package_label
- listing_count
- monthly_listing_revenue
- annual_listing_revenue
- package_detail
- close_score
- package_status: recommend, option, later
- recommended
- created_at
- updated_at

## SupplierCommitmentGate

Use this to keep supplier go-live simple before payment collection or commission workflows exist.

- id
- supplier_commitment_room_id
- gate_label
- gate_detail
- owner_role
- gate_status
- status_class: ready, review, gap
- completed_at
- created_at
- updated_at

## ListingActivationRoom

Use this when an accepted paid listing package becomes live inventory, billing readiness, and direct enquiry routing.

- id
- supplier_commitment_room_id
- market_opportunity_id
- activation_score
- activation_status: ready_to_publish, activation_sprint, prep_first
- recommended_package_id
- first_invoice_monthly
- first_invoice_annual
- ready_queue_count
- ready_gate_count
- activation_plan_copy
- copied_at
- created_at
- updated_at

## ListingActivationItem

Use this to track the practical work needed to turn a supplier commitment into active paid listings.

- id
- listing_activation_room_id
- item_label
- item_detail
- owner_role
- item_value
- item_status
- status_class: ready, review, gap
- completed_at
- created_at
- updated_at

## ListingActivationGate

Use this to protect billing, proof, availability, launch review, and direct enquiry routing before listings go live.

- id
- listing_activation_room_id
- gate_label
- gate_detail
- owner_role
- gate_status
- status_class: ready, review, gap
- completed_at
- created_at
- updated_at

## TrustRevenueLedger

Use this when founders need one control layer for listing ARR, direct enquiry pipeline, trust debt, renewal exposure, and scale decisions.

- id
- market_opportunity_id
- listing_activation_room_id
- liquidity_flywheel_id
- supplier_success_queue_id
- ledger_score
- ledger_status: scale_ready, protect_growth, fix_trust_debt
- active_listing_arr
- next_package_arr
- direct_enquiry_pipeline_value
- trust_debt_count
- renewal_exposure_arr
- ready_control_count
- ledger_brief_copy
- copied_at
- created_at
- updated_at

## TrustRevenueLedgerRow

Use this to show each market-level revenue, trust, response, and renewal signal.

- id
- trust_revenue_ledger_id
- row_label
- row_detail
- row_value
- row_status
- status_class: ready, review, gap
- created_at
- updated_at

## TrustRevenueControlGate

Use this to decide whether a market can scale, should hold, or needs trust repair before more traffic.

- id
- trust_revenue_ledger_id
- gate_label
- gate_detail
- owner_role
- gate_status
- status_class: ready, review, gap
- completed_at
- created_at
- updated_at

## ConfirmedBookingFuture

This belongs to phase two or later.

- id
- enquiry_id
- gross_rental_amount
- currency
- confirmation_method
- success_fee_rate
- success_fee_amount
- supplier_keep_amount
- booking_status
- created_at
