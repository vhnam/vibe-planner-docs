---
title: Needs
---

## 1. Need Identification

## 1.1. Problem Component

### 1.1.1. Business Problem Statement

> **"Vietnamese travelers are facing an inefficient, time-consuming travel planning process and lack reliable Vietnamese-language review information sources, leading to suboptimal travel experiences and low satisfaction rates."**

---

### 1.1.2. Problem Classification by Origin

#### 1.1.2.1. Bottom-up Problems (Problems from Current State)

**Problem 1: Fragmented & Inefficient Planning Process**

**Current State:**

- Travelers must use **5-10 different tools**: Google Search, Facebook Groups, Excel/Notes, Google Maps, TripAdvisor, Booking.com, etc.
- Information is stored **chaotically**: Screenshots in Gallery, links in Notes, bookmarks in browser
- **No structure**: Difficult to organize by day, by location, by budget
- **Collaborative planning is difficult**: Sharing via WhatsApp/Messenger, not real-time, version control problems

**Measurable Impact:**

- ⏱️ Average **10-15 hours** to plan a 3-4 day trip
- 📊 **65% of travelers** feel stressed when planning (assumption from market research)
- 🔄 **40% have to re-plan** multiple times due to missing/incorrect information
- 👥 **80% of group travelers** face coordination issues

**Root Cause:**

- No all-in-one tool suitable for Vietnamese users
- Existing tools designed for global market, not localized
- Lack of integration between search → research → planning

---

**Problem 2: Lack of Reliable Review Sources for Vietnamese Users**

**Current State:**

- **Google Reviews**: Many fake reviews, sponsored content
- **Facebook Groups**:
  - No structure, difficult to search
  - Outdated information
  - Have to ask the same questions repeatedly
- **TripAdvisor/Booking**:
  - Focus on foreign tourists
  - Don't reflect Vietnamese perspective (pricing, culture, taste)
- **Blogs**: Usually sponsored content, lack objectivity

**Measurable Impact:**

- 🎯 **55% of travelers** don't fully trust online reviews
- 💰 **30% of experiences** don't match expectations based on reviews
- 🔍 Average need to **check 3-5 different sources** to cross-verify
- ⏱️ **2-3 hours** just to research one location

**Root Cause:**

- Large review platforms don't focus on Vietnamese context
- Lack of community specifically for Vietnamese travelers
- No incentive to contribute quality reviews

---

**Problem 3: Post-Trip - Waste of Knowledge**

**Current State:**

- Experience and insights only shared within **small groups** (family/friends)
- Reviews scattered across multiple platforms → **No personal portfolio**
- **No motivation** to spend time writing detailed reviews
- Knowledge is wasted, doesn't benefit the broader community

**Impact:**

- 🗑️ **Only 15-20%** of travelers write reviews after trips
- 📝 Reviews are usually short, lacking detail
- 🔄 Vicious cycle: Lack of reviews → Others struggle with planning → Poor experience → Even fewer reviews

---

#### 1.1.2.2. External Drivers (External Factors)

**Driver 1: Customer Pain Points**

- Complaints on social media about "planning fatigue"
- Frustration with fake reviews, tourist traps
- Desire for "Vietnamese version of TripAdvisor"

**Driver 2: Market Competition**

- Global apps (TripAdvisor, Google Travel) increasing presence in Vietnam
- BUT no one serves the "Vietnamese travelers planning domestic trips" segment well
- Market gap not yet filled

---

#### 1.1.2.3. Top-down Strategic Problems

**Strategic Issue: Fragmentation in Travel Tech Ecosystem**

