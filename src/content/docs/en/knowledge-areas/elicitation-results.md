---
title: ELICITATION RESULTS
---

## **1. PURPOSE**

The purpose of the Elicitation Results section is to **synthesize, analyze, and validate the information collected from users, partners, and stakeholders** in order to:

- Extract **core behavior and need insights** from key user groups.
- Identify **clear, verifiable, and measurable requirements**.
- Detect **conflicts, gaps, or new priorities** compared to initial assumptions.
- Serve as a foundation to **shape Solution Requirements and Product Roadmap**.

> 🎯 **Output:** Validated insights + refined requirements + traceability matrix linked to business goals.

---

## **2. OVERVIEW OF ELICITATION ACTIVITIES**

| Phase                       | Methodology                        | Sample Size         | Main Objective                             |
| --------------------------- | ---------------------------------- | ------------------- | ------------------------------------------ |
| **User Interviews**         | 1–1 interviews (Zoom/Meet)         | 10 participants     | Understand pain points & planning habits   |
| **Survey (Typeform)**       | Online survey                      | 210 responses       | Identify trends & priority levels          |
| **Observation (Shadowing)** | Record actual planning behaviors   | 2 groups (6 people) | Validate natural behaviors                 |
| **Workshop (Internal)**     | Cross-functional internal workshop | 8 participants      | Define feasible requirements               |
| **Prototype Testing**       | Test Figma prototype               | 20 participants     | Confirm UI flow & usability                |
| **Beta Test**               | App trial (TestFlight)             | 100 participants    | Validate real-world features & bug reports |

---

## **3. INSIGHTS SUMMARY BY USER GROUP**

### **3.1. Solo Travelers**

**Pain points:**

- "It usually takes me half a day to compile information for a 3-day trip."
- "Google reviews have many fake or irrelevant ones."
- "I want a place to jot down and save my itinerary without using Excel."

**Key Insights:**

- ✅ **Needs clarity & simplicity:** Wants an all-in-one tool, easier to use than Notion/Excel.
- ✅ **Trust deficiency:** Needs a review verification mechanism.
- ✅ **Personalization:** Desires suggestions based on personal preferences.

**Expected Features:**

1. Auto itinerary builder (AI suggestions based on location & time).
2. Verified reviews with "visited" badge.
3. Automatic image/note storage in itinerary.

---

### **3.2. Group Travelers (Friends/Family)**

**Pain points:**

- "Planning in groups via Messenger gets messy, everyone sends random links."
- "We don’t know who has agreed to what, and it ends in arguments."
- "It’s hard to update the whole group when we change plans or locations."

**Key Insights:**

- ✅ **Coordination chaos:** Needs real-time collaboration.
- ✅ **Decision friction:** Needs a voting tool for consensus.
- ✅ **Version control:** Needs auto-update & notifications.

**Expected Features:**

1. Collaborative itinerary editing (like Google Docs).
2. Vote for location/time with emojis or polls.
3. History log to see who changed what.

---

### **3.3. Local SMEs**

**Pain points:**

- "Facebook ads are expensive with unclear results."
- "Customers don't trust reviews, even genuine ones."
- "I don’t have a tool to track where my customers are coming from."

**Key Insights:**

- ✅ **Trust & transparency:** Needs verified reviews from real customers.
- ✅ **Data-driven marketing:** Wants customer insights and reports.
- ✅ **Affordable exposure:** Prefers free or low-cost promotional platforms.

**Expected Features:**

1. Business profile page with verified reviews.
2. Dashboard to track views, clicks, and feedback.
3. Low-cost “local sponsor” promotional packages.

---

### **3.4. Tourism Boards / Partners**

**Pain points:**

- "It’s hard to know where domestic tourists are actually going."
- "There’s no centralized data from major platforms."
- "We want to promote lesser-known tourist spots."

**Key Insights:**

- ✅ **Data access gap:** Lacks tools to analyze Vietnamese tourist behavior.
- ✅ **Promotion partnership:** Needs a platform for effective promotional partnerships.
- ✅ **Public impact:** Interested in sustainable tourism initiatives.

**Expected Features:**

1. Tourism dashboard (view, search data).
2. “Discover Vietnam” promotional program.
3. User behavior statistics by region.

---

