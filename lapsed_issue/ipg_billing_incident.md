# IPG Billing Incident - Lapsed Customer Issue

## Executive Summary

Critical billing failure by underwriter IPG caused incorrect lapsed status assignments, resulting in faulty lapsed communications being sent to customers who had actually paid their premiums. These scare-tactic focused communications led to significant policy cancellations.

**Total Impact:**
- **$6.4 million GWP** at risk across cancelled and currently lapsed customers
- **11,398 pets** incorrectly cancelled
- **3,696 pets** currently in lapsed status who paid something
- Brand damage from incorrect threatening communications

---

## Root Cause

**IPG Underwriter Billing System Failure:**
- IPG's billing system incorrectly flagged customers as "lapsed" despite receiving payments
- Customers who paid their exact monthly premium were marked as lapsed
- Customers who made partial payments were also affected
- System failed to properly reconcile payments against premium amounts

**Communication Failure:**
- Spot's automated lapsed communication system triggered based on IPG's faulty data
- Customers received threatening "policy about to be cancelled" messages
- Many customers cancelled in response to what they perceived as billing errors or poor service

---

## Affected Customer Segments

### Segment 1: Cancelled Customers Who Paid Exact Monthly Premium
- **Count:** 4,708 pets
- **GWP Lost:** $2,878,319.64
- **Status:** NOW CANCELLED
- **Behavior:** Paid their exact monthly premium → Incorrectly marked lapsed → Received lapsed comms → Cancelled policy
- **Recovery Opportunity:** HIGH - These customers did nothing wrong and may be recoverable with apology + reinstatement offer

### Segment 2: Currently Lapsed Who Paid Exact Monthly Premium
- **Count:** 1,712 pets
- **GWP at Risk:** $1,076,512.32
- **Status:** CURRENTLY LAPSED
- **Behavior:** Paid their exact monthly premium → Incorrectly marked lapsed → Still receiving lapsed comms
- **Recovery Opportunity:** CRITICAL - Need immediate intervention to prevent cancellation

### Segment 3: Active Customers Who Survived Lapsed Period
- **Count:** 2,475 pets
- **GWP Retained:** $1,629,734.80
- **Status:** CURRENTLY ACTIVE
- **Behavior:** Paid exact monthly premium → Incorrectly marked lapsed → Received comms → Eventually "trued up" balance → Remained active
- **Notes:** These customers may have made additional payments to resolve what they thought was a legitimate issue, or IPG eventually corrected their status. They represent GWP that was at risk but is now retained, though they may be flight risks.
- **Retention Risk:** MODERATE - May harbor resentment about the experience and could still churn

### Segment 4: Partial Payment - Currently Lapsed (EXPANDED DEFINITION)
- **Count:** 3,696 pets
- **GWP Impact:** Included in $6.4M total
- **Status:** CURRENTLY LAPSED
- **Behavior:** Paid something (partial payment) → Remained lapsed
- **Example:** Pet with $600 premium, only $88 collected
- **Notes:** NOT included in Segment 1-3 calculations above

### Segment 5: Partial Payment - Cancelled (EXPANDED DEFINITION)
- **Count:** 11,398 pets
- **GWP Impact:** $6.4 million TOTAL (Segments 4 + 5 combined)
- **Status:** CANCELLED
- **Behavior:** Paid something (partial payment) → Remained lapsed → Cancelled
- **Notes:** This is the full scope when including ANY payment activity

---

## Data Discrepancies with IPG

### Why Our Numbers Don't Match IPG's Report:

1. **Missing October Premium Data**
   - Our analysis lacks complete October premium payment information
   - IPG may have more recent data that we haven't received

2. **Potential IPG Over-Filtering**
   - IPG may be applying additional filters or exclusion criteria
   - Their methodology for identifying affected customers may differ

3. **Partial Payment Inclusion/Exclusion**
   - Our "exact premium" segments (1-3) only count customers who paid their full monthly amount
   - Expanded view including partial payments dramatically increases scope (11,398 cancelled pets vs. 4,721)

---

## Financial Impact Summary

