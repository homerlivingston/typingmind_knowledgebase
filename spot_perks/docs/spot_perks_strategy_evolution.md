# Spot Perks Strategy Evolution

## Program Evolution Timeline

### Phase 1: Golden Day 12 (Fixed Cadence)
- **Strategy**: Fixed timing approach - every customer gets perks email on day 12 post-purchase
- **Performance**:
  - 3-month cohort: 11% churn reduction
  - 6-month cohort: 7% churn reduction
  - 11-month cohort: 2.9% churn reduction
- **Key Insight**: Effectiveness decreases with customer tenure

### Phase 2: PERKS_BLAST (Fresh Content)
- **Strategy Shift**: Quarterly fresh content blasts instead of fixed cadence
- **Performance**: 11% initial churn reduction, sustained 2.94% reduction
- **Key Insight**: Fresh perk announcements > perfect timing in customer journey

### Phase 3: Current State (Everyone Gets Blasts)
- **Strategy**: Roll out to all customers based on PERKS_BLAST success
- **Performance**: 4.5% churn reduction (down from 11% initial PERKS_BLAST result)
- **Challenge**: Lost measurement capability - no control groups
- **Constraint**: Quarterly cadence limited by partner pipeline (Sales team capacity)

## Strategic Insights Learned

### Fresh Content > Timing
- PERKS_BLAST (quarterly fresh content) outperformed Golden Day 12 (fixed timing)
- Customers respond better to "new exciting perks available" than "here are your existing perks"

### 3-6 Month Sweet Spot Discovery
- Multi-cohort retention test revealed 8% churn reduction for 3-6 month customers
- Current strategy targets this cohort specifically for retention efforts

### Partner Pipeline Bottleneck
- Limited to quarterly blasts due to partner deal acquisition rate
- Sales team bandwidth constrains fresh content generation
- Currently unable to execute planned fall blast due to insufficient new perks

## Current Measurement Gaps

### Lost Control Groups
- All customers now receive PERKS_BLAST
- Cannot measure current blast effectiveness vs. control
- Flying blind on optimization opportunities

### Missing Cohort Optimization
- No testing of optimal timing within 3-6 month window
- Unknown if broader targeting would be more effective than narrow cohort focus

### Partner Performance Unknown
- Except for Fi data, no visibility into actual perk usage rates
- Cannot optimize partner mix based on engagement data

## Infrastructure & Capabilities

### Email/SMS Platform
- **Customer.io** for both email and SMS campaigns
- **Segmentation available** by tenure, pet type, plan level, engagement
- **A/B testing cycles**: ~2 weeks for statistical confidence

### Development Resources
- **Quote form changes**: 1 month average (design + development)
- **Small changes** (badges): Few days
- **Large changes**: 2-3 months

### Analytics Tools
- **Datadog, Tableau, Statsig** for performance tracking
- **Builder.io** for A/B testing
- **Customer.io & Segment** for customer journey analytics
- **Resonate** for customer psychographic insights

## Strategic Recommendations

### Immediate Actions Needed
1. Re-establish control groups for measurement
2. Address partner pipeline constraint
3. Test broader vs. narrow cohort targeting

### Long-term Strategy
1. Accept low usage rates as normal for perception-based benefits program
2. Focus on conversion optimization over usage activation
3. Maintain retention insurance value through strategic deployment timing