# Hunt Campaigns - Pre-Purchase Quoter Nurturing

**Purpose:** Convert quoters to policyholders through multi-touch email and SMS sequences
**Trigger Event:** `quote_started`
**Campaign Type:** Two-stage approach (Transactional + Hunt)

---

## Campaign Structure

### Stage 1: Transactional Messages
**Trigger:** Immediate upon `quote_started` event
**Format:** Single message (email or SMS)
**Purpose:** Instant acknowledgment and engagement

### Stage 2: Hunt Campaigns
**Trigger:** Entry into multi-month nurture sequence
**Format:** Series of messages over several months
**Purpose:** Sustained engagement and conversion optimization

---

## Quoter Segmentation Hierarchy

Hunt campaigns segment quoters based on the following priority order:

```
1. Is Sam's Club quoter?
   └─> Sam's Club Campaigns (Email + SMS)

2. Has Microsoft email domain?
   └─> MSN Campaigns (Email) + Direct Campaigns (SMS)

3. Has API Partner pcode?
   └─> API Partner Campaigns (Email + SMS)

4. Default
   └─> Direct Campaigns (Email + SMS)
```

---

## 1. Sam's Club Quoters

**Identification:** Segment ID 279 "Sam's Club PCode"
- **Segment Size:** 20,649 quoters
- **Criteria:** `pcode` = "SPOT_SAMSCLUB"
- **Application Method:** Auto-applied at checkout via designated Quote Form, or manually by reps for TFN enrollments

**Unique Characteristics:**
- Partnership with Sam's Club
- 15% discount offering
- Dedicated messaging for Sam's Club members
- Priority code system (SPOT_SAMSCLUB for new quotes, SPOT_SAMSCLUB2 for existing customer discounts)

### Sam's Club Campaigns (All Running)

#### Transactional
| Channel | Campaign ID | Name | Trigger |
|---------|-------------|------|---------|
| Email | 215 | [Transactional] Sam's Club Email | quote_started |
| SMS | 221 | [Transactional] Sam's SMS V2 | quote_started |

#### Hunt
| Channel | Campaign ID | Name | Duration |
|---------|-------------|------|----------|
| Email | 218 | [Email] Sam's Hunt Journey V2 | Multi-month |
| SMS | 223 | [SMS] Sam's V2 Hunt | Multi-month |

**QA Status:**
- Email: Nathalie QA Pass 6/18/25
- SMS: Natalie QA Pass 6/18/25

**Hunt Journey Details (Campaign 218):**
- **Duration:** ~58+ days
- **Email Count:** 14 messages
- **Features:** A/B testing, conditional waits, purchase detection auto-exit
- **Send Times:** 8:15 AM - 11:00 PM (customer timezone preferred)
- **Tags:** Hunt, Emails, Sam's Club

---

## 2. MSN/Microsoft Quoters

**Identification:** Segment ID 32 "MSN Domain"
- **Segment Size:** 104,601 quoters
- **Criteria:** Email domain matching 5 Microsoft providers (outlook.com, hotmail.com, live.com, msn.com, etc.)

**Unique Characteristics:**
- Separate email campaigns (transactional + hunt)
- Uses **Direct SMS campaigns** for both transactional and hunt (shared with Direct quoters)
- Distinct messaging for Microsoft-affiliated users

### MSN Campaigns

#### Email Campaigns (Running)
| Type | Campaign ID | Name | Trigger/Duration |
|------|-------------|------|------------------|
| Transactional | 104 | [Transactional] MSN Hunt Email 0 | quote_started |
| Hunt | 28 | [Email] US MSN Hunt 6.0.2 | Multi-month |

#### SMS Campaigns

**Transactional SMS:**
- Campaign ID 69: `[Transactional] Microsoft SMS` (Running)
- **Note:** MSN quoters have a dedicated transactional SMS (not shared with Direct)

