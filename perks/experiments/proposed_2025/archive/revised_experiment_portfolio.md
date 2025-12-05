# Revised Spot Perks Experiment Portfolio 2025

**Strategic Approach**: Balanced testing across cohorts with emphasis on 3-6 month window, plus quote form conversion optimization.

**Key Insight**: September 2024 data shows modest 3-6 month benefits (26 fewer cancellations) - use as hypothesis to test, not gospel to follow.

---

## QUOTE FORM EXPERIMENTS (Revenue Impact Focus)

### **QF1: Perk Value Anchoring Test**
**Timeline**: 2-3 weeks | **Type**: Rapid | **Impact**: High | **Target**: All quoters

**Hypothesis**: IF we test different value anchors for perks in the quote form THEN conversion rates will improve BECAUSE higher perceived value creates stronger purchase motivation AS MEASURED BY UTQ and QTP rates.

**Supporting Research - What Informed This Test**:
- **Internal Data**: Current 6-perk horizontal cards showing 14% QTP improvement over single perk
- **Behavioral Economics**: Anchoring bias studies show higher reference points increase perceived value (Kahneman & Tversky)
- **Value Perception Research**: Bundled benefits create stronger purchase intent than individual offers (Harvard Business Review)
- **Current Baseline**: $2500 value anchor in existing quote form

**Design & Development Scope**:
Marketing team creates three value anchor variants testing $3500, $5000, and $7500+ messaging while maintaining same partner offerings. Design team updates quote form section with new value messaging and visual emphasis. Frontend development implements A/B testing with traffic splitting across value anchor options. Implementation requires quote form content updates, design modifications, and analytics tracking setup requiring 2-3 weeks including QA testing.

---

### **QF2: Perk Presentation Format Test**
**Timeline**: 3-4 weeks | **Type**: Complex | **Impact**: High | **Target**: All quoters

**Hypothesis**: IF we test different perk presentation formats in the quote form THEN we can identify the most effective approach for conversion AS MEASURED BY UTQ, QTP, and time-to-bind metrics.

**Supporting Research - What Informed This Test**:
- **Email Test Learning**: Test Group B (consolidated design) performed better than Test Group A (individual cards) in retention test
- **Cognitive Load Theory**: Simplified information presentation reduces decision fatigue and improves conversion
- **Visual Hierarchy Research**: Grouped vs individual presentations affect perceived value and decision-making (Nielsen Norman Group)
- **Internal Baseline**: Current 6-perk horizontal cards as established baseline

**Design & Development Scope**:
Design team creates four presentation variants: current horizontal cards, consolidated grouped design (like Test Group B), carousel format, and modal popup overlay. Frontend development builds responsive layouts for each format with consistent perk content across variants. A/B testing framework splits traffic evenly with conversion tracking through existing analytics infrastructure. Development includes comprehensive cross-browser testing, mobile optimization, and performance monitoring requiring 3-4 weeks for full implementation.

---

### **QF3: Progressive Perk Disclosure**
**Timeline**: 4-5 weeks | **Type**: Complex | **Impact**: Medium | **Target**: All quoters

**Hypothesis**: IF we reveal perks progressively through the quote form journey THEN engagement and conversion will improve BECAUSE staged disclosure creates anticipation and reduces cognitive overload AS MEASURED BY quote completion rates and conversion metrics.

**Supporting Research - What Informed This Test**:
- **Progressive Disclosure UX**: Revealing information gradually improves task completion rates (Google UX Research)
- **Gamification Research**: Staged rewards create stronger engagement than immediate full disclosure (Behavioral Economics)
- **Customer Journey Optimization**: Multi-step value revelation improves purchase intent across industries
- **Internal Opportunity**: Current all-at-once perk presentation may overwhelm quote process

**Design & Development Scope**:
Product team designs progressive reveal strategy showing perk hints in step 1, partial details in step 2, and full access post-purchase. Frontend development creates smooth transition animations and content staging across quote form steps. Backend modifications track user engagement at each reveal stage with Customer.io integration for follow-up targeting. Complex implementation requires UX research, multi-step development, and careful funnel optimization taking 4-5 weeks including user testing phases.

