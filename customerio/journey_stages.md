# Customer Journey Stages - Spot Pet Insurance

**Purpose:** Framework for organizing customer communications across lifecycle stages
**Last Updated:** November 17, 2025

---

## Journey Stage Overview

Spot's customer.io implementation organizes campaigns into distinct lifecycle stages, each with specific communication objectives and journey structures.

```
Quote Started → Hunt Journey → Purchase → Golden Journey → Active Policy → Renewal
                                    ↓
                              Payment Failed → Lapsed Journey → Recovery or Cancellation
                                                                        ↓
                                                               Canceled Journey (Win-back)
```

---

## 1. Pre-Purchase: Hunt Journey

**Entry Event:** `quote_started`
**Objective:** Convert quoters to policyholders through education and engagement
**Duration:** ~58+ days (varies by segment)

### Journey Characteristics
- **Multi-touch nurture sequence** via email and SMS
- **Transactional messages** (immediate) + **Hunt campaigns** (ongoing)
- **Segment-specific messaging** based on quoter source
- **Purchase detection** with auto-exit when policy is purchased
- **Time-windowed sends** (8:15 AM - 11:00 PM in customer timezone)

### Quoter Segments
1. **Sam's Club** (20.6K) - Partnership discount messaging
2. **MSN/Microsoft** (104.6K) - Microsoft-affiliated users
3. **API Partners** (777K) - Comparison shoppers, competitive messaging
4. **Direct** (Balance) - Organic traffic, standard messaging

### Message Themes
- Policy benefits and coverage education
- Pre-existing condition explanations
- Wellness plan value propositions
- Quote reminders
- Sample policy documents
- Vet bill examples
- Hereditary coverage details
- Plan comparison guides

---

## 2. Post-Purchase: Golden Journey

**Entry Event:** Policy activation
**Objective:** Onboarding, education, and engagement for active policyholders
**Duration:** Ongoing with milestone-based messages

### Journey Timeline

**Immediate Activation (Day 0-1):**
- Welcome and confirmation emails
- Previous care/zigzag education
- Coverage activation messaging
- Policy document access

**Early Engagement (Day 15):**
- Coverage active education series
- SMS service value propositions
- Plan-specific educational content
- Mobile app promotion

**Ongoing Engagement:**
- Claims submission education
- Wellness benefits promotion
- Policy management tips
- Multi-pet opportunities
- Member portal features

### Key Campaigns
- Campaign ID 66: `[Emails] US Golden Journey 3.1.8` (Primary US)
- Campaign ID 167: `[Emails] Canada Golden Journey 1.1.1` (Canada)
- Campaign ID 208: `[EMAIL] Reward Redemption` (Spot Perks)
- Campaign ID 83/84: Policy-Active Requirements (Email/SMS - DO NOT CHANGE)

### Message Themes
- Welcome and onboarding
- Claims process education
- Policy management
- Wellness benefits
- Mobile app adoption
- Customer service resources
- Pet health tips
- Coverage reminders

---

## 3. Retention: Lapsed Journey

**Entry Event:** Payment failure or policy lapse
**Objective:** Recover lapsed policies through timely payment reminders
**Duration:** 30+ days with escalating urgency

### Recovery Timeline

**Day 0:** Payment failed - Urgent notification
**Day 2:** Account update - Urgent notification
**Day 6:** Payment failed - Direct notification
**Day 14:** Account past due - Direct notification
**Day 24:** Final attempt - Urgent notification
**Day 30+:** Extended recovery sequence

### Message Strategy
- **Progressive urgency** from informative to critical
- **Multi-channel approach** (email + SMS)
- **Clear CTAs** for payment update
- **Coverage loss warnings** to motivate action
- **Self-service payment links** for easy resolution

### Key Campaigns
- Campaign ID 14: `[Emails] Lapsed Journey 3.5`
- Campaign ID 82: `[SMS] Lapsed Journey 3.5`
- Campaign ID 180: `[SMS] 30-Day Lapsed`
- Campaign ID 181: `[EMAIL] 30-day Lapsed Journey 3.5`
- Campaign ID 155/156: Final Lapsed Requirements (Email/SMS - DO NOT CHANGE)
- Campaign ID 251: `Lapsed Sammy 2.0` (Support)

---

## 4. Win-Back: Canceled Journey

**Entry Event:** Policy cancellation
**Objective:** Re-engage canceled customers and encourage re-enrollment
**Duration:** Extended nurture over months

### Win-Back Strategy
- **Soft-touch messaging** acknowledging cancellation
- **Value reminders** of coverage benefits
- **Special offers** or incentives (if applicable)
- **Life event triggers** (new pet, vet bills, etc.)
- **Testimonials and social proof** to rebuild trust

### Key Campaigns
- Campaign ID 5: `[Email] US Canceled Journey 1.2`

---

## 5. Specialty Journeys

### Add-A-Pet Hunt
- **Campaign ID 264:** `Add-A-Pet Hunt`
- **Objective:** Multi-pet household growth
- **Target:** Existing customers or quoters with multiple pets
- **Strategy:** Cross-sell messaging for additional pet coverage

### Canada Market
Separate journey infrastructure for Canadian market:
- Dedicated Hunt campaigns (IDs 94, 95, 169, 170)
- Dedicated Golden Journey (IDs 167, 168)
- Canada-specific messaging and compliance

---

## Journey Exit Conditions

### Automatic Exits
- **Purchase detected** (Hunt → Golden)
- **Payment successful** (Lapsed → Golden)
- **Policy canceled** (Lapsed → Canceled)
- **Unsubscribe** (All journeys)
- **Hard bounce** (Email journeys)

### Manual Exits
- Customer service intervention
- Policy modification
- Journey version updates
- Segment changes

---

## Cross-Journey Rules

### Message Frequency
- **Time windows:** 8:15 AM - 11:00 PM in customer timezone
- **Conditional waits:** Based on email opens, clicks
- **Global message limits:** Applied across all journeys
- **Unsubscribe preferences:** Respected across all channels

### Journey Prioritization
When a customer qualifies for multiple journeys:
1. **Lapsed Journey** takes priority (payment recovery critical)
2. **Golden Journey** for active policies
3. **Hunt Journey** for quoters only
4. **Canceled Journey** last resort

### Purchase Detection
- **Automatic exit** from Hunt when purchase detected
- **Immediate entry** into Golden Journey
- **24-hour check** before sending Hunt messages to prevent duplicates

---

## Journey Optimization Framework

### Testing Approach
- **A/B testing** on subject lines, send times, content variations
- **Random cohort branches** for unbiased comparison
- **Conditional waits** to test engagement-based timing
- **Version control** (e.g., Golden Journey 3.1.8 indicates active iteration)

### Key Metrics (Engagement)
- Email open rates by journey stage
- Email click rates by message type
- SMS engagement rates
- Journey completion rates
- Unsubscribe rates by journey
- Time to purchase (Hunt)
- Time to payment recovery (Lapsed)

### Continuous Improvement
- Regular message content updates
- Segment refinement based on behavior
- Timing optimization via A/B tests
- Persona-based messaging (future opportunity)
- Mobile app adoption integration

---

*This framework guides all customer.io campaign development and ensures consistent, stage-appropriate communication throughout the customer lifecycle.*
