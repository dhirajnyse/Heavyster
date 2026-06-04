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

## SupplierAccountMvp

Use this as the first backend sprint boundary: one rental company can create an account, publish one paid listing, receive one direct enquiry, and stay outside rental payment collection.

- id
- supplier_id
- account_owner_name
- account_owner_email
- account_owner_phone
- account_owner_whatsapp
- company_profile_status
- public_profile_slug
- first_listing_id
- proof_placeholder_count
- direct_enquiry_count
- paid_listing_status
- billing_plan
- renewal_date
- admin_review_status
- support_note
- acceptance_status
- created_at
- updated_at

## SupplierOnboardingRunway

Use this as the day-one account checklist that shows a rental company what is complete, missing, blocked, and ready before the first paid listing goes live.

- id
- supplier_account_mvp_id
- current_step
- next_action
- account_status
- profile_status
- listing_status
- proof_status
- billing_status
- direct_enquiry_status
- admin_approval_status
- missing_field_count
- blocker_count
- completion_score
- first_live_listing_id
- first_enquiry_id
- copied_brief_at
- created_at
- updated_at

## BackendDataContract

Use this as the v127 handoff for the first production backend. Every buyer-visible listing should connect to account, profile, proof, subscription, direct enquiry, and admin review state.

- id
- version
- supplier_account_table
- supplier_profile_table
- equipment_listing_table
- proof_document_table
- listing_subscription_table
- direct_enquiry_table
- admin_review_table
- primary_flow
- phase_one_payment_rule
- buyer_visible_listing_requires
- minimum_supplier_screens
- minimum_admin_screens
- acceptance_status
- copied_at
- created_at
- updated_at

## SchemaApiBlueprint

Use this as the v128 backend route map. It converts the v127 data contract into the smallest production API surface for supplier accounts, paid listings, proof, direct enquiries, and admin visibility while rental payment stays outside Heavyster.

- id
- version
- supplier_account_endpoint
- supplier_profile_endpoint
- equipment_listing_endpoint
- proof_document_endpoint
- listing_subscription_endpoint
- direct_enquiry_endpoint
- admin_review_endpoint
- buyer_visible_listing_rule
- mvp_response_shape
- phase_one_payment_rule
- acceptance_status
- copied_at
- created_at
- updated_at

## ApiSmokeConsole

Use this as the v129 backend smoke test console. It proves one supplier account can create one paid listing, attach one proof set, receive one direct enquiry, and pass admin approval while rental payment stays outside Heavyster.

- id
- version
- supplier_account_request
- supplier_profile_request
- equipment_listing_request
- proof_document_request
- listing_subscription_request
- direct_enquiry_request
- admin_review_request
- expected_status_object
- phase_one_payment_guardrail
- pass_condition
- copied_at
- created_at
- updated_at

## BackendFixturePack

Use this as the v130 seed record pack for the first backend implementation. It gives engineers one exact supplier, profile, listing, proof, subscription, enquiry, and admin review story to load before testing the API smoke path.

- id
- version
- phase_one_guardrail
- supplier_account_fixture
- supplier_profile_fixture
- equipment_listing_fixture
- proof_document_set_fixture
- listing_subscription_fixture
- direct_enquiry_fixture
- admin_review_fixture
- combined_status_object
- pass_condition
- copied_at
- created_at
- updated_at

## BackendImplementationContract

Use this as the v131 backend handoff contract. It maps the v130 fixture pack to tables, route contracts, expected response fields, blocked phase-one payment routes, and acceptance gates.

- id
- version
- source_fixture_file
- phase_one_guardrail
- required_tables
- route_contracts
- combined_status_response
- blocked_routes
- acceptance_gates
- pass_condition
- copied_at
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

## SupplierWorkbench

Use this when a rental company needs one supplier-facing revenue desk across Studio, Storefront, Fleet Import, Proof Vault, Revenue Desk, Lead Desk, Account Health, and Yard Freshness.

- id
- supplier_id
- active_listing_id
- studio_workspace_id
- storefront_id
- fleet_import_batch_id
- proof_vault_score
- listing_revenue_desk_id
- supplier_lead_desk_id
- supplier_account_health_id
- yard_freshness_score
- readiness_score
- readiness_status: supplier_ready, revenue_path, repair_desk
- next_best_stage
- copied_at
- created_at
- updated_at

## SupplierWorkbenchStage

