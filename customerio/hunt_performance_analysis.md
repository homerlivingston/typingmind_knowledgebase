# Hunt Campaign Performance Analysis
**Period:** August 19 - November 17, 2025 (90 days)
**Data Source:** Customer.io MCP (Human-only metrics, excludes bots)
**Analysis Date:** November 17, 2025

---

## Executive Summary

### Volume Overview
- **Total Email Sent:** 14.4M messages across all segments
- **Total SMS Sent:** 2.9M messages across all segments
- **Largest Segment:** API Partner (61% of email volume)
- **Smallest Segment:** Sam's Club (1.8% of email volume)

### Key Findings
1. **MSN has highest Click-to-Open rate (14.09%)** despite lowest open rate
2. **API Partner volume is 2.2x larger than Direct** but with comparable engagement
3. **Sam's Club shows strong Click-to-Open (10.36%)** suggesting highly engaged audience
4. **Direct has highest email open rate (8.57%)** across all segments
5. **SMS clicks are not being tracked** (0 clicks across all campaigns)

---

## Email Performance Comparison

### Overall Metrics

| Segment | Campaign | Sent | Delivered | Delivery Rate | Opened | Open Rate | Clicked | Click Rate | Click-to-Open |
|---------|----------|------|-----------|---------------|--------|-----------|---------|------------|---------------|
| **Direct** | 12 | 4,069,924 | 4,001,868 | 98.33% | 343,002 | 8.57% | 25,494 | 0.64% | 7.43% |
| **API Partner** | 67 | 8,853,757 | 8,713,271 | 98.41% | 687,276 | 7.89% | 50,533 | 0.58% | 7.35% |
| **Sam's Club** | 218 | 256,622 | 253,055 | 98.61% | 17,089 | 6.75% | 1,770 | 0.70% | 10.36% |
| **MSN** | 28 | 1,221,463 | 1,210,318 | 99.09% | 41,002 | 3.39% | 5,777 | 0.48% | 14.09% |
| **TOTAL** | - | 14,401,766 | 14,178,512 | 98.45% | 1,088,369 | 7.68% | 83,574 | 0.59% | 7.68% |

---

## SMS Performance Comparison

### Overall Metrics

| Segment | Campaign | Sent | Delivered | Delivery Rate | Clicked | Click Rate |
|---------|----------|------|-----------|---------------|---------|------------|
| **Direct** | 25 | 1,149,832 | 1,081,621 | 94.07% | 0 | 0% |
| **API Partner** | 26 | 1,574,621 | 1,440,343 | 91.47% | 0 | 0% |
| **Sam's Club** | 223 | 81,399 | 80,035 | 98.32% | 0 | 0% |
| **MSN** | - | *Uses Direct SMS (25)* | - | - | - | - |
| **TOTAL** | - | 2,805,852 | 2,601,999 | 92.73% | 0 | 0% |

**Note:** MSN quoters share Direct SMS campaign (25), so their SMS metrics are included in Direct numbers.

**⚠️ SMS Click Tracking Issue:** All campaigns show 0 clicks despite SMS being delivered. Possible causes:
1. SMS messages don't contain trackable links
2. Link tracking not properly configured
3. Reporting/attribution issue

---

## Detailed Segment Analysis

### 1. Direct Hunt (Organic)

**Email Campaign 12:**
- **Volume:** 4.1M sent (28% of total email volume)
- **Delivery:** 98.33% (industry standard)
- **Engagement:** 8.57% open rate (HIGHEST across segments)
- **Clicks:** 25,494 (0.64% of delivered)
- **Unsubscribes:** 32,700 (0.82% of delivered)

**SMS Campaign 25:**
- **Volume:** 1.15M sent (41% of total SMS volume)
- **Delivery:** 94.07% (lower than email)
- **Note:** Shared with MSN quoters

**Insights:**
- ✅ Highest email open rate suggests best message-market fit
- ✅ Strong delivery rates
- ⚠️ SMS delivery rate 4% lower than email
- 💡 Opportunity: Improve SMS delivery (carrier filtering?)

---

### 2. API Partner Hunt (Comparison Shoppers)

**Email Campaign 67:**
- **Volume:** 8.9M sent (61% of total email volume - LARGEST)
- **Delivery:** 98.41% (slightly better than Direct)
- **Engagement:** 7.89% open rate (0.7% lower than Direct)
- **Clicks:** 50,533 (0.58% of delivered)
- **Unsubscribes:** 87,876 (1.01% of delivered - HIGHEST rate)
- **Bounces:** 68,469 (0.77% of sent)

**SMS Campaign 26:**
- **Volume:** 1.57M sent (56% of total SMS volume)
- **Delivery:** 91.47% (LOWEST across segments)

