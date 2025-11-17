# Segment Reference Guide - Customer.io

**Purpose:** Quick reference for all key segments used in Spot's customer.io campaigns
**Last Updated:** November 17, 2025

---

## Hunt Journey Segments (Priority Order)

These segments determine which Hunt campaign path a quoter follows after the `quote_started` event.

### 1. Sam's Club PCode (Segment 279)
**Population:** 20,649 quoters
**Filter Logic:** `pcode = "SPOT_SAMSCLUB"`

**Description:**
Auto-applied at checkout via designated Quote Form, or manually applied by reps for new TFN enrollments. Priority code for Sam's Club partnership discount.

**Note:** SPOT_SAMSCLUB2 is a separate code for existing customer discounts (membership verification required) and is NOT included in this segment.

**Campaigns Using This Segment:**
- Sam's Club Hunt Email (218)
- Sam's Club Hunt SMS (223)
- Sam's Club Transactional Email (215)
- Sam's Club Transactional SMS (221)

**Business Context:**
- 15% exclusive discount offering
- Strategic partnership with Sam's Club
- Growing segment (early stage)

---

### 2. MSN Domain (Segment 32)
**Population:** 104,601 quoters
**Filter Logic:** Email domain matches 5 Microsoft providers

**Description:**
Identifies quoters with Microsoft-affiliated email addresses (outlook.com, hotmail.com, live.com, msn.com, etc.)

**Campaigns Using This Segment:**
- MSN Hunt Email (28)
- MSN Transactional Email (104)
- MSN Transactional SMS (69) - Dedicated
- Direct Hunt SMS (25) - Shared with Direct quoters

**Business Context:**
- Dedicated email campaigns with distinct messaging
- Has own transactional SMS but shares Direct Hunt SMS
- Microsoft-affiliated user vertical

---

### 3. API Partner (Segment 37)
**Population:** 777,378 quoters (LARGEST)
**Filter Logic:** `pcode` matches one of 14 API partner codes

**Description:**
All API Partners including Forbes, WAG, and 12 other comparison/affiliate platforms. Provided by Joe.

**Known Partners:**
- Forbes
- WAG (Wag Walking)
- [12 additional partners via pcode]

**Campaigns Using This Segment:**
- API Partner Hunt Email (67)
- API Partner Hunt SMS (26)
- API Partner Transactional Email (99)
- API Partner Transactional SMS (97)

**Business Context:**
- 56.8% of total quote volume (largest channel)
- Comparison shoppers actively evaluating multiple insurers
- Requires competitive differentiation messaging
- 14 different partner codes (opportunity to analyze which perform best)

---

### 4. Direct (Default - No Segment)
**Population:** Balance of quoters (estimated ~43.2% of volume)
**Filter Logic:** All quoters NOT in Sam's Club, MSN, or API Partner segments

**Description:**
Default campaign path for all quoters not matching the above segments. Primarily organic traffic and other acquisition sources.

**Campaigns Using This Segment:**
- Direct Hunt Email (12)
- Direct Hunt SMS (25) - Also used by MSN quoters
- Direct Transactional Email (98)
- Direct Transactional SMS (96)

**Business Context:**
- Organic traffic and other sources
- Standard education-focused messaging
- Shared Hunt SMS with MSN quoters

---

## Golden Journey Segments

### Segment 35: Purchased in Past 24 Hours
**Purpose:** Auto-exit from Hunt campaigns
**Filter Logic:** Purchase detected within last 24 hours
**Usage:** Conditional branch in Hunt campaigns to prevent sending to new customers

---

## Lapsed Journey Segments

### [Additional lapsed-related segments to be documented]

---

## A/B Testing Segments

### Segment 304: [A/B Test Cohort]
**Purpose:** Sam's Hunt Email A/B test variant
**Campaign:** Sam's Hunt Journey V2 (218)
**Static Segment:** Added via StaticSegUpdate action (ID 4053)

### Segment 305: [A/B Test Cohort]
**Purpose:** Sam's Hunt Email A/B test variant
**Campaign:** Sam's Hunt Journey V2 (218)
**Static Segment:** Added via StaticSegUpdate action (ID 4052)

### Segment 441: [A/B Test Cohort]
**Purpose:** Plan Benefits email A/B test
**Campaign:** Sam's Hunt Journey V2 (218)
**Static Segment:** Added via StaticSegUpdate action (ID 5417)