Use this to score each supplier operating step before Heavyster pushes more paid listings, renewal work, or buyer demand.

- id
- supplier_workbench_id
- stage_label
- stage_anchor
- stage_score
- stage_status: ready, review, gap
- stage_detail
- stage_action
- created_at
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

## BuyerWorkbench

Use this when a renter needs one decision desk across search, package planning, proof, RFQ, award, quote clarity, and mobilization readiness.

- id
- user_id
- selected_listing_id
- project_note
- jobsite_package_id
- trust_passport_id
- rfq_packet_id
- award_decision_id
- quote_guard_id
- mobilization_packet_id
- readiness_score
- readiness_status: buyer_ready, control_path, rescue_path
- next_best_stage
- copied_at
- created_at
- updated_at

## BuyerWorkbenchStage

Use this to score each step in the renter decision path.

- id
- buyer_workbench_id
- stage_label
- stage_anchor
- stage_score
- stage_status: ready, review, gap
- stage_detail
- stage_action
- created_at
- updated_at

## FounderWorkbench

Use this when the founder needs one scale-control desk across demand proof, supplier success, market pages, launch, market twin, liquidity flywheel, autopilot, demand exchange, proof, commitment, activation, and trust ledger.

- id
- active_market_opportunity_id
- supplier_success_queue_id
- market_page_factory_page_id
- market_launch_room_id
- market_twin_id
- liquidity_flywheel_id
- founder_autopilot_id
- demand_exchange_id
- proof_of_demand_room_id
- supplier_commitment_room_id
- listing_activation_room_id
- trust_revenue_ledger_id
- readiness_score
- readiness_status: scale_ready, founder_control, fix_first
- next_best_stage
- copied_at
- created_at
- updated_at

## FounderWorkbenchStage

Use this to score each founder growth step before Heavyster pushes more supplier outreach, category traffic, or paid listing activation.

- id
- founder_workbench_id
- stage_label
- stage_anchor
- stage_score
- stage_status: ready, review, gap
- stage_detail
- stage_action
- created_at
- updated_at

## FounderMorningBrief

Use this when Heavyster needs a start-of-day operating read across supplier urgency, trust, launch verdict, activation, market wedge, revenue focus, and phase-one direct-payment discipline.

- id
- market_key
- founder_workbench_id
- founder_daily_moves_id
- morning_score
- morning_status: open_carefully, tight_day, ready_day
- first_move_label
- protected_guardrail_label
- arr_in_focus
- risk_signal_count
- copied_at
- created_at
- updated_at

## FounderMorningSignal

Use this to store the risk and opportunity signals included in the morning read.

- id
- founder_morning_brief_id
- signal_label
- signal_value
- signal_detail
- anchor
- signal_status: ready, watch, fix
- status_class: ready, review, gap
- created_at
- updated_at

## FounderMorningLane

Use this to store the morning action lanes the founder can open from the brief.

- id
- founder_morning_brief_id
- lane_label
- lane_detail
- lane_status
- anchor
- status_class: ready, review, gap
- opened_at
- created_at
- updated_at

## FounderDailyMoves

Use this when Heavyster needs one daily operating queue across supplier health, market verdict, activation, trust ledger, and market matrix.

- id
- market_key
- founder_workbench_id
- daily_score
- daily_status: work_today, clean_day, tighten
- first_move_label
- open_move_count
- blocked_guardrail_count
- arr_at_stake
- daily_brief_copy
- copied_at
- created_at
- updated_at

## FounderDailyMove

Use this to store each ranked daily founder action.

- id
- founder_daily_moves_id
- move_label
- move_detail
- owner_role
- due_window
- anchor
- priority_score
- modeled_arr_impact
- move_status: dispatch, tighten, protect
- status_class: ready, review, gap
- completed_at
- created_at
- updated_at

## FounderDailyGuardrail

Use this to keep the daily queue from pushing growth ahead of phase-one monetization discipline.

- id
- founder_daily_moves_id
- guardrail_label
- guardrail_detail
- owner_role
- guardrail_status
- status_class: ready, review, gap
- created_at
- updated_at

## FounderSupplierCallSheet

Use this when Heavyster turns founder demand proof and supplier health into close-ready paid listing calls.

- id
- market_key
- founder_morning_brief_id
- founder_daily_moves_id
- supplier_success_queue_id
- proof_of_demand_room_id
- supplier_commitment_room_id
- call_sheet_score
- call_sheet_status: close_today, call_first, build_proof
- first_supplier_id
- recommended_package_id
- offer_arr
- copied_at
- created_at
- updated_at

