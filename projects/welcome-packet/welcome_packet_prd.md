# Spot Welcome Packet Program - PRD

## 1. Overview

**Product Description**
The Welcome Packet educates new policyholders on coverage, benefits, and claims. It includes educational materials, branded items, and digital resources to help customers feel confident using their insurance.

**Problem**
New customers often don't understand coverage or claims, leading to:

- Underuse of benefits
- More basic service calls
- Lower satisfaction in first 90 days
- Higher churn
- Missed chances to build loyalty

**Solution**
Send a welcome packet that combines education and brand engagement at the right moment in the onboarding journey.



## 2. Business Objectives

**Primary Goals**

- Improve first-year retention by 10%
- Cut basic service inquiries by 25% in first 90 days
- Raise claims submission rate by 20%

**Secondary Goals**

- Strengthen brand affinity and premium perception
- Drive organic sharing and referrals
- Collect customer feedback

**Success Metrics**

- Coverage understanding (survey)
- Digital engagement (QR, app use)
- Call volume reduction
- Retention vs. control group
- Claims submission and timing
- CSAT/NPS and brand sentiment



## 3. Target Audience

**Primary:** New policyholders (0–30 days). Ages 25–55, income $50K–$150K, U.S. wide. Value pet health, seek clear info, and are receptive to onboarding.

**Secondary:** Multi-pet households, comprehensive plans, referral program participants.



## 4. Product Requirements

### Package Format

**Self-Contained Mailer**
- 3-panel tri-fold mailer with shrink-wrap
- Includes branded bandana
- Cost: $3-4 per piece (mailer production and fulfillment only; excludes bandana procurement and shipping to Lake Erie)
- Turn time: 6 hours from daily customer list submission
- Reference: Similar to Figo's implementation

**Contents**

- **Tri-Fold Mailer**:
  - Personalized coverage guide with policy number and key coverage details
  - Claims submission steps and FAQs
  - Quick reference card with policy limits and checklist
  - QR codes linking to welcome video, app download, policy docs, vet locator
  - Referral program information

- **Branded Bandana**:
  - Available in 2 sizes
  - Spot branding

**Delivery**: Triggered at policy effective date.

### Fulfillment Partner: Lake Erie

**Data Transfer**
- Daily customer list sent via FTP site
- Variable data fields for personalization (template to be provided by Lake Erie)
- 6-hour turnaround from customer list submission to production

**Design Considerations**
- Thickness is primary concern for sizing requirements
- Lake Erie to provide tri-fold template and flat size specifications
- Variable data field questions to be directed to Larry at Lake Erie

**Production Details**
- Embrace has been using Lake Erie for welcome packets for 1 year
- Tri-folds are shrink-wrapped (previously taped)
- Bandanas available in 2 different sizes



## 5. Technical Requirements

**Data Integration**
- Pull customer/policy data for personalization
- Generate daily customer list with variable data fields
- FTP integration with Lake Erie for automated data transfer
- Customer list should include: name, address, policy number, coverage details, pet information

**Content Generation**
- Dynamic content generation based on customer data
- Template management for personalized materials
- Variable data field mapping per Lake Erie template specifications

**Tracking & Analytics**
- Track packet production and shipment status
- Monitor digital engagement (QR code scans, app usage)
- A/B testing capabilities for different package variations
- QR code management, mobile-optimized landing pages, app deep links



## 6. User Experience

**Mailer Arrival**
Self-contained shrink-wrapped mailer arrives in mailbox. Clean, professional presentation designed to stand out from typical mail.

**Content Flow**

1. Tri-fold opens to reveal personalized welcome and coverage information
2. Policy details and quick reference guide
3. Claims process with clear step-by-step instructions
4. QR codes for digital resources and app download
5. Branded bandana included in mailer

**Digital**

- Interactive coverage tutorial with quiz
- Community/forum integration

**Accessibility**
Clear, simple language, visuals, large print/digital options, multi-language.



## 7. Implementation Timeline

- **Phase 1 (Weeks 1–8)**: Planning, content, design, integration
- **Phase 2 (Weeks 9–12)**: Pilot test, feedback, optimize
- **Phase 3 (Weeks 13–16)**: Soft launch, then full rollout
- **Phase 4 (Weeks 17–24)**: Performance review, improvements



## 8. Resources

**Internal Team**
- Program Manager (1 FTE)
- Content Manager (0.5 FTE)
- CS Specialist (0.5 FTE)
- Analyst (0.25 FTE)
- Engineering: FTP integration and data automation

**External Partners**
- Fulfillment provider: Lake Erie
- Contact: Larry (for design template and variable data questions)



## 9. Risks & Mitigation

- **Supply chain**: Backup suppliers, 60-day buffer.
- **Fulfillment errors**: QA checks, escalation procedures.
- **Delivery issues**: Trackable shipping, address validation.
- **Data errors**: Validation, rollback, monitoring.
- **Digital failures**: Testing, backups, CS training.
- **Cost overruns/low ROI**: Conservative budgets, frequent monitoring, flexible design.
- **Customer overload**: Clear hierarchy, multiple formats, testing.



## 10. Success Measurement

- Retention: +5% over baseline at 12 months.
- Claims: +20% submission, 15% faster first claim.
- Reporting cadence: weekly ops, monthly metrics, quarterly ROI, annual strategy.



## 11. Future Enhancements

- Deeper personalization (breed/age-specific).
- Expanded digital (gamification, AR, app push).
- Seasonal/event-based versions.
- Anniversary/re-engagement packets.
- Premium customer experiences.
- AI personalization and chatbot support.
- Sustainability (eco packaging, digital-first options).
- Partnerships with vets, pet brands, and content creators.