## **4. QUANTITATIVE RESULTS (FROM SURVEY & TESTING)**

| Metric                                   | Result            | Meaning                                                    |
| ---------------------------------------- | ----------------- | ---------------------------------------------------------- |
| **Average time spent planning a trip**   | 10.5 hours        | Opportunity to save time → strong USP                      |
| **% users using ≥3 tools when planning** | 72%               | Fragmented market, need for “all-in-one”                   |
| **% trusting current reviews <50%**      | 55%               | Lack of trust → Opportunity for verified reviews           |
| **% who travel in groups ≥3 people**     | 68%               | High demand for collaboration features                     |
| **% willing to use a mobile app**        | 83%               | Confirms mobile-first strategy                             |
| **NPS (prototype test)**                 | +42               | Users are satisfied & find the features easy to understand |
| **Bug/UX issues (beta)**                 | 12 minor, 2 major | Focus on UI and performance optimization                   |

---

## **5. KEY FINDINGS & TRENDS**

| Topic                    | Key Insight                               | Impact on Solution                                  |
| ------------------------ | ----------------------------------------- | --------------------------------------------------- |
| **All-in-one planning**  | High demand for an integrated tool        | Core feature                                        |
| **Trust & authenticity** | Vietnamese users distrust current reviews | Need for review verification & moderation           |
| **Group coordination**   | Group travel creates high stress          | Collaboration features are a must                   |
| **Localization gap**     | Lack of localized experiences             | Prioritize Vietnamese content, UI, reviews          |
| **Post-trip sharing**    | 85% don’t share their experiences         | Need incentives for sharing (gamification, rewards) |

---

## **6. CONFLICTS & RESOLUTIONS**

| Conflict                                                                       | Source                 | Resolution Approach                                                  |
| ------------------------------------------------------------------------------ | ---------------------- | -------------------------------------------------------------------- |
| Users want a simple app ↔ SMEs want more promotional features                  | Solo travelers vs SMEs | Separate “User mode” and “Business mode” interfaces                  |
| UX team wants short flow ↔ Marketing wants more user data                      | UX vs Growth           | Phase 1: Manual curation, Phase 2: Implement AI suggestion           |
| PO wants AI recommendations immediately ↔ Tech lead concerned about data costs | PO vs Tech             | Phase 2: Implement AI suggestions, Phase 1: Focus on manual curation |

---

## **7. VALIDATION STATUS**

| Requirement Type                            | Status                 | Validation Evidence     |
| ------------------------------------------- | ---------------------- | ----------------------- |
| **BR-01:** App reduces 50% of planning time | ✅ Validated           | Survey + prototype test |
| **BR-02:** Verified reviews needed          | ✅ Validated           | Interview + survey      |
| **BR-03:** Real-time collaboration          | ✅ Validated           | Workshop + beta         |
| **BR-04:** Voting feature                   | ⚙️ Under evaluation    | Beta feedback pending   |
| **BR-05:** Auto save itinerary              | ✅ Validated           | Observation             |
| **BR-06:** Gamified review system           | ⚙️ Partially validated | Testing in Phase 2      |
| **BR-07:** Business dashboard               | ✅ Validated           | Partner roundtable      |

---

## **8. REQUIREMENT PRIORITIZATION (ELICITED INSIGHTS – NOT FINAL FRs)**

> **Note:**
> The following items represent _elicited and consolidated stakeholder/business-level needs_.
> They are **not final Functional Requirements**, but prioritized insights derived from elicitation sessions.
> These items will be refined and transformed into **formal Functional and Non-Functional Requirements**
> during the **Requirements Analysis & Design Definition** phase.

---

### **8.1. Prioritization Framework**

| Priority Level | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| **High (H)**   | Critical to core value proposition or MVP success                      |
| **Medium (M)** | Important for user experience or retention, but can follow MVP         |
| **Low (L)**    | Nice-to-have features; enhance differentiation or long-term engagement |

---

### **8.2. Requirement Prioritization Matrix**

