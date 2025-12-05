-- Customer Acquisition by Channel
-- New customers acquired by channel within date range
--
-- Level: PERSON (pet_owner_id)
-- Parameters:
--   ${start_date} - Start date (YYYY-MM-DD)
--   ${end_date}   - End date (YYYY-MM-DD)

SELECT
  channel,
  first_touch_source,
  COUNT(DISTINCT pet_owner_id) as new_customers,
  COUNT(*) as new_pets,
  ROUND(AVG(monthly_premium), 2) as avg_monthly_premium,
  ROUND(SUM(monthly_premium), 2) as total_monthly_premium
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
WHERE application_date >= '${start_date}' AND application_date <= '${end_date}'
GROUP BY channel, first_touch_source
ORDER BY new_customers DESC
