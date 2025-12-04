# Spot Pet Insurance - Prompt Library

A collection of pre-built prompts for different teams and use cases. Copy and customize these for your needs.

---

## Executive Leadership

### Strategic Overview
```
Give me a high-level summary of Spot's current market position, including:
- Our competitive ranking
- Key growth metrics
- Top strategic priorities
Reference the relevant knowledge base files.
```

### Board/Investor Prep
```
I'm preparing for a board meeting. Summarize our performance across:
1. Market positioning vs competitors
2. Partnership channel performance
3. Key growth initiatives and their status
Keep it concise with bullet points.
```

### GEO Executive Summary
```
Explain our GEO (Generative Engine Optimization) performance in plain language for someone unfamiliar with the concept. Include:
- What GEO is and why it matters
- How we're performing vs competitors
- Top 3 opportunities
Reference the CEO deck outline if available.
```

### Competitive Threat Assessment
```
Which competitors should I be most concerned about right now? Analyze:
- Who's gaining visibility/market share
- What they're doing differently
- Where we're vulnerable
```

---

## Marketing Team

### GEO Content Planning
```
Based on our GEO data, what content should we prioritize creating? Consider:
- Topics where we have visibility gaps
- High search volume opportunities
- Topics where competitors are beating us
Provide specific content recommendations.
```

### Topic-Specific Content Brief
```
Create a content brief for [TOPIC]. Include:
- Why this topic matters (search volume, visibility gap)
- Key messages to include
- Competitor positioning on this topic
- Recommended format (landing page, blog, FAQ, etc.)
- AI-optimization tips (quotable statements, structured data needs)
```

### Competitive Messaging Analysis
```
How are AI platforms describing our competitors vs Spot? Analyze:
- What themes/benefits are associated with each brand
- Where competitors have stronger messaging
- Messaging gaps we could exploit
Reference brand_themes data if available.
```

### Campaign Performance Context
```
I'm analyzing a marketing campaign for [CHANNEL/CAMPAIGN]. What context from our knowledge base would help me understand:
- Target persona for this channel
- Expected conversion benchmarks
- How this fits our broader acquisition strategy
```

### PR/Media Pitch Ideas
```
Based on our GEO citation analysis, which publications should we prioritize for PR outreach? What story angles would resonate with:
- Finance publications (Bankrate, NerdWallet, etc.)
- Pet-focused media
- Business/HR publications (for employer benefits)
```

---

## Partnerships & Business Development

### Aggregator Performance Review
```
Summarize our aggregator partnership performance:
- Which partners drive the most volume?
- Which have the best conversion rates?
- Where are the optimization opportunities?
Reference partner_network.md for context.
```

### New Partnership Evaluation
```
I'm evaluating a potential partnership with [PARTNER NAME/TYPE]. Based on our partnership strategy and current portfolio:
- Does this align with our distribution priorities?
- What metrics should we target?
- What risks should we consider?
```

### Employer Benefits Opportunity
```
Provide talking points for an employer benefits sales conversation:
- Key value props for HR decision-makers
- How we compare to competitors in the employer space
- Success metrics/proof points we can share
```

### Sam's Club Partnership Update
```
Summarize the current state of our Sam's Club partnership:
- Performance vs expectations
- Member benefits and discount structure
- Optimization opportunities
```

### Partner Onboarding Brief
```
Create a brief for onboarding a new [AGGREGATOR/EMPLOYER/RETAIL] partner:
- Key Spot differentiators to highlight
- Technical integration requirements
- Performance metrics we'll track
- Common questions partners ask
```

---

## Product Team

### Product Positioning Summary
```
Summarize how our product is positioned in the market:
- Core coverage features
- Key differentiators vs competitors
- Pricing/value positioning
- Feature gaps competitors have that we don't (and vice versa)
```

### Feature Prioritization Context
```
I'm evaluating whether to build [FEATURE]. What context from our knowledge base would help:
- Do competitors offer this?
- Is this mentioned in customer feedback/AI responses?
- Does this align with our target personas?
```

### Competitive Feature Analysis
```
Compare Spot's product features to [COMPETITOR]:
- Coverage differences
- Pricing structure differences
- Claims process differences
- Unique features each offers
```

### Persona-Based Product Feedback
```
Based on our user personas, what product improvements would resonate most with:
- [PERSONA NAME]
Review user_personas.md and provide specific recommendations.
```

---

## Customer Success & Operations

### Customer Journey Overview
```
Walk me through our customer journey from awareness to advocacy:
- Key touchpoints at each stage
- Known friction points
- Conversion rates between stages
- Retention strategies
Reference user_journey.md and journey_metrics.md.
```