## FounderSupplierCallCard

Use this to store each supplier conversation in the founder call sheet.

- id
- founder_supplier_call_sheet_id
- supplier_id
- listing_id
- call_priority
- demand_hook
- package_ask
- proof_ask
- modeled_arr_value
- call_status: call_now, pitch, warm
- status_class: hot, watch, grow
- opened_at
- created_at
- updated_at

## FounderSupplierCallProofAsk

Use this to keep the call sheet honest about proof needed before verified supplier visibility.

- id
- founder_supplier_call_sheet_id
- proof_label
- proof_detail
- proof_status
- status_class: hot, watch, grow
- completed_at
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

## MarketplaceSmartViewEvent

Use this when Heavyster needs to learn which one-click marketplace views help buyers find supply, expose demand gaps, or move into direct enquiries.

- id
- user_id
- smart_view_id
- smart_view_label
- search_text
- region_filter
- availability_filter
- category_filter
- sort_mode
- result_count
- verified_supplier_count
- selected_listing_id
- created_at

## MarketplaceSearchAssistEvent

Use this when Heavyster needs to learn which search suggestions help buyers move from rough intent into useful supply, supplier pages, categories, or demand capture.

- id
- user_id
- query_text
- suggestion_type: machine, category, supplier, demand_gap, view
- suggestion_label
- suggestion_value
- previous_region_filter
- previous_availability_filter
- previous_category_filter
- result_count_after
- selected_listing_id
- created_at

## MarketplaceSupplyLensEvent

Use this when Heavyster needs to learn which visible supply-density cues help buyers narrow the marketplace without feeling lost.

- id
- user_id
- lens_kind: region, category, proof
- lens_value
- lens_label
- source_mode: exact_results, nearby_recovery
- search_text
- previous_region_filter
- previous_availability_filter
- previous_category_filter
- result_count_before
- result_count_after
- selected_listing_id
- created_at

## ShortlistCompareEvent

Use this when Heavyster needs to learn which saved machines buyers compare before moving into RFQ, award, or direct enquiry workflows.

- id
- user_id
- selected_listing_id
- compared_listing_ids
- compared_count
- best_listing_id
- best_supplier_id
- best_score
- ready_count
- suggested_listing_id
- action: open_compare, hide_compare, select_listing, add_suggestion
- created_at

## BuyerFitScoreEvent

Use this when Heavyster needs to learn which match reasons and scores help buyers choose machines faster inside a large catalog.

- id
- user_id
- listing_id
- supplier_id
- search_text
- region_filter
- availability_filter
- category_filter
- sort_mode
- fit_score
- fit_status
- fit_reasons
- clicked_from: card, compact_row, lead_packet, detail_panel, sort
- created_at

## DirectEnquiryComposerEvent

Use this when Heavyster needs to learn which message modes and readiness gates help buyers send cleaner supplier enquiries.

- id
- user_id
- listing_id
- supplier_id
- enquiry_mode: quick, proof, quote
- composer_score
- composer_status
- ready_gate_count
- project_note_present
- buyer_fit_score
- trust_score
- quote_score
- action: mode_change, preview, copy
- created_at

## SupplierResponseRouteEvent

Use this when Heavyster needs to learn which supplier contact routes, response targets, and follow-up timing help direct enquiries get answered.

- id
- user_id
- listing_id
- supplier_id
- primary_channel
- backup_channel
- response_target
- follow_up_after
- route_score
- route_status
- composer_score
- action: view, copy_enquiry, select_listing
- created_at

## DirectEnquiryResponseTrackerEvent

Use this when Heavyster needs to learn whether copied direct enquiries become sent messages, supplier replies, and follow-up loops.

- id
- user_id
- listing_id
- supplier_id
- tracker_status: draft, copied, sent, replied
- copied_at
- sent_at
- follow_up_at
- reply_at
- primary_channel
- backup_channel
- action: copy, mark_sent, log_followup, mark_replied, reset
- created_at

## SupplierReplyQualityGateEvent

Use this when Heavyster needs to learn whether supplier replies are complete enough for quote guard, award, RFQ, or mobilization.

