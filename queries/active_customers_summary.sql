-- Active Customers Summary (Person Level)
-- Returns count of unique customers by status
--
-- Level: PERSON (pet_owner_id)
-- Parameters: None (current snapshot)

SELECT
  current_status,
  COUNT(DISTINCT pet_owner_id) as unique_customers,
  COUNT(*) as total_pets,
  ROUND(AVG(monthly_premium), 2) as avg_monthly_premium,
  ROUND(SUM(monthly_premium), 2) as total_monthly_premium
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
GROUP BY current_status
ORDER BY unique_customers DESC
