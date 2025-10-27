import pandas as pd
import re
from pathlib import Path

def process_hunt_email_metrics(csv_path):
    """
    Process HUNT email campaign metrics by extracting day numbers and combining statistics.
    """
    # Read the CSV
    df = pd.read_csv(csv_path)

    # Filter for HUNT-EML templates only
    hunt_emails = df[df['template_name'].str.contains('HUNT-EML-', na=False)].copy()

    # Extract day number from template_name using regex
    def extract_day_number(template_name):
        match = re.search(r'HUNT-EML-(\d+)', str(template_name))
        return int(match.group(1)) if match else None

    hunt_emails['day'] = hunt_emails['template_name'].apply(extract_day_number)

    # Remove rows where we couldn't extract a day number
    hunt_emails = hunt_emails.dropna(subset=['day'])

    # Group by day and sum the metrics
    metrics_columns = ['sent', 'delivered', 'opened', 'clicked', 'converted',
                      'bounced', 'spammed', 'unsubscribed', 'suppressed',
                      'failed', 'drafted', 'topic_unsubscribed']

    grouped = hunt_emails.groupby('day').agg({
        'timestamp': 'first',  # Keep the first timestamp
        'timestamp_RFC3339': 'first',  # Keep the first RFC timestamp
        'campaign_id': 'first',  # Keep the first campaign_id
        'campaign_name': 'first',  # Keep the first campaign_name
        **{col: 'sum' for col in metrics_columns}  # Sum all metrics
    }).reset_index()

    # Create a combined template_name for each day
    grouped['template_name'] = grouped['day'].apply(lambda x: f'HUNT-EML-{int(x)}-combined')
    grouped['subject'] = grouped['day'].apply(lambda x: f'Combined metrics for day {int(x)}')
    grouped['template_id'] = grouped['day'].apply(lambda x: f'combined_{int(x)}')

    # Sort by day
    grouped = grouped.sort_values('day')

    # Reorder columns to match original CSV structure
    column_order = ['timestamp', 'timestamp_RFC3339', 'template_id', 'template_name',
                   'subject', 'campaign_id', 'campaign_name'] + metrics_columns
    grouped = grouped[column_order]

    return grouped

# Process the CSV
input_path = '/Users/homer/Downloads/delivery_metrics-2025-09-22_12-22.csv'
output_path = '/Users/homer/Projects/spot/hunt_metrics_processed.csv'

processed_df = process_hunt_email_metrics(input_path)

# Save the processed data
processed_df.to_csv(output_path, index=False)

print(f"Processed {len(processed_df)} day groups from HUNT email campaign")
print(f"Output saved to: {output_path}")

# Display first few rows
print("\nFirst 10 rows of processed data:")
print(processed_df.head(10)[['template_name', 'sent', 'delivered', 'opened', 'clicked']].to_string())