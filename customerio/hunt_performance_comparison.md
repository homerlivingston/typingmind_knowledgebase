# Hunt Campaign Performance: Transactional vs Multi-Touch Analysis
**Period:** August 19 - November 17, 2025 (90 days)
**Data Source:** Customer.io MCP (Human-only metrics, excludes bots)
**Analysis Date:** November 17, 2025

---

## Executive Summary

### The Transactional Advantage

Transactional emails (single message immediately after quote_started) **dramatically outperform** multi-touch Hunt campaigns:

| Metric | Transactional | Hunt | Difference |
|--------|--------------|------|------------|
| **Avg Open Rate** | 15.3% | 6.6% | **+132% higher** |
| **Avg Click Rate** | 4.9% | 0.6% | **+717% higher** |
| **Avg Click-to-Open** | 33.6% | 9.4% | **+257% higher** |

**Key Insight:** Immediacy and single-message focus drive significantly higher engagement than extended nurture sequences.

---

## Campaign Type Comparison

### Transactional Campaigns (Immediate, Single Message)

**Purpose:** Instant quote confirmation and initial engagement
**Timing:** Triggered immediately on `quote_started` event
**Message Count:** 1 email or SMS

| Segment | Campaign | Sent | Delivered | Open Rate | Click Rate | Click-to-Open | Unsub Rate |
|---------|----------|------|-----------|-----------|------------|---------------|------------|
| **Direct** | 98 (Email) | 272,652 | 98.93% | **19.36%** ⭐ | **5.56%** | 28.70% | 0.81% |
| **API Partner** | 99 (Email) | 732,562 | 98.54% | 15.22% | 4.77% | **31.34%** | 1.50% |
| **Sam's Club** | 215 (Email) | 19,185 | **99.31%** ⭐ | 18.91% | **5.60%** ⭐ | 29.61% | 0.86% |
| **MSN** | 104 (Email) | 70,561 | **99.64%** ⭐ | 7.88% | 3.52% | **44.63%** ⭐⭐ | 0.12% |
| **TOTAL** | - | 1,094,960 | 98.83% | **15.31%** | **4.86%** | **33.57%** | **1.16%** |

---

### Hunt Campaigns (Multi-Touch, ~14 Messages, ~58 Days)

**Purpose:** Extended nurture to conversion over time
**Timing:** Multi-week sequence with delays and conditional logic
**Message Count:** ~14 emails per journey

| Segment | Campaign | Sent | Delivered | Open Rate | Click Rate | Click-to-Open | Unsub Rate |
|---------|----------|------|-----------|-----------|------------|---------------|------------|
| **Direct** | 12 (Email) | 4,069,924 | 98.33% | 8.57% | 0.64% | 7.43% | 0.82% |
| **API Partner** | 67 (Email) | 8,853,757 | 98.41% | 7.89% | 0.58% | 7.35% | 1.01% |
| **Sam's Club** | 218 (Email) | 256,622 | 98.61% | 6.75% | 0.70% | 10.36% | 0.64% |
| **MSN** | 28 (Email) | 1,221,463 | **99.09%** | 3.39% | 0.48% | 14.09% | 0.09% |
| **TOTAL** | - | 14,401,766 | 98.45% | **7.68%** | **0.59%** | **7.68%** | **0.86%** |

---

## The Performance Gap: Transactional vs Hunt

### Email Engagement Comparison

| Metric | Transactional | Hunt | Transactional Advantage |
|--------|---------------|------|-------------------------|
| **Open Rate** | 15.31% | 7.68% | **+99% higher** (2x) |
| **Click Rate** | 4.86% | 0.59% | **+724% higher** (8.2x) |
| **Click-to-Open** | 33.57% | 7.68% | **+337% higher** (4.4x) |
| **Delivery Rate** | 98.83% | 98.45% | +0.4% (minimal) |
| **Unsubscribe Rate** | 1.16% | 0.86% | -35% (higher churn) |