- id
- user_id
- listing_id
- supplier_id
- tracker_status: draft, copied, sent, replied
- reply_quality_score
- reply_status: awaiting_supplier_reply, move_forward, clarify_before_award, hold_and_chase
- ready_gate_count
- gate_count
- missing_gates
- quote_score
- trust_score
- route_score
- next_action
- action: view, mark_replied, clarify, move_forward, hold_dispatch
- created_at

## SupplierReplyClarifierEvent

Use this when Heavyster needs to learn which missing supplier reply terms create clarification messages and whether those messages help buyers move forward.

- id
- user_id
- listing_id
- supplier_id
- clarifier_mode: chase, clarify, handoff
- reply_quality_score
- missing_gates
- channel
- urgency
- focus
- copied_text_length
- action: view, copy_followup, copy_handoff
- created_at

## BuyerDecisionReceiptEvent

Use this when Heavyster needs to learn which proof signals and reply gaps help a buyer move from a listing into RFQ, award, quote guard, or mobilization while payment stays direct.

- id
- user_id
- listing_id
- supplier_id
- receipt_score
- receipt_status: waiting_on_supplier, decision_ready, proceed_with_controls, hold_decision
- buyer_fit_score
- trust_score
- reply_quality_score
- quote_score
- route_score
- ready_evidence_count
- risk_count
- risks
- payment_rule: direct_supplier_payment
- next_action
- action: view, copy_receipt, open_rfq, open_award, open_mobilization
- created_at

## BuyerDecisionActionRouterEvent

Use this when Heavyster needs to learn which next-best action buyers choose after a decision receipt and which route moves them into the next workflow.

- id
- user_id
- listing_id
- supplier_id
- receipt_score
- receipt_status
- router_title
- destination: reply, RFQ, quote_guard, award, mobilization
- route_count
- selected_route_label
- selected_route_action: copy_clarifier, copy_receipt, copy_router, open
- selected_route_anchor
- risk_count
- payment_rule: direct_supplier_payment
- action: view, click_route, copy_route_plan
- created_at

## SupplierListingRoiProofEvent

Use this when Heavyster needs to learn which buyer workflow signals help a supplier understand paid listing value and renew active equipment listings.

- id
- user_id
- listing_id
- supplier_id
- roi_proof_score
- roi_status: renewal_grade_proof, useful_proof, build_more_proof
- listing_annual_value
- lead_budget
- buyer_receipt_score
- supplier_lead_score
- revenue_desk_score
- response_tracker_status
- decision_destination
- renewal_signal: strong, warm, weak
- proof_gaps
- payment_rule: direct_supplier_payment
- action: view, copy_roi_proof, open_lead_desk, open_revenue_desk
- created_at

## SupplierRenewalClosePackEvent

Use this when Heavyster needs to learn which ROI proof and revenue signals convert suppliers into renewal saves or annual listing plans.

- id
- user_id
- listing_id
- supplier_id
- close_score
- close_status: close_now, warm_close, build_proof_first
- close_type: renewal_save, annual_upgrade, proof_close, proof_nurture
- close_value
- paid_listing_count
- current_listing_arr
- monthly_listing_count
- renewal_risk_value
- annual_plan_value
- annual_savings
- roi_proof_score
- lead_budget
- selected_action: copy_close_pack, open_pricing, open_revenue_desk
- payment_rule: direct_supplier_payment
- created_at

## MarketplaceFilterTrailEvent

Use this when Heavyster needs to learn which active filters buyers remove or reset while moving from a narrow search back to useful supply.

- id
- user_id
- action: remove_filter, reset_all
- removed_filter_key: search, region, availability, category, sort, all
- previous_search_text
- previous_region_filter
- previous_availability_filter
- previous_category_filter
- previous_sort_mode
- result_count_before
- result_count_after
- current_hash
- created_at

## MarketplaceResultIntelligenceEvent

Use this when Heavyster needs to learn how buyers respond to supply-ready, supply-watch, and demand-signal guidance inside the marketplace.

- id
- user_id
- intelligence_status: supply_ready, supply_watch, demand_signal
- headline_text
- search_text
- region_filter
- availability_filter
- category_filter
- result_count
- available_count
- verified_supplier_count
- nearby_option_count
- action_clicked: open_best_match, open_closest_match, capture_demand
- selected_listing_id
- created_at

## NavigationMenuEvent

Use this when Heavyster needs to learn which primary links and grouped workflow modules help users move through the product.

