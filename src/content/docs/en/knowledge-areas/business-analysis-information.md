---
title: BUSINESS ANALYSIS INFORMATION
---

> **Purpose:**
> To identify, organize, and manage all information related to business requirements, stakeholder needs, and elicited data, ensuring consistency, traceability, and readiness for the Solution Definition phase.

---

## **1. PURPOSE**

- Provide a **holistic view** of all information related to the problem and requirements.
- Ensure that all stakeholders can **access and understand the same data source** (single source of truth).
- Lay the foundation for:
  - Specifying Functional & Non-Functional Requirements.
  - Establishing traceability models and baseline requirements.

---

## **2. INFORMATION SOURCES**

| **Source**                   | **Type of Information**                     | **Status**                  |
| ---------------------------- | ------------------------------------------- | --------------------------- |
| **Context.md**               | Market context, trends, opportunities       | Verified                    |
| **Stakeholders.md**          | Stakeholder list, roles, needs              | Verified                    |
| **Needs.md**                 | Core user & organizational needs            | Collected                   |
| **Solutions.md**             | Proposed solutions (draft)                  | Under analysis              |
| **Changes.md**               | Change factors & influencing drivers        | Updated                     |
| **Business Requirements.md** | Business goals & requirements               | Approved at strategic level |
| **Elicitation Results.md**   | Elicited requirement results (elicited SRs) | Internally verified         |

---

## **3. INFORMATION STRUCTURE**

### **3.1. Business Layer**

| Component                      | Description                                                |
| ------------------------------ | ---------------------------------------------------------- |
| **Business Objectives**        | Strategic direction and goals (SO & BO)                    |
| **Business Requirements (BR)** | Business-level requirements, definition of product success |
| **Value Metrics**              | Business value metrics (ROI, retention, NPS, time saved)   |

### **3.2. Stakeholder Layer**

| Component                       | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| **Stakeholder Profiles**        | Categorization of user groups: individual, group, enterprise |
| **Stakeholder Needs (SN)**      | Core needs of each stakeholder group                         |
| **Stakeholder Goals Alignment** | Mapping SN ↔ BR ↔ Business Objectives                        |

### **3.3. Requirement Layer**

| Component                     | Description                                               |
| ----------------------------- | --------------------------------------------------------- |
| **Elicited Needs (SR)**       | Needs collected from stakeholders                         |
| **Business Rules (draft)**    | Rules governing system behavior or processes              |
| **Constraints & Assumptions** | Constraints and assumptions identified during elicitation |
| **Open Questions / Risks**    | Points that need clarification or potential risks         |

---

## **4. INFORMATION QUALITY**

| **Criterion**     | **Rating** | **Notes**                                 |
| ----------------- | ---------- | ----------------------------------------- |
| **Accuracy**      | ⭐⭐⭐⭐   | Verified through 3 data sources           |
| **Completeness**  | ⭐⭐⭐     | Some technical requirements need addition |
| **Consistency**   | ⭐⭐⭐⭐   | No conflicts between SR and BR            |
| **Traceability**  | ⭐⭐⭐     | Will be completed with FR                 |
| **Currency**      | ⭐⭐⭐⭐⭐ | Data updated this month                   |
| **Accessibility** | ⭐⭐⭐⭐   | Centralized storage (Notion / Git repo)   |
| **Security**      | ⭐⭐⭐⭐   | Only core BA/Product team has edit access |

---

## **5. INFORMATION MANAGEMENT PRACTICES**

### **5.1. Repository Structure**

| Layer              | Example              | Purpose                           |
| ------------------ | -------------------- | --------------------------------- |
| **/context/**      | Market, Trends       | Track business context            |
| **/stakeholders/** | Personas, Needs      | Manage stakeholder mapping        |
| **/requirements/** | BRD, SRD, FRD        | Store requirement documents       |
| **/elicitation/**  | Notes, Workshop logs | Store meeting minutes & insights  |
| **/validation/**   | Feedback logs        | Used for trace feedback & version |
| **/solutions/**    | Design drafts        | Link requirements ↔ design        |

### **5.2. Version Control & Traceability**

- Use Git / Notion with **automatic version history**
- Assign **ID tracking code** according to the standard:

```

BR-01 → Business Requirement
SR-05 → Stakeholder / Elicited Requirement
FR-XX → Functional Requirement (not yet released)
NFR-XX → Non-Functional Requirement

```

- After FR analysis, create a **Traceability Matrix (RTM)**
  → to track from BR → SR → FR → Test Case.

---

## **6. KEY INFORMATION SUMMARY**

| **Category**                     | **Main Content**                                                  |
| -------------------------------- | ----------------------------------------------------------------- |
| **Business Context**             | Market grows 15–20% annually; no all-in-one platform in Vietnam   |
| **Problem Definition**           | Fragmented planning process; lack of trust; poor collaboration    |
| **Stakeholder Groups**           | Individual travelers, groups, SMEs in travel, tourism agencies    |
| **Core Business Goals**          | Reduce planning time by 50%, build a trusted community ecosystem  |
| **Elicited Needs Summary (SR)**  | 10 main need groups (SR-01 → SR-10)                               |
| **Information Confidence Level** | 85–90% validated; requires technical refinement in the next phase |
| **Next Deliverable**             | Requirements Analysis & Design Definition (RADD) phase            |

---

## **7. INFORMATION RISKS**

| **Risk**                               | **Impact**                              | **Mitigation**                             |
| -------------------------------------- | --------------------------------------- | ------------------------------------------ |
| Lack of term definition consistency    | Misunderstandings within team           | Establish **Glossary of Terms**            |
| Data spread across many files          | Difficult to sync updates               | Set up Notion as "single source of truth"  |
| Lack of traceability when moving to FR | Loss of connection between BR ↔ SR ↔ FR | Build RTM early, follow standard ID system |
| Version conflict                       | Mismatched between teams                | Use Git + internal review process          |
| Elicitation bias                       | Lack of objective views                 | Cross-check from multiple stakeholders     |

---

## **8. MAINTENANCE PLAN**

| **Activity**                   | **Frequency**        | **Responsibility**        |
| ------------------------------ | -------------------- | ------------------------- |
| **Information review meeting** | Monthly              | Business Analyst Lead     |
| **Data validation sync**       | Every sprint         | Product Owner + Tech Lead |
| **Version tagging**            | After each milestone | Documentation Manager     |
| **Archiving**                  | Every 6 months       | BA team                   |
| **Access audit**               | Once a year          | Ops / Security            |

---

## **9. SUMMARY**

> ✅ **Business Analysis Information** acts as the **central nervous system** of the project — where all data on needs, objectives, and insights are collected, standardized, and structured.
>
> It ensures:
>
> - **High reliability** of information before moving to solution design.
> - **Complete traceability** between needs ↔ objectives ↔ requirements.
> - **Transparency and version control**, ensuring the entire team (PM, BA, Dev, Stakeholders) works with a consistent data source.
