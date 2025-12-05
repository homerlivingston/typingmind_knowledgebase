-- Cancellations by Reason
-- Breakdown of cancelled policies by cancel reason within date range
--
-- Level: PET (account_id)
-- Parameters:
--   ${start_date} - Start date (YYYY-MM-DD)
--   ${end_date}   - End date (YYYY-MM-DD)

SELECT
  cancel_reason,
  COUNT(*) as cancelled_pets,
  COUNT(DISTINCT pet_owner_id) as unique_customers,
  ROUND(AVG(days_enrolled), 0) as avg_days_enrolled_before_cancel,
  ROUND(AVG(monthly_premium), 2) as avg_monthly_premium,
  ROUND(SUM(monthly_premium), 2) as total_premium_lost
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
WHERE current_status = 'Cancelled'
  AND cancel_date >= '${start_date}' AND cancel_date <= '${end_date}'
GROUP BY cancel_reason
ORDER BY cancelled_pets DESC
