# Exact Premium Cohort Data

## Data Source
This data represents customers who **paid their exact monthly premium** but remained in lapsed status due to IPG billing system error.

**Date Extracted:** [TBD]
**Data Source:** Spot internal billing reconciliation

---

## Raw Data Table

| Status    | Pets  | GWP           |
|-----------|-------|---------------|
| Lapsed    | 1,712 | $1,076,512.32 |
| Cancelled | 4,708 | $2,878,319.64 |
| Active    | 2,475 | $1,629,734.80 |
| **TOTAL** | **8,895** | **$5,584,566.76** |

---

## Data Interpretation

### GWP Categories:

**Lapsed ($1,076,512.32):**
- **Meaning:** GWP at risk
- **Status:** These customers are currently in lapsed status
- **Urgency:** CRITICAL - need immediate intervention to prevent cancellation
- **Action Required:** Stop lapsed communications, proactive outreach, status correction

**Cancelled ($2,878,319.64):**
- **Meaning:** GWP lost
- **Status:** These customers have already cancelled their policies
- **Urgency:** HIGH - recovery window closing
- **Action Required:** Win-back campaign with apology and reinstatement offer

**Active ($1,629,734.80):**
- **Meaning:** GWP retained (but at flight risk)
- **Status:** These customers are currently active despite being incorrectly marked lapsed
- **Urgency:** MODERATE - monitor for churn risk
- **Action Required:** Audit for overpayments, retention monitoring, goodwill gesture
- **Key Question:** Did these customers make duplicate payments to "true up" their balance?

---

## Key Insights

### 1. Customer Behavior Pattern
All 8,895 customers in this cohort:
1. ✅ Paid their exact monthly premium on time
2. ❌ Were incorrectly flagged as "lapsed" by IPG system
3. 📧 Received threatening lapsed communications from Spot
4. Then one of three outcomes:
   - **53% (4,708):** Cancelled policy in frustration
   - **19% (1,712):** Currently in lapsed status (confusion/inaction)
   - **28% (2,475):** Somehow "trued up" balance and remained active

### 2. Financial Impact
- **Lost + At Risk:** $3,954,831.96 (71% of total cohort GWP)
- **Retained:** $1,629,734.80 (29% of total cohort GWP)
- **Average Monthly Premium:**
  - Lapsed: $629/month
  - Cancelled: $611/month
  - Active: $659/month
  - Overall: $628/month

### 3. Recovery Opportunity
Based on cohort data:
- **Immediate save opportunity:** 1,712 lapsed pets ($1.08M GWP)
  - If 75% retained: 1,284 pets, $807K GWP saved
  - If 90% retained: 1,541 pets, $969K GWP saved

- **Win-back opportunity:** 4,708 cancelled pets ($2.88M GWP)
  - If 15% return: 706 pets, $432K GWP recovered
  - If 25% return: 1,177 pets, $720K GWP recovered

### 4. Data Quality Notes
- This data represents customers who paid **exact monthly premium only**
- Does NOT include partial payment customers (additional 15,094 pets)
- October 2024 premium data may be incomplete
- May differ from IPG's internal numbers due to:
  - Missing October data
  - Different filtering methodology
  - Timing of data extraction

---

## Segment Definitions

### Segment 1: Cancelled (4,708 pets)
- Paid exact premium → Marked lapsed → Received comms → Cancelled
- Represents **51.6%** of exact premium cohort
- **Highest priority for win-back campaign**

### Segment 2: Lapsed (1,712 pets)
- Paid exact premium → Marked lapsed → Still lapsed
- Represents **19.2%** of exact premium cohort
- **CRITICAL: Stop all lapsed comms immediately**

### Segment 3: Active (2,475 pets)
- Paid exact premium → Marked lapsed → Somehow resolved → Active
- Represents **27.8%** of exact premium cohort
- **Investigation needed:** How did they resolve? Did they overpay?

---

## Data Usage

This dataset should be used for:
1. ✅ Recovery campaign targeting (Segments 1 & 2)
2. ✅ Overpayment refund analysis (Segment 3)
3. ✅ IPG accountability discussions (proof of impact)
4. ✅ Financial impact reporting to leadership
5. ✅ Legal/compliance documentation

This dataset should NOT be used for:
1. ❌ Partial payment customer analysis (different cohort)
2. ❌ Normal lapsed/win-back benchmarking (these are not normal lapses)
3. ❌ Churn rate calculations (artificially inflated by system error)

---

## Next Data Needs

To complete the analysis, we need:
- [ ] October 2024 complete premium payment data
- [ ] Payment transaction logs for all 8,895 customers
- [ ] Lapsed communication send dates for each customer
- [ ] Customer service interaction logs (calls, emails about billing)
- [ ] Duplicate payment identification (for Segment 3)
- [ ] IPG's internal affected customer list for comparison
- [ ] Partial payment cohort breakdown (3,696 lapsed + 11,398 cancelled)

---

**Document Created:** 2025-10-22
**Last Updated:** 2025-10-22
**Data Freshness:** [TBD - confirm extraction date]
