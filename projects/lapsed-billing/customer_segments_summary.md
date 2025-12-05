# Customer Segment Summary - IPG Billing Incident

## Quick Reference

| Segment | Count | GWP | Status | Priority |
|---------|-------|-----|--------|----------|
| **Cancelled - Paid Exact Premium** | 4,708 | $2,878,319.64 | Cancelled | HIGH - Win-back |
| **Lapsed - Paid Exact Premium** | 1,712 | $1,076,512.32 | Lapsed | CRITICAL - Prevent cancel |
| **Active - Previously Lapsed** | 2,475 | $1,629,734.80 | Active | MODERATE - Monitor retention |
| **Lapsed - Paid Partial** | 3,696 | (part of $6.4M) | Lapsed | MEDIUM - Needs analysis |
| **Cancelled - Paid Partial** | 11,398 | $6.4M total | Cancelled | MEDIUM - Selective win-back |

**Exact Premium Cohort Total:** 8,895 pets | $5,584,566.76 GWP

---

## Recovery Strategy by Segment

### CRITICAL: Segment 2 - Currently Lapsed (Paid Exact Premium)
**Count:** 1,712 pets | **GWP at Risk:** $1,076,512.32

**Immediate Actions:**
1. ✅ STOP all lapsed communications immediately
2. ✅ Manual review of payment history for each account
3. ✅ Proactive outreach: "We've identified a billing system error that may have affected your account"
4. ✅ Offer to reinstate with no penalties, lock current rate

**Communication Template Needed:**
- Acknowledge the error
- Apologize for confusion
- Clarify their true status
- Offer immediate resolution
- Provide direct support contact

---

### HIGH: Segment 1 - Cancelled (Paid Exact Premium)
**Count:** 4,708 pets | **GWP Lost:** $2,878,319.64

**Recovery Campaign:**
1. 📧 Email sequence (3-touch):
   - Email 1: Apology + explanation of billing error
   - Email 2: Reinstatement offer with incentive
   - Email 3: Final reminder (urgency)
2. 📞 Phone outreach for high-value accounts (AOV >$70)
3. 🎁 Reinstatement incentive options:
   - Option A: First month free upon reinstatement
   - Option B: Rate lock guarantee for 12 months
   - Option C: $50 account credit

**Success Metrics:**
- Target: 15-25% reinstatement rate (706-1,177 policies)
- GWP Recovery: $431.7K-$719.6K
- Timeline: 30-day campaign

---

### MODERATE: Segment 3 - Active (Previously Lapsed, Now Trued Up)
**Count:** 2,475 pets | **GWP Retained:** $1,629,734.80 | **Status:** Currently Active

**Retention Focus:**
1. 🔍 Audit for duplicate/excess payments → Issue refunds
2. 📋 Tag accounts for retention monitoring (flight risk)
3. 🎁 Consider goodwill gesture:
   - Proactive email: "Thank you for your patience during our recent billing system update"
   - Small account credit ($10-25) as apology
4. 📊 Track retention rates vs. general population

**Key Questions:**
- Did these customers overpay to "true up" their balance?
- How much should be refunded?
- What is their sentiment/NPS?
- Are they at higher churn risk than unaffected active customers?

---

### MEDIUM: Segments 4 & 5 - Partial Payment Customers
**Lapsed:** 3,696 pets | **Cancelled:** 11,398 pets | **Combined GWP:** $6.4M

**Analysis Needed:**
1. Define "partial payment" threshold
   - Example provided: $600 premium, $88 paid (14.7% of owed)
   - Where is the cutoff? 25%? 50%? 75%?
2. Segment by payment percentage:
   - Tier 1: Paid 75-99% of premium → Likely billing error
   - Tier 2: Paid 50-74% of premium → Possible billing confusion
   - Tier 3: Paid <50% of premium → May be legitimate non-payment
3. Determine legitimate lapsed vs. IPG error for each tier

**Selective Recovery:**
- Focus on Tier 1 (75-99% paid) with similar approach to Segment 1
- Tier 2 requires case-by-case review
- Tier 3 may be legitimately lapsed (standard win-back)

---

## Data Requirements

### Needed for Full Analysis:
- [ ] October 2024 premium payment data (currently missing)
- [ ] Payment transaction logs for all affected customers
- [ ] IPG's internal lapsed list for comparison
- [ ] Lapsed communication send dates and content for each customer
- [ ] Customer service call logs related to billing confusion
- [ ] Duplicate payment identification and amounts

### Needed for Recovery Campaigns:
- [ ] Email addresses and phone numbers for all segments
- [ ] Current customer status (active/lapsed/cancelled)
- [ ] Pet details (name, breed, age) for personalization
- [ ] Original policy start dates
- [ ] Historical AOV and payment history
- [ ] Previous communication preferences

---

## Financial Projections

### Conservative Recovery Scenario:
| Segment | Recovery Rate | Policies Recovered | GWP Recovered |
|---------|---------------|-------------------|---------------|
| Segment 1 (Cancelled) | 15% | 706 | $431,748 |
| Segment 2 (Lapsed) | 75% | 1,284 | $807,384 |
| **TOTAL** | | **1,990** | **$1,239,132** |

### Optimistic Recovery Scenario:
| Segment | Recovery Rate | Policies Recovered | GWP Recovered |
|---------|---------------|-------------------|---------------|
| Segment 1 (Cancelled) | 25% | 1,177 | $719,580 |
| Segment 2 (Lapsed) | 90% | 1,541 | $968,861 |
| Partial Payment Tier 1 | 20% | ~400 | $250,000 |
| **TOTAL** | | **3,118** | **$1,938,441** |

### Lifetime Value Impact:
Assuming 3-year average customer lifetime:
- **Conservative:** $3.72M LTV recovered
- **Optimistic:** $5.82M LTV recovered

### Maximum Addressable Impact (Exact Premium Cohort):
- **Total at Risk or Lost:** $3,954,831.96 (Segments 1 + 2)
- **Retained but Flight Risk:** $1,629,734.80 (Segment 3)
- **Total Exact Premium Cohort:** $5,584,566.76

---

## Timeline

### Week 1 (Immediate):
- Stop lapsed comms for Segment 2
- Data reconciliation with IPG
- Legal/compliance review
- Draft communication templates

### Week 2-3 (Launch Recovery):
- Launch Segment 2 proactive outreach
- Begin Segment 1 email campaign
- Audit Segment 3 for overpayments
- Analyze partial payment customers

### Week 4-6 (Execute):
- Continue win-back campaigns
- Phone outreach for high-value accounts
- Process reinstatements and refunds
- Monitor recovery metrics

### Week 8+ (Post-Mortem):
- Final recovery report
- IPG accountability discussion
- System improvements implementation
- Customer experience review

---

## Success Metrics

**Recovery KPIs:**
- Reinstatement rate (target: 15-25%)
- GWP recovered (target: $1.2M-$2.0M)
- Customer service CSAT for affected customers (target: >4.0/5.0)
- Negative social media mentions (target: <10)

**Prevention KPIs:**
- Time to detect future billing discrepancies (target: <24 hours)
- Percentage of payments verified before lapsed status (target: 100%)
- False-positive lapsed rate (target: <0.5%)

---

**Last Updated:** 2025-10-22