---

## RETENTION EXPERIMENTS (Balanced Cohort Approach)

### **R1: Multi-Cohort Perk Messaging Test**
**Timeline**: 3-4 weeks | **Type**: Complex | **Impact**: High | **Target**: All tenure cohorts

**Hypothesis**: IF we test different perk messaging approaches across multiple customer tenure cohorts THEN we'll identify optimal messaging for each lifecycle stage AS MEASURED BY cohort-specific churn rates and engagement metrics.

**Supporting Research - What Informed This Test**:
- **September 2024 Data**: 3-6 months showed modest improvement (26 fewer cancellations), but sample size limits conclusions
- **Customer Lifecycle Theory**: Different tenure groups have different value perceptions and communication preferences
- **Messaging Psychology**: Acquisition vs retention vs loyalty messaging resonates differently by customer maturity
- **Strategic Need**: Avoid over-indexing on limited 3-6 month data without broader testing

**Design & Development Scope**:
Marketing team develops cohort-specific messaging frameworks: new customer education (0-3 months), value reinforcement (3-6 months), loyalty rewards (6-12 months), and VIP recognition (12+ months). Customer.io segmentation creates precise tenure-based audiences with tailored email campaigns and control groups for each cohort. Analytics implementation tracks cohort-specific engagement and retention metrics with statistical significance testing. Requires comprehensive campaign development, audience management, and measurement infrastructure taking 3-4 weeks for full deployment.

---

### **R2: 3-6 Month Optimization (Emphasized Focus)**
**Timeline**: 2-3 weeks | **Type**: Rapid | **Impact**: Medium | **Target**: 3-6 month cohort

**Hypothesis**: IF we optimize perk communications specifically for the 3-6 month cohort using learnings from September 2024 test THEN we can amplify the modest retention benefits observed AS MEASURED BY churn rate improvement beyond the 0.6% baseline.

**Supporting Research - What Informed This Test**:
- **September 2024 Results**: Test Group B (consolidated design) achieved 12.86% vs 13.59% control churn rate
- **Email Design Learning**: Consolidated presentation outperformed individual perk cards format
- **Customer Lifecycle**: 3-6 months represents post-onboarding but pre-habituation period where interventions show promise
- **Scale Opportunity**: 26 fewer cancellations suggests room for optimization with better execution

**Design & Development Scope**:
Marketing adapts successful Test Group B consolidated email design for broader 3-6 month communications with enhanced personalization based on Resonate customer insights. Customer.io creates optimized automation sequence with improved timing, content, and visual presentation. A/B testing compares enhanced approach against current communications with 25% control group for measurement. Implementation leverages existing infrastructure with design improvements and content optimization requiring 2-3 weeks for deployment and initial results.

---

### **R3: Cross-Cohort Negative Impact Investigation**
**Timeline**: 2-3 weeks | **Type**: Rapid | **Impact**: Medium | **Target**: 9-12 and 24+ month cohorts

**Hypothesis**: IF we investigate why perks increase churn in older customer cohorts THEN we can either fix the messaging or eliminate harmful communications AS MEASURED BY reduced negative impact on retention.

**Supporting Research - What Informed This Test**:
- **September 2024 Data**: 24+ months showed increased churn with both perk approaches (8.26% → 8.71% and 9.17%)
- **Customer Psychology**: Over-communication or irrelevant messaging can damage brand perception and increase churn
- **Communication Fatigue Research**: Established customers may view promotional content as reducing perceived value
- **Risk Mitigation**: Currently spending resources on demonstrably harmful communications

**Design & Development Scope**:
Research team conducts content audit of current perk communications to older cohorts identifying potential irritation factors. Marketing tests three approaches: no perk communications, loyalty-focused messaging, and value education content. Customer.io implements cohort-specific testing with careful control group management to measure impact elimination. Analysis focuses on understanding root causes of negative response with survey integration for qualitative insights requiring 2-3 weeks for testing and analysis.

---

## ACCESS & EXPERIENCE EXPERIMENTS