**Hunt SMS:**
- Uses Direct SMS: Campaign ID 25 (Direct Quoter Hunt SMS)
- **Note:** MSN quoters share the Direct Hunt SMS campaign

---

## 3. API Partner Quoters

**Identification:** Segment ID 37 "API Partner"
- **Segment Size:** 777,378 quoters (LARGEST SEGMENT)
- **Criteria:** `pcode` matches one of 14 API partner codes
- **Known Partners:** Forbes, WAG, and 12 other comparison/affiliate platforms

**Unique Characteristics:**
- Partners include Forbes, WAG, and other comparison platforms
- Quoters are actively comparing multiple pet insurers
- Distinct messaging strategy due to competitive shopping behavior
- Separate campaigns for both email and SMS
- Largest volume segment

**Segment Characteristics:**
- Largest volume segment (56.8% of total quote volume)
- Quoters from comparison/affiliate platforms actively shopping multiple insurers
- Requires distinct messaging strategy due to competitive environment

### API Partner Campaigns (All Running)

#### Transactional
| Channel | Campaign ID | Name | Trigger |
|---------|-------------|------|---------|
| Email | 99 | [Transactional] API Partner Email 0 | quote_started |
| SMS | 97 | [Transactional] API Partner Quoter SMS 0 | quote_started |

#### Hunt
| Channel | Campaign ID | Name | Duration |
|---------|-------------|------|----------|
| Email | 67 | [Email] API Partner Hunt 1.3 | Multi-month |
| SMS | 26 | [SMS] API Partner Hunt | Multi-month |

**Known API Partners:**
- Forbes
- WAG (Wag Walking)
- [Others via pcode]

---

## 4. Direct Quoters (Default)

**Identification:** All quoters not matching Sam's Club, MSN, or API Partner criteria

**Unique Characteristics:**
- Organic traffic and other acquisition sources
- Highest conversion performance
- Default campaign path

**Segment Characteristics:**
- Organic traffic and other acquisition sources
- Default campaign path for quoters not matching other segments

### Direct Campaigns (All Running)

#### Transactional
| Channel | Campaign ID | Name | Trigger |
|---------|-------------|------|---------|
| Email | 98 | [Transactional] Direct Quoter Email 0 | quote_started |
| SMS | 96 | [Transactional] Direct Quoter SMS 0 | quote_started |

#### Hunt
| Channel | Campaign ID | Name | Version | Duration |
|---------|-------------|------|---------|----------|
| Email | 12 | [Email] US Direct Quoter Hunt - 6.0.7 | 6.0.7 | Multi-month |
| SMS | 25 | [SMS] US Direct Quoter - Hunt 6.0.7 | 6.0.7 | Multi-month |

**Version Notes:**
- Version 6.0.7 indicates active iteration and optimization
- Backup copy exists (Campaign ID 235, Draft) for Design Studio migration

---

## Campaign Logic Flow

```
quote_started event triggers
    ↓
Check quoter segments (priority order):
    ↓
1. In Segment 279 (Sam's Club PCode)?
   └─ pcode = "SPOT_SAMSCLUB"
   ├─ YES → Sam's Transactional (Email: 215, SMS: 221)
   │         → Sam's Hunt (Email: 218 [~58 days], SMS: 223)
   │
2. In Segment 32 (MSN Domain)?
   └─ Email domain matches Microsoft providers (5 conditions)
   ├─ YES → MSN Transactional (Email: 104, SMS: 69)
   │         → MSN Hunt (Email: 28, SMS: 25 [uses Direct])
   │
3. In Segment 37 (API Partner)?
   └─ pcode matches one of 14 API partner codes
   ├─ YES → API Transactional (Email: 99, SMS: 97)
   │         → API Hunt (Email: 67, SMS: 26)
   │         [Largest volume: 777K quoters]
   │
4. Default (Direct)
   └─ All other quoters
       └─ Direct Transactional (Email: 98, SMS: 96)
          → Direct Hunt (Email: 12, SMS: 25)
```

