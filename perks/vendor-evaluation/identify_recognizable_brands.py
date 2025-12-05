import pandas as pd

# Common recognizable brands (household names)
RECOGNIZABLE_BRANDS = [
    # Tech & Electronics
    'Apple', 'Samsung', 'Microsoft', 'Dell', 'HP', 'Lenovo', 'Sony', 'LG', 'Canon', 'Nikon',
    'Best Buy', 'Newegg', 'Anker', 'Bose', 'Beats', 'GoPro', 'Fitbit', 'Roku',

    # Retail & Department Stores
    'Target', 'Walmart', 'Macy\'s', 'Nordstrom', 'Kohl\'s', 'JCPenney', 'Sears', 'Bloomingdale\'s',
    'Costco', 'Sam\'s Club', 'BJ\'s', 'Home Depot', 'Lowe\'s', 'IKEA', 'Wayfair', 'Overstock',

    # Fashion & Apparel
    'Nike', 'Adidas', 'Under Armour', 'Reebok', 'Puma', 'New Balance', 'Converse', 'Vans',
    'Gap', 'Old Navy', 'Banana Republic', 'J.Crew', 'Express', 'H&M', 'Zara', 'Forever 21',
    'Levi\'s', 'Wrangler', 'Carhartt', 'Columbia', 'North Face', 'Patagonia', 'REI',
    'Skechers', 'Crocs', 'UGG', 'Timberland', 'Dr. Martens', 'Clarks',
    'Victoria\'s Secret', 'Bath & Body Works', 'Anthropologie', 'Urban Outfitters', 'Free People',

    # Beauty & Health
    'Sephora', 'Ulta', 'MAC', 'Clinique', 'Estee Lauder', 'L\'Oreal', 'Maybelline', 'Revlon',
    'CVS', 'Walgreens', 'Rite Aid', 'GNC', 'Vitamin Shoppe', 'Vitacost',

    # Home & Garden
    'Bed Bath & Beyond', 'Williams Sonoma', 'Pottery Barn', 'West Elm', 'Crate & Barrel',
    'Container Store', 'The Home Depot', 'Lowe\'s',

    # Food & Beverage
    'Starbucks', 'Dunkin', 'Chipotle', 'Panera', 'Subway', 'McDonald\'s', 'Burger King',
    'DoorDash', 'Uber Eats', 'Grubhub', 'Instacart', 'HelloFresh', 'Blue Apron',

    # Travel & Entertainment
    'Hotels.com', 'Expedia', 'Priceline', 'Booking.com', 'Airbnb', 'Marriott', 'Hilton',
    'Southwest', 'Delta', 'United', 'American Airlines', 'JetBlue',
    'AMC', 'Regal', 'Fandango', 'Ticketmaster', 'StubHub',

    # Pet Supplies
    'Petco', 'PetSmart', 'Chewy', 'BarkBox',

    # Office & Business
    'Office Depot', 'Staples', 'FedEx', 'UPS',

    # Automotive
    'AutoZone', 'O\'Reilly', 'NAPA', 'Advance Auto Parts', 'Jiffy Lube', 'Firestone',

    # Jewelry & Accessories
    'Tiffany', 'Kay Jewelers', 'Zales', 'Jared', 'Pandora', 'Swarovski',

    # Online Retailers
    'Amazon', 'eBay', 'Etsy', 'Groupon', 'Rakuten', 'AliExpress',

    # Subscription Services
    'Netflix', 'Hulu', 'Disney+', 'Spotify', 'Audible',

    # Sports & Outdoors
    'Dick\'s Sporting Goods', 'Academy Sports', 'Bass Pro Shops', 'Cabela\'s', 'REI'
]

# Function to check if merchant name contains recognizable brand
def is_recognizable(merchant_name, brand_list):
    merchant_lower = merchant_name.lower()
    for brand in brand_list:
        if brand.lower() in merchant_lower:
            return True
    return False

