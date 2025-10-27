# Partial Payment Cohort Data

## Data Source
This data represents customers who **paid some amount (partial payment)** and remained in lapsed status due to IPG billing system error.

**Date Extracted:** [TBD]
**Data Source:** Spot internal billing reconciliation

---

## Raw Data Table

| Status    | Pets   | GWP            |
|-----------|--------|----------------|
| Lapsed    | 3,696  | $2,174,586.72  |
| Cancelled | 11,398 | $6,426,145.03  |
| Active    | 6,071  | $3,770,118.79  |
| **TOTAL** | **21,165** | **$12,370,850.54** |

---

## Combined Impact: Exact + Partial Payment Cohorts

### Total Affected Population

| Cohort | Lapsed | Cancelled | Active | Total Pets | Total GWP |
|--------|--------|-----------|--------|------------|-----------|
| **Exact Premium** | 1,712 | 4,708 | 2,475 | 8,895 | $5,584,566.76 |
| **Partial Payment** | 3,696 | 11,398 | 6,071 | 21,165 | $12,370,850.54 |
| **TOTAL** | **5,408** | **16,106** | **8,546** | **30,060** | **$17,955,417.30** |

### GWP Breakdown by Status

| Status | Exact Premium | Partial Payment | Combined Total |
|--------|---------------|-----------------|----------------|
| **Lapsed (At Risk)** | $1,076,512.32 | $2,174,586.72 | **$3,251,099.04** |
| **Cancelled (Lost)** | $2,878,319.64 | $6,426,145.03 | **$9,304,464.67** |
| **Active (Retained)** | $1,629,734.80 | $3,770,118.79 | **$5,399,853.59** |
| **TOTAL** | $5,584,566.76 | $12,370,850.54 | **$17,955,417.30** |

---

## Key Insights

### 1. Partial Payment Cohort is 2.4x Larger
- **Partial Payment:** 21,165 pets (70% of total affected)
- **Exact Premium:** 8,895 pets (30% of total affected)
- **Implication:** The majority of affected customers made some payment but were still marked lapsed

### 2. Financial Impact is Massive
- **Total GWP Affected:** $17.96M (nearly $18M)
- **GWP Lost (Cancelled):** $9.30M
- **GWP at Risk (Lapsed):** $3.25M
- **GWP Retained (Active):** $5.40M
- **Lost + At Risk:** $12.56M (70% of total affected GWP)

### 3. Cancellation Rates by Cohort
- **Exact Premium:** 53% cancelled (4,708 / 8,895)
- **Partial Payment:** 54% cancelled (11,398 / 21,165)
- **Overall:** 54% cancelled (16,106 / 30,060)

### 4. Active Customer Mystery
- **6,071 partial payment customers are currently active**
- Questions:
  - Did they pay up their full balance?
  - Are they still underpaid but marked active?
  - How did they resolve their "lapsed" status?
  - Are they at higher flight risk?

### 5. Average Monthly Premium
- **Partial Payment Cohort:** $12,370,850.54 / 21,165 = **$584/month**
- **Exact Premium Cohort:** $5,584,566.76 / 8,895 = **$628/month**
- **Interpretation:** Partial payment cohort has slightly lower AOV

---

## Data Quality Questions

### What Constitutes "Partial Payment"?
- Is it any payment from 1-99% of monthly premium?
- What's the distribution? (e.g., most paid 75-99% vs. most paid <50%)
- Example provided earlier: $600 premium, $88 paid (14.7%)
- **Need:** Payment percentage distribution to segment Tier 1/2/3

### Active Status Interpretation
- How are 6,071 partial payment customers "Active"?
- Did they:
  - Pay up their balance after being marked lapsed?
  - Get corrected by IPG system eventually?
  - Make duplicate payments to clear perceived debt?
- Are they owed refunds like the exact premium Active cohort?

### Timeline
- When did IPG billing error begin?
- When was it discovered?
- When did affected customers receive lapsed communications?
- How long were they in lapsed status before cancelling?

---

## Recovery Opportunity

### Immediate Save (Lapsed Segment)
**Total at Risk:** 5,408 pets, $3.25M GWP

**Conservative (75% retention):**
- Exact Premium: 1,284 pets, $807K
- Partial Payment Tier 1 (75-99% paid): Estimate 1,000 pets, $550K
- **Total:** ~$1.36M GWP saved

**Optimistic (90% retention):**
- Exact Premium: 1,541 pets, $969K
- Partial Payment Tier 1: Estimate 1,200 pets, $660K
- **Total:** ~$1.63M GWP saved

### Win-Back (Cancelled Segment)
**Total Lost:** 16,106 pets, $9.30M GWP

**Conservative (15% win-back):**
- Exact Premium: 706 pets, $432K
- Partial Payment (selective): Estimate 800 pets, $350K
- **Total:** ~$782K GWP recovered

**Optimistic (25% win-back on exact, 15% on partial):**
- Exact Premium: 1,177 pets, $720K
- Partial Payment: Estimate 1,200 pets, $525K
- **Total:** ~$1.25M GWP recovered

### Total Recovery Potential
- **Conservative:** $1.36M (save) + $782K (win-back) = **$2.14M GWP**
- **Optimistic:** $1.63M (save) + $1.25M (win-back) = **$2.88M GWP**
- **LTV Impact (3-year):** $6.4M - $8.6M

---

## Recommendations

### 1. Segment Partial Payment Cohort by Payment %
- **Tier 1 (75-99% paid):** Treat like exact premium - likely billing error
- **Tier 2 (50-74% paid):** Case-by-case review - possible confusion
- **Tier 3 (<50% paid):** May be legitimately lapsed - standard win-back

### 2. Prioritize Exact Premium Cohort First
- Clearest case of IPG error (they paid in full)
- Higher average premium ($628 vs $584)
- Smaller, more manageable cohort (8,895 vs 21,165)
- Stronger legal/customer service case

### 3. Investigate Active Cohort (8,546 total)
- Audit for overpayments and issue refunds
- Understand resolution pathway
- Monitor for elevated churn risk
- Potential goodwill gesture to prevent future cancellations

### 4. Escalate to IPG
- Demand root cause analysis
- Request remediation plan
- Discuss financial accountability
- Implement prevention measures

---

**Document Created:** 2025-10-22
**Last Updated:** 2025-10-22
**Data Freshness:** [TBD - confirm extraction date]
