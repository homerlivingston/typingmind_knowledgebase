-- Customer Tenure Analysis
-- Distribution of active customers by tenure (days enrolled)
--
-- Level: PERSON (pet_owner_id)
-- Parameters: None (current snapshot)

SELECT
  CASE
    WHEN days_enrolled < 30 THEN '0-30 days'
    WHEN days_enrolled < 90 THEN '31-90 days'
    WHEN days_enrolled < 180 THEN '91-180 days'
    WHEN days_enrolled < 365 THEN '181-365 days'
    WHEN days_enrolled < 730 THEN '1-2 years'
    ELSE '2+ years'
  END as tenure_bucket,
  COUNT(DISTINCT pet_owner_id) as unique_customers,
  COUNT(*) as total_pets,
  ROUND(AVG(monthly_premium), 2) as avg_monthly_premium,
  ROUND(AVG(customer_lifetime_value), 2) as avg_clv
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
WHERE current_status = 'Active'
GROUP BY
  CASE
    WHEN days_enrolled < 30 THEN '0-30 days'
    WHEN days_enrolled < 90 THEN '31-90 days'
    WHEN days_enrolled < 180 THEN '91-180 days'
    WHEN days_enrolled < 365 THEN '181-365 days'
    WHEN days_enrolled < 730 THEN '1-2 years'
    ELSE '2+ years'
  END
ORDER BY MIN(days_enrolled)
