-- Claims Summary by Period
-- Claims metrics for pets with claims in date range
--
-- Level: PET (account_id)
-- Parameters:
--   ${start_date} - Start date (YYYY-MM-DD)
--   ${end_date}   - End date (YYYY-MM-DD)

SELECT
  COUNT(*) as pets_with_claims,
  COUNT(DISTINCT pet_owner_id) as customers_with_claims,
  SUM(total_claims) as total_claims,
  SUM(successful_claims) as successful_claims,
  SUM(claims_denied) as claims_denied,
  ROUND(SUM(claims_denied) * 100.0 / NULLIF(SUM(total_claims), 0), 2) as denial_rate_pct,
  ROUND(AVG(avg_claim_wait_time), 1) as avg_wait_time_days,
  ROUND(SUM(total_paid), 2) as total_paid_amount,
  ROUND(SUM(total_received), 2) as total_received_amount,
  ROUND(AVG(total_paid / NULLIF(total_claims, 0)), 2) as avg_paid_per_claim
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
WHERE first_claim_date >= '${start_date}' AND first_claim_date <= '${end_date}'
  AND total_claims > 0