- id
- user_id
- source: primary_nav, workflow_menu, command_palette, floating_action
- target_anchor
- target_role: buyer, supplier, founder, general
- target_label
- previous_anchor
- current_hash
- opened_menu
- created_at

## WorkflowMenuSearchEvent

Use this when Heavyster needs to understand which workflow modules users search for inside the grouped menu before choosing a buyer, supplier, or founder room.

- id
- user_id
- query_text
- active_role_filter: all, buyer, supplier, founder
- visible_result_count
- selected_anchor
- selected_label
- selected_role: buyer, supplier, founder
- current_hash
- created_at

## WorkflowDockState

Use this when Heavyster needs to persist or analyze the compact workflow rail that switches between buyer, supplier, and founder paths.

- id
- user_id
- active_role: buyer, supplier, founder
- active_anchor
- visible_step_count
- selected_step_label
- selected_step_anchor
- command_search_opened
- previous_role
- created_at
- updated_at

## WorkflowGuideEvent

Use this when Heavyster needs to learn whether previous/next movement helps buyers, suppliers, and founders finish the right path without getting lost.

- id
- user_id
- active_role: buyer, supplier, founder
- current_anchor
- current_label
- direction: previous, next
- target_anchor
- target_label
- step_index
- total_steps
- created_at

## DemoFlightDeckEvent

Use this when Heavyster needs to understand how prospects, investors, suppliers, or internal operators move through the guided demo story.

- id
- user_id
- scene_label
- scene_role: buyer, supplier, founder
- scene_anchor
- selected_listing_id
- copied_script
- started_at
- completed_at
- created_at

## BoardroomSnapshotMemo

Use this when Heavyster needs to save or share the current investor/operator read for a market wedge.

- id
- user_id
- market_label
- snapshot_score
- active_listing_arr
- direct_enquiry_pipeline
- next_package_arr
- trust_debt_count
- demand_signal_count
- first_supplier_to_call
- next_founder_move
- memo_text
- copied_at
- created_at

## ThirtyDayPilotPack

Use this when Heavyster needs to run a controlled market pilot from boardroom proof into supplier activation and direct enquiry routing.

- id
- user_id
- market_label
- pilot_score
- pilot_status
- first_supplier_id
- recommended_package_label
- target_listing_count
- target_listing_arr
- trust_debt_count
- week_1_action
- week_2_action
- week_3_action
- week_4_action
- gate_statuses
- memo_text
- copied_at
- created_at
- updated_at

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

## DirectDealTrail

Use this when Heavyster needs to prove enquiry, proof, RFQ, award, quote clarity, supplier response, and mobilization value without collecting rental payment.

- id
- listing_id
- supplier_id
- buyer_workbench_id
- rfq_packet_id
- award_decision_id
- quote_guard_review_id
- mobilization_handoff_id
- supplier_lead_id
- trail_score
- trail_status: workflow_earned, proof_trail, gaps_remain
- payment_rule
- future_success_fee_eligibility
- copy_ready_deal_proof
- copied_at
- created_at
- updated_at

## DirectDealTrailStep

Use this to track each proof step in a no-commission booking trail.

- id
- direct_deal_trail_id
- step_label
- step_anchor
- step_score
- step_status: ready, review, gap
- step_detail
- step_action
- owner_role
- created_at
- updated_at

## DirectDealTrailGate

Use this to hold phase-one monetization discipline before Heavyster considers any success fee.

- id
- direct_deal_trail_id
- gate_label
- owner_role
- gate_status
- status_class: ready, review, gap
- gate_detail
- created_at
- updated_at

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

## MarketSignalMatrix

Use this when founders need a compact region-by-category grid before deciding which wedge deserves supplier outreach, page traffic, or paid listing activation.

- id
- active_market_key
- total_demand_signal_count
- total_visible_supply_count
- total_verified_supply_count
- total_modeled_listing_arr
- selected_region
- selected_category
- selected_score
- selected_action
- copy_ready_matrix_brief
- copied_at
- created_at
- updated_at

## MarketSignalMatrixCell

Use this to score one region/category cell inside the market matrix.

- id
- market_signal_matrix_id
- region
- category
- demand_signal_count
- urgent_signal_count
- visible_supply_count
- verified_supply_count
- pending_proof_count
- modeled_inventory_count
- launch_target_listing_count
- supply_gap_count
- proof_score
- modeled_listing_arr
- cell_score
- cell_status: launch, work, listen
- recommended_action
- linked_market_opportunity_id
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
- launch_verdict_id
- verdict_status: scale_wedge, open_carefully, build_proof_first
- traffic_rule
- twin_memo_copy
- created_at
- updated_at

