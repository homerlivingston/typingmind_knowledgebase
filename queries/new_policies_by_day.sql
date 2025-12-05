-- New Policies by Day
-- Calculates daily new policy count by country
--
-- Parameters:
--   ${start_date} - Start date (YYYY-MM-DD)
--   ${end_date}   - End date (YYYY-MM-DD)
--
-- Example: For November 2025, use start_date='2025-11-01', end_date='2025-11-30'

SELECT
  date,
  country,
  SUM(new_policies) as total_new_policies
FROM spot_bigquery.exec_dashboard.exec_dash_table
WHERE date >= '${start_date}' AND date <= '${end_date}'
  AND new_policies IS NOT NULL
GROUP BY date, country
ORDER BY date DESC, country
