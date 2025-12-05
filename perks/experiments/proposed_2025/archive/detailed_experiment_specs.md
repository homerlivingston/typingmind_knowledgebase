# Detailed Experiment Specifications

**Format**: All experiments include hypothesis (IF/THEN/BECAUSE/MEASURED BY), supporting research (what informed this test), and design/development scope.

---

## COMPLEX EXPERIMENTS

### **C1: Account Gate Elimination Study**

**Hypothesis**: IF we replace the account number gate with easier authentication methods THEN perk utilization and 3-6 month retention will improve BECAUSE reduced friction enables the engagement needed for retention benefits AS MEASURED BY 3-6 month cohort churn rate and perk page conversion rates.

**Supporting Research - What Informed This Test**:
- **Internal Data**: Fi analysis shows meaningful retention benefits when customers actually engage with perks, but extremely low usage rates (0.1%) suggest access barriers
- **Baymard Institute**: 27% of users abandon purchases due to complex checkout processes; authentication friction has similar abandonment patterns
- **Nielsen Norman Group**: Progressive disclosure and simplified authentication improve user completion rates by 15-25%
- **Internal Evidence**: Current account gate is only exclusivity mechanism, but codes still leak, suggesting artificial barrier with minimal protection benefit

**Design & Development Scope**:
The technical team will create three authentication variants maintaining perceived exclusivity while reducing friction. Test A requires backend integration with policy lookup API for email + last 4 digits verification. Test B implements magic link generation and email delivery system with secure token handling. Test C builds progressive access tiers with basic perks requiring no authentication and premium perks using simplified verification, requiring database schema updates and frontend conditional rendering logic.

---

### **C2: Proactive Perk Delivery System**

**Hypothesis**: IF we deliver personalized perk communications based on Resonate psychographic segments THEN 3-6 month retention will improve BECAUSE targeted messaging creates higher perceived value and engagement AS MEASURED BY 3-6 month churn rate and email engagement metrics.

**Supporting Research - What Informed This Test**:
- **Internal Data**: Resonate shows 74% female, health-conscious, budget-conscious customer base ($25-50k income) with family-caring values
- **McKinsey Personalization Research**: Personalized email campaigns drive 10-15% lift in engagement and 20% increase in customer satisfaction
- **Internal Evidence**: One-size-fits-all PERKS_BLAST showing 4.5% retention vs historical 11%, suggesting messaging misalignment
- **Behavioral Economics**: Cialdini's principle of liking - people engage more with content that reflects their values and interests

**Design & Development Scope**:
Marketing team creates three distinct email templates and perk selections aligned with customer segments from Resonate data. Customer.io requires audience segmentation configuration based on demographic and behavioral tags. Development team integrates Resonate API for real-time customer classification and builds dynamic content rendering system. Backend modifications needed for behavioral trigger tracking (post-claim events, engagement patterns, anniversary dates) with webhook integrations to Customer.io automation workflows.

---

### **C3: Integrated Customer Experience Portal**

**Hypothesis**: IF we embed perks into the core policy management dashboard THEN overall customer retention will improve BECAUSE integrated benefits feel like core value rather than separate add-ons AS MEASURED BY customer retention across all tenure cohorts and portal engagement time.

**Supporting Research - What Informed This Test**:
- **Internal Evidence**: Core-aligned perk presentation failed in quote form, but post-purchase integration may work differently when customers are in policy management mindset
- **UX Research**: TaskRabbit and Airbnb studies show integrated experiences create higher perceived platform value than separate feature access
- **Behavioral Psychology**: Peak-end rule suggests customers remember integrated experiences more positively than fragmented ones
- **Internal Data**: Low perk utilization (0.1%) despite retention benefits suggests discovery and access are primary barriers

**Design & Development Scope**:
Product team designs integrated dashboard mockups showing policy details alongside personalized perk recommendations and usage tracking. Frontend requires significant component restructuring to embed perk content within existing customer portal architecture. Backend development includes API integrations for real-time perk status, usage analytics, and personalized recommendation engine. Database schema modifications needed for tracking customer perk interactions and preferences within the existing customer data model, requiring 6-8 weeks of full-stack development.

---

### **C4: Dynamic Retention Triggers**

**Hypothesis**: IF we trigger perk communications based on churn risk signals rather than calendar timing THEN retention will improve BECAUSE proactive intervention addresses specific customer concerns AS MEASURED BY prevented churn rate and campaign response rates.

**Supporting Research - What Informed This Test**:
- **Internal Evidence**: Current quarterly timing showing 4.5% retention vs Golden Day 12's 11% suggests timing misalignment with customer needs
- **Predictive Analytics Research**: Hubspot studies show behavior-triggered campaigns outperform scheduled campaigns by 30-50%
- **Customer Success Literature**: Churn prevention is 5x more cost-effective when triggered by early warning signals rather than reactive approaches
- **Internal Data**: Customers show decreased engagement, missed payments, and policy review activity before churning - these can serve as trigger events