## MarketTwinVerdict

Use this to turn market simulation into a founder go/no-go launch decision.

- id
- market_twin_id
- verdict_label
- verdict_score
- verdict_status: ready, review, gap
- verdict_detail
- traffic_rule
- ready_risk_count
- risk_gap_count
- next_72_hour_actions
- created_at
- updated_at

## MarketTwinVerdictControl

Use this to hold the launch gates that must pass before scaling traffic or monetization.

- id
- market_twin_verdict_id
- control_label
- control_status
- status_class: ready, review, gap
- control_detail
- owner_role
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

## v139 Calm Backend Scaffold

The first production backend should expose only the records required for phase-one listing SaaS. Keep these objects simple and map every UI state back to one of them:

- SupplierAccount: company identity, owner contact, regions, plan, and supplier status
- EquipmentListing: category, make, model, region, availability, proof state, paid status, and visibility
- ProofDocument: photo or document type, file status, expiry, review state, and admin note
- ListingSubscription: billable listing count, billing cycle, renewal date, invoice status, and cancellation state
- DirectEnquiry: buyer message, supplier route, response state, copied packet, and direct-payment note
- AdminReview: review type, review status, risk flag, support note, and approval timestamp

No rental payment, escrow, or commission collection table should exist in phase one.

## v140 Supplier Account Shell

Before full authentication and storage are connected, the first supplier account should be modeled as one calm shell:

- SupplierAccount: owner email, phone, WhatsApp, legal name, country, and account status
- SupplierProfile: public name, slug, branch, service regions, response target, and storefront visibility
- FirstListing: category, make, model, region, availability, paid status, and public listing state
- ProofChecklist: photo, license, insurance, inspection, operator certificate, and expiry date
- ListingPlan: free profile, USD 9/month active listing, USD 99/year active listing, and 0% rental take
- DirectRoute: phone, email, WhatsApp, enquiry packet, response note, and direct-payment reminder
- AdminReview: supplier approval, listing approval, proof request, risk hold, and support note

This shell keeps production work focused on account ownership and paid-listing activation while rental payments stay outside Heavyster.

## v141 Calm Launch Room

The founder launch model should stay small and repeatable:

- LaunchWedge: market, category, launch status, founder command, and expansion rule
- AnchorSupplierTarget: supplier count, target market, proof requirement, invite status, and activation state
- PaidReadyListingTarget: target count, pricing rule, proof rule, visibility state, and revenue projection
- DirectEnquiryMeasure: enquiry route, response state, response time, buyer clarity, and follow-up state
- LaunchGate: supply, trust, revenue, response, and simplicity status
- ExpansionDecision: hold, repair, launch, or repeat decision with reason and timestamp

No phase-one record should collect rental payment, escrow, booking commission, or supplier payout data.

## v142 Calm Proof Card

Use this to show one buyer-safe machine path before opening deeper workflow rooms.

CalmProofCard:

- id
- listing_id
- supplier_id
- category
- trust_score
- proof_ready_count
- proof_total_count
- availability_state
- direct_enquiry_action
- payment_rule
- status_class
- copy_ready_text
- copied_at
- created_at
- updated_at

CalmProofMetric:

- id
- calm_proof_card_id
- label
- value
- note
- confidence_status: ready, watch, gap
- created_at
- updated_at

CalmProofAction:

- id
- calm_proof_card_id
- action_label
- action_type: copy_proof_card, open_passport, capture_demand, open_hunt
- action_anchor
- action_status
- created_at
- updated_at

CalmProofGapSignal:

- id
- search_query
- region_filter
- availability_filter
- missing_supply_reason
- demand_signal_id
- supplier_hunt_anchor
- copy_ready_gap_note
- created_at
- updated_at

No CalmProofCard table should collect rental payment, escrow, booking commission, supplier payout, or booking-fee data. The card only explains proof, availability, direct enquiry, and the 0% rental take rule.

## v143 Calm Action Bar

Use this to keep the current role path simple before a user opens deeper rooms.

CalmActionBar:

- id
- role: buyer, supplier, founder
- current_anchor
- next_anchor
- headline
- proof_reason
- money_rule
- primary_action_label
- primary_action_type: copy_enquiry, open_supplier_workbench, open_market_command
- primary_action_anchor
- copied_at
- created_at
- updated_at