### Exact Premium Payment Cohort (Confirmed Data):
- **GWP Lost (Cancelled):** 4,708 pets at $2,878,319.64
- **GWP at Risk (Currently Lapsed):** 1,712 pets at $1,076,512.32
- **GWP Retained (Active but affected):** 2,475 pets at $1,629,734.80
- **TOTAL EXACT PREMIUM COHORT:** 8,895 pets at $5,584,566.76 GWP
  - Lost + At Risk: $3,954,831.96 (needs recovery action)
  - Retained but at flight risk: $1,629,734.80 (needs retention focus)

### Full Scope (Including Partial Payments):
- **Cancelled:** 11,398 pets (partial of $6.4M)
- **At Risk (Currently Lapsed):** 3,696 pets (partial of $6.4M)
- **TOTAL:** $6.4M GWP

### Customer Lifetime Value Impact:
Assuming average policy retention of 3+ years, actual LTV impact could be **$12-19M+** depending on recovery success.

---

## Communication Issue Details

### Lapsed Communication Strategy (Pre-Incident):
- **Tone:** Scare-tactic focused
- **Message:** "Your policy is about to be cancelled"
- **Intent:** Create urgency to drive payment
- **Problem:** Sent to customers who HAD ALREADY PAID

### Customer Experience:
1. Customer pays monthly premium on time
2. IPG system fails to record payment properly
3. Customer receives threatening "about to cancel" communication
4. Customer becomes frustrated/confused
5. Customer either:
   - Calls customer service (capacity strain)
   - Makes duplicate payment (overpayment issues)
   - Cancels policy in frustration
   - Ignores communication, eventually gets cancelled

### Brand Impact:
- Trust erosion with good-paying customers
- Negative word-of-mouth risk
- Potential regulatory scrutiny (incorrect billing practices)
- Customer service volume spike

---

## Action Items & Next Steps

### Immediate (Stop the Bleeding):
- [ ] Immediately suppress lapsed communications for Segment 2 (1,712 currently lapsed who paid)
- [ ] Audit Segment 3 (2,475 active) for overpayments that need refund
- [ ] Escalate to IPG for complete data reconciliation
- [ ] Legal review of potential customer remediation obligations

### Short-Term (Recovery):
- [ ] Design win-back campaign for Segment 1 (4,708 cancelled)
  - Apologize for system error
  - Offer reinstatement with premium guarantee
  - Waive any late fees or penalties
  - Consider goodwill credit (1 month free?)
- [ ] Proactive outreach to Segment 2 (1,712 lapsed)
  - Clarify their status
  - Prevent cancellation
  - Rebuild trust

### Medium-Term (Prevention):
- [ ] Implement billing reconciliation checks between IPG and Spot systems
- [ ] Add payment verification step before lapsed communications trigger
- [ ] Revise lapsed communication strategy (less scare-tactic, more helpful)
- [ ] Create manual review process for high-value accounts before auto-cancellation
- [ ] Add "if you recently paid, please disregard" language to lapsed comms

### Long-Term (Strategic):
- [ ] Evaluate IPG relationship and SLA compliance
- [ ] Consider alternative underwriters or in-house billing
- [ ] Build customer-facing payment dashboard for transparency
- [ ] Implement proactive billing alerts before lapsed status

---

## Questions Requiring Resolution

1. **October Data:** When will complete October premium data be available?
2. **IPG Accountability:** What is IPG's proposed remediation plan?
3. **Legal Exposure:** Are there regulatory reporting requirements for this billing error?
4. **Refund Analysis:** How many Segment 3 customers made duplicate payments requiring refund?
5. **Communication Timing:** When were lapsed comms sent to each segment (date ranges)?
6. **Recovery Budget:** What budget is available for win-back offers/credits?
7. **Root Cause Detail:** What specifically failed in IPG's billing system?
8. **Future Prevention:** What system changes will IPG implement to prevent recurrence?

---

## Document History

- **Created:** 2025-10-22
- **Last Updated:** 2025-10-22
- **Owner:** [To be assigned]
- **Status:** Active Incident - Investigation in Progress

---

## Related Files

- Customer segment lists (to be added)
- IPG communication logs (to be added)
- Lapsed communication templates (to be added)
- Recovery campaign strategy (to be developed)
