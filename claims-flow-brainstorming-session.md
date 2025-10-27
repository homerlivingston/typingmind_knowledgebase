# Claims Flow Brainstorming Session Results

**Session Date:** 2025-10-03
**Session Topic:** Reimagining Claims Submission Flow and Communications
**Facilitator:** Claude Code (BMad Brainstorming Agent)
**Participant:** Product Team

---

## Executive Summary

### Session Goals
Reimagine the claims submission experience and status communications to:
1. **Increase claim submission volume** (more customers filing claims)
2. **Improve claims satisfaction** (primary retention driver)
3. **Maintain operational constraints** (Spot doesn't handle actual processing - IPG does)

### Key Constraints
- Spot controls customer-facing submission and communications only
- Claims processing remains with external underwriter (IPG)
- Must work within existing 2-3 day processing target

### Business Context
- **Claims satisfaction = #1 retention predictor**
- 45% of cancellations cite denied claims
- 28% disappointed with reimbursement amounts
- Current: 85-87% approval rate, 6-7 day average processing
- Only ~50% direct deposit adoption
- Strategic Priority: App & Claims Experience Redesign is Priority #3 initiative

### Session Approach
Progressive brainstorming using SCAMPER technique (Substitute phase), followed by detailed user story refinement and design decision mapping.

---

## Technique 1: SCAMPER - Substitute Phase

**Duration:** ~15 minutes
**Focus:** What can we replace in the current claims experience?

### Key Insights Generated

**Submission Interface Replacement:**
- Replace complex form-based submission with photo-first approach
- Replace manual data entry with AI-powered extraction
- Replace hidden/buried claim submission with prominent "Submit Claim" button on member center

**Status Communication Replacement:**
- Replace passive email updates with active progress bar on main dashboard
- Replace "check your portal" model with always-visible claim status
- Replace generic updates with contextual "Get More Info" access points

**Support Access Replacement:**
- Replace always-visible support with contextual click-to-call
- Replace reactive support with proactive education (before vet visits)
- Replace post-problem help with pre-visit preparation

---

## Technique 2: User Story Deep Dive & Refinement

**Duration:** ~45 minutes
**Focus:** Flesh out end-state user stories with detailed design decisions

### User Story 1: Member Submitting a New Claim

#### Core User Needs
- "I would like to easily navigate to claim submission so that I can submit my claim as easily as possible"
- "I would like to submit my claim by taking a picture of the invoice so that I can easily submit it after my vet visit"
- "I would like to view information about next steps"
- "I would like to know that I have the option to call and get help so that I can get my questions answered"

#### Design Decisions

**Entry Point:**
- Big "Submit Claim" button on member center (mobile + web app)
- Prominent, always visible, cannot be missed
- Rationale: Customers think about claims when pet is injured, often BEFORE vet visit

**Photo-First Submission:**
- Two separate upload sections: Invoice photos + Medical records photos
- Multiple photos allowed per section
- AI scan validates basics: Pet name, Hospital name, Vet notes/records
- Examples of good/bad photos shown in guidance modal

**AI Extraction & Validation:**
- AI auto-populates claim fields from photos
- Customer reviews all fields in editable review screen
- Warning symbol (⚠️) appears on fields where AI is <90% confident
- Tooltip on warning: "We're not sure about this one - please verify"
- If AI extraction fails completely: User can override with "The info is there, submit claim anyways" checkbox
- If fields are missing: Prompt manual entry (all fields required before submission)

**Required Claim Fields:**
1. Treatment reason + condition type (Wellness/Preventive, New Accident, New Illness, Microchipping)
2. Vet location where treated
3. Free text: "Why did your pet go to the vet?" (customer's own words)
4. Reimbursement recipient
5. Is this pet the only one on the invoice? (Yes/No)
6. Total charged amount from invoice
7. Invoice photos + medical records (medical records optional if claim filed in past 6 months)

**Medical Records Logic:**
- NOT always required
- Optional if customer filed claim in past 6 months (assumes recent records on file)
- If optional, show gentle encouragement: "Adding records helps us process faster, but it's not required since we have recent records from your March claim"
- If new/different condition: Stronger prompt: "This appears to be a new condition - records would help ensure quick approval"
- Always show upload section, labeled "Required" or "Optional" based on claim history

**Claim Submission Guide:**
- Modal pop-out accessible WITHIN claim submission flow
- Also available in claims center of member portal
- Auto-appears for first-time claim submitters
- "Need help?" button always visible for repeat users
- Smart trigger: Auto-appear if user stuck on photo upload for 30+ seconds

**Guide Contents:**
- How to take good invoice photos (clear, readable, all pages)
- How to take good medical records photos
- What to ask vet for ("itemized invoice" + "medical records at checkout")
- Timing guidance: "Submit within 30 days of vet visit for fastest processing"
- Examples of good vs bad photos
- Common mistakes to avoid

**Post-Submission Confirmation:**
- Confirmation screen shows expected timeline
- "Your claim has been submitted! Here's what happens next:"
  - Received ✓ (completed)
  - Under Review (1-2 days)
  - Processing (1 day)
  - Payment Sent (arrives in 2-3 days via direct deposit, 5-7+ days via check)
- Visual timeline with estimated dates
- Immediate transition to direct deposit modal (if not set up)

**Support Access:**
- Not always visible during submission
- Appears in claim submission guide
- Available via "Get More Info" button in claim status views

---

#### User Story 1 Sub-Persona: No Reimbursement Method Selected

**User Need:**
- "I would like to be prompted to add one"
- "I would like to be able to easily add my debit card or bank account so that I can have alternatives to a paper check"

**Design Decisions:**

**Direct Deposit Modal:**
- Appears AFTER claim confirmation screen (not blocking submission)
- Benefits-focused messaging:
  - "Get reimbursed 3-5 days faster! ⚡"
  - "Set up direct deposit and receive payment securely in your bank account"
  - "More secure than mail - never worry about lost checks"
- Visual comparison:
  - Direct Deposit: Payment arrives 2-3 days after approval
  - Paper Check: Payment arrives 5-7+ days after approval + mail time
- Two options presented equally: Debit card OR Bank account
- One-time registration (account-level setting - never need to register again)
- Skip option: "I'll stick with paper check for now" (no nagging if declined)
- If added: Confirmation message "All future claims will be paid via direct deposit"

**Post-Skip Behavior:**
- Don't nag on future claim submissions
- Respect customer choice
- Option remains available in account settings
- Consider gentle reminder when claim is APPROVED: "Your check will arrive in 5-7 days. Want faster payments? Set up direct deposit for future claims"

---

#### User Story 1 Sub-Persona: Paper Check Selected

**User Need:**
- "I would like to be able to verify and update my mailing address so that I can be sure to receive my check"

**Design Decisions:**

**Address Verification:**
- Shown during claim submission (before final submit)
- "Your reimbursement check will be mailed to: [Address]"
- "Update address" link if incorrect
- Quick inline edit (don't force them to account settings page)
- Confirmation: "Address updated for this claim and future checks"

---

### User Story 2: Member with Open Claim(s)

#### Core User Needs
- "Easily navigate to my claim details"
- "Be able to view my claim status"
- "Understand what the next steps in the process are"
- "Add records as needed"
- "Be able to view a processing timeline so I know what to expect"
- "Receive push notifications"

#### Design Decisions

**Always-Visible Progress Bar:**
- Active claim = Progress bar at TOP of member center/app home screen
- Always visible when customer has open claims
- Shows current status at a glance
- Multiple open claims: Cycle through automatically every 5 seconds, with dots indicator (e.g., "Claim 1 of 3")
- Tap/click to expand: View all open claims in expandable section

**Progress Bar Stages:**
1. Received ✓
2. Under Review (IPG reviewing)
3. Processing (Calculating reimbursement)
4. Payment Sent (Direct deposit processed / Check mailed)

**Progress Bar States:**
- Standard: Blue progress indicator moving through stages
- Needs Action: Yellow/orange with badge "Action Needed"
- Completed: Green checkmark "Completed - Payment sent!"
- Delayed: Grey with info icon "Taking longer than expected - we're on it"

**"Get More Info" Button:**
- Displayed on progress bar (always visible when claim is open)
- Click/tap opens bottom sheet modal with:
  - Detailed status explanation ("We're reviewing your invoice and medical records")
  - What's happening behind the scenes
  - What customer might need to do next (if anything)
  - All claim details they submitted (pet, vet, amount, condition)
  - Timeline with estimated completion dates
  - Click-to-call button: "Want to know more about your claim? Call us at 1-700-449-4848"

**Claim Details Page:**
- Accessible from "Get More Info" expanded view
- Shows all submitted information
- Photo gallery of invoice + records submitted
- Edit option: "Add more records" (if needed)
- Status history: Timeline of all updates
- Reimbursement calculation (once completed)

**Add Records Flow:**
- "Add Records" button available in claim details
- Opens same photo upload flow as initial submission
- AI validation for new photos
- Confirmation: "Records added to Claim #12345"
- Push notification when IPG receives: "We received your additional records for Buddy's claim"

**Push Notifications:**
- Claim received: "We received your claim for [Pet Name]! We'll review it within 24 hours."
- Under review: "Good news! We're reviewing [Pet Name]'s claim now."
- Action needed: "We need more info for [Pet Name]'s claim. Tap to add records."
- Completed - approved: "Great news! [Pet Name]'s claim is approved. $XXX will arrive via [direct deposit/check] in [X] days."
- Completed - denied: "[Pet Name]'s claim was not approved. Tap to learn why and how to appeal."
- Payment sent: "Payment sent! $XXX is on its way via [method]."

**Push Notification Behavior:**
- Deep links to specific claim details
- Tap notification → Opens app to claim status page
- Notification settings: Allow customers to opt in/out per type

---

### User Story 3: Member with Claim Needing Additional Information

#### Core User Needs
- "I would like to be notified right away so that I can provide that information"
- "I would like to be told how to provide that information so that I can complete my claim quickly"
- "I would like to be able to add that info in the app"

#### Design Decisions

**Immediate Notification:**
- Push notification sent within 1 hour of IPG requesting info
- Email backup sent simultaneously
- SMS option (if customer opted in)
- Notification copy: "We need more info for [Pet Name]'s claim. Tap to add it now and keep your claim moving."

**Action Needed UI State:**
- Progress bar turns yellow/orange with badge "Action Needed"
- Top of member center: Impossible to miss
- Red dot notification badge on app icon

**Clear Instructions:**
- When user opens claim, prominent banner: "We need additional information to process your claim"
- Specific request shown: "Please upload medical records showing [Pet Name]'s treatment history for [condition]"
- Rationale provided: "Why we need this: We need to verify this is not a pre-existing condition"
- Deadline shown: "Please add by [Date] to avoid processing delays"

**In-App Addition:**
- "Add Information" button prominent in banner
- Opens familiar photo upload flow
- Same AI validation as initial submission
- Option to add text note: "Anything else we should know?"
- Confirmation: "Information submitted! We'll review within 24 hours."
- Progress bar updates: "Under Review" stage with note "Reviewing new information"

**Follow-up Notification:**
- After customer adds info: "Thanks for adding information to [Pet Name]'s claim! We'll review it within 24 hours."
- After IPG reviews: "Good news! We have everything we need for [Pet Name]'s claim. Processing now."

---

### User Story 4: Member with Completed Claim

#### Core User Needs
- "I would like to be notified as to the result so that I can log in and learn more"
- (If receiving payment) "I would like to know when, where and how much to expect"
- "I would like to know how my reimbursement was calculated"
- "I would like to know how this reimbursement affects my policy"

#### Design Decisions

**Completion Notification:**
- Push notification (primary)
- Email (backup/detailed version)
- SMS (if opted in)

**Approved Claim Notification:**
- Copy: "Great news! [Pet Name]'s claim is approved. $XXX will arrive via [direct deposit/check] in [X] days. Tap to see details."
- Celebratory tone, clear amount, clear timeline

**Denied Claim Notification:**
- Copy: "[Pet Name]'s claim was not approved. Tap to learn why and see your appeal options."
- Empathetic tone, solution-focused

**Progress Bar - Completed State:**
- Shows "Completed ✓" with green checkmark
- Stays visible for 7 days, then moves to claim history
- Quick summary: "$XXX approved - Payment arriving [Date]"
- "View Details" expands full explanation

**Payment Details Screen:**
- **When:** "Payment sent on [Date]. Expected arrival: [Date]"
  - Direct deposit: "Arrives in 2-3 business days"
  - Paper check: "Arrives in 5-7 business days via mail"
- **Where:** "Payment sent to: [Bank account ending in XXXX] / [Mailing address]"
- **How Much:** "$XXX.XX"

**Reimbursement Calculation Breakdown:**
- Total charged: $XXX.XX
- Your deductible: -$XXX.XX (remaining this year: $XXX.XX)
- Reimbursement rate (XX%): Applied to eligible charges
- **Your reimbursement: $XXX.XX**
- Visual breakdown (chart or itemized list)
- "How we calculated this" expandable explainer
- Link: "Questions about your reimbursement? Call us at 1-700-449-4848"

**Policy Impact Section:**
- "How this affects your policy:"
  - Deductible used: $XXX.XX (Remaining: $XXX.XX / $XXX.XX annual)
  - Annual limit used: $XXX.XX (Remaining: $XXX.XX / $XXX.XX annual)
  - Coverage continues for new conditions
- Visual progress bars for deductible + annual limit
- Educational tooltip: "What is a deductible?" / "What is an annual limit?"

**Denied Claim Details:**
- Clear, empathetic explanation: "Why this claim was not approved:"
- Specific reason (pre-existing condition, not covered service, etc.)
- Educational content: "What this means" with plain-language explanation
- Appeal process outlined:
  - "Don't agree? You can appeal this decision"
  - "What you'll need: [additional records, vet statement, etc.]"
  - "How to appeal: [Upload additional info via app / Call us / Email]"
  - "Timeline: We'll review appeals within 5-7 business days"
- Click-to-call prominent: "Talk to us about this claim: 1-700-449-4848"

**Claim History:**
- After 7 days, completed claims move to "Claim History" section
- Searchable/filterable by date, pet, status
- Full details always accessible
- Running totals: "Total reimbursed this year: $XXX.XX"

---

## New Feature Ideas Generated

### 1. Pre-Vet Visit Education & Geolocation Notifications

**Concept:** Proactively prepare customers BEFORE vet visits to ensure they get the right documentation.

**Implementation:**

**Primary Vet Setup:**
- Encourage customers to add primary vet at signup
- Vet selection: Name, address, phone
- If skipped at signup: Prompt during first claim submission ("Add your vet to get helpful reminders")
- Can add/edit in account settings anytime

**Geolocation Notification:**
- Trigger: Customer's phone GPS detects proximity to saved primary vet location
- Timing: When customer arrives near vet (within ~500ft geofence)
- Notification copy: "You're near [Dr. Smith's Office]! 📋 Remember to request an itemized invoice and medical records at checkout."
- Deep link: Taps to claim submission guide modal
- Frequency cap: Max once per day (avoid annoyance if customer lives/works near vet)
- Smart hours: Only trigger during vet's business hours
- Opt-in: Request location permissions when customer adds primary vet, with clear explanation

**Privacy & Permissions:**
- Clear opt-in messaging: "Allow location access to get helpful reminders when you visit your vet?"
- Granular control: Can disable geolocation reminders in settings
- Transparency: "We only use location to send helpful reminders - never shared or stored"

**Alternative Triggers (Non-Geolocation):**
- Calendar integration: "Vet appointment tomorrow - here's what to bring"
- Manual trigger: Customer taps "Preparing for vet visit" in app
- Post-visit: "Just visited your vet? Don't forget to submit your claim!" (time-delayed notification 2-4 hours after geolocation trigger)

**Educational Content:**
- Pre-vet checklist:
  - ✅ Request itemized invoice at checkout
  - ✅ Ask for medical records (or confirm they'll send them)
  - ✅ Take photos of documents immediately
  - ✅ Verify your pet's name is on the invoice
- What to say: "Can I please get an itemized invoice and medical records for [Pet Name]'s visit today?"
- Why it matters: "This helps us approve your claim faster and avoid delays"

---

### 2. Smart Claim Drafts (Future Enhancement)

**Concept:** Allow customers to start a claim BEFORE the vet visit, when pet is injured.

**Implementation:**
- "Start a Claim" option before vet visit
- Pre-populate: Pet name, suspected condition (optional), notes
- Save as draft
- Reminder notification after estimated vet visit time: "Did you visit the vet? Add your invoice to complete your claim."
- Benefits: Captures customer intent early, reduces forgetting to submit

---

### 3. Claim Submission Streaks & Gamification (Future Enhancement)

**Concept:** Since claim submission = retention driver, encourage healthy claim filing behavior.

**Implementation:**
- Recognition for customers who submit claims (vs letting them lapse)
- Messaging: "You're making the most of your coverage! 3 claims submitted this year."
- Educational: "Remember: There's no limit to the number of claims you can file"
- Avoid: Anything that feels like encouraging fake claims (focus on "don't forget to file valid claims")

---

### 4. Vet Direct Integration (Aspirational)

**Concept:** Partner with vets to send invoices/records directly to Spot.

**Implementation:**
- Vet submits on behalf of customer (with permission)
- Customer receives notification: "Dr. Smith submitted a claim for Buddy - review and approve?"
- Customer reviews/confirms details
- Eliminates customer photo upload step
- Challenges: Vet adoption, technical integration, privacy/consent
- Long-term vision, not immediate priority

---

## Design Principles Established

### 1. Transparency Above All
- Customers always know where their claim stands
- Clear explanations for every status, delay, denial
- No black box - show what's happening behind the scenes

### 2. Proactive Over Reactive
- Anticipate customer needs before they ask
- Educate before problems occur (pre-vet guidance)
- Notify immediately when action is needed

### 3. Contextual Support
- Help appears when and where it's needed
- Not intrusive, but always accessible
- Click-to-call when customers want more info, not forced front-and-center

### 4. Respect Customer Choices
- Don't nag about direct deposit if they decline
- Allow overrides when AI fails
- Optional vs required clearly distinguished

### 5. Visual Progress Over Text Updates
- Progress bar > email updates
- Timeline view > status labels
- Visual comparisons > text descriptions

### 6. Mobile-First, But Consistent
- Designed for mobile app experience
- Full feature parity on web
- Responsive, not "mobile version" vs "desktop version"

### 7. Celebrate Success, Empathize with Setbacks
- Approved claims = positive, celebratory tone
- Denied claims = empathetic, solution-focused
- Action needed = urgent but not alarming

---

## Technical Considerations & Requirements

### AI/ML Requirements
1. **OCR & Data Extraction:**
   - Extract: Pet name, hospital name, vet notes, treatment details, amounts
   - Confidence scoring: Flag fields <90% confidence
   - Handle: Multiple page invoices, handwritten notes, various invoice formats
   - Fallback: Manual entry prompts when extraction fails

2. **Image Quality Validation:**
   - Detect: Blurry photos, cut-off text, low resolution
   - Real-time feedback: "Image unclear - try again"
   - Accept: Multiple file formats (JPG, PNG, PDF, HEIC)

3. **Duplicate Detection:**
   - Flag: Same invoice submitted multiple times
   - Prevent: Accidental double submissions

### Mobile App Requirements
1. **Camera Integration:**
   - Native camera access
   - Multi-photo capture in one session
   - Preview before upload
   - Gallery access for existing photos

2. **Push Notifications:**
   - Granular opt-in/opt-out settings
   - Deep linking to specific claim details
   - Badge counts for action-needed claims
   - Delivery timing optimization (not 3am)

3. **Geolocation:**
   - Background location access (opt-in)
   - Geofencing for vet proximity
   - Battery-efficient implementation
   - Respect OS-level location permissions

4. **Offline Support:**
   - Save draft claims offline
   - Queue photo uploads when connection returns
   - Status: "Submitting..." when connectivity restored

### Web App Requirements
1. **Feature Parity:**
   - All mobile features available on web
   - Responsive design (desktop, tablet, mobile web)
   - File upload (drag-and-drop + browse)

2. **Browser Compatibility:**
   - Modern browsers (Chrome, Safari, Firefox, Edge)
   - Graceful degradation for older browsers
   - Progressive web app capabilities

### Backend/API Requirements
1. **Integration with IPG:**
   - Claim submission API
   - Status update webhooks
   - Document upload handling
   - Reimbursement calculation data retrieval

2. **Real-Time Updates:**
   - WebSocket or polling for status changes
   - Push notification delivery service
   - Low-latency status updates

3. **Data Storage:**
   - Secure photo storage (encrypted)
   - Claim history retention (indefinite?)
   - HIPAA compliance for medical records
   - PCI compliance for payment methods

4. **Analytics & Tracking:**
   - Funnel tracking: Claim start → completion
   - Drop-off analysis: Where do customers abandon?
   - Time-to-submit: How long from vet visit to claim submission?
   - Feature adoption: Geolocation opt-in rates, direct deposit conversion

---

## Success Metrics & KPIs

### Primary Success Metrics

**1. Claim Submission Volume**
- Target: Increase claim submissions by [X]% within 6 months
- Measure: # of claims submitted per month
- Segmentation: First-time vs repeat submissions, by pet type (dog/cat)

**2. Claims Satisfaction**
- Target: Increase claims satisfaction score by [X] points
- Measure: Post-claim NPS or satisfaction survey
- Key drivers: Ease of submission, clarity of status, speed of resolution

**3. Retention Impact**
- Target: Improve retention rate for customers who submit claims by [X]%
- Measure: 30-day, 90-day, 365-day retention for claim-submitters
- Correlation: Successful claim experience → retention improvement

### Secondary Success Metrics

**4. Direct Deposit Adoption**
- Current: ~50% adoption
- Target: Increase to [X]% within 6 months
- Measure: % of customers with direct deposit enabled
- Impact: Faster payments, lower costs (no check printing/mailing)

**5. Time-to-Submit**
- Target: Reduce average time from vet visit to claim submission by [X]%
- Measure: Days between treatment date (from invoice) and submission date
- Hypothesis: Proactive education + easy submission = faster claims

**6. Claims Requiring Additional Info**
- Target: Reduce "action needed" claims by [X]%
- Measure: % of claims requiring additional records/info
- Hypothesis: Better guidance upfront = complete submissions

**7. First-Time Submission Success**
- Target: [X]% of first-time submitters complete claim without abandonment
- Measure: Funnel completion rate for first-time vs repeat users
- Optimize: Onboarding, guidance, form simplicity

### Operational Metrics

**8. Photo Quality & AI Accuracy**
- AI extraction accuracy: Target [X]% accuracy for key fields
- Photo rejection rate: Target <[X]% of photos rejected for quality
- Manual entry fallback rate: Track % of claims requiring manual entry

**9. Support Call Volume**
- Hypothesis: Better in-app guidance = fewer support calls
- Measure: Support calls related to claims submission (should decrease)
- Caveat: Click-to-call may increase calls (but higher satisfaction)

**10. Geolocation Feature Adoption**
- Target: [X]% of customers opt-in to geolocation reminders
- Measure: % of users with location permissions enabled + primary vet added
- Impact: Does geolocation reminder correlate with faster claim submissions?

### User Behavior Metrics

**11. Claim Status Engagement**
- Measure: How often customers check claim status
- Hypothesis: Always-visible progress bar = less obsessive checking
- Track: Average status checks per claim, time spent on status page

**12. Guide/Help Content Usage**
- Measure: % of users who access claim submission guide
- Engagement: Time spent, sections viewed
- Correlation: Guide usage → submission completion rate

**13. Push Notification Performance**
- Open rates by notification type (received, action needed, completed)
- Deep link click-through rates
- Opt-out rates (monitor for notification fatigue)

---

## Implementation Priorities & Roadmap

### Phase 1: MVP (Months 1-3)
**Goal:** Launch core claims submission redesign with immediate impact

**Must-Have Features:**
1. ✅ Prominent "Submit Claim" button on member center
2. ✅ Photo-first submission (invoice + medical records)
3. ✅ AI extraction with review screen (confidence warnings)
4. ✅ Required field validation + manual entry fallback
5. ✅ Claim submission guide modal (with examples)
6. ✅ Post-submission timeline/confirmation
7. ✅ Direct deposit modal (benefits-focused)
8. ✅ Always-visible progress bar on dashboard (single claim)
9. ✅ Basic push notifications (received, completed)
10. ✅ "Get More Info" expansion with click-to-call

**Success Criteria:**
- Launch without major bugs
- Achieve [X]% submission completion rate
- Positive user feedback in initial surveys

---

### Phase 2: Enhanced Experience (Months 4-6)
**Goal:** Add proactive features and multi-claim support

**Features:**
1. ✅ Pre-vet education content (standalone section)
2. ✅ Geolocation notifications (opt-in, primary vet)
3. ✅ Multiple open claims support (cycling progress bar)
4. ✅ Expanded push notification types (action needed, payment sent)
5. ✅ Add records to existing claims flow
6. ✅ Claim history section with search/filter
7. ✅ Improved reimbursement calculation breakdown
8. ✅ Policy impact visualization (deductible/limit progress bars)

**Success Criteria:**
- Geolocation opt-in rate: [X]%
- Time-to-submit improvement: [X]% reduction
- Multi-claim users successfully manage multiple submissions

---

### Phase 3: Optimization & Advanced Features (Months 7-12)
**Goal:** Refine based on data, add aspirational features

**Features:**
1. ✅ Smart claim drafts (pre-vet submission)
2. ✅ Enhanced AI accuracy (iterative improvement)
3. ✅ Appeal flow for denied claims (in-app)
4. ✅ Claim submission streaks/recognition (gamification)
5. ✅ Advanced analytics dashboard (internal)
6. ✅ A/B testing framework for claim flow optimizations
7. ⚠️ Vet direct integration (exploratory, partnerships required)

**Success Criteria:**
- Achieve retention improvement targets for claim-submitters
- Direct deposit adoption: [X]%
- Claims satisfaction score: [X]+ improvement

---

## Open Questions & Future Exploration

### Customer Behavior Questions
1. **What % of eligible claims go unfiled?** (Do customers forget? Not realize something is claimable?)
2. **What's the correlation between claim submission timing and approval rate?** (Are faster submissions more likely to be approved?)
3. **Do customers who submit more claims retain better, even if some are denied?** (Engagement signal?)

### Product Questions
4. **Should we allow "partial claims"?** (Submit invoice now, add records later if needed?)
5. **What about wellness claims - do they need different flow?** (Typically lower amounts, routine care)
6. **Should we show "estimated reimbursement" before IPG processes?** (Manage expectations, but risk inaccuracy)

### Technical Questions
7. **What's the right balance between AI automation and human review?** (More automation = faster, but risk of errors)
8. **How do we handle edge cases?** (Emergency vet, out-of-network, international travel)
9. **Can we integrate with vet practice management software?** (Direct data feeds vs customer uploads)

### Business Questions
10. **What's the ROI of geolocation feature development?** (Cost vs claim submission increase)
11. **Should we incentivize claim submissions?** (Reward points, discounts? Or does it encourage fraud?)
12. **How do we measure "claim satisfaction" accurately?** (Survey timing, response rates, bias)

---

## Key Takeaways & Next Steps

### Major Insights
1. **Claims satisfaction is retention** - This initiative directly impacts the #1 retention driver
2. **Proactive > Reactive** - Educate before the vet visit, not after problems occur
3. **Transparency builds trust** - Always-visible status beats email updates
4. **Photo-first is the future** - AI extraction eliminates form friction
5. **Respect customer choices** - Don't nag, but make better options obvious

### Decisions Made
- Photo-first submission with AI extraction + review
- Always-visible progress bar for open claims
- Contextual support (not always-on)
- Benefits-focused direct deposit promotion (no nagging)
- Pre-vet geolocation notifications (opt-in)
- Progressive disclosure (guide modal when needed)

### Recommended Next Steps
1. **Create detailed product requirements document (PRD)** based on this brainstorming
2. **Design mockups/wireframes** for key flows (submission, status, completion)
3. **Validate with customer research** (usability testing on prototypes)
4. **Prioritize Phase 1 MVP features** for engineering estimation
5. **Define success metrics & analytics tracking plan**
6. **Align with IPG on technical integration requirements**
7. **Plan marketing/communication strategy** for launch (in-app announcements, emails)

---

## Appendix: Current vs Future State Comparison

### Current State (Problems)
- Claims submission buried in portal
- Form-heavy, manual data entry
- Limited status visibility (email updates)
- ~50% direct deposit adoption
- Reactive support only
- High "action needed" rate (missing records)
- 45% of cancellations cite denied claims
- 28% disappointed with reimbursements

### Future State (Vision)
- Prominent "Submit Claim" button on dashboard
- Photo-first with AI extraction
- Always-visible progress bar with real-time updates
- [Target X%] direct deposit adoption (benefits-focused promotion)
- Proactive education (pre-vet geolocation reminders)
- Reduced "action needed" (better guidance upfront)
- Improved retention for claim-submitters
- Clear reimbursement explanations + policy impact

---

**Document Generated:** 2025-10-03
**Session Duration:** ~90 minutes
**Outcome:** Comprehensive claims flow redesign with detailed user stories, design decisions, and implementation roadmap aligned with Spot's strategic priorities (Priority #3: App & Claims Experience Redesign) and business objectives (retention improvement via claims satisfaction)

---

## Related Documents
- `business_objectives.md` - Strategic context for retention focus
- `user_journey.md` - Current customer journey and pain points
- `insurance_metrics.md` - Claims performance metrics (85-87% approval rate, 6-7 day processing)
- `product_systems.md` - Current product constraints (IPG underwriter partnership)
- `growth_initiatives.md` - Priority #3: App & Claims Experience Redesign