# Read the data
all_merchants = pd.read_csv('wildfire_merchants.csv')
coupons_available = pd.read_csv('coupons_only_merchants.csv')
cashback_only = pd.read_csv('cashback_only_merchants_excluded.csv')

print("=" * 100)
print("RECOGNIZABLE BRAND ANALYSIS: COUPONS vs CASHBACK")
print("=" * 100)
print()

# Analyze coupon-available merchants
print("=" * 100)
print("TOP RECOGNIZABLE BRANDS WITH COUPONS (What You KEEP)")
print("=" * 100)
print()

coupons_available['is_recognizable'] = coupons_available['Merchant Name'].apply(
    lambda x: is_recognizable(x, RECOGNIZABLE_BRANDS)
)
recognizable_with_coupons = coupons_available[coupons_available['is_recognizable']].sort_values(
    'c. Total Coupons', ascending=False
)

print(f"Found {len(recognizable_with_coupons)} recognizable brands with coupons\n")

if len(recognizable_with_coupons) > 0:
    print("Top recognizable brands by coupon count:")
    print("-" * 100)
    for idx, row in recognizable_with_coupons.head(30).iterrows():
        print(f"✓ {row['Merchant Name']:<40} {row['Category Name']:<35} {int(row['c. Total Coupons']):>5} coupons")
else:
    print("⚠️  No major recognizable brands found with coupons")

print()
print()

# Analyze cashback-only merchants
print("=" * 100)
print("TOP RECOGNIZABLE BRANDS - CASHBACK ONLY (What You LOSE)")
print("=" * 100)
print()

cashback_only['is_recognizable'] = cashback_only['Merchant Name'].apply(
    lambda x: is_recognizable(x, RECOGNIZABLE_BRANDS)
)
recognizable_cashback_only = cashback_only[cashback_only['is_recognizable']].sort_values(
    'Merchant Name'
)

print(f"Found {len(recognizable_cashback_only)} recognizable brands that are cashback-only\n")

if len(recognizable_cashback_only) > 0:
    print("Recognizable brands you'd LOSE (cashback only, no coupons):")
    print("-" * 100)
    for idx, row in recognizable_cashback_only.head(30).iterrows():
        rate_info = ""
        if pd.notna(row['% Rate']) and row['% Rate'] != '' and float(str(row['% Rate']).rstrip('%')) > 0:
            rate_info = f"{float(str(row['% Rate']).rstrip('%')):.1f}% cashback"
        elif pd.notna(row['Flat Rate']) and row['Flat Rate'] != '' and float(row['Flat Rate']) > 0:
            rate_info = f"${float(row['Flat Rate']):.0f} flat"
        print(f"✗ {row['Merchant Name']:<40} {row['Category Name']:<35} {rate_info}")

print()
print()

# Summary comparison
print("=" * 100)
print("EXECUTIVE SUMMARY: BRAND RECOGNITION IMPACT")
print("=" * 100)
print()
print(f"Recognizable Brands with Coupons:         {len(recognizable_with_coupons):>4}")
print(f"Recognizable Brands Lost (cashback only): {len(recognizable_cashback_only):>4}")
print()
print(f"Brand Recognition Retention Rate: {len(recognizable_with_coupons)/(len(recognizable_with_coupons)+len(recognizable_cashback_only))*100:.1f}%")
print()

# Save to files
recognizable_with_coupons[['Merchant Name', 'Category Name', 'c. Total Coupons']].to_csv(
    'recognizable_brands_with_coupons.csv', index=False
)
recognizable_cashback_only[['Merchant Name', 'Category Name', '% Rate', 'Flat Rate']].to_csv(
    'recognizable_brands_cashback_only.csv', index=False
)

print("Files saved:")
print("  ✓ recognizable_brands_with_coupons.csv")
print("  ✓ recognizable_brands_cashback_only.csv")
print()