| **ID**    | **Requirement Type** | **Description (Elicited Need / Insight)**                                | **Value** | **Effort** | **Status**  | **Notes**                              |
| --------- | -------------------- | ------------------------------------------------------------------------ | --------- | ---------- | ----------- | -------------------------------------- |
| **SR-01** | Stakeholder          | Users need to plan trips in one place instead of juggling multiple tools | High      | Medium     | To analyze  | Core planning UX (primary MVP feature) |
| **SR-02** | Stakeholder          | Need ability to collaborate and share trip plans with friends/family     | High      | High       | To refine   | Drives retention & virality            |
| **SR-03** | Business             | Reduce trip planning time by at least 50%                                | High      | Medium     | To design   | Directly tied to value gap             |
| **SR-04** | Stakeholder          | Require verified, trustworthy reviews (avoid fake content)               | High      | High       | To analyze  | Essential to build user trust          |
| **SR-05** | Business             | Encourage post-trip sharing to build community content                   | Medium    | Medium     | To validate | Supports data network effects          |
| **SR-06** | Stakeholder          | Ability to store and revisit past trip itineraries                       | Medium    | Low        | To refine   | Drives long-term engagement            |
| **SR-07** | Business             | Enable partnerships with local businesses and tourism boards             | Medium    | High       | To design   | Key for revenue stream growth          |
| **SR-08** | Stakeholder          | Mobile-first experience with offline access                              | High      | High       | To analyze  | Vital for field usability              |
| **SR-09** | Business             | Integrate gamification to incentivize reviews                            | Medium    | Medium     | To design   | Boosts UGC contribution rate           |
| **SR-10** | Stakeholder          | Personalized destination recommendations                                 | High      | High       | To analyze  | AI-driven feature (Phase 2+)           |

---

### **8.3. Observations**

- **High-value items (SR-01 → SR-04)** form the **core MVP scope**: trip planning, collaboration, trust, and time-saving.
- **Medium-value items (SR-05 → SR-09)** enhance **community, content, and growth loops**.
- **Low-value or deferred items** may be revisited post-MVP once user base stabilizes.
- **Effort estimations** are preliminary and will be validated with engineering in the upcoming analysis phase.

---

### **8.4. Next Step Alignment**

| Step                                   | Purpose                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------- |
| **Requirements Validation (Phase 2)**  | Confirm accuracy and completeness of each elicited item                   |
| **Requirements Analysis & Definition** | Transform prioritized items into formal Functional Requirements           |
| **Traceability Matrix Setup**          | Link stakeholder needs (SR) → functional specs (FR) → business objectives |
| **Solution Modeling**                  | Develop user stories, use cases, and system behavior models               |

---

## **9. LESSONS LEARNED**

| Observation                                                                                                                           | Strategic Implication                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Vietnamese users are **proactive but lack organizational tools** → The app must emphasize “helping you stay organized when planning.” | Product positioning (value proposition) |
| **Community & trust** are more important than technical features → Not just building an app, but creating a “trusted community.”      | Growth strategy & communication         |
| **Simplicity and speed** are top priorities → UX must be minimal, “1-minute first plan creation.”                                     | Product design                          |
| **Continuous feedback is necessary** → Each phase should include short feedback loops.                                                | Establish continuous discovery process  |

---

## **10. OUTPUT ARTIFACTS**

| Artifact / Deliverable          | Content                                      | Format          |
| ------------------------------- | -------------------------------------------- | --------------- |
| **Elicitation Results Report**  | Comprehensive summary of elicitation results | Markdown / DOCX |
| **Insight Map**                 | Link between user insights ↔ requirements    | Miro            |
| **Validated Requirements List** | List of requirements validated by data       | Notion / Jira   |
| **Updated Traceability Matrix** | Mapping goals ↔ requirements ↔ evidence      | Excel / Notion  |
| **Recommendation Memo**         | Prioritization recommendations               | PDF Summary     |

---

## **11. SUMMARY**

> The Elicitation Results confirm that **initial assumptions have been validated**: Vietnamese users indeed face issues when planning trips (fragmented, time-consuming, unreliable).
> Qualitative and quantitative insights are consistent, reinforcing the **core Value Proposition**:
> **“Making travel planning easier, more trustworthy, and more enjoyable – with friends and the community.”**

**Key conclusions:**

- ✅ The market opportunity is **clear, validated by real data**.
- ✅ Core requirements **are sufficiently reliable to move to the Solution Design phase**.
- ⚙️ Some secondary requirements need further validation through an extended beta phase (Phase 2).