### Segment 442: [A/B Test Cohort]
**Purpose:** Plan Benefits email A/B test (variant)
**Campaign:** Sam's Hunt Journey V2 (218)
**Static Segment:** Added via StaticSegUpdate action (ID 5418)

---

## Geographic Segments

### Canada Market
**Separate campaigns for Canadian quoters:**
- Canada Hunt Email (95)
- Canada Hunt SMS (94)
- Canada Transactional Email (169)
- Canada Transactional SMS (170)
- Canada Golden Journey (167, 168)

**Note:** Canada has completely separate journey infrastructure

---

## Protected Segments

These segments control critical business logic and should not be modified without thorough review:

### Policy-Active Requirement Campaigns
- Segment logic embedded in Campaigns 83 (Email) and 84 (SMS)
- Marked "DO NOT CHANGE"

### Final Lapsed Requirement Campaigns
- Segment logic embedded in Campaigns 155 (Email) and 156 (SMS)
- Marked "DO NOT CHANGE"

---

## Segment Hierarchy & Conflicts

### Priority Order for Hunt Campaigns
When a quoter matches multiple segment criteria, they are routed in this priority:

1. **Sam's Club PCode** (Segment 279) - Highest priority
2. **MSN Domain** (Segment 32)
3. **API Partner** (Segment 37)
4. **Direct** (Default) - Lowest priority

**Example Scenarios:**

**Scenario 1:** Quoter has `pcode = "SPOT_SAMSCLUB"` AND MSN email domain
- **Result:** Enters Sam's Club campaigns (higher priority)

**Scenario 2:** Quoter has API partner pcode AND outlook.com email
- **Result:** Enters API Partner campaigns (higher priority)

**Scenario 3:** Quoter has MSN email AND no pcode
- **Result:** Enters MSN email campaigns + Direct SMS campaigns

---

## Segment Populations Summary

| Segment | ID | Count | Volume % | Priority |
|---------|----|----|----------|----------|
| API Partner | 37 | 777,378 | 56.8% | 3rd |
| MSN Domain | 32 | 104,601 | [TBD] | 2nd |
| Sam's Club PCode | 279 | 20,649 | Growing | 1st (Highest) |
| Direct | N/A | [Balance] | ~43.2% | 4th (Default) |

**Total Across Segments:** ~902,628 quoters
**Note:** Possible overlap between segments; priority logic determines campaign routing

---

## Segment Best Practices

### When Creating New Segments

1. **Clear Naming:** Use descriptive names that indicate purpose
2. **Document Filters:** Clearly explain filter logic
3. **Tag Appropriately:** Use tags for easy searching
4. **Test Thoroughly:** Verify population counts and logic
5. **Monitor Changes:** Segment counts can change over time

### When Modifying Existing Segments

1. **Check Campaign Usage:** Identify all campaigns using the segment
2. **Impact Analysis:** Understand how changes affect campaigns
3. **Protected Segments:** Never modify "DO NOT CHANGE" campaign segments
4. **Version Control:** Consider creating new segment vs. modifying existing
5. **Communicate Changes:** Alert team to segment modifications

### Segment Maintenance

1. **Regular Audits:** Review segment populations quarterly
2. **Performance Analysis:** Track which segments engage/convert best
3. **Cleanup Unused:** Archive segments no longer in use
4. **Document Changes:** Log all modifications and reasons
5. **Optimization:** Refine filters based on behavioral insights

---

## Future Segment Opportunities

### Persona-Based Segments
Create segments based on psychographic/behavioral indicators:
- Experimental Fun Seeker indicators
- Open Simplicity Seeker indicators
- Organized Social Contributor indicators

### Behavioral Segments
- High-engagement quoters (opens/clicks)
- Multi-pet households
- Wellness plan interest
- Price-sensitive shoppers
- Fast decision makers vs. researchers

### Lifecycle Segments
- Days since quote
- Quote expiration approaching
- Abandoned cart (started but didn't finish quote)
- Previous customers (re-quote)

### Engagement Segments
- Email-preferred
- SMS-preferred
- Mobile app users
- Member portal users
- High unsubscribe risk

---

*This segment reference provides the foundation for targeted, relevant customer communications across all journey stages.*