---

## Other Running Hunt-Related Campaigns

### Add-A-Pet Hunt
| Campaign ID | Name | Purpose |
|-------------|------|---------|
| 264 | Add-A-Pet Hunt | Multi-pet household targeting |

**Context:**
- Targets existing customers or quoters for additional pet policies
- AOV growth opportunity (multi-pet households)
- Separate from standard quote_started flow

---

## Canada Market (Excluded from Above Hierarchy)

Canada quoters have completely separate campaigns:

### Canada Campaigns (All Running)

#### Transactional
| Channel | Campaign ID | Name | Trigger |
|---------|-------------|------|---------|
| Email | 169 | [Transactional] Canada Email 0 | quote_started (Canada) |
| SMS | 170 | [Transactional] Canada SMS 0 | quote_started (Canada) |

#### Hunt
| Channel | Campaign ID | Name | Duration |
|---------|-------------|------|----------|
| Email | 95 | [Email] Canada Hunt 1.2.6 | Multi-month |
| SMS | 94 | [SMS] CA Hunt 1.2.6 | Multi-month |

---

## Migration & Transition Notes

### Intercom Drainage Campaigns (Still Running - Temporary)
| Campaign ID | Name | Purpose |
|-------------|------|---------|
| 173 | [Temporary] Intercom SMS Hunt (Direct&API) Combo Draining | Move Direct & API quoters from Intercom |
| 178 | [Temporary] Intercom SMS Hunt (Direct&API) Combo Draining (First SMS ONLY) | Move Direct & API quoters from Intercom (first message only) |

**Status:** Temporary campaigns to transition quoters from Intercom to Customer.io
**Expected:** Should be deprecated once migration complete

---

## Key Engagement Metrics to Track

### By Quoter Segment
- Email delivery rates
- Email open rates
- Email click rates
- SMS delivery rates
- SMS click rates
- Journey completion rates
- Purchase conversion (tracked separately)
- Time to purchase
- Campaign engagement by message

### Campaign Health Metrics
- Unsubscribe rates
- Bounce rates
- Spam complaints
- Customer timezone distribution
- Message frequency by segment

---

## Segment Populations

| Segment | Segment ID | Count | Volume % | Notes |
|---------|-----------|-------|----------|-------|
| API Partner | 37 | 777,378 | 56.8% | 14 partner codes, comparison shoppers |
| MSN Domain | 32 | 104,601 | [TBD] | 5 Microsoft email domains |
| Sam's Club | 279 | 20,649 | Growing | pcode = SPOT_SAMSCLUB |
| Direct | N/A | [Balance] | ~43.2% | Default for all others |

**Total Quoters in Segments:** ~902,628 (with overlap possible)

---

## Questions for Further Investigation

1. **Version Numbers:** What does 6.0.7 signify in campaign names? (Major.Minor.Patch?)

2. **Intercom Drainage:** When will campaigns 173 and 178 be deprecated?

3. **Hunt Duration Comparison:** Do all Hunt journeys run ~58 days, or do they vary by segment?

4. **API Partner Breakdown:** Which of the 14 API partners drive the most volume? How should messaging differ?

5. **Message Frequency:** What's the optimal send frequency for each segment to balance engagement and unsubscribes?

6. **Segment Overlap:** Can a quoter be in multiple segments? How are conflicts resolved?

---

## Related Campaigns (Not Hunt, But Quote-Related)

These are running campaigns that may be relevant but don't fit the Hunt structure:

### Support Workflows
- None identified that are quote-specific

### Testing
- None currently running for Hunt campaigns

---

*This context file documents only RUNNING campaigns as of November 17, 2025. Draft, stopped, and archived campaigns are excluded.*

**Next Steps:**
1. Clarify questions above
2. Pull detailed campaign configurations for each
3. Analyze messaging differences between segments
4. Compare performance metrics across segments
5. Identify optimization opportunities for API Partner QTP
