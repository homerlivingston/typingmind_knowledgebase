# IPG Billing System Failure: Impact Assessment & Path Forward

**Prepared for:** Leadership Team
**Date:** October 2025
**Status:** URGENT - Decision Required

---

## Slide 1: Executive Summary

### The Problem
IPG's billing system has been incorrectly flagging paying customers as "lapsed," triggering threatening cancellation communications to customers who paid their premiums.

### The Context
IPG implemented a fix for this billing reconciliation issue across other brands in their portfolio in February 2025. This fix has not yet been applied to Spot's billing system.

### The Impact
- **30,060 pets** affected (customers who paid but were marked lapsed)
- **$17.96 million GWP** at risk or lost
- **16,106 policies cancelled** (54% cancellation rate)
- High-value, long-tenured customers receiving "we will cancel your policy" threats despite years of on-time payments

### Decision Needed
Leadership must choose one of three options to address affected customers.

---

## Slide 2: What's Happening

### IPG Billing System Error

**The Defect:**
- IPG's payment reconciliation system fails to properly record customer payments
- Customers pay their monthly premium (full or partial)
- IPG system marks account as "lapsed" despite payment received
- Spot's automated lapsed communication system triggers based on IPG's faulty data

**The Customer Experience:**
1. Customer pays monthly premium (as they have for months/years)
2. IPG fails to record payment correctly
3. Customer receives threatening communication: "Your policy is about to be cancelled"
4. Customer becomes confused, frustrated, or cancels policy entirely

**Duration:**
This has been happening indefinitely. There are customers with triple-digit monthly premiums who have been with Spot for years receiving faulty cancellation threats.

---

## Slide 3: The Billing System Issue

### Root Cause: IPG Payment Reconciliation System

**The Issue:**
IPG's billing system has a defect in its payment reconciliation logic that fails to properly match customer payments to premium amounts, resulting in incorrect lapsed status assignments.

**Timeline:**
- **February 2025:** IPG deployed a fix for this reconciliation issue to other brands in their portfolio
- **Current State:** Spot's billing system continues to operate on the prior logic, resulting in ongoing incorrect lapsed flagging

### Key Point

This is a **billing system defect**, not a Spot operational or communication issue. Our systems are functioning as designed based on the lapsed status data provided by IPG.

---

## Slide 4: Scale of the Problem

### Total Affected Population: 30,060 Pets

| Payment Type | Pets | % of Total | GWP |
|-------------|------|------------|-----|
| **Paid Exact Premium** | 8,895 | 30% | $5,584,566.76 |
| **Paid Partial Premium** | 21,165 | 70% | $12,370,850.54 |
| **TOTAL** | **30,060** | 100% | **$17,955,417.30** |

### Context
- Represents customers who made payment (full or partial) but remained in lapsed status
- Does NOT include legitimately lapsed customers
- All 30,060 received threatening lapsed communications despite paying

---

## Slide 5: Customer Status Breakdown

### Where Are These 30,060 Customers Today?

| Current Status | Pets | GWP | Interpretation |
|---------------|------|-----|----------------|
| **Cancelled** | 16,106 (54%) | $9,304,464.67 | Cancelled policy after receiving faulty lapsed comms |
| **Lapsed** | 5,408 (18%) | $3,251,099.04 | Currently in lapsed status, at risk of cancellation |
| **Active** | 8,546 (28%) | $5,399,853.59 | Figured out the issue and settled balances themselves |
| **TOTAL** | **30,060** | **$17,955,417.30** | |

### Key Insight
**$12.56M GWP** is either lost (cancelled) or at immediate risk (lapsed) = **70% of affected GWP**

---

## Slide 6: Who's Affected

### Customer Profile: Our Best Customers

**High-Value, Long-Tenured Policyholders:**
- Customers with **triple-digit monthly premiums** ($100-$600+)
- Long-standing relationships (multiple years with Spot)
- Consistent payment history
- High lifetime value

**Average Monthly Premium:**
- Exact Premium cohort: **$628/month**
- Partial Payment cohort: **$584/month**
- Overall: **$598/month average**

### The Injustice
These are customers who have paid Spot reliably for years, now receiving threatening "we will cancel your policy" communications despite being current on payments.

---

## Slide 7: The Current State

### What's Happening Right Now

**5,408 customers** are currently marked "lapsed" despite having paid:
- Receiving automated threatening communications
- Being told their policy will be cancelled
- Confused about why they're in collections when they paid
- At risk of cancelling in frustration

**Example Scenario:**
- Customer has $150/month premium
- Been with Spot for 3 years
- Paid $150 on October 1st
- IPG fails to record payment
- October 15th: "Your policy will be cancelled in 5 days if you don't pay"
- Customer calls confused, frustrated, or simply cancels

**16,106 customers** already cancelled due to this issue.

**8,546 customers** figured it out themselves and paid additional amounts to settle what they thought they owed (potential overpayments requiring refund analysis).

---

## Slide 8: Option 1 - Forgive Outstanding Balances

### Approach: Write Off What They "Owe"