### **UX1: Account Gate Alternative Testing**
**Timeline**: 3-4 weeks | **Type**: Complex | **Impact**: High | **Target**: All customers seeking perk access

**Hypothesis**: IF we test alternative authentication methods for perk access THEN utilization will increase while maintaining perceived exclusivity AS MEASURED BY perk page conversion rates and customer satisfaction.

**Supporting Research - What Informed This Test**:
- **UX Research**: Complex authentication reduces completion rates by 15-40% across digital services (Baymard Institute)
- **Internal Constraint**: Account number gate only exclusivity mechanism for public coupon codes
- **Access Optimization**: Reducing friction could unlock retention benefits currently limited by low utilization
- **Fi Data Insight**: When customers actually engage with perks, retention benefits exist

**Design & Development Scope**:
Development team creates three alternative authentication approaches: email + last 4 policy digits, magic link authentication, and progressive access tiers. Backend implementation requires secure token generation, policy lookup integration, and customer verification systems. Frontend builds user-friendly authentication flows with clear value communication and fallback options. Security review ensures customer data protection while improving user experience requiring 3-4 weeks for development and security validation.

---

### **UX2: Personalization Engine Implementation**
**Timeline**: 5-6 weeks | **Type**: Complex | **Impact**: High | **Target**: All perk communications

**Hypothesis**: IF we implement personalized perk recommendations based on Resonate customer insights THEN engagement and retention will improve BECAUSE relevant messaging creates stronger value perception AS MEASURED BY email engagement and cohort-specific retention rates.

**Supporting Research - What Informed This Test**:
- **Resonate Data**: 74% female, health-conscious, budget-conscious ($25-50k income) customer segments identified
- **Personalization Research**: Targeted messaging drives 15-25% engagement improvement over generic communications
- **Customer Segmentation**: Health-focused vs budget-focused customers likely respond to different perk presentations
- **Scalability**: Personalization could improve results across all cohorts rather than optimizing specific windows

**Design & Development Scope**:
Engineering team integrates Resonate API for real-time customer classification with Customer.io for dynamic content rendering. Marketing develops health-wellness and budget-savings perk collections with tailored messaging frameworks. Frontend implements personalized perk page experiences with recommendation algorithms and A/B testing capability. Comprehensive implementation includes data integration, content management system, and performance optimization requiring 5-6 weeks for full deployment and testing.

---

## SUCCESS METRICS & MEASUREMENT

### **Quote Form Experiments**
- **Primary**: UTQ and QTP rate improvements
- **Secondary**: Time-to-bind, quote completion rates
- **Target**: 2-5% conversion improvement minimum

### **Retention Experiments**
- **Primary**: Cohort-specific churn rate changes
- **Secondary**: Email engagement, customer satisfaction
- **Target**: Meaningful improvement beyond September 2024 baseline (emphasis on 3-6 months)

### **Experience Experiments**
- **Primary**: Perk page conversion rates, utilization metrics
- **Secondary**: Customer support reduction, satisfaction scores
- **Target**: Significant increase in actual perk engagement

## IMPLEMENTATION PRIORITY

### **Phase 1 (Weeks 1-4): Foundation & Quick Wins**
1. **QF1: Value Anchoring** - Test higher value perceptions in quote form
2. **R2: 3-6 Month Optimization** - Build on proven sweet spot with better execution
3. **UX1: Account Gate Alternatives** - Remove access barriers limiting program effectiveness

### **Phase 2 (Weeks 4-8): Strategic Testing**
1. **QF2: Presentation Format** - Optimize quote form perk display for maximum conversion
2. **R1: Multi-Cohort Testing** - Understand effectiveness across all customer segments
3. **R3: Negative Impact Investigation** - Fix or eliminate harmful communications

### **Phase 3 (Weeks 8-12): Advanced Optimization**
1. **QF3: Progressive Disclosure** - Test sophisticated quote form perk integration
2. **UX2: Personalization Engine** - Scale relevant messaging across all touchpoints
3. **Portfolio Optimization** - Based on learnings from earlier phases

This balanced approach emphasizes the 3-6 month window where data shows promise while testing broadly to identify larger opportunities and avoid over-indexing on limited results.