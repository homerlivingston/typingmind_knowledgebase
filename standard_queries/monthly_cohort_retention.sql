-- Monthly Cohort Retention
-- Customer counts by application month and current status
--
-- Level: PERSON (pet_owner_id)
-- Parameters:
--   ${start_date} - Cohort start date (YYYY-MM-DD)
--   ${end_date}   - Cohort end date (YYYY-MM-DD)

SELECT
  DATE_TRUNC('month', application_date) as cohort_month,
  current_status,
  COUNT(DISTINCT pet_owner_id) as unique_customers,
  COUNT(*) as total_pets,
  ROUND(SUM(monthly_premium), 2) as total_monthly_premium
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
WHERE application_date >= '${start_date}' AND application_date <= '${end_date}'
GROUP BY DATE_TRUNC('month', application_date), current_status
ORDER BY cohort_month DESC, current_status