**Design & Development Scope**:
Analytics team defines churn risk scoring algorithm using Customer.io engagement data, payment patterns, and website behavior tracking through Segment. Development builds real-time scoring system with webhook triggers to Customer.io for immediate campaign deployment. Marketing creates urgency-focused email templates with personalized perk recommendations. Backend requires event streaming infrastructure for real-time customer behavior analysis and automated campaign triggering based on risk thresholds, plus integration with existing Customer.io automation workflows.

---

## RAPID EXPERIMENTS

### **R1: Spot-Perks Page Friction Reduction**

**Hypothesis**: IF we reduce form completion steps on spotpet.com/spot-perks while maintaining the account gate THEN perk access rates will increase by 15-25% BECAUSE simplified UX removes abandonment points AS MEASURED BY perk page conversion rate and time-to-completion.

**Supporting Research - What Informed This Test**:
- **Baymard Institute**: Form field optimization reduces abandonment by 10-40%, with auto-population and field reduction showing highest impact
- **Nielsen Norman Group**: "Forgot password/account" functionality improves completion rates by 12-20% across various verticals
- **Google UX Research**: Progressive disclosure and smart defaults reduce form friction without eliminating security measures
- **Internal Evidence**: Account gate necessary for exclusivity but creates access barrier that may prevent retention benefits

**Design & Development Scope**:
Design team creates three UX improvement variants with simplified form layouts and clearer visual hierarchy. Frontend development implements auto-population logic for logged-in customers using existing session data and builds quick lookup tool connecting to customer database API. UX improvements include field validation, error messaging, and mobile-responsive design optimization requiring 3-4 days of frontend development with minimal backend changes for lookup functionality.

---

### **R2: Golden Journey Perk Integration**

**Hypothesis**: IF we add strategic perk callouts to existing 90-day and 150-day golden journey emails THEN 3-6 month retention will improve BECAUSE timely reminders during the proven sweet spot increase perk awareness and usage AS MEASURED BY 3-6 month cohort churn rate.

**Supporting Research - What Informed This Test**:
- **Internal Data**: Historical Golden Day 12 showed 11% churn reduction at 3 months, 7% at 6 months - proving email effectiveness at these intervals
- **Multi-cohort test**: 8% churn reduction specifically in 3-6 month group when receiving perk communications
- **Email Marketing Research**: Lifecycle email integration shows 20-30% higher engagement than standalone campaigns (Mailchimp studies)
- **Customer Journey Mapping**: Customers at 90-150 days are past initial adjustment period but haven't formed habitual payment patterns

**Design & Development Scope**:
Marketing team creates perk callout content integrated within existing golden journey email templates maintaining consistent branding and messaging tone. Customer.io configuration requires adding perk content blocks to existing automated email sequences with A/B testing capability for 20% holdout control group. No backend development needed as this leverages existing email infrastructure and customer segmentation, requiring only template updates and campaign configuration taking 2-3 days for implementation and testing.

---

### **R3: Hunt Journey Perk Optimization**

**Hypothesis**: IF we optimize existing hunt journey perk banner messaging to align with Resonate customer values THEN UTQ and QTP rates will improve BECAUSE targeted messaging increases perceived value relevance AS MEASURED BY quote form conversion rates and email engagement.

**Supporting Research - What Informed This Test**:
- **Internal Data**: All hunt emails already include perk banners, providing existing infrastructure for optimization
- **Resonate Analysis**: Customers value family caring (74% female, family-focused), health consciousness, and budget considerations ($25-50k income)
- **SMS Learning**: Previous test showed perks-first messaging failed (-10% conversion), but supportive messaging may work in email context
- **A/B Testing Studies**: Message relevance improvements show 15-25% engagement lifts across industries (Campaign Monitor research)

**Design & Development Scope**:
Marketing team develops three banner message variants based on Resonate customer segments focusing on value savings, family care, and health wellness themes. Design team creates visual banner variations maintaining current placement and size constraints within existing email templates. Customer.io A/B testing configuration splits hunt journey traffic into four groups (control plus three variants) with UTQ/QTP tracking through existing Segment integration, requiring only creative development and campaign setup with no technical backend changes.

---

### **R4: Email Timing Optimization (3-6 Month Focus)**

**Hypothesis**: IF we increase perk email frequency specifically for the 3-6 month cohort from quarterly to monthly THEN retention will improve in this proven sweet spot BECAUSE higher frequency maintains awareness during critical retention window AS MEASURED BY 3-6 month cohort churn rate.

