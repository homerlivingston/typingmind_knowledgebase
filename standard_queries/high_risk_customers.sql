-- High Risk Customers (Churn Prediction)
-- Active customers with high predicted cancel rate
--
-- Level: PERSON (pet_owner_id)
-- Parameters:
--   ${risk_threshold} - Minimum predicted_cancel_rate to include (e.g., 0.5 for 50%+)

SELECT
  pet_owner_id,
  pet_owner_name,
  email,
  predicted_cancel_rate,
  days_enrolled,
  current_status,
  channel,
  first_touch_source,
  monthly_premium,
  total_claims,
  claims_denied,
  customer_lifetime_value
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
WHERE current_status = 'Active'
  AND predicted_cancel_rate >= ${risk_threshold}
  AND predicted_cancel_rate IS NOT NULL
ORDER BY predicted_cancel_rate DESC
LIMIT 500
