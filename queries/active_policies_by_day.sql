-- Active Policies by Day
-- Returns daily active policy count by country
-- Note: active_policies is a snapshot total, so we pull from the 'Stats' aggregate row
--
-- Parameters:
--   ${start_date} - Start date (YYYY-MM-DD)
--   ${end_date}   - End date (YYYY-MM-DD)
--
-- Example: For November 2025, use start_date='2025-11-01', end_date='2025-11-30'

SELECT
  date,
  country,
  active_policies
FROM spot_bigquery.exec_dashboard.exec_dash_table
WHERE date >= '${start_date}' AND date <= '${end_date}'
  AND source = 'Stats'
  AND active_policies IS NOT NULL
ORDER BY date DESC, country