**Supporting Research - What Informed This Test**:
- **Internal Data**: Multi-cohort retention test showed 8% churn reduction specifically for 3-6 month customers receiving perk communications
- **Email Frequency Research**: HubSpot studies show monthly emails to engaged segments perform better than quarterly without significant unsubscribe increases
- **Customer Lifecycle Theory**: 3-6 months represents critical habituation period where retention interventions show highest effectiveness
- **Internal Evidence**: Current 4.5% retention vs historical 11% suggests under-communication during optimal windows

**Design & Development Scope**:
Customer.io audience segmentation creates specific 3-6 month tenure group with monthly perk email automation separate from quarterly PERKS_BLAST schedule. Marketing develops monthly content calendar with varied perk highlights and seasonal themes to avoid repetition fatigue. Analytics team configures 20% holdout control group remaining on quarterly schedule for measurement comparison. Implementation requires audience configuration, email template creation, and automation workflow setup within existing Customer.io infrastructure, taking 4-5 days for setup and testing.

---

### **R5: Homepage Perk Prominence Test**

**Hypothesis**: IF we move perk mentions above the fold on the homepage with clear value anchoring THEN quote form UTQ rates will improve BECAUSE increased awareness drives more qualified traffic to quote form AS MEASURED BY UTQ rate and perk page traffic from homepage.

**Supporting Research - What Informed This Test**:
- **Internal Data**: 29/31 paid landing pages mention perks below fold, but homepage could drive broader organic awareness
- **Web Design Research**: Above-fold value propositions improve page engagement by 15-20% and conversion intent (Nielsen Norman Group)
- **Conversion Optimization Studies**: Value anchoring ($2500+ messaging) creates price contrast making insurance seem more valuable (behavioral economics)
- **Internal Evidence**: Strong quote form performance with perk integration (14% improvement) suggests homepage awareness could amplify results

**Design & Development Scope**:
Design team creates above-fold perk mention integrated with existing homepage hero section maintaining visual hierarchy and brand consistency. Frontend development implements responsive layout changes with clear "$2500+ member perks" value anchor linking to spot-perks page. A/B testing requires traffic splitting configuration through existing testing infrastructure with UTQ rate tracking via Google Analytics and Segment integration. Implementation involves homepage layout modification, mobile responsive adjustments, and analytics tracking setup requiring 2-3 days of frontend development.

---

## 11-MONTH COHORT EXPLORATORY EXPERIMENTS

### **E1: Annual Renewal Perk Campaign**

**Hypothesis**: IF we send anniversary-timed perk communications to 11-month customers highlighting exclusive member benefits THEN renewal rates will improve BECAUSE milestone messaging reinforces value perception during renewal decision period AS MEASURED BY 11-month+ retention rate and renewal completion.

**Supporting Research - What Informed This Test**:
- **Internal Data**: Golden Day 12 showed 2.9% churn reduction at 11 months, indicating some responsiveness in this cohort
- **Customer Lifecycle Research**: Anniversary timing creates natural evaluation moments where value reinforcement is most effective
- **Loyalty Program Studies**: Milestone recognition increases customer lifetime value by 18-25% across industries (Bain & Company)
- **Insurance Industry Research**: Renewal period represents highest churn risk, but targeted campaigns can improve retention by 10-15%

**Design & Development Scope**:
Marketing creates "One Year Member Benefits" campaign emphasizing tenure-based value and exclusive access messaging with anniversary timing personalization. Customer.io automation triggers based on policy start date plus 11 months with specialized email template and perk selection highlighting premium partners. Analytics tracking focuses on renewal completion rates and post-email engagement patterns. Implementation requires Customer.io date-based trigger configuration, custom email template creation, and renewal rate tracking integration requiring 5-7 days for campaign development and automation setup.

---

### **E2: Loyalty Program Positioning**

**Hypothesis**: IF we reframe existing perks as earned loyalty rewards for 11-month customers rather than standard offerings THEN engagement will increase BECAUSE status recognition appeals to "respect from others" psychological driver AS MEASURED BY perk page engagement and email interaction rates.

**Supporting Research - What Informed This Test**:
- **Resonate Data**: "Respect from others" identified as key psychological driver for customer base
- **Loyalty Psychology**: Status-based messaging increases engagement 20-35% compared to transactional communications (Harvard Business Review)
- **Internal Context**: 11-month customers have demonstrated commitment and may respond to earned status recognition
- **Behavioral Economics**: Endowment effect suggests customers value benefits more when framed as earned rather than given

**Design & Development Scope**:
Marketing develops "Loyalty Member Rewards" messaging framework repositioning identical perks with earned status language and tenure recognition. Email templates emphasize member level achievement with visual badges and exclusive access language. Customer.io segments 11-month+ customers for specialized messaging treatment while maintaining same perk access. Creative development includes status-focused email design, loyalty badge creation, and messaging audit across customer touchpoints requiring 3-4 days for content creation and template updates with no backend technical changes needed.