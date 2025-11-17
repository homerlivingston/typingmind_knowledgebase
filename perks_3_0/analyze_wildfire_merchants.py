import pandas as pd
import numpy as np

# Read the CSV file
df = pd.read_csv('wildfire_merchants.csv')

print("=" * 80)
print("WILDFIRE MERCHANT LIST ANALYSIS: COUPONS VS CASHBACK")
print("=" * 80)
print()

# Basic stats
total_merchants = len(df)
print(f"Total Merchants: {total_merchants:,}")
print()

# Clean the data - handle empty values
df['c. Total Coupons'] = pd.to_numeric(df['c. Total Coupons'], errors='coerce').fillna(0)
df['% Rate'] = df['% Rate'].astype(str).str.rstrip('%')
df['% Rate'] = pd.to_numeric(df['% Rate'], errors='coerce').fillna(0)
df['Flat Rate'] = pd.to_numeric(df['Flat Rate'], errors='coerce').fillna(0)

# Categorize merchants
df['has_coupons'] = df['c. Total Coupons'] > 0
df['has_cashback'] = (df['% Rate'] > 0) | (df['Flat Rate'] > 0)

# Calculate distributions
coupons_only = df[df['has_coupons'] & ~df['has_cashback']]
cashback_only = df[~df['has_coupons'] & df['has_cashback']]
both = df[df['has_coupons'] & df['has_cashback']]
neither = df[~df['has_coupons'] & ~df['has_cashback']]

print("=" * 80)
print("DISTRIBUTION BREAKDOWN")
print("=" * 80)
print()
print(f"Coupons Only:          {len(coupons_only):>6,} ({len(coupons_only)/total_merchants*100:>5.1f}%)")
print(f"Cashback Only:         {len(cashback_only):>6,} ({len(cashback_only)/total_merchants*100:>5.1f}%)")
print(f"Both Coupons & Cashback: {len(both):>6,} ({len(both)/total_merchants*100:>5.1f}%)")
print(f"Neither:               {len(neither):>6,} ({len(neither)/total_merchants*100:>5.1f}%)")
print()

print("=" * 80)
print("COMPLIANCE-FRIENDLY SCENARIO: COUPONS ONLY")
print("=" * 80)
print()
merchants_with_coupons = df[df['has_coupons']]
total_with_coupons = len(merchants_with_coupons)
total_coupons_available = merchants_with_coupons['c. Total Coupons'].sum()

print(f"Total Merchants with Coupons Available: {total_with_coupons:,} ({total_with_coupons/total_merchants*100:.1f}% of total)")
print(f"Total Coupons Available: {int(total_coupons_available):,}")
print(f"Average Coupons per Merchant: {total_coupons_available/total_with_coupons:.1f}")
print()

# Category breakdown for coupon merchants
print("=" * 80)
print("TOP CATEGORIES WITH COUPONS")
print("=" * 80)
print()
category_breakdown = merchants_with_coupons.groupby('Category Name').agg({
    'Merchant Name': 'count',
    'c. Total Coupons': 'sum'
}).sort_values('Merchant Name', ascending=False).head(20)
category_breakdown.columns = ['Merchant Count', 'Total Coupons']
print(category_breakdown.to_string())
print()

# Cashback analysis
print("=" * 80)
print("CASHBACK ANALYSIS (What we'd be excluding)")
print("=" * 80)
print()
merchants_with_cashback = df[df['has_cashback']]
print(f"Total Merchants with Cashback: {len(merchants_with_cashback):,} ({len(merchants_with_cashback)/total_merchants*100:.1f}% of total)")
print()

# Average cashback rates
avg_percent_rate = merchants_with_cashback[merchants_with_cashback['% Rate'] > 0]['% Rate'].mean()
avg_flat_rate = merchants_with_cashback[merchants_with_cashback['Flat Rate'] > 0]['Flat Rate'].mean()
print(f"Average % Rate (when available): {avg_percent_rate:.2f}%")
print(f"Average Flat Rate (when available): ${avg_flat_rate:.2f}")
print()

# Top categories by cashback
print("Top 10 Categories with Cashback Only:")
cashback_categories = cashback_only.groupby('Category Name')['Merchant Name'].count().sort_values(ascending=False).head(10)
for cat, count in cashback_categories.items():
    print(f"  {cat}: {count} merchants")
print()

print("=" * 80)
print("MERCHANT OVERLAP ANALYSIS")
print("=" * 80)
print()
print(f"Merchants with BOTH coupons AND cashback: {len(both):,}")
print("  → These merchants provide maximum flexibility")
print()
print(f"Merchants with ONLY coupons (no cashback): {len(coupons_only):,}")
print("  → These are compliance-friendly options")
print()
print(f"Merchants with ONLY cashback (no coupons): {len(cashback_only):,}")
print("  → These would need to be excluded in a coupon-only program")
print()

# Summary recommendation
print("=" * 80)
print("EXECUTIVE SUMMARY")
print("=" * 80)
print()
print(f"If Spot Pet moves to a COUPONS-ONLY program:")
print()
print(f"  ✓ Available Merchants: {total_with_coupons:,} ({total_with_coupons/total_merchants*100:.1f}% of Wildfire's network)")
print(f"  ✓ Total Coupons: {int(total_coupons_available):,}")
print(f"  ✗ Excluded Merchants: {len(cashback_only):,} ({len(cashback_only)/total_merchants*100:.1f}% - cashback only)")
print()
print(f"IMPACT: A coupon-only program would retain {total_with_coupons/total_merchants*100:.1f}% of the merchant network")
print(f"        while eliminating cashback compliance risks.")
print()

# Save detailed breakdown to CSV
print("=" * 80)
print("Saving detailed analysis to CSV files...")
print("=" * 80)

# Coupon-only merchants
merchants_with_coupons[['Merchant Name', 'Category Name', 'c. Total Coupons']].sort_values(
    'c. Total Coupons', ascending=False
).to_csv('coupons_only_merchants.csv', index=False)
print("✓ Saved: coupons_only_merchants.csv")

# Cashback-only merchants (excluded)
cashback_only[['Merchant Name', 'Category Name', '% Rate', 'Flat Rate']].sort_values(
    'Merchant Name'
).to_csv('cashback_only_merchants_excluded.csv', index=False)
print("✓ Saved: cashback_only_merchants_excluded.csv")

# Both categories
both[['Merchant Name', 'Category Name', 'c. Total Coupons', '% Rate', 'Flat Rate']].sort_values(
    'c. Total Coupons', ascending=False
).to_csv('merchants_with_both.csv', index=False)
print("✓ Saved: merchants_with_both.csv")

print()
print("Analysis complete!")