CalmActionMetric:

- id
- calm_action_bar_id
- label
- value
- note
- status_class: ready, watch, neutral
- created_at
- updated_at

No CalmActionBar table should collect rental payment, escrow, booking commission, supplier payout, or booking-fee data. It only presents the next action, proof reason, and 0% rental take rule.

## v144 Serene Route Planner

Use this to keep every role inside one visible route before deeper workflow power appears.

SereneRoutePlanner:

- id
- role: buyer, supplier, founder
- current_anchor
- next_anchor
- headline
- start_label
- start_note
- proof_label
- proof_note
- money_label
- money_note
- next_label
- next_note
- primary_action_label
- primary_action_anchor
- copied_at
- created_at
- updated_at

SereneRouteStep:

- id
- serene_route_planner_id
- label: start, proof, money, next
- value
- note
- status_class: ready, watch, neutral
- display_order
- created_at
- updated_at

No SereneRoutePlanner table should collect rental payment, escrow, booking commission, supplier payout, or booking-fee data. It only presents the role route, proof reason, money rule, and next screen.

## v145 Visible Serene Route

Use this to keep the marketplace anchor and route planner aligned as the public experience expands.

MarketplaceAnchor:

- id
- anchor: marketplace
- target_section: serene_route_planner
- previous_target: hero
- scroll_margin_top
- active_release: v145
- created_at
- updated_at

VisibilityRule:

- id
- anchor_id
- opens_before: hero
- route_visible: true
- proof_reason_visible: true
- money_rule_visible: true
- next_action_visible: true
- phase_one_guardrail: no_rental_payment_collection
- created_at
- updated_at

No MarketplaceAnchor or VisibilityRule table should collect rental payment, escrow, booking commission, supplier payout, or booking-fee data. These records only protect first-screen route clarity.

## v146 Calm Global Compass

Use this as a lightweight view model, not a payment or booking record.

GlobalCalmCompass:

- id
- role: buyer, supplier, founder
- country
- category
- proof_reason
- money_rule
- next_action
- primary_anchor
- copied_at
- created_at
- updated_at

GlobalCalmStep:

- id
- global_calm_compass_id
- label: country, category, proof, money, next
- value
- detail
- tone: ready, watch, neutral
- display_order
- created_at
- updated_at

No GlobalCalmCompass table should collect rental payment, escrow, booking commission, supplier payout, or booking-fee data. It can reference listing SaaS revenue and direct enquiries, but phase one keeps rental payments outside Heavyster.

## v147 Calm Decision Concierge

Use this as a presentational decision model that can later be backed by buyer, supplier, and founder workflow state.

CalmDecisionConcierge:

- id
- role: buyer, supplier, founder
- headline
- detail
- proof_reason
- money_rule
- next_action
- primary_action_label
- primary_action_anchor
- secondary_action_label
- copied_at
- created_at
- updated_at

CalmDecisionTile:

- id
- calm_decision_concierge_id
- label
- value
- note
- tone: ready, watch, neutral
- display_order
- created_at
- updated_at

No CalmDecisionConcierge table should collect rental payment, escrow, deposit, booking commission, supplier payout, or booking-fee data. It can reference listing SaaS revenue, direct enquiries, and proof readiness only.

## v148 Calm Backend Handoff

The handoff is the quiet UI contract for future backend state. It does not add production persistence yet; it maps visible user decisions to the records the real SaaS must create later.

| Role | Owner | Record path |
| --- | --- | --- |
| Buyer | buyer_flow | DirectEnquiry -> ProofSnapshot -> LeadPacket -> PaymentGuardrail |
| Supplier | supplier_flow | SupplierAccount -> EquipmentListing -> ProofUpload -> ListingSubscription |
| Founder | founder_flow | MarketWedge -> SupplierTarget -> AdminReview -> LaunchGate |

Guardrail: paid listing billing can be modeled, but rental payment, escrow, deposit, payout, supplier settlement, and rental commission stay outside phase one.

## v149 Calm Launch Pulse

Use this as a role-aware view model that can be generated from buyer, supplier, founder, and backend readiness state.

CalmLaunchPulse:

- id
- role: buyer, supplier, founder
- headline
- detail
- primary_action_label
- primary_action_anchor
- copied_at
- created_at
- updated_at