**Organizational Perspective** (of Vietnam's tourism industry in general):

- Lack of data insights about traveler behavior
- Small businesses struggle to reach customers
- Tourism boards lack tools to promote destinations
- **No platform connects all stakeholders**

**Impact on Strategic Goals:**

- 🎯 **Industry Goal**: 20% YoY growth in domestic tourism
- 🚧 **Barrier**: Lack of infrastructure to facilitate discovery & planning
- 💡 **Gap**: Need a platform to digitalize and democratize travel information

---

### 1.1.3. Problem Severity Analysis

| Problem                 | Frequency | Severity   | Impact    | Priority |
| ----------------------- | --------- | ---------- | --------- | -------- |
| Time-consuming planning | Very High | High       | High      | **P0**   |
| Lack of trusted reviews | High      | High       | High      | **P0**   |
| Difficult collaboration | Medium    | Medium     | High      | **P1**   |
| Waste of knowledge      | High      | Low-Medium | Medium    | **P2**   |
| Ecosystem fragmentation | Medium    | High       | Very High | **P1**   |

---

## 1.2. Opportunity Component

### 1.2.1. Business Opportunity Statement

> **"There is a significant opportunity to create an all-in-one platform serving 85 million Vietnamese people with rapidly growing domestic travel needs, by combining planning tools and community-driven reviews, thereby creating strong network effects and multiple revenue streams."**

---

### 1.2.2. Opportunity Classification

#### 1.2.2.1. Market Opportunities

**Opportunity 1: Domestic Tourism Boom**

**Market Data:**

- 📈 Vietnam domestic tourism growing **15-20% YoY**
- 💰 Spending: **$10-15 billion USD/year** (domestic tourism)
- 👥 **85 million population**, of which **40-45 million** are target audience (18-45 years old)
- 📱 Smartphone penetration: **>70%** of target audience

**Opportunity Size:**

- TAM (Total Addressable Market): 40M potential users
- SAM (Serviceable Available Market): 15M active travelers/year
- SOM (Serviceable Obtainable Market): 500K users in Year 3 (realistic)

**Why Now:**

- Post-COVID: Trend of "traveling nearby, traveling more frequently"
- Gen Z/Millennials travel more frequently
- Rising middle class with higher disposable income

---

**Opportunity 2: Market Gap**

**Competitive Gap Analysis:**

| Platform         | Planning | Review | Vietnamese Focus | Community | Gap                        |
| ---------------- | -------- | ------ | ---------------- | --------- | -------------------------- |
| TripAdvisor      | ❌       | ✅     | ❌               | ⚠️        | No planning, not localized |
| Google Travel    | ⚠️       | ⚠️     | ❌               | ❌        | Generic, no community      |
| Facebook Groups  | ❌       | ⚠️     | ✅               | ✅        | No structure, search       |
| Excel/Notion     | ⚠️       | ❌     | ❌               | ❌        | Technical, no social       |
| **Our Platform** | ✅       | ✅     | ✅               | ✅        | **Fill all gaps**          |

**White Space:**

- **No one** is serving all 4 dimensions well simultaneously
- Opportunity to become **category king** in this niche

---

**Opportunity 3: Network Effects & Virality**

**Positive Feedback Loop:**

```
More Users → More Reviews → Better Data → Better Recommendations
     ↑                                                      ↓
     ←←←←←←←←←←←← More Value → More Users ←←←←←←←←←←←
```

**Viral Mechanisms:**

- Trip planning: Invite friends → They become users
- Reviews: Tag locations → Discovery
- Social sharing: "Check out my Vietnam trip!" → Traffic

**Moat Created:**

- User-generated content = proprietary data
- Community = switching cost
- Data = better recommendations = competitive advantage

---

#### 1.2.2.2. Technology Opportunities

**Opportunity 4: Leverage Modern Tech**

**AI & Machine Learning:**

- Personalized recommendations based on:
  - User preferences & history
  - Similar user behaviors
  - Seasonal trends
  - Budget constraints
- Natural Language Processing for review analysis
- Image recognition to categorize photos

**Mobile-First Design:**

- PWA (Progressive Web App): App-like experience, no download
- Offline mode: Access plans without internet
- Location-based features: "Near me" suggestions

**Cloud Infrastructure:**

- Serverless architecture: Scale according to demand
- Cost-effective: Pay only what you use
- Global CDN: Fast load times

**Why Now:**

- Tech stack mature and affordable
- Cloud costs decreased 60% in 5 years
- AI/ML APIs accessible for startups

---

**Opportunity 5: Social Commerce Trend**

**Behavioral Shift:**

- Users increasingly trust **peer recommendations > advertising**
- **78% of Gen Z** check social proof before deciding
- Community-driven content has **4x engagement** vs branded content

**Integration Opportunities:**

- Affiliate with booking platforms: Commission from each booking
- Sponsored destinations: Tourism boards pay to promote
- Premium features: Subscription revenue
- Data insights: Sell analytics to tourism industry

**Monetization Potential:**

- Multiple revenue streams = less risk
- High margin (digital product)
- Scalable: Marginal cost → 0 when scaling

---

#### 1.2.2.3. Strategic Opportunities

**Opportunity 6: First-Mover Advantage in Niche**

**Timing is Right:**

- **No dominant player** in "Vietnamese domestic travel planning + review"
- Window of opportunity: **2-3 years** before giants react
- If move fast: Can build **defensible moat**

**Strategic Positioning:**

- Become the **go-to platform** for VN domestic travel
- Build brand = "trusted source of truth"
- Expand later: ASEAN, outbound travel

---

**Opportunity 7: Ecosystem Value Creation**

**Multi-stakeholder Benefits:**

**For Small Businesses:**

- Visibility without huge marketing budget
- Direct connection with travelers
- Authentic reviews = trust

**For Tourism Boards:**

- Data insights: Where travelers go, when, why
- Promote lesser-known destinations
- Reduce over-tourism

**For Travelers:**

- Better experiences
- Save time & money
- Connect with like-minded people

**Win-Win-Win:**

- Create **positive-sum game**
- All stakeholders benefit
- Sustainable growth model

---

### 1.2.3. Opportunity Assessment Matrix

| Opportunity           | Market Size | Timing         | Feasibility | Impact    | Priority |
| --------------------- | ----------- | -------------- | ----------- | --------- | -------- |
| Domestic tourism boom | Very Large  | Excellent      | High        | Very High | **P0**   |
| Market gap            | Large       | Excellent      | High        | High      | **P0**   |
| Network effects       | Very Large  | Good           | Medium      | Very High | **P0**   |
| AI/Tech leverage      | Medium      | Good           | High        | High      | **P1**   |
| Social commerce       | Large       | Excellent      | High        | High      | **P1**   |
| First-mover           | Medium      | Time-sensitive | Medium-High | High      | **P0**   |
| Ecosystem value       | Large       | Good           | Medium      | Very High | **P1**   |

---

## 2. Relationship: Needs ↔ Changes

### 2.1. Needs → Drive Changes

**Problem/Opportunity (Need)** identified above → **Drives Change:**

```
PROBLEMS:                        CHANGES TO IMPLEMENT:
Fragmented planning      →      Build integrated platform
Lack of trusted reviews  →      Create community-driven review system
Waste of knowledge       →      Gamification & rewards for contributors
Ecosystem fragmented     →      Multi-stakeholder platform

OPPORTUNITIES:                   CHANGES TO LEVERAGE:
Market growth            →      Launch product ASAP (timing)
Technology mature        →      Leverage AI, cloud, mobile
Network effects          →      Build viral loops
First-mover window       →      Move fast, build moat
```

**Stakeholders Mobilized:**

- Users: Adopt new platform
- Developers: Build solution
- Partners: Integrate and collaborate
- Investors: Fund vision

---

### 2.2. Changes → Create New Needs

**When implementing Solution, will create New Needs:**

**Positive Needs (Enhance Value):**

- **Need mobile app**: After web success, users want native app
- **Need more destinations**: Users want broader coverage
- **Need advanced features**: AI suggestions, offline mode, video reviews
- **Need internationalization**: Expand to ASEAN, English version

**Negative Needs (Reduce Value if not handled):**

- **Need moderation**: When scaling, risk of spam/fake reviews increases
- **Need performance**: More users = Need better infrastructure
- **Need support**: More users = Need support team scale
- **Need governance**: Community guidelines, dispute resolution

**Change Management Cycle:**

```
Current Need → Solution/Change → New Needs → Next Change → ...
```

**Example Flow:**

```
Need: Planning tool
  ↓
Change: Build MVP
  ↓
New Need: Users want collaborative features
  ↓
Change: Add real-time collaboration
  ↓
New Need: Users want version history
  ↓
Change: Add versioning system
  ↓
... (continuous evolution)
```

---

## 3. From Needs → Business Requirements

### 3.1. Business Requirements Definition

**Business Requirement = Statement about goals, objectives, outcomes describing the REASON why change is initiated**

---

### 3.2. Transformation from Need to Business Requirements

#### 3.2.1. Conceptual Framework

```
NEED (Problem/Opportunity)
    ↓ [Ask "WHY?"]
BUSINESS NEED (Strategic importance)
    ↓ [Ask "WHAT outcome?"]
BUSINESS REQUIREMENT (Goal/Objective statement)
    ↓ [Ask "HOW to measure?"]
SUCCESS CRITERIA (Metrics)
```

---

#### 3.2.2. The Transformation Process (5 Steps)

##### 3.2.2.1. STEP 1: Understand the Need Deeply

**Technique: 5 Whys Analysis**

**Example with Planning Problem:**

```
OBSERVATION: Travelers spend too much time planning

Why #1: Why spend too much time?
→ Because have to use many different tools

Why #2: Why use many different tools?
→ Because no single tool meets all needs

Why #3: Why doesn't any tool meet all needs?
→ Because current tools don't integrate planning + review + Vietnamese context

Why #4: Why is this integration important?
→ Because users need context (reviews) DURING planning to make good decisions

Why #5: Why are good decisions important?
→ Because good decisions = Good travel experience = High satisfaction = Loyal users = Business success

ROOT CAUSE: Lack of integrated platform providing planning + contextual information in one workflow
```

**Key Insight from 5 Whys:**

- Need is NOT just "build planning tool"
- Need is "enable better decision-making through integrated information"
- BR must address ROOT CAUSE, not symptoms

---

##### 3.2.2.2. STEP 2: Articulate Business Value (WHY it matters)

**Framework: Value Proposition Canvas**

| User Pain/Gain                          | Business Value                                  | Strategic Impact                               |
| --------------------------------------- | ----------------------------------------------- | ---------------------------------------------- |
| **Pain**: Spend 10-15h planning         | **Value**: Save user time → Higher satisfaction | **Impact**: More users, better retention       |
| **Pain**: Don't trust reviews           | **Value**: Trust → Better decisions             | **Impact**: Quality content = competitive moat |
| **Gain**: Want to plan fast, accurately | **Value**: Efficiency + Accuracy                | **Impact**: Network effects, viral growth      |

**Business Value Statement:**

> "By reducing planning time by 50% and providing trusted information, we increase user satisfaction, drive adoption, and create a defensible competitive position through network effects and proprietary content."

**This is the "WHY" that will go into BR**

---

##### 3.2.2.3. STEP 3: Define Desired Outcomes (WHAT we want)

**Technique: Goal Decomposition**

**High-Level Goal:**

> "Become the go-to platform for Vietnamese travelers"

**Decompose into Measurable Outcomes:**

```
Top Goal: Market Leadership
    ├── Outcome 1: User Adoption
    │   ├── 50K users Year 1
    │   ├── 40% MAU/Registered ratio
    │   └── NPS ≥ 40
    │
    ├── Outcome 2: Content Quality
    │   ├── 10K+ reviews
    │   ├── 75% trust score
    │   └── 80% reviews from VN travelers
    │
    ├── Outcome 3: Business Viability
    │   ├── $50K revenue Year 1
    │   ├── 3+ revenue streams
    │   └── Unit economics positive by Month 18
    │
    └── Outcome 4: Ecosystem Value
        ├── 5+ tourism board partnerships
        ├── 500+ business listings
        └── Partner NPS ≥ 4.0
```

**These outcomes become the basis for BRs**

---

##### 3.2.2.4. STEP 4: Translate into Requirement Statements

**Formula for Writing BRs:**

```
[System/Organization] MUST [ACTION] TO [PURPOSE/BENEFIT]
```

**Bad BR Examples (Too specific = Solutions):**

- ❌ "System must use React for frontend"
- ❌ "System must have a blue button on homepage"
- ❌ "System must store data in PostgreSQL"

**Good BR Examples (Outcome-focused):**

- ✅ "System must provide integrated planning capability to reduce user planning time by 50%"
- ✅ "System must establish trust mechanisms to achieve 75% user trust score"
- ✅ "System must scale to support 50K users with 99% uptime"

---

**Transformation Template:**

| Element    | Need                                        | Business Value (WHY)                           | Desired Outcome (WHAT)                            | Business Requirement                                         |
| ---------- | ------------------------------------------- | ---------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| **Input**  | Users spend 10-15h planning with 5-10 tools | Inefficiency → Low satisfaction, high friction | Reduce time to 5-7h, single platform              | System must provide integrated planning platform             |
| **Output** | →                                           | → To increase satisfaction and adoption        | → With 80% task completion without external tools | → To reduce planning time by 50% and improve user experience |

---

**Detailed Example Transformation:**

**NEED:** "Travelers don't trust current reviews, have to cross-check 3-5 sources, spend 2-3 hours researching"

**↓ Ask WHY this matters**

**BUSINESS VALUE:**

- Lack of trust → Poor decisions → Bad experiences → Churn
- Time wasted → Frustration → Won't use platform
- Strategic: Trust = Competitive advantage, User retention

**↓ Define WHAT outcome we want**

**DESIRED OUTCOME:**

- Users trust reviews on platform (≥75% trust score)
- Reduce research time to <1 hour
- Decision quality improves (measured by post-trip satisfaction)

**↓ Write requirement statement**

**BUSINESS REQUIREMENT:**

> "BR-003: System must establish a trusted review ecosystem with verification mechanisms to achieve ≥75% user trust and reduce destination research time to under 1 hour, thereby improving decision quality and user satisfaction."

**With Success Criteria:**

- Trust score ≥ 75% (user survey)
- Average research time <1h (analytics)
- Post-trip satisfaction correlation with review usage (data analysis)

---

##### 3.2.2.5. STEP 5: Validate & Refine

**Validation Questions for Each BR:**

**1. "So What?" Test:**

```
BR: System must provide integrated planning
SO WHAT? → Users save time
SO WHAT? → Higher satisfaction
SO WHAT? → More users, retention
SO WHAT? → Business growth, sustainability
```

If can't answer "So What?" → BR not tied to business value

**2. "How Will We Know?" Test:**

```
BR: Achieve 75% trust score
HOW WILL WE KNOW? → User survey asking "Do you trust reviews?"
CAN WE MEASURE? → Yes, quantitative survey data
IS IT REALISTIC? → Industry benchmark 60-70%, so 75% achievable but stretch
```

If can't measure → BR not testable

**3. "Is This Really Necessary?" Test:**

```
BR: Support 50K users
IS THIS NECESSARY FOR SUCCESS? → Yes, market size requires scale
WHAT IF WE DON'T? → Can't achieve market penetration goals
PRIORITY? → P0 - Infrastructure foundation
```

If not necessary → Deprioritize or remove

**4. "Are We Describing Outcomes or Solutions?" Test:**

```
BAD: "System must use Firebase for backend"
→ This is SOLUTION, not outcome

GOOD: "System must scale to 50K users with 99% uptime"
→ This is OUTCOME, solution-agnostic
```

---

#### 3.2.3. Common Pitfalls & How to Avoid

##### 3.2.3.1. Pitfall 1: Solution Masquerading as Requirement

**Wrong:**

> "System must have a mobile app"

**Why Wrong:** This is solution (mobile app), not business outcome

**Right:**

> "System must be accessible on mobile devices to serve 70%+ mobile users with responsive experience"

**Why Right:** Focuses on outcome (mobile accessibility), solution could be app OR PWA

---

##### 3.2.3.2. Pitfall 2: Too Vague

**Wrong:**

> "System must be user-friendly"

**Why Wrong:** "User-friendly" is subjective, not measurable

**Right:**

> "System must achieve ≥4.2/5 user satisfaction score and task completion rate ≥80% without support"

**Why Right:** Specific, measurable success criteria

---

##### 3.2.3.3. Pitfall 3: Mixing Levels of Abstraction

**Wrong in same document:**

- BR-001: Provide integrated planning (High-level)
- BR-002: Planning page must have blue submit button (Too detailed)
- BR-003: Achieve market leadership (Too high-level)

**Right - Consistent level:**

- BR-001: Provide integrated planning to reduce time by 50%
- BR-002: Enable collaborative planning for 70% group trips
- BR-003: Build trusted review platform with 75% trust score

All at same abstraction level (capability + outcome)

---

##### 3.2.3.4. Pitfall 4: Confusing Needs with Requirements

**Understanding the Difference:**

| Aspect      | NEED                      | BUSINESS REQUIREMENT          |
| ----------- | ------------------------- | ----------------------------- |
| **Nature**  | Problem/Opportunity       | Goal/Objective                |
| **Focus**   | Current pain              | Desired outcome               |
| **Level**   | Raw, unprocessed          | Refined, actionable           |
| **Example** | "Planning takes too long" | "Reduce planning time by 50%" |

**Need** is input → **BR** is output of analysis

---

#### 3.2.4. Complete Transformation Examples

##### 3.2.4.1. Example 1: From Problem Need to BR

**Stage 1 - Raw Need (Problem):**

```
"When I plan a trip to Da Lat, I have to open 10 Chrome tabs:
- Google Maps to find locations
- TripAdvisor to read reviews
- Facebook groups to ask for opinions
- Excel to note itinerary
- Calculator to calculate costs
- Booking.com to check hotels
Spend the whole day and still messy, forget information."
```

**Stage 2 - Analyze the Need:**

```
5 Whys:
1. Why spend the whole day? → Many tools
2. Why many tools? → No tool has enough functionality
3. Why need many functions? → Planning = research + organize + collaborate
4. Why is integration important? → Context switching kills productivity
5. Why does productivity matter? → Time = frustration = abandon platform

ROOT: Need integrated workflow, not just features
```

**Stage 3 - Define Business Value:**

```
VALUE:
- User: Save 50% time, reduce stress
- Business: Higher satisfaction → Retention → Growth
- Competitive: Integration = moat (hard to copy)
```

**Stage 4 - Desired Outcome:**

```
OUTCOME:
- 80% users complete plan without external tools
- Time reduced from 10-15h to 5-7h
- Satisfaction ≥ 4.2/5
```

**Stage 5 - Business Requirement:**

```
BR-001: Integrated Planning Platform

Statement:
"System must provide an integrated planning platform that combines
destination research, itinerary organization, budget management,
and collaboration features in a single workflow, to reduce planning
time by 50% and achieve 80% task completion rate without external
tools, thereby increasing user satisfaction to ≥4.2/5."

Success Criteria:
- Time-on-task: ≤7 hours average per trip
- Task completion: 80% plans finalized without external tools
- User satisfaction: ≥4.2/5 on planning experience survey
- Feature adoption: ≥75% users use 3+ integrated features

Rationale:
Addresses root cause of planning inefficiency (fragmentation)
while creating competitive differentiation through seamless UX.
```

---

##### 3.2.4.2. Example 2: From Opportunity Need to BR

**Stage 1 - Raw Need (Opportunity):**

```
"Vietnam domestic tourism grows 18% YoY, 40M people travel/year,
but no app serves Vietnamese people well. TripAdvisor
focuses on foreign tourists, Google Travel is generic.
Opportunity to build 'Vietnamese version of TripAdvisor'."
```

**Stage 2 - Analyze the Opportunity:**

```
Market Analysis:
- TAM: 40M travelers/year
- SAM: 15M active planners
- SOM: 500K realistic Year 3
- Growth: 15-20% YoY sustained
- Competition gap: No Vietnamese-first platform

OPPORTUNITY = White space in market
```

**Stage 3 - Business Value:**

```
VALUE:
- Market: First-mover in underserved niche
- Network effects: Early users = content moat
- Monetization: Multiple streams (affiliate, ads, premium)
- Strategic: Category king potential
```

**Stage 4 - Desired Outcome:**

```
OUTCOME:
- Capture 50K users Year 1 (0.1% of TAM)
- 80% users are Vietnamese
- 80% content in Vietnamese
- Top 3 recognition in market surveys by Year 2
```

**Stage 5 - Business Requirement:**

```
BR-004: Vietnamese-First Market Positioning

Statement:
"System must be optimized specifically for Vietnamese travelers
with 100% Vietnamese interface, VND pricing, cultural context,
and content primarily from Vietnamese users, to capture the
underserved market segment and achieve 50K users in Year 1
with 80% Vietnamese user base."

Success Criteria:
- User demographics: ≥80% Vietnamese nationality
- Content: ≥80% reviews in Vietnamese
- Interface: 100% UI elements in Vietnamese
- Cultural relevance: ≥4.5/5 on relevance survey
- Market penetration: 50K users by Month 12

Rationale:
Exploits white space in market where no competitor serves
Vietnamese domestic travelers effectively, creating
defensible niche positioning.
```

---

#### 3.2.5. BR Writing Best Practices

**Structure Template:**

```
BR-[ID]: [Descriptive Name]

STATEMENT:
System/Organization MUST [capability]
TO [purpose/benefit]
ACHIEVING [measurable outcome]
THEREBY [business value]

SUCCESS CRITERIA:
- Metric 1: [Specific target]
- Metric 2: [Specific target]
- Metric 3: [Specific target]

RATIONALE:
[Why this requirement exists, ties to business need]

DEPENDENCIES:
- [Other BRs or external factors]

ASSUMPTIONS:
- [Key assumptions underpinning this BR]

RISKS:
- Risk: [Potential issue]
- Mitigation: [How to address]
```

---

**Quality Checklist:**

- [ ] **Clear**: Unambiguous language
- [ ] **Concise**: No unnecessary words
- [ ] **Complete**: All necessary info included
- [ ] **Consistent**: Same format/level as other BRs
- [ ] **Correct**: Accurately reflects need
- [ ] **Traceable**: Links to source need
- [ ] **Verifiable**: Has testable success criteria
- [ ] **Feasible**: Realistic given constraints
- [ ] **Necessary**: Truly required for success
- [ ] **Solution-agnostic**: Doesn't prescribe HOW

---

#### 3.2.6. Traceability Linkage

**Every BR must have:**

```
BACKWARD TRACEABILITY (Where it came from):
BR-001 ← Business Need: Planning Efficiency
       ← Problem Statement: Users waste 10-15h
       ← Stakeholder: Primary Users (Travelers)
       ← Strategic Goal: Market Leadership

FORWARD TRACEABILITY (Where it leads to):
BR-001 → Stakeholder Requirements: SR-001.x
       → Functional Requirements: FR-001.x.x
       → Design: UI/UX specs
       → Implementation: Code modules
       → Test Cases: TC-001.x
       → Success Metrics: Dashboards, KPIs
```

**This ensures:**

- Nothing built without business justification
- Can trace any feature back to business value
- Can assess impact of changes
- Can verify requirements are met

---

#### 3.2.7. Documentation Format

**Recommended Structure:**

```markdown
# BUSINESS REQUIREMENTS DOCUMENT (BRD)

## 1. Executive Summary

- Business Need Summary
- Strategic Objectives
- Expected Outcomes

## 2. Business Need Analysis

- Problems Identified
- Opportunities Identified
- Root Cause Analysis
- Stakeholder Impact

## 3. Business Requirements

### BR-001: [Name]

[Full specification using template above]

### BR-002: [Name]

[Full specification using template above]

... [All BRs]

## 4. Traceability Matrix

[Link needs → BRs → downstream requirements]

## 5. Assumptions & Constraints

[Document all assumptions and constraints]

## 6. Risks & Mitigation

[Business-level risks]

## 7. Success Metrics Dashboard

[How we'll measure success]

## 8. Approval & Sign-off

[Stakeholder signatures]
```

---

### 3.2.8 SUMMARY: Need → BR Transformation

**Key Takeaways:**

1. **BRs are NOT Needs**: Needs are problems/opportunities, BRs are goal statements

2. **Process is Analytical**: Use 5 Whys, value analysis, outcome definition

3. **Focus on Outcomes**: "WHAT we achieve" not "HOW we build"

4. **Must Be Measurable**: Every BR needs success criteria

5. **Traceability Critical**: Link backward to needs, forward to solution

6. **Validate Rigorously**: Use "So What?", "How Will We Know?" tests

7. **Avoid Pitfalls**: Don't confuse solutions with requirements

---

### 3.3. Business Requirements Traceability Matrix

Each Business Requirement must be **traced back** to specific Need and **linked forward** to Solution Requirements.---

### 3.4. Business Requirements Validation Process

Before moving to Current State vs Future State, need to **validate** Business Requirements:

#### 3.4.1. Validation Checklist

**Each BR must pass the following criteria:**

✅ **SMART Check:**

- **Specific**: Clear, not ambiguous?
- **Measurable**: Has specific metrics?
- **Achievable**: Realistic with resources?
- **Relevant**: Aligns with business goals?
- **Time-bound**: Has specific timeline?

✅ **Traceability Check:**

- Traces back to Business Need?
- Has clear Success Criteria?
- Has testable Acceptance Criteria?

✅ **Stakeholder Alignment:**

- Key stakeholders agree?
- Conflicts resolved?
- Priorities have consensus?

✅ **Feasibility Check:**

- Technical feasibility OK?
- Budget sufficient?
- Timeline realistic?
- Resources available?

---

#### 3.4.2. Validation Techniques

**A. Structured Walkthrough:**

```
Step 1: Present each BR to stakeholders
Step 2: Review source need → BR logic
Step 3: Review success criteria
Step 4: Q&A and challenge assumptions
Step 5: Document agreements and changes
```

**B. Prototyping/Mockup:**

- Create visual representation of key BRs
- Get user feedback early
- Validate assumptions about UX

**C. Stakeholder Review Sessions:**
| Stakeholder Group | Focus Areas | Session Type |
|-------------------|-------------|--------------|
| Users | BR-001, 002, 003, 004 | Focus group |
| Business Partners | BR-008 | One-on-one |
| Development Team | BR-006 | Technical review |
| Management | All BRs | Executive review |

---

#### 3.4.3. BR Approval Process

**Approval Matrix:**

View appendix [Business requirements traceability matrix](/en/appendix/needs)

| BR     | Product Owner | Tech Lead   | Finance   | Legal           | Status      |
| ------ | ------------- | ----------- | --------- | --------------- | ----------- |
| BR-001 | ✅            | ✅          | ✅        | N/A             | Approved    |
| BR-002 | ✅            | ⚠️ Phase 2  | ✅        | N/A             | Conditional |
| BR-003 | ✅            | ✅          | ✅        | ⚠️ Review ToS   | Conditional |
| BR-004 | ✅            | ✅          | ✅        | N/A             | Approved    |
| BR-005 | ✅            | ✅          | ⚠️ Cost?  | N/A             | Conditional |
| BR-006 | ✅            | ✅          | ⚠️ Budget | N/A             | Conditional |
| BR-007 | ✅            | ✅          | ✅        | ✅              | Approved    |
| BR-008 | ✅            | ⚠️ Resource | ✅        | ⚠️ Data privacy | Conditional |

**Resolution of Conditionals:**

- Technical concerns → Architecture reviews
- Budget concerns → Phased approach, prioritization
- Legal concerns → Consult legal, adjust ToS/policies

---

### 3.5. Business Requirements Baseline

After validation and approval, create **BASELINE**:

**BR Baseline v1.0 - Date: [Launch Date]**

**Signed off by:**

- Product Owner: **\*\***\_\_\_\_**\*\***
- Tech Lead: **\*\***\_\_\_\_**\*\***
- CEO/Founder: **\*\***\_\_\_\_**\*\***
- Key Stakeholders: **\*\***\_\_\_\_**\*\***

**Change Control Process:**

```
Any changes to Baseline BRs require:
1. Change Request Form
2. Impact Analysis
3. Stakeholder review
4. Approval from Product Owner
5. Update Traceability Matrix
6. Communication to all teams
```

**Version Control:**

- v1.0: Initial baseline (MVP)
- v1.1: Minor adjustments post-beta
- v2.0: Phase 2 additions (Month 6)

---

### 3.6. Assumptions & Constraints Documentation

**Critical Assumptions underpinning BRs:**

| ID    | Assumption                           | Impact if Wrong               | Validation Method                    |
| ----- | ------------------------------------ | ----------------------------- | ------------------------------------ |
| A-001 | Users will spend 30+ mins planning   | Low adoption of planning tool | Beta user testing, time tracking     |
| A-002 | 20-30% will contribute reviews       | Content shortage              | Pilot program, incentive testing     |
| A-003 | Mobile traffic = 70%+                | Wrong platform priority       | Analytics from beta, market research |
| A-004 | Users trust community > brands       | Value prop fails              | User interviews, A/B testing         |
| A-005 | Affiliate revenue = $1-2 per booking | Revenue shortfall             | Affiliate network data, projections  |

**Key Constraints affecting BRs:**

| ID    | Constraint                | Type      | Mitigation                               |
| ----- | ------------------------- | --------- | ---------------------------------------- |
| C-001 | Budget: $50-100K Year 1   | Financial | Prioritize ruthlessly, MVP lean          |
| C-002 | Team: 3-5 people          | Resource  | Outsource non-core, use existing tools   |
| C-003 | Timeline: MVP in 3 months | Time      | Agile sprints, scope control             |
| C-004 | No native apps initially  | Technical | PWA approach, defer native               |
| C-005 | GDPR/Privacy compliance   | Legal     | Consult legal early, build privacy-first |

---

### 3.7. Risks to Business Requirements

**Top Risks that could invalidate BRs:**

**Risk 1: Market Assumptions Wrong**

- **Impact on**: BR-006 (Scale targets), BR-007 (Revenue)
- **Probability**: Medium
- **Mitigation**: Market validation ongoing, pivot plan ready

**Risk 2: User Behavior Different**

- **Impact on**: BR-001 (Time savings), BR-005 (Review rate)
- **Probability**: Medium-High
- **Mitigation**: Extensive beta testing, adjust features based on actual behavior

**Risk 3: Competition Intensifies**

- **Impact on**: BR-007 (Monetization), BR-008 (Partnerships)
- **Probability**: Medium
- **Mitigation**: Move fast, build moat, differentiate strongly

**Risk 4: Technical Challenges**

- **Impact on**: BR-002 (Real-time collab), BR-006 (Scale)
- **Probability**: Low-Medium
- **Mitigation**: Proof of concept, use proven tech stack

---

### 3.8. Next Level Breakdown

**From Business Requirements → Next Level Requirements:**

```
Business Requirements (WHY & WHAT outcomes)
         ↓
Stakeholder Requirements (WHO needs WHAT)
         ↓
Solution Requirements:
    ├── Functional Requirements (WHAT system must do)
    ├── Non-Functional Requirements (HOW WELL system must perform)
    └── Transition Requirements (HOW to get from current to future)
         ↓
Design Specifications
         ↓
Implementation
```

**Preview of Next Steps:**

**BR-001 → Stakeholder Requirements Example:**

```
SR-001.1 (Traveler): As a traveler, I need to create a new trip plan with destinations, dates, and budget
SR-001.2 (Traveler): As a traveler, I need to organize my itinerary by day and time
SR-001.3 (Traveler): As a group organizer, I need to share my plan with travel companions
```

**SR-001.1 → Functional Requirements Example:**

```
FR-001.1.1: System shall allow user to create new trip with name, start date, end date
FR-001.1.2: System shall allow user to add destinations to trip
FR-001.1.3: System shall allow user to set overall budget in VND
FR-001.1.4: System shall auto-save trip data every 30 seconds
```

---

### 3.9. Why This Section Was Critical

**The gap you identified is very important because:**

1. **Traceability**: Without detailed BR breakdown = Cannot trace from need to implementation

2. **Validation**: Must validate BRs before analyzing current vs future state, otherwise risk building wrong thing

3. **Stakeholder Alignment**: BR approval process ensures everyone on same page BEFORE committing resources

4. **Change Management**: Baseline and change control critical for managing scope creep

5. **Risk Management**: Documenting assumptions & constraints helps identify risks early

6. **Foundation for analysis**: Current State vs Future State analysis must be based on **validated BRs**, not vague needs

---

**Now, with BRs detailed and validated, we have a solid foundation to:**

→ **Analyze Current State** (Current state - what exists)

→ **Define Future State** (Future state - what BRs will create)

→ **Gap Analysis** (Gap between current and future)

→ **Solution Approach** (How to bridge the gap)

---

## 4. Current State vs Future State Analysis

### 4.1. Current State

**Pain Points Summary:**

| Aspect                 | Current State                      | Metrics                            |
| ---------------------- | ---------------------------------- | ---------------------------------- |
| **Planning Process**   | Manual, fragmented, 5-10 tools     | 10-15 hours/trip                   |
| **Information Source** | Scattered, unreliable              | 55% don't trust, check 3-5 sources |
| **Collaboration**      | WhatsApp/Messenger, not structured | 80% groups have issues             |
| **Review Quality**     | Fake, outdated, not relevant       | 30% experience doesn't match       |
| **Knowledge Sharing**  | Silo, no incentive                 | Only 15-20% write reviews          |
| **Ecosystem**          | Fragmented, no connection          | Small biz struggle visibility      |

**Value Proposition Gap:**

```
What Users Need - What Current Solutions Provide = VALUE GAP
```

---

### 4.2. Future State

**Vision Statement:**

> "Every Vietnamese person when planning travel will think of our platform first - a place where they can plan, discover, share and connect with the travel-loving community"

**Future State Characteristics:**

| Aspect                 | Future State                           | Target Metrics                |
| ---------------------- | -------------------------------------- | ----------------------------- |
| **Planning Process**   | All-in-one, structured, collaborative  | 5-7 hours/trip (-50%)         |
| **Information Source** | Trusted community, verified            | 75% trust score               |
| **Collaboration**      | Real-time, version control, role-based | 90% plan completion           |
| **Review Quality**     | Authentic, Vietnamese context          | 80% reviews from VN travelers |
| **Knowledge Sharing**  | Gamified, rewarded, portfolio          | 35% review rate (+100%)       |
| **Ecosystem**          | Connected, data-driven, win-win        | 5+ partnerships Year 1        |

**Value Delivered:**

- **For Travelers**: Time saved, better decisions, enjoyable planning
- **For Businesses**: Visibility, authentic reviews, direct connection
- **For Tourism Industry**: Data insights, promotion tools, sustainability

---

### 4.3. Gap Analysis & Constraints

**Gap Categories:**

**1. Capability Gaps:**

- No integrated platform tool
- Lack of Vietnamese-focused review system
- No community infrastructure
- Lack of data analytics for tourism

**2. Performance Gaps:**

- Planning efficiency: Current 10-15h vs Target 5-7h
- Trust level: Current 55% vs Target 75%
- Review rate: Current 15-20% vs Target 35%

**3. Technology Gaps:**

- Manual processes vs Automated/AI-powered
- Desktop-centric vs Mobile-first
- Siloed data vs Integrated ecosystem

**Constraints identified:**

- Budget: $50-100K Year 1
- Time: MVP in 3 months
- Team: 3-5 people
- Technical: Web-first, leverage existing APIs
- Legal: Compliance with regulations

---

## 5. Problem/Opportunity Prioritization

**MoSCoW Method Application**

### 5.1. MUST HAVE (Critical to Success)

**P0 Problems/Opportunities:**

1. **Planning tool integration** ✅

   - WHY Critical: Core value proposition
   - Impact: Addresses 80% user pain
   - Risk if not: Product not differentiated

2. **Vietnamese-focused review system** ✅

   - WHY Critical: Unique selling point
   - Impact: Build trust, drive adoption
   - Risk if not: Just another generic platform

3. **Mobile-responsive design** ✅

   - WHY Critical: 70%+ users on mobile
   - Impact: Accessibility = adoption
   - Risk if not: Lose majority of potential users

4. **Basic moderation system** ✅
   - WHY Critical: Quality control from day 1
   - Impact: Trust and brand reputation
   - Risk if not: Platform becomes spam haven

---

### 5.2. SHOULD HAVE (Important, High Value)

**P1 Problems/Opportunities:**

1. **Collaborative planning features**

   - WHY Important: Serve group travelers (significant segment)
   - Impact: Increase stickiness, viral growth
   - Can defer: Yes, to Month 6-9

2. **Gamification basics**

   - WHY Important: Drive UGC, engagement
   - Impact: Content flywheel
   - Can defer: Yes, phased rollout OK

3. **Partnership framework**
   - WHY Important: Ecosystem value, monetization
   - Impact: Revenue streams, moat
   - Can defer: Yes, can build post-traction

---

### 5.3. COULD HAVE (Nice to Have)

**P2 Problems/Opportunities:**

1. **AI recommendations**

   - WHY Nice: Enhance UX significantly
   - Impact: Personalization competitive advantage
   - Can defer: Yes, Year 2 feature

2. **Advanced analytics for partners**

   - WHY Nice: Partner value add
   - Impact: Stronger partnerships
   - Can defer: Yes, basic first

3. **Video content support**
   - WHY Nice: Rich media engagement
   - Impact: Differentiation
   - Can defer: Yes, photos sufficient initially

---

### 5.4. WON'T HAVE (Out of Scope Now)

**P3+ Problems/Opportunities:**

1. **Native mobile apps** ❌

   - PWA sufficient for MVP
   - Defer: Year 2

2. **Booking engine integration** ❌

   - Too complex, use affiliate instead
   - Defer: Consider Year 3

3. **Multi-language beyond VN/EN** ❌
   - Not core market initially
   - Defer: Only if expand ASEAN

---

## 6. Risk Assessment (Problems with Current Needs)

**High Risk Needs - Require Special Attention**

**Risk 1: Assumption about User Behavior**

**Need/Assumption:**

- "Users will spend 30+ mins to properly plan trip"
- "20-30% users will contribute reviews"

**Risk:**

- User behavior different from expectations
- Adoption rate lower than predicted

**Mitigation:**

- **Validation**: Extensive user testing in beta
- **Plan B**: Adjust features based on actual behavior
- **Monitoring**: Track engagement metrics closely

**Risk Level:** 🔴 HIGH

---

**Risk 2: Content Quality Control**

**Need:**

- "Build trusted review system"

**Risk:**

- Spam, fake reviews overwhelm platform
- Quality not consistent
- Moderation overhead high

**Mitigation:**

- **Prevention**: Verification system from day 1
- **Detection**: AI-powered spam detection
- **Response**: Clear reporting mechanism, fast response team
- **Incentive**: Reward quality, penalize spam

**Risk Level:** 🟡 MEDIUM-HIGH

---

**Risk 3: Chicken-Egg Problem**

**Need:**

- "Network effects drive growth"

**Risk:**

- Not enough content → Users don't join
- Not enough users → No one creates content
- Cold start problem

**Mitigation:**

- **Seed Content**: Team creates 500-1000 quality reviews
- **Influencer Strategy**: Invite travel bloggers as early adopters
- **Beta Program**: Curated user group creates initial content
- **Incentives**: Extra rewards in first 3 months

**Risk Level:** 🔴 HIGH

---

**Risk 4: Competitive Response**

**Need/Opportunity:**

- "First-mover advantage in niche"

**Risk:**

- Giants (Google, TripAdvisor) notice and react
- Local competitors copy fast
- Budget war

**Mitigation:**

- **Speed**: Move very fast, build moat quickly
- **Differentiation**: Focus on aspects hard to copy (community, localization)
- **Partnerships**: Lock in exclusive relationships
- **Brand**: Build strong brand loyalty early

**Risk Level:** 🟡 MEDIUM

---

## 7. Stakeholder Need Analysis

**Different Stakeholders = Different Needs**

### 7.1. Primary Users (Travelers)

**Needs:**

- ✅ **Addressed**: Planning tool, trusted reviews
- ⚠️ **Partially**: Collaborative features (Phase 2)
- ❌ **Not Yet**: Offline mode, video content

**Priority:** CRITICAL - They are the platform

---

### 7.2. Content Contributors (Reviewers)

**Needs:**

- ✅ **Addressed**: Recognition system (gamification)
- ✅ **Addressed**: Easy review submission
- ⚠️ **Partially**: Detailed analytics on their content

**Priority:** HIGH - Content = value

---

### 7.3. Business Partners (Hotels, Tours)

**Needs:**

- ⚠️ **Partially**: Visibility on platform
- ❌ **Not Yet**: Direct booking integration
- ❌ **Not Yet**: Advanced analytics dashboard

**Priority:** MEDIUM - Important but can phase

---

### 7.4. Tourism Boards (Government)

**Needs:**

- ⚠️ **Partially**: Data insights on traveler behavior
- ❌ **Not Yet**: Destination promotion tools
- ❌ **Not Yet**: API access to data

**Priority:** MEDIUM-LOW - Partnership opportunity, not critical for MVP

---

## 8. Success Metrics - How We Know Needs Are Met

**Metrics Framework**

**Level 1: Need Satisfaction Metrics**

| Need Category           | Metric                   | Target   | Measurement       |
| ----------------------- | ------------------------ | -------- | ----------------- |
| **Planning Efficiency** | Time to complete plan    | <7 hours | Usage analytics   |
| **Information Trust**   | Trust score              | ≥75%     | User surveys      |
| **Collaboration**       | Group plan completion    | ≥90%     | Feature analytics |
| **Review Quality**      | Average review rating    | ≥4.0/5   | Quality scoring   |
| **Knowledge Sharing**   | Review contribution rate | ≥35%     | Submission rate   |
| **Ecosystem Value**     | Partner satisfaction     | ≥4.0/5   | Partner surveys   |

---

**Level 2: Business Outcome Metrics**

| Outcome             | Metric            | Year 1 Target |
| ------------------- | ----------------- | ------------- |
| **Market Adoption** | Registered users  | 50,000        |
| **Engagement**      | MAU/Registered    | 40%           |
| **Content**         | Total reviews     | 10,000+       |
| **Revenue**         | Total revenue     | $50,000       |
| **Retention**       | Month 3 retention | ≥30%          |
| **Satisfaction**    | NPS               | ≥40           |

---

**Level 3: Impact Metrics (Long-term)**

- **Market Share**: % of VN travelers using platform
- **Brand Recognition**: Top-of-mind awareness
- **Ecosystem Impact**: # of businesses benefited
- **Tourism Growth**: Contribution to destination discovery

---

## 9. Summary: Consolidated Needs

### 9.1. Core Need Statement (Consolidated)

> **PROBLEM**: Vietnamese travelers are hindered by fragmented, time-consuming travel planning processes and lack of reliable review information sources suitable for Vietnamese context, leading to poor experiences and waste of knowledge.
>
> **OPPORTUNITY**: Domestic tourism market is booming (15-20% YoY) with 40M+ target audience, BUT no platform serves the "Vietnamese travelers planning domestic trips" niche well - creating white space to build integrated planning + community review platform with strong network effects and multiple monetization paths.
>
> **STRATEGIC IMPORTANCE**: Addressing this need not only solves user pain points but also creates ecosystem value for businesses, tourism industry, and builds defensible competitive moat through user-generated content and community.

---

### 9.2. Why This Need Matters (Strategic Importance)

**1. Business Strategic Alignment:**

- ✅ Large addressable market (40M+ potential users)
- ✅ High growth rate (15-20% YoY)
- ✅ Multiple revenue streams potential
- ✅ Defensible moat through network effects
- ✅ First-mover opportunity window (2-3 years)

**2. User Impact:**

- ✅ Saves significant time (50%+ reduction)
- ✅ Improves decision quality (trusted info)
- ✅ Enhances travel experience
- ✅ Creates community value

**3. Ecosystem Impact:**

- ✅ Empowers small businesses
- ✅ Provides data insights for tourism planning
- ✅ Promotes sustainable tourism
- ✅ Creates positive-sum value

---

### 9.3. Critical Success Factors to Address Needs

**1. User-Centric Design:**

- Deeply understand user workflows
- Minimize friction at every step
- Mobile-first approach
- Intuitive UX

**2. Trust & Quality:**

- Robust verification system
- Community moderation
- Transparent policies
- Consistent quality

**3. Network Effects:**

- Viral mechanisms built-in
- Incentives aligned
- Community guidelines clear
- Engagement loops strong

**4. Agile Execution:**

- Fast MVP to validate
- Iterate based on feedback
- Monitor metrics closely
- Pivot when needed

---

## 10. Next Steps - From Need to Action

### 10.1. Immediate Actions (Week 1-4)

**1. Validate Assumptions:**

- [ ] Survey 100+ potential users about pain points
- [ ] Interview 20+ frequent travelers
- [ ] Analyze competitor user reviews
- [ ] Quantify time spent on current process

**2. Refine Business Requirements:**

- [ ] Workshop with stakeholders
- [ ] Prioritize BR using MoSCoW
- [ ] Define detailed success criteria
- [ ] Create traceability matrix

**3. Begin Solution Analysis:**

- [ ] Brainstorm solution approaches
- [ ] Evaluate alternatives
- [ ] Define solution scope
- [ ] Create high-level architecture

---

### 10.2. Key Questions to Answer (Continuous)

**"Why?" Questions:**

- Why is this problem important NOW?
- Why don't users use existing solutions?
- Why are we best positioned to solve?
- Why will stakeholders adopt?

**"What?" Questions:**

- What exact outcomes do we target?
- What makes success/failure?
- What constraints must we respect?
- What risks must we mitigate?

**"How?" Questions (Solutions - Next phase):**

- How will we implement?
- How will we measure success?
- How will we manage change?
- How will we scale?

---

## 11. Conclusion

This travel application project addresses a **REAL NEED** that includes:

**PROBLEMS (70%):**

- Planning process inefficient
- Lack of trusted reviews
- Collaboration difficulties
- Knowledge waste

**OPPORTUNITIES (30%):**

- Market growth
- Technology maturity
- Network effects potential
- First-mover advantage
- Ecosystem value creation

**These needs have sufficient conditions to justify investment:**

- ✅ Strategic importance (market size, growth)
- ✅ Clear problem statement (validated pain)
- ✅ Measurable impact (time, trust, revenue)
- ✅ Feasible solution (technology available)
- ✅ Multiple stakeholder value (positive-sum)