**What We Do:**
- Mark all affected accounts as "paid in full"
- Stop all lapsed communications immediately
- Clear any outstanding balance discrepancies in IPG's system
- No communication to customers (silent resolution)

**Pros:**
- Immediate resolution, no customer contact needed
- Avoids admitting fault or explaining complex billing error
- Prevents further brand damage from threatening comms
- Simplest technical implementation

**Cons:**
- **Revenue impact:** Forgoes collection of legitimately owed amounts
- Sets precedent for writing off payment discrepancies
- Doesn't address 16,106 already-cancelled customers
- Doesn't recover overpayments for 8,546 active customers who settled on their own

**Financial Impact:**
- Lost revenue: Depends on true amounts owed (needs reconciliation analysis)
- Retained GWP: $3.25M (lapsed segment stays active)

---

## Slide 9: Option 2 - Collect Silently

### Approach: Charge Double Next Month Without Explanation

**What We Do:**
- Next billing cycle, charge customers for current month + outstanding balance
- No communication about the additional charge
- Continue normal operations as if nothing happened

**Pros:**
- Recovers revenue owed
- No need to explain IPG's failure
- No admission of billing error or communication mistakes
- Simplest from communication standpoint

**Cons:**
- **Massive brand risk:** Customers see unexplained double charges on credit cards
- Likely to trigger:
  - Chargebacks and disputes
  - Customer service call volume spike
  - Negative social media and reviews
  - Additional cancellations from angry customers
- Does nothing for 16,106 already-cancelled customers
- Doesn't address overpayment refunds for 8,546 active customers
- **Legal/regulatory risk:** Charging without notice may violate consumer protection laws

**Financial Impact:**
- Revenue recovered: Unknown (depends on amounts owed)
- Potential losses: Chargebacks, cancellations, legal fees, brand damage

---

## Slide 10: Option 3 - Transparency & Request Payment

### Approach: Explain What Happened, Ask Customers to Pay Balance

**What We Do:**
- Communicate directly with affected customers
- Explain IPG's billing system error and timeline
- Show payment history and actual amounts owed
- Request payment of outstanding balance with payment plan options
- Offer apology for confusion and threatening communications
- Provide overpayment refunds to 8,546 active customers who over-settled

**Pros:**
- Honest, transparent approach
- Opportunity to rebuild trust with affected customers
- Can offer payment plans or incentives for reinstatement
- Addresses all three cohorts (lapsed, cancelled, active)
- Recovers revenue while maintaining customer relationships
- Demonstrates accountability and customer-first values

**Cons:**
- Requires significant communication effort (30,060 customers)
- Complex messaging (explaining IPG failure without blaming IPG publicly)
- May not recover 100% of owed amounts (some will refuse/cancel)
- Customer service volume spike
- Time-intensive implementation

**Financial Impact:**
- Revenue recovered: 60-80% of owed amounts (estimated)
- Potential saves: $1.6M-$2.4M GWP from lapsed segment
- Potential win-backs: $800K-$1.2M GWP from cancelled segment
- Refunds owed: Unknown until overpayment audit complete

---

## Recommendation Framework

### Decision Criteria

Leadership should evaluate options based on:

1. **Financial Recovery:** How much GWP can we save/recover?
2. **Brand Impact:** What's the customer experience and trust outcome?
3. **Legal/Regulatory Risk:** What's our exposure?
4. **IPG Accountability:** How do we ensure this doesn't happen again?
5. **Operational Feasibility:** Can we execute this effectively?

### Next Steps

**Immediate (Regardless of Option Chosen):**
1. Stop all lapsed communications to affected 5,408 customers (prevent further cancellations)
2. Complete payment reconciliation analysis (determine true amounts owed)
3. Audit 8,546 active customers for overpayments
4. Coordinate with IPG to implement the billing system fix deployed to other brands

**Post-Decision:**
- Execute chosen option
- Implement billing verification layer between IPG data and Spot communications
- Revise lapsed communication strategy (less threatening, more helpful)
- Establish ongoing reconciliation checks to prevent future occurrences

---

**END OF DECK**

---

## Appendix: Data Summary

### Exact Premium Cohort (Paid 100% of Monthly Premium)
| Status | Pets | GWP |
|--------|------|-----|
| Lapsed | 1,712 | $1,076,512.32 |
| Cancelled | 4,708 | $2,878,319.64 |
| Active | 2,475 | $1,629,734.80 |
| **Total** | **8,895** | **$5,584,566.76** |

### Partial Payment Cohort (Paid <100% of Monthly Premium)
| Status | Pets | GWP |
|--------|------|-----|
| Lapsed | 3,696 | $2,174,586.72 |
| Cancelled | 11,398 | $6,426,145.03 |
| Active | 6,071 | $3,770,118.79 |
| **Total** | **21,165** | **$12,370,850.54** |

### Combined Total
| Status | Pets | GWP |
|--------|------|-----|
| Lapsed | 5,408 | $3,251,099.04 |
| Cancelled | 16,106 | $9,304,464.67 |
| Active | 8,546 | $5,399,853.59 |
| **Total** | **30,060** | **$17,955,417.30** |
