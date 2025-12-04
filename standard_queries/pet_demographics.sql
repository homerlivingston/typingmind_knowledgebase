-- Pet Demographics
-- Breakdown of active pets by species, age, and breed
--
-- Level: PET (account_id)
-- Parameters: None (current snapshot)

SELECT
  species,
  CASE
    WHEN pet_age < 1 THEN 'Under 1 year'
    WHEN pet_age < 3 THEN '1-2 years'
    WHEN pet_age < 7 THEN '3-6 years'
    WHEN pet_age < 10 THEN '7-9 years'
    ELSE '10+ years'
  END as age_bucket,
  COUNT(*) as pet_count,
  COUNT(DISTINCT pet_owner_id) as customer_count,
  ROUND(AVG(monthly_premium), 2) as avg_monthly_premium,
  ROUND(AVG(total_claims), 1) as avg_claims_per_pet,
  ROUND(AVG(total_paid), 2) as avg_claims_paid
FROM spot_bigquery.exec_dash_2_0.cf_pet_status
WHERE current_status = 'Active'
GROUP BY species,
  CASE
    WHEN pet_age < 1 THEN 'Under 1 year'
    WHEN pet_age < 3 THEN '1-2 years'
    WHEN pet_age < 7 THEN '3-6 years'
    WHEN pet_age < 10 THEN '7-9 years'
    ELSE '10+ years'
  END
ORDER BY species, MIN(pet_age)