### Retention Analysis Context
```
I'm analyzing customer retention. What context do we have on:
- Current retention rates and benchmarks
- Common cancellation reasons
- Successful retention tactics
- High-risk customer indicators
```

### Claims Process Summary
```
Summarize our claims process and how it compares to competitors:
- Our average processing time
- How AI platforms describe our claims experience
- Competitor claims advantages/disadvantages
```

### Customer Segment Deep-Dive
```
Tell me everything we know about [CUSTOMER SEGMENT/PERSONA]:
- Demographics and psychographics
- Pain points and motivations
- Preferred communication channels
- Product preferences
- Acquisition channel preferences
```

---

## Data & Analytics Team

### SQL Query Help
```
I need to query [DATA NEED] from Databricks.
- Check standard_queries/ for existing queries I can use or modify
- Suggest the best approach
- Help me write or adapt the SQL
```

### Metrics Definition
```
Define the following metric and explain how we calculate it:
[METRIC NAME]
Include any nuances or caveats in how we track this.
```

### Dashboard Context
```
I'm building a dashboard for [AUDIENCE/PURPOSE]. Based on our knowledge base:
- What metrics should I include?
- What benchmarks/targets should I show?
- What context would make the data actionable?
```

### Data Quality Check
```
I'm seeing [UNEXPECTED DATA PATTERN]. Based on our knowledge base:
- Is this expected given recent changes?
- What might explain this variance?
- What additional data should I check?
```

### Cohort Analysis Setup
```
Help me design a cohort analysis for [USE CASE]:
- What cohorts should I create?
- What metrics should I track?
- What time periods make sense?
Reference monthly_cohort_retention.sql for examples.
```

---

## Sales Team (Employer Benefits)

### Employer Pitch Deck Content
```
I'm presenting to [COMPANY TYPE/SIZE]. Provide:
- Key talking points for HR/benefits decision-makers
- ROI/value messaging
- Relevant proof points
- Competitive differentiation for B2B
```

### Objection Handling
```
A prospect raised this objection: [OBJECTION]
Help me respond using our knowledge base:
- Relevant facts/data to counter
- Competitor comparison if applicable
- Success stories or proof points
```

### Industry-Specific Pitch
```
I'm targeting companies in [INDUSTRY]. Based on our knowledge:
- What messaging resonates with this sector?
- Any relevant partnerships or case studies?
- Industry-specific employee pet ownership data?
```

### Open Enrollment Prep
```
Open enrollment season is approaching. Help me prepare:
- Timeline and key milestones
- Messaging themes that work
- Collateral/resources I should have ready
- Performance benchmarks from previous seasons
```

---

## Content & SEO Team

### AI-Optimized Page Audit
```
Review this page content for AI optimization:
[PASTE CONTENT OR URL]
Suggest improvements for:
- Quotable summary statements
- Structured data opportunities
- Comparison tables
- Specific numbers/facts AI can cite
```

### New Landing Page Outline
```
Create an outline for a landing page on [TOPIC] optimized for AI visibility:
- H1 and key headers
- Must-include facts/differentiators
- FAQ questions to answer
- Internal linking opportunities
- Schema markup recommendations
```

### Blog Post Ideas
```
Based on our GEO gaps and search volume data, suggest 5 blog post ideas that would:
- Target high-volume topics where we're underperforming
- Be likely to get cited by AI platforms
- Support our key differentiators
```

### Competitor Content Gap
```
What content do competitors have that we're missing? Analyze:
- Topics they rank well on that we don't
- Content formats they use that we should consider
- Third-party coverage they've earned that we haven't
```

---

## General Purpose Prompts

### Quick Fact Check
```
What does our knowledge base say about [TOPIC]?
Cite the specific file and note if the information might be outdated.
```

### Competitor Quick Compare
```
Quick comparison: Spot vs [COMPETITOR] on [SPECIFIC ATTRIBUTE]
```

### Data Request
```
I need data on [TOPIC] for [PURPOSE].
- What's available in our knowledge base?
- What would I need to query from Databricks?
- What gaps exist?
```

### Meeting Prep
```
I have a meeting about [TOPIC] with [AUDIENCE]. Give me:
- Key facts I should know
- Likely questions and answers
- Relevant metrics to reference
```

### Status Update Draft
```
Help me draft a status update on [PROJECT/INITIATIVE] for [AUDIENCE]:
- Current state
- Key metrics
- Blockers/risks
- Next steps
Use our knowledge base for context and data.
```

---

## Tips for Using These Prompts

1. **Be specific** — Replace [BRACKETS] with actual values
2. **Add context** — Include what you already know or have tried
3. **Request format** — Ask for tables, bullets, or specific structures if needed
4. **Verify data** — Always confirm critical numbers against source files
5. **Iterate** — Use follow-up questions to drill deeper

---

*Last updated: December 2025*
