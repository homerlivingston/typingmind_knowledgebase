-- Geographic Distribution of Active Customers
-- Active customers by state and DMA
--
-- Level: PERSON (pet_owner_id)
-- Parameters: None (current snapshot of active policies)

SELECT
  state,
  dma_description,
  COUNT(DISTINCT pet_owner_id) as unique_customers,
  COUNT(*) as total_pets,
  ROUND(AVG(monthly_premium), 2) as avg_monthly_premium,
  ROUND(AVG(Median_Income), 0) as avg_median_income
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
WHERE current_status = 'Active'
  AND state IS NOT NULL
GROUP BY state, dma_description
ORDER BY unique_customers DESC