CalmLaunchPulseState:

- id
- calm_launch_pulse_id
- label: live, blocked, money, next
- value
- detail
- tone: ready, watch, neutral
- display_order
- created_at
- updated_at

No CalmLaunchPulse table should collect rental payment, escrow, deposit, payout, booking commission, or supplier settlement data. It can reference direct enquiries, listing subscriptions, proof readiness, and backend gate status.

## v150 Production Account Scaffold

Use this as the first quiet bridge between the static product shell and the production SaaS database. The UI should show the record path without exposing backend tables to the user.

ProductionAccountScaffold:

- id
- role: buyer, supplier, founder
- account_path_label
- headline
- detail
- primary_action_label
- primary_action_anchor
- copied_at
- created_at
- updated_at

ProductionAccountRecord:

- id
- production_account_scaffold_id
- label
- value
- detail
- backend_record_name
- tone: ready, watch, neutral
- display_order
- created_at
- updated_at

Initial backend records:

| Role | Records |
| --- | --- |
| Buyer | BuyerProfile, TrustSnapshot, DirectEnquiry, SavedSearch |
| Supplier | SupplierAccount, EquipmentListing, ProofDocument, ListingSubscription, LeadRoute |
| Founder | AdminReview, MarketLedger, AccountHealth, LeadAudit |

No ProductionAccountScaffold or ProductionAccountRecord table should collect rental payment, deposit, escrow, payout, booking commission, or supplier settlement data. It can reference listing SaaS billing, direct enquiries, proof readiness, and account readiness only.

## v151 SaaS Launch Gate

Use this as the shared release gate before buyer traffic, supplier onboarding, paid listing revenue, or backend routing scales. The public UI should show the decision without exposing operational complexity.

SaasLaunchGate:

- id
- role: buyer, supplier, founder
- headline
- detail
- primary_action_label
- primary_action_anchor
- copied_at
- created_at
- updated_at

SaasLaunchGateState:

- id
- saas_launch_gate_id
- label
- value
- detail
- decision: pass, hold, review
- tone: ready, watch, hold, neutral
- display_order
- created_at
- updated_at

Initial launch gates:

| Gate | Decision | Purpose |
| --- | --- | --- |
| Buyer traffic | Pass | Let buyers search, review proof, and send direct enquiries when one clear route exists. |
| Supplier onboarding | Pass | Let suppliers list when company, machine, proof, and direct lead path are visible. |
| Paid listing | Pass | Keep USD 9/month or USD 99/year per active listing as the first revenue model. |
| Backend route | Review | Move next into accounts, listings, proof uploads, direct lead records, and admin review. |

No SaasLaunchGate or SaasLaunchGateState table should collect rental payment, deposit, escrow, payout, booking commission, or supplier settlement data. It can reference listing SaaS billing, direct enquiries, proof readiness, and backend readiness only.

## v152 Production Backend Starter

Use this as the first production backend contract behind the calm static product shell. It names the records the real SaaS must create while keeping payment custody outside Heavyster.

ProductionBackendStarter:

- id
- role: buyer, supplier, founder
- headline
- detail
- primary_action_label
- primary_action_anchor
- copied_at
- created_at
- updated_at

ProductionBackendStarterRecord:

- id
- production_backend_starter_id
- record_name
- purpose
- route
- status: ready, watch, hold, neutral
- display_order
- created_at
- updated_at

Initial record map:

| Role | Records |
| --- | --- |
| Buyer | DirectEnquiry, ProofDocument, EquipmentListing, RentalPayment blocked |
| Supplier | SupplierAccount, EquipmentListing, ListingSubscription, ProofDocument review |
| Founder | MarketSignal, AdminReview, ListingSubscription, RentalPayment blocked |

First API routes:

- `/api/supplier-accounts`
- `/api/equipment-listings`
- `/api/proof-documents`
- `/api/direct-enquiries`
- `/api/listing-subscriptions`
- `/api/admin-reviews`
- `/api/market-signals`

Blocked phase-one routes:

- `/api/rental-payments`
- `/api/escrow`
- `/api/payouts`
- `/api/booking-commissions`

No ProductionBackendStarter or ProductionBackendStarterRecord table should collect rental payment, deposit, escrow, payout, booking commission, or supplier settlement data. It can reference listing SaaS billing, direct enquiry routing, proof readiness, supplier accounts, and market signals only.
