# Technical Constraints & Infrastructure

## Development Timelines

### Quote Form Changes
- **Small changes** (adding badges, text modifications): Few days
- **Medium changes** (layout adjustments, new sections): ~1 month
- **Large changes** (major redesigns, new functionality): 2-3 months
- **Average timeline**: 1 month including design and development

### A/B Testing Infrastructure
- **Statistical confidence**: ~2 weeks of traffic for quote form tests
- **Platform**: Builder.io for A/B testing capabilities
- **Current baseline**: 6-perk horizontal cards (running 1+ year)

## Analytics & Measurement Tools

### Primary Analytics
- **Datadog**: Performance and system monitoring
- **Tableau**: Business intelligence and reporting
- **Statsig**: Feature flagging and experimentation
- **Segment**: Customer data platform

### Customer Journey Tools
- **Customer.io**: Email and SMS campaign management
- **Resonate**: Third-party data enrichment (psychographics, behaviors, demographics)

### Segmentation Capabilities
Can target customers by:
- **Tenure** (policy age)
- **Pet type** (dog/cat)
- **Plan level** (coverage tier)
- **Engagement** (email opens, website activity)
- **Demographics** (via Resonate data)

## Email/SMS Infrastructure

### Customer.io Capabilities
- **Email campaigns**: Full automation and segmentation
- **SMS campaigns**: Available but limited usage to date
- **Journey automation**: Multi-step sequences based on triggers
- **A/B testing**: Built-in split testing capabilities

### Current Email Journeys
- **Hunt Journey**: For leads/quoters (all emails include perk banners)
- **Golden Journey**: Post-purchase sequence (begins immediately after purchase)

## Account Gate Technical Challenge

### Current Implementation
- **Account number entry**: Required on https://spotpet.com/spot-perks
- **Purpose**: Only exclusivity mechanism for public coupon codes
- **Limitation**: Creates friction barrier to perk access

### Alternative Authentication Options
- **Policy lookup**: Email + last 4 digits of policy number
- **Phone verification**: SMS to policy holder number
- **Magic links**: One-click email authentication
- **Progressive access**: Tier perks by verification level

### Data Access Capabilities
- **Customer policy data**: Available for authentication
- **Email/phone verification**: Technically feasible
- **Usage tracking**: Limited to email engagement metrics and Fi partnership data

## Partner Integration Constraints

### Current Limitations
- **No usage tracking**: Most partners don't share redemption data
- **Manual code management**: Coupon codes updated manually
- **Public code vulnerability**: Most codes work without Spot verification

### Opportunities
- **Fi partnership model**: Data sharing for optimization (current exception)
- **Unique code generation**: Per-customer codes for tracking
- **Partner API integration**: Automated provisioning and tracking

This technical foundation enables both rapid iteration and complex experimentation within defined constraints.