**Insights:**
- ⚠️ 2.2x volume of Direct but 0.7% lower open rate
- ⚠️ Highest unsubscribe rate (1.01% vs 0.82% Direct)
- ⚠️ Lowest SMS delivery rate (91.47%)
- 💡 Opportunity: Segment quality or message relevance issues?
- 💡 Opportunity: Review unsubscribe reasons (comparison shoppers less committed?)
- 💡 Opportunity: Investigate SMS delivery issues (carrier filtering for bulk?)

---

### 3. Sam's Club Hunt (Partnership)

**Email Campaign 218:**
- **Volume:** 257K sent (1.8% of total - SMALLEST)
- **Delivery:** 98.61% (strong)
- **Engagement:** 6.75% open rate (lowest except MSN)
- **Clicks:** 1,770 (0.70% of delivered - HIGHEST click rate)
- **Click-to-Open:** 10.36% (2nd highest - engaged clickers)
- **Unsubscribes:** 1,626 (0.64% of delivered - LOWEST rate)

**SMS Campaign 223:**
- **Volume:** 81K sent (2.9% of total SMS)
- **Delivery:** 98.32% (HIGHEST SMS delivery rate)

**Insights:**
- ✅ Highest click rate (0.70%) - partnership messaging resonates
- ✅ Highest Click-to-Open rate among high-volume segments
- ✅ Lowest unsubscribe rate (0.64%)
- ✅ Highest SMS delivery rate (98.32%)
- ⚠️ Lower open rate (6.75%) - subject line optimization opportunity?
- 💡 Small but highly engaged segment
- 💡 Partnership value proposition working well for those who engage

---

### 4. MSN Hunt (Microsoft Email Users)

**Email Campaign 28:**
- **Volume:** 1.22M sent (8.5% of total)
- **Delivery:** 99.09% (HIGHEST across all segments)
- **Engagement:** 3.39% open rate (LOWEST by far - 2.4x lower than Direct)
- **Clicks:** 5,777 (0.48% of delivered)
- **Click-to-Open:** 14.09% (HIGHEST - highly engaged when they open)
- **Bounces:** 158 (0.01% - LOWEST bounce rate)
- **Unsubscribes:** 1,078 (0.09% - very low)

**SMS:** Uses Direct SMS (Campaign 25)

**Insights:**
- ✅ Best delivery rate (99.09%)
- ✅ Lowest bounce rate (0.01%)
- ✅ HIGHEST Click-to-Open rate (14.09%)
- ⚠️ LOWEST open rate (3.39%) - major opportunity
- 💡 Those who open are VERY engaged (14% click)
- 💡 Subject line or inbox placement issue preventing opens?
- 💡 Microsoft email filtering more aggressive?
- 💡 Could be promotional tab placement in Outlook

---

## Cross-Segment Insights

### Volume Distribution

**Email:**
1. API Partner: 61.5% (8.9M)
2. Direct: 28.3% (4.1M)
3. MSN: 8.5% (1.2M)
4. Sam's Club: 1.8% (257K)

**SMS:**
1. API Partner: 56.1% (1.57M)
2. Direct + MSN: 41.0% (1.15M)
3. Sam's Club: 2.9% (81K)

### Engagement Patterns

**Email Open Rate Ranking:**
1. Direct: 8.57% ⭐
2. API Partner: 7.89%
3. Sam's Club: 6.75%
4. MSN: 3.39% ⚠️

**Email Click Rate Ranking:**
1. Sam's Club: 0.70% ⭐
2. Direct: 0.64%
3. API Partner: 0.58%
4. MSN: 0.48%

**Click-to-Open Rate Ranking:**
1. MSN: 14.09% ⭐⭐
2. Sam's Club: 10.36% ⭐
3. Direct: 7.43%
4. API Partner: 7.35%

### Delivery Performance

**Email Delivery Rate Ranking:**
1. MSN: 99.09% ⭐
2. Sam's Club: 98.61%
3. API Partner: 98.41%
4. Direct: 98.33%

**SMS Delivery Rate Ranking:**
1. Sam's Club: 98.32% ⭐
2. Direct: 94.07%
3. API Partner: 91.47% ⚠️

### Unsubscribe Analysis

**Unsubscribe Rate by Segment:**
1. Sam's Club: 0.64% ✅ (most engaged)
2. Direct: 0.82%
3. MSN: 0.09% ✅ (very low - but also low opens)
4. API Partner: 1.01% ⚠️ (highest churn)

**Total Unsubscribes:**
- API Partner: 87,876 (71% of all unsubscribes)
- Direct: 32,700 (26%)
- Sam's Club: 1,626 (1.3%)
- MSN: 1,078 (0.9%)

---

## Key Observations

### 1. The MSN Paradox
**Challenge:** 3.39% open rate (60% lower than Direct)
**Opportunity:** 14.09% Click-to-Open rate (90% higher than Direct)

**Hypothesis:**
- Microsoft email clients (Outlook) may be filtering to Promotions/Other tabs
- Subject lines not optimized for Outlook inbox placement
- Possible domain reputation issue with Microsoft servers
- Those who DO open are highly qualified and engaged

**Recommended Actions:**
1. A/B test subject lines specifically for MSN segment
2. Review Microsoft inbox placement (use seed testing)
3. Analyze what makes the 3.39% who open so engaged
4. Consider sender domain/IP reputation with Microsoft

---

### 2. API Partner Volume vs. Engagement Trade-off
**Challenge:** 61% of volume but 1.01% unsubscribe rate
**Opportunity:** Massive scale with room for optimization

**Hypothesis:**
- Comparison shoppers less committed (shopping multiple providers)
- Messaging not differentiated enough from competitors
- Higher price sensitivity = higher abandonment
- Possible list quality issues from some API partners

**Recommended Actions:**
1. Analyze performance by individual API partner (Forbes vs WAG vs others)
2. A/B test competitive differentiation messaging
3. Segment API partners by quality/engagement
4. Review messaging cadence (too aggressive?)

---

### 3. Sam's Club High Intent Signal
**Strength:** 10.36% Click-to-Open despite lower opens
**Strength:** Lowest unsubscribe rate (0.64%)

**Hypothesis:**
- Partnership discount creates qualified, committed leads
- Sam's Club brand trust transfers to Spot
- Pre-qualified audience (Sam's members are savers)
- Small segment but high quality

**Recommended Actions:**
1. Study what's working and apply to other segments
2. Optimize open rate (subject line testing)
3. Expand partnership if possible
4. Use Sam's messaging themes for similar audiences

---

### 4. SMS Click Tracking Gap
**Issue:** 0 clicks across ALL campaigns

**Possible Causes:**
1. No trackable links in SMS messages
2. Links present but tracking not configured
3. Reporting issue in customer.io
4. SMS used for awareness, not clicks

**Recommended Actions:**
1. Review SMS message content - are there links?
2. Check link shortening/tracking configuration
3. Test SMS with known click to verify tracking
4. If no links, consider adding CTAs with trackable links

---

## Benchmarking

### Industry Standards (Pet Insurance Email)
- **Open Rate:** 15-25% (We're at 7.68% - below standard)
- **Click Rate:** 2-5% (We're at 0.59% - below standard)
- **Click-to-Open:** 15-20% (We're at 7.68% - below standard)
- **Delivery Rate:** 95-98% (We're at 98.45% - good)
- **Unsubscribe Rate:** <0.5% (We're at 0.86% - slightly high)

**Note:** Benchmarks vary widely by industry and list quality. Pet insurance nurture campaigns may have different standards than one-time promotional sends.

---

## Strategic Recommendations

### Immediate Actions (This Week)

1. **Investigate SMS Click Tracking**
   - Verify link presence in SMS messages
   - Test click tracking functionality
   - Add trackable CTAs if missing

2. **MSN Subject Line Optimization**
   - A/B test 3-5 subject line variants
   - Focus on Outlook inbox placement
   - Test sender name variations

3. **API Partner Segmentation**
   - Pull performance by individual API partner
   - Identify top/bottom performers
   - Create partner-specific messaging tests

### Short-term Optimizations (This Month)

4. **Sam's Club Scale-Up**
   - Document what's working in Sam's messaging
   - Test Sam's Club themes in Direct segment
   - Explore partnership expansion opportunities

5. **Unsubscribe Analysis**
   - Survey recent unsubscribes for reasons
   - Analyze when in journey they unsubscribe
   - Test preference center vs. full unsub

6. **Email Deliverability Audit**
   - Review sender reputation by segment
   - Analyze spam folder placement
   - Optimize authentication (SPF, DKIM, DMARC)

### Long-term Strategy (This Quarter)

7. **Persona-Based Messaging**
   - Overlay personas on segments
   - Create persona-specific message variants
   - Test persona alignment impact

8. **Journey Timing Optimization**
   - Analyze engagement by message number
   - Test condensed vs. extended journey lengths
   - Optimize send time windows by segment

9. **Multi-Channel Integration**
   - Fix SMS tracking and add strategic CTAs
   - Test email + SMS coordination
   - Analyze channel preference by segment

---

## Next Analysis Steps

### Message-Level Deep Dive
For top-performing segments, analyze:
- Which emails in the 14-message journey perform best?
- Where do people drop off?
- Which themes drive highest engagement?

### Time-Series Analysis
- When do engagement peaks/valleys occur?
- Day-of-week patterns?
- Seasonal trends?

### Cohort Analysis
- How do quoters entering at different times perform?
- Does engagement change over journey duration?
- What's the optimal journey length?

---

*This analysis provides actionable insights to optimize Hunt campaign performance across all quoter segments. Focus areas: MSN open rates, API partner unsubscribes, SMS click tracking, and Sam's Club success factors.*
