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