**Why the Gap?**
1. **Timing:** Transactional hits when interest is peak (just quoted)
2. **Relevance:** Quote confirmation is expected and valuable
3. **Simplicity:** Single, focused message vs. 14-message fatigue
4. **Urgency:** Immediate = action, delayed = forgotten
5. **Inbox Placement:** Transactional often bypasses promotions tab

---

## Segment Analysis: Transactional Campaigns

### 1. Direct Transactional Email (Campaign 98)

**Volume:** 272,652 sent
**Performance:**
- ✅ **19.36% open rate** - HIGHEST across all transactional
- ✅ **5.56% click rate** - HIGHEST (tied with Sam's Club)
- ✅ 28.70% Click-to-Open rate
- ⚠️ 0.81% unsubscribe rate

**vs Direct Hunt (Campaign 12):**
- Open rate: **126% higher** (19.36% vs 8.57%)
- Click rate: **769% higher** (5.56% vs 0.64%)
- Click-to-Open: **286% higher** (28.70% vs 7.43%)

**Insight:** Direct quoters (organic) are most engaged at point of quote - capitalize on this with strong transactional messaging and clear CTAs.

---

### 2. API Partner Transactional Email (Campaign 99)

**Volume:** 732,562 sent (largest transactional)
**Performance:**
- ✅ 15.22% open rate (strong, though lower than Direct)
- ✅ 4.77% click rate (strong)
- ✅ **31.34% Click-to-Open** - HIGHEST among high-volume segments
- ⚠️ 1.50% unsubscribe rate (highest)

**vs API Partner Hunt (Campaign 67):**
- Open rate: **93% higher** (15.22% vs 7.89%)
- Click rate: **723% higher** (4.77% vs 0.58%)
- Click-to-Open: **326% higher** (31.34% vs 7.35%)

**Insight:** Even comparison shoppers engage well with transactional confirmation. The 31% Click-to-Open suggests those who open ARE interested - need to get more to open.

---

### 3. Sam's Club Transactional Email (Campaign 215)

**Volume:** 19,185 sent (smallest)
**Performance:**
- ✅ **99.31% delivery rate** - Best in class
- ✅ **18.91% open rate** - 2nd highest
- ✅ **5.60% click rate** - HIGHEST overall
- ✅ 29.61% Click-to-Open
- ✅ 0.86% unsubscribe rate

**vs Sam's Club Hunt (Campaign 218):**
- Open rate: **180% higher** (18.91% vs 6.75%)
- Click rate: **700% higher** (5.60% vs 0.70%)
- Click-to-Open: **186% higher** (29.61% vs 10.36%)

**Insight:** Sam's Club partnership drives quality leads - both transactional AND hunt perform well relative to other segments. Small but mighty.

---

### 4. MSN Transactional Email (Campaign 104)

**Volume:** 70,561 sent
**Performance:**
- ✅ **99.64% delivery rate** - BEST across all campaigns
- ⚠️ 7.88% open rate - Much lower than other transactionals
- ✅ 3.52% click rate
- ✅ **44.63% Click-to-Open** - HIGHEST ACROSS ALL CAMPAIGNS ⭐⭐⭐
- ✅ 0.12% unsubscribe rate - Extremely low

**vs MSN Hunt (Campaign 28):**
- Open rate: **132% higher** (7.88% vs 3.39%)
- Click rate: **633% higher** (3.52% vs 0.48%)
- Click-to-Open: **217% higher** (44.63% vs 14.09%)

**The MSN Enigma:**
- Transactional open rate (7.88%) still lowest among transactionals
- But **44.63% Click-to-Open is INSANE** - nearly 1 in 2 who open will click
- Hunt C-to-O is also strong (14.09%)
- Consistent pattern: Low opens, extremely high engagement when opened

**Hypothesis:**
- Microsoft/Outlook aggressively filters to Promotions/Clutter/Junk
- Subject lines not optimized for Outlook
- Those who DO see emails in inbox are highly qualified/engaged
- Possible: MSN users are older/more deliberate decision-makers?

**Opportunity:**
- If we can get MSN opens from 7.88% to even 12%, with 44% C-to-O we'd see massive click volume increase
- Subject line testing specifically for Outlook users
- Sender name optimization for Outlook inbox placement

---

## SMS Performance: Transactional vs Hunt

### Transactional SMS

| Segment | Campaign | Sent | Delivered | Delivery Rate | Clicks | Notes |
|---------|----------|------|-----------|---------------|--------|-------|
| **Direct** | 96 | 141,138 | 135,235 | 95.82% | 0 | - |
| **API Partner** | 97 | 247,425 | 226,858 | 91.69% | 0 | Lowest delivery |
| **Sam's Club** | 221 | 10,073 | 9,804 | 97.33% | 0 | - |
| **MSN** | 69 | 30,186 | 28,709 | 95.11% | 0 | - |
| **TOTAL** | - | 428,822 | 400,606 | 93.42% | 0 | - |

### Hunt SMS

| Segment | Campaign | Sent | Delivered | Delivery Rate | Clicks | Notes |
|---------|----------|------|-----------|---------------|--------|-------|
| **Direct** | 25 | 1,149,832 | 1,081,621 | 94.07% | 0 | Includes MSN |
| **API Partner** | 26 | 1,574,621 | 1,440,343 | 91.47% | 0 | Lowest delivery |
| **Sam's Club** | 223 | 81,399 | 80,035 | 98.32% | 0 | Highest delivery |
| **TOTAL** | - | 2,805,852 | 2,601,999 | 92.73% | 0 | - |

**SMS Insights:**
1. **No click data for ANY SMS** (transactional or hunt) - tracking issue or no links
2. **Transactional SMS delivery (93.42%) similar to Hunt (92.73%)** - no timing advantage
3. **API Partner consistently lowest delivery** (91.69% transactional, 91.47% hunt)
4. **Sam's Club best SMS delivery** (97.33% transactional, 98.32% hunt)

**Action Required:**
- Investigate SMS click tracking immediately
- Review SMS message content - do links exist?
- Check link shortening/tracking configuration
- If no links, add trackable CTAs to measure engagement

---

## Transactional Performance by Segment Ranking

### Open Rate (Email)
1. **Direct:** 19.36% ⭐
2. **Sam's Club:** 18.91%
3. **API Partner:** 15.22%
4. **MSN:** 7.88% (still 2.3x higher than MSN Hunt)

### Click Rate (Email)
1. **Sam's Club:** 5.60% ⭐
2. **Direct:** 5.56%
3. **API Partner:** 4.77%
4. **MSN:** 3.52%

### Click-to-Open Rate (Email)
1. **MSN:** 44.63% ⭐⭐⭐ (PHENOMENAL)
2. **API Partner:** 31.34%
3. **Sam's Club:** 29.61%
4. **Direct:** 28.70%

### Delivery Rate (Email)
1. **MSN:** 99.64% ⭐
2. **Sam's Club:** 99.31%
3. **Direct:** 98.93%
4. **API Partner:** 98.54%

---

## Hunt Performance by Segment Ranking

### Open Rate (Email)
1. **Direct:** 8.57% ⭐
2. **API Partner:** 7.89%
3. **Sam's Club:** 6.75%
4. **MSN:** 3.39%

### Click Rate (Email)
1. **Sam's Club:** 0.70% ⭐
2. **Direct:** 0.64%
3. **API Partner:** 0.58%
4. **MSN:** 0.48%

### Click-to-Open Rate (Email)
1. **MSN:** 14.09% ⭐
2. **Sam's Club:** 10.36%
3. **Direct:** 7.43%
4. **API Partner:** 7.35%

---

## Strategic Implications

### 1. Transactional Optimization is Critical

**Why it matters:**
- Transactional emails drive **8x more clicks** than hunt campaigns
- Highest engagement when interest is peak
- Lower volume but higher quality interactions

**Recommendations:**
1. **Maximize transactional CTA effectiveness**
   - A/B test CTAs, button placement, urgency language
   - Ensure mobile optimization (most opens)
   - Clear value prop and next steps

2. **Segment-specific transactional optimization**
   - MSN: Focus on getting into inbox (subject line, sender name)
   - API Partner: Competitive differentiation in transactional
   - Sam's Club: Emphasize exclusive discount immediately
   - Direct: Leverage high engagement with conversion messaging

3. **Consider multi-CTA transactional**
   - Primary: Complete purchase
   - Secondary: Learn more / FAQ
   - Tertiary: Save quote for later

---

### 2. Hunt Campaign Purpose Re-evaluation

**Current Reality:**
- Hunt campaigns get **7.68% open rate** vs 15.31% transactional
- Hunt campaigns get **0.59% click rate** vs 4.86% transactional
- 14 messages over 58 days creates engagement fatigue

**Questions to Consider:**
1. **Is 14 messages optimal?** Could we achieve same/better results with fewer, better-timed messages?
2. **What role does Hunt serve?** Re-engagement for those who didn't act on transactional?
3. **Should Hunt be more selective?** Only send to non-purchasers after transactional?
4. **Can we shorten the journey?** 58 days may be too long - test 30-day version?

**Recommended Tests:**
1. **Condensed Hunt** - 7 messages over 30 days vs. current 14 over 58 days
2. **Engagement-based continuation** - Only continue Hunt if they open first 2-3 emails
3. **Purchase-intent scoring** - Send different Hunt based on transactional engagement
4. **Control group** - Transactional only (no hunt) to measure incremental value

---

### 3. The MSN Opportunity

**The Numbers:**
- Transactional: 7.88% open, 44.63% Click-to-Open
- Hunt: 3.39% open, 14.09% Click-to-Open
- **Consistent pattern:** Low opens, exceptional engagement

**The Upside:**
If MSN transactional opens increased from 7.88% to just **12%** (still below Direct's 19.36%):
- Current clicks: 2,473
- Potential clicks: **~3,765** (+52% increase)

**Action Plan:**
1. **Inbox placement audit**
   - Seed test Outlook.com, Hotmail, Live.com
   - Check promotions/clutter/junk placement
   - Review domain reputation with Microsoft

2. **Subject line optimization**
   - Test professional/formal vs. casual
   - Test question-based vs. statement-based
   - Test personalization tokens
   - A/B test 5-10 variations specifically for MSN

3. **Sender name testing**
   - Test "Spot Pet Insurance" vs. "Your Pet Quote" vs. "[Pet Name]'s Quote"
   - Company name may trigger filters

4. **Content analysis**
   - Why are the 7.88% who open SO engaged (44% C-to-O)?
   - Can we replicate that quality signal in subject line?

---

### 4. Volume vs. Quality Trade-offs

**API Partner Reality Check:**
- **Transactional:** 732K sent, 15.22% open, 4.77% click = 34,446 clicks
- **Hunt:** 8.9M sent, 7.89% open, 0.58% click = 50,533 clicks
- **Total clicks:** 84,979 from API Partner channel

**But:**
- Highest unsubscribe rate (1.50% transactional, 1.01% hunt)
- Lowest SMS delivery (91.69% transactional, 91.47% hunt)
- 61% of email volume but comparable engagement to smaller segments

**Strategic Questions:**
1. **Partner quality variation:** Are some API partners better than others?
2. **List hygiene:** Are we sending to unqualified leads?
3. **Competitive positioning:** Is our messaging differentiated enough for comparison shoppers?

**Recommended Analysis:**
1. **Break out performance by individual API partner** (Forbes vs WAG vs others)
2. **Analyze partner-by-partner unsubscribe rates**
3. **Test API-partner-specific messaging** that addresses comparison shopping behavior
4. **Consider tiering partners** based on quality metrics

---

## Benchmarking: Transactional vs Hunt vs Industry

### Transactional Email Performance

| Metric | Our Transactional | Industry Standard (Insurance) | Gap |
|--------|-------------------|------------------------------|-----|
| Open Rate | 15.31% | 20-25% | -23% below |
| Click Rate | 4.86% | 5-8% | -9% below |
| Click-to-Open | 33.57% | 25-30% | **+12% above** ✅ |
| Delivery | 98.83% | 95-98% | **On target** ✅ |

**Assessment:** Our transactional click-to-open is EXCELLENT (33.57%). Open rate opportunity exists.

### Hunt Email Performance

| Metric | Our Hunt | Industry Standard (Nurture) | Gap |
|--------|----------|----------------------------|-----|
| Open Rate | 7.68% | 15-20% | -52% below ⚠️ |
| Click Rate | 0.59% | 2-4% | -71% below ⚠️ |
| Click-to-Open | 7.68% | 15-20% | -52% below ⚠️ |
| Delivery | 98.45% | 95-98% | **On target** ✅ |

**Assessment:** Hunt campaigns significantly underperforming industry standards. Major optimization opportunity.

**Note:** Industry benchmarks vary. Pet insurance nurture vs. other industries may have different norms.

---

## Immediate Action Items

### Week 1: Quick Wins

1. **Transactional CTA Optimization**
   - A/B test primary CTA wording (all segments)
   - Test urgency language ("Complete your quote today" vs "Secure [Pet]'s coverage")
   - Mobile CTA placement testing

2. **MSN Subject Line Blitz**
   - Create 10 subject line variants for MSN transactional
   - Launch A/B test with 5% holdout control
   - Focus on Outlook inbox placement language

3. **SMS Click Tracking Audit**
   - Verify links exist in SMS messages
   - Test click tracking functionality
   - Add trackable CTAs if missing

### Week 2-4: Strategic Tests

4. **Condensed Hunt Test**
   - Create 30-day, 7-message Hunt variant
   - Test vs. current 58-day, 14-message for API Partner (largest volume)
   - Measure: opens, clicks, unsubscribes, purchases

5. **API Partner Breakdown**
   - Pull metrics by individual partner (Forbes, WAG, etc.)
   - Rank partners by engagement and unsubscribe rate
   - Create partner-specific messaging for top/bottom performers

6. **Engagement-Based Hunt Entry**
   - Only enter Hunt if NO purchase within 24 hours of transactional send
   - Test: Does Hunt add value or just create noise for engaged prospects?

### Month 2-3: Deep Optimization

7. **Hunt Message Audit**
   - Analyze each of 14 Hunt messages for opens/clicks
   - Identify highest/lowest performers
   - Cut lowest performers, double down on winners

8. **Persona-Based Transactional Variants**
   - Create persona-specific transactional templates
   - Test persona alignment on open/click improvement
   - Apply learnings to Hunt messaging

9. **Journey Length Testing**
   - Test 30-day vs 45-day vs 58-day Hunt lengths
   - Measure: total engagement, purchase rate, unsubscribe rate
   - Optimize to minimum effective journey length

---

## Key Takeaways

1. **Transactional emails are 8x more effective** than Hunt campaigns on click rate - prioritize optimization here

2. **MSN has 44.63% Click-to-Open** on transactional but only 7.88% open rate - massive inbox placement opportunity

3. **Hunt campaigns underperform industry benchmarks** by 50%+ - need strategic re-evaluation

4. **14-message, 58-day journeys may create engagement fatigue** - test condensed versions

5. **API Partner volume is 61% but has highest churn** - need partner-level analysis and optimization

6. **SMS click tracking is broken or absent** - immediate technical investigation required

7. **Sam's Club consistently strong across transactional and hunt** - small but high-quality segment worth expanding

---

*This analysis reveals transactional messaging as the highest-leverage optimization opportunity, with MSN inbox placement and Hunt journey condensation as top strategic priorities.*
