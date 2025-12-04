-- Policy Mix Snapshot
-- Current active policies broken down by plan configuration
--
-- Level: PET (account_id)
-- Parameters: None (current snapshot of active policies)

SELECT
  policy_name,
  preventive_type as wellness_tier,
  deductible,
  copay,
  annual_limit,
  COUNT(*) as pet_count,
  COUNT(DISTINCT pet_owner_id) as customer_count,
  ROUND(AVG(monthly_premium), 2) as avg_monthly_premium,
  ROUND(SUM(monthly_premium), 2) as total_monthly_premium
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
WHERE current_status = 'Active'
GROUP BY policy_name, preventive_type, deductible, copay, annual_limit
ORDER BY pet_count DESC
