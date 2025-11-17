# Customer.io Context - Spot Pet Insurance

**Purpose:** Operational context for managing Spot's customer.io campaigns
**Workspace:** Production (179782)
**Last Updated:** November 17, 2025

---

## 📁 Files in This Directory

### **hunt_campaigns_context.md** - Pre-Purchase Campaign Guide
**What it contains:**
- Complete Hunt journey structure and logic
- All 4 quoter segments (Sam's Club, MSN, API Partners, Direct)
- Campaign hierarchy and routing rules
- Transactional + Hunt campaign pairs
- Segment populations and characteristics
- Message timing and send windows

**When to use:** Setting up or modifying pre-purchase campaigns, understanding quoter segmentation, troubleshooting Hunt journey routing

---

### **journey_stages.md** - Customer Lifecycle Framework
**What it contains:**
- All 5 journey stages (Hunt, Golden, Lapsed, Canceled, Specialty)
- Entry events and objectives for each stage
- Journey timelines and message sequences
- Cross-journey rules and prioritization
- Exit conditions and transitions
- Testing and optimization framework

**When to use:** Understanding the complete customer lifecycle, planning new campaigns, optimizing journey transitions, analyzing engagement metrics

---

### **messaging_framework.md** - Content & Voice Guidelines
**What it contains:**
- Brand voice and tone by journey stage
- 3 customer personas and messaging strategies
- Email vs. SMS best practices
- Subject line and copy guidelines
- Personalization tokens and usage
- Compliance requirements
- A/B testing framework
- Message naming conventions

**When to use:** Writing campaign content, developing new messages, ensuring brand consistency, planning A/B tests, persona-based messaging

---

### **segment_reference.md** - Segment Definitions
**What it contains:**
- All key segment definitions and IDs
- Segment filter logic and criteria
- Population counts and characteristics
- Segment hierarchy and conflict resolution
- A/B testing segments
- Protected segments (DO NOT CHANGE)
- Segment best practices

**When to use:** Creating campaigns with segment filters, understanding audience targeting, resolving segment conflicts, analyzing segment populations

---

## 🚀 Quick Start Guide

### New to Customer.io?
1. Start with **journey_stages.md** to understand the lifecycle
2. Read **hunt_campaigns_context.md** for pre-purchase specifics
3. Reference **messaging_framework.md** for content guidelines
4. Use **segment_reference.md** as a lookup tool

### Creating a New Campaign?
1. **Identify journey stage:** Hunt, Golden, Lapsed, Canceled?
2. **Check segment requirements:** Which segment(s) should receive this?
3. **Review messaging guidelines:** Appropriate tone and content themes
4. **Follow naming conventions:** Use standard format for consistency
5. **Set send windows:** 8:15 AM - 11:00 PM customer timezone
6. **Enable purchase detection:** Auto-exit when appropriate

### Modifying an Existing Campaign?
1. **Check if protected:** Some campaigns marked "DO NOT CHANGE"
2. **Identify campaign usage:** Which segments use this campaign?
3. **Review message flow:** Understand current journey structure
4. **Test thoroughly:** Use test segments before full deployment
5. **Document changes:** Update context files if logic changes

---

## 🎯 Key Campaign Categories

### Hunt Campaigns (Pre-Purchase)
**Purpose:** Convert quoters to policyholders
**Segments:** Sam's Club, MSN, API Partners, Direct
**Structure:** Transactional (immediate) + Hunt (multi-week nurture)
**Duration:** ~58+ days with ~14 messages

### Golden Journey (Post-Purchase)
**Purpose:** Onboard and engage active policyholders
**Key Campaigns:** US Golden (66), Canada Golden (167)
**Structure:** Welcome (Day 0-1) → Engagement (Day 15+) → Ongoing
**Focus:** Claims education, app adoption, policy management

### Lapsed Journey (Retention)
**Purpose:** Recover failed payments
**Key Campaigns:** Lapsed 3.5 (14, 82), 30-Day Lapsed (180, 181)
**Structure:** Progressive urgency over 30+ days
**Timeline:** Day 0, 2, 6, 14, 24, 30+

### Canceled Journey (Win-Back)
**Purpose:** Re-engage canceled customers
**Key Campaign:** US Canceled Journey 1.2 (5)
**Strategy:** Soft-touch value reminders over extended period

---

## 📊 Campaign Naming Convention

Format: `[Channel] Segment/Region Journey Name - Version`

**Examples:**
- `[Email] US Direct Quoter Hunt - 6.0.7`
- `[SMS] Sam's V2 Hunt`
- `[Transactional] API Partner Email 0`
- `[Emails] US Golden Journey 3.1.8`

**Prefixes:**
- `[Email]` - Email campaign
- `[SMS]` - SMS campaign
- `[Transactional]` - Single-message transactional
- `[Emails]` - Multi-message email journey

---

## 🔐 Protected Campaigns

**DO NOT MODIFY without thorough review:**

| Campaign ID | Name | Reason |
|-------------|------|--------|
| 83 | Policy-Active Requirement: DO NOT CHANGE (Email) | Critical Golden Journey logic |
| 84 | Policy-Active Requirement: DO NOT CHANGE (SMS) | Critical Golden Journey logic |
| 155 | Final Lapsed Requirement: DO NOT CHANGE (Email) | Critical Lapsed Journey exit logic |
| 156 | Final Lapsed Requirement: DO NOT CHANGE (SMS) | Critical Lapsed Journey exit logic |

---

## 📈 Key Engagement Metrics

### Email Metrics
- Delivery rate
- Open rate
- Click rate
- Bounce rate (hard/soft)
- Unsubscribe rate
- Spam complaint rate

### SMS Metrics
- Delivery rate
- Click rate (for links)
- Opt-out rate
- Response rate
- Carrier filtering

### Journey Metrics
- Entry count
- Completion rate
- Exit reasons
- Time to purchase (Hunt)
- Recovery rate (Lapsed)
- Message engagement by stage

---

## 🛠 Common Tasks

### Add a New Message to Hunt Journey
1. Identify segment (Sam's, MSN, API, Direct)
2. Determine message theme and timing
3. Write content per messaging framework
4. Create email/SMS template
5. Add action to appropriate campaign
6. Set delay and time window
7. Add conditional logic if needed
8. Test with test segment
9. QA and launch

### Update Message Content
1. Locate template ID in campaign actions
2. Edit template in Customer.io
3. Preview across devices
4. Test send to yourself
5. Monitor engagement after update

### Create A/B Test
1. Define hypothesis and success metric
2. Create variant templates
3. Add RandomCohortBranch to journey
4. Split cohorts (typically 50/50)
5. Route to different templates
6. Run until statistical significance
7. Implement winner
8. Document learnings

---

## 🔍 Troubleshooting

### Quoter Not Entering Expected Journey
1. **Check segment membership:** Is quoter in expected segment?
2. **Verify priority order:** Higher-priority segment may be routing them
3. **Check event trigger:** Did `quote_started` fire correctly?
4. **Review exclusion filters:** Campaign may have filters preventing entry

### Messages Not Sending
1. **Check time windows:** Outside 8:15 AM - 11:00 PM window?
2. **Verify send state:** Is action in "automatic" sending state?
3. **Check global limits:** Has customer hit message frequency cap?
4. **Review unsubscribe status:** Has customer opted out?
5. **Check template:** Is template published and valid?

### Duplicate Messages
1. **Check journey overlap:** Customer in multiple journeys?
2. **Verify purchase detection:** Auto-exit working properly?
3. **Review delay timing:** Conditional waits functioning?
4. **Check segment conflicts:** Customer matching multiple segments?

---

## 🎓 Best Practices

### Message Design
- **Mobile-first:** 60%+ opens on mobile
- **Clear CTA:** One primary action per message
- **Scannable content:** Short paragraphs, bullets, headers
- **Visual hierarchy:** Important info at top
- **Alt text:** All images need descriptive alt text

### Send Timing
- **Respect time windows:** 8:15 AM - 11:00 PM
- **Use customer timezone:** Enable when possible
- **Test send times:** A/B test optimal times by segment
- **Avoid weekends:** Lower engagement (test your data)
- **Consider delays:** Don't overwhelm with frequency

### Segmentation
- **Be specific:** Tighter segments = better relevance
- **Monitor counts:** Track segment population changes
- **Test filters:** Verify logic produces expected audience
- **Document criteria:** Clear explanation of who qualifies
- **Regular audits:** Review and update quarterly

### Content
- **Lead with value:** Why should they care?
- **Speak to persona:** Align with customer motivations
- **Clarity over cleverness:** Simple, direct language wins
- **Social proof:** Testimonials and examples build trust
- **Compliance:** All required disclosures included

---

## 🔗 Related Resources

### In This Repository
- `/customer_engagement.md` - Overall engagement strategy
- `/user_personas.md` - Customer persona definitions
- `/user_journey.md` - Customer lifecycle mapping
- `/journey_metrics.md` - Journey performance metrics

### Customer.io Resources
- **Workspace URL:** https://fly.customer.io/workspaces/179782
- **Segment URLs:** https://fly.customer.io/workspaces/179782/journeys/segments/{ID}
- **Campaign URLs:** https://fly.customer.io/workspaces/179782/journeys/campaigns/{ID}

### External Documentation
- Customer.io Docs: https://docs.customer.io
- Customer.io MCP Server: https://docs.customer.io/ai/mcp-server/

---

## 📝 Maintaining This Context

### When to Update These Files

**hunt_campaigns_context.md:**
- New Hunt campaign launched
- Segment criteria changed
- Campaign routing logic modified
- New quoter segment added

**journey_stages.md:**
- New journey stage created
- Journey timeline changed
- Entry/exit conditions modified
- Message themes updated

**messaging_framework.md:**
- Brand voice guidelines updated
- New persona insights
- Content guidelines changed
- Compliance requirements added

**segment_reference.md:**
- New segment created
- Segment filters modified
- Population counts significantly changed
- A/B test segments added

### Update Process
1. Make changes to context files
2. Add date to "Last Updated" field
3. Document what changed and why
4. Notify team of significant updates
5. Keep README in sync with file structure

---

*This customer.io context provides the operational foundation for effective, persona-aligned customer communications throughout the lifecycle.*

**Last Updated:** November 17, 2025
**Maintained By:** Marketing & Customer Engagement Team
**Questions?** Reference these docs or Customer.io workspace
