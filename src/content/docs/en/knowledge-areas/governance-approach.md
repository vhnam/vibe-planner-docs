---
title: GOVERNANCE APPROACH
---

## **1. PURPOSE**

The purpose of the **Governance Approach** is to establish a **decision-making framework, delegation of authority, approval processes, and oversight** to:

- Ensure all analysis and product development activities are **controlled, transparent, and consistent**.
- Minimize risks from **decision conflicts, scope creep, or uncontrolled changes**.
- Ensure **all stakeholders participate appropriately** and every change is traceable.

> 🎯 **Expected outcome:** Every decision has a responsible person, a reason, evidence, and a way to measure impact.

---

## **2. PRINCIPLES**

| Principle                           | Explanation                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Accountability over Authority**   | The person accountable has the final decision-making power — no ambiguity between “participate” and “approve.” |
| **Transparency & Traceability**     | All important decisions are recorded, stored, and traceable.                                                   |
| **Consensus-driven, Data-informed** | Prefer consensus but base decisions on data rather than personal opinions.                                     |
| **Adaptive Governance**             | Flexible according to product development stages (MVP → Scale-up).                                             |
| **Risk-based Oversight**            | The level of control is proportional to the risk or cost of the change.                                        |

---

## **3. GOVERNANCE STRUCTURE**

### **3.1. Organizational Roles**

| Role                        | Main Responsibilities                               | Decision Authority            |
| --------------------------- | --------------------------------------------------- | ----------------------------- |
| **Product Owner / Founder** | Product direction, approve scope & priorities       | ✅ Final approver             |
| **Project Manager (PM)**    | Coordinate timeline, resources, and processes       | ✅ Approve execution plan     |
| **Business Analyst (BA)**   | Manage requirements, documentation, traceability    | 🔸 Advisory                   |
| **Tech Lead / Architect**   | Assess technical feasibility, solution architecture | 🔸 Advisory                   |
| **Design Lead (UX/UI)**     | Ensure experience and UI consistency                | 🔸 Advisory                   |
| **Quality Assurance (QA)**  | Ensure output quality                               | 🔸 Approval for release       |
| **Stakeholders / Partners** | Provide insights, feedback                          | ⚪ Consulted                  |
| **Investors / Advisors**    | Approve financial milestones                        | ✅ Final approver (financial) |

> 🔹 _This structure applies a “RACI + lightweight governance” model — suitable for fast-paced startups._

---

### **3.2. Governance Tiers**

| Level                          | Authority                             | Decision Type                      | Approval Mechanism          |
| ------------------------------ | ------------------------------------- | ---------------------------------- | --------------------------- |
| **Strategic (Board)**          | Long-term direction, finance          | Funding, pivot, major scope change | Monthly Board Review        |
| **Tactical (Product Council)** | Roadmap prioritization, release scope | Feature backlog, sprint scope      | Biweekly Review             |
| **Operational (Team Level)**   | Technical & design decisions          | UI changes, refactor, bug fixes    | Daily standup / PR approval |

---

## **4. DECISION-MAKING FRAMEWORK**

### **4.1. RACI Matrix**

| Activity                      | R (Responsible) | A (Accountable) | C (Consulted) | I (Informed) |
| ----------------------------- | --------------- | --------------- | ------------- | ------------ |
| Define user requirements      | BA              | PO              | UX, Marketing | Dev team     |
| Approve MVP scope             | PM              | Founder         | Tech Lead, BA | All          |
| Prioritize backlog            | PO              | Founder         | PM, BA        | Dev team     |
| Feature change (scope change) | PM              | PO              | Tech Lead     | QA           |
| Approve UI/UX design          | UX Lead         | PO              | BA            | Dev          |
| Product release               | QA Lead         | PM              | PO, Tech Lead | All          |
| KPI / performance reporting   | Data Analyst    | PM              | Founder       | Investors    |

---

### **4.2. Decision Log Policy**

- All decisions impacting **scope, timeline, cost, or quality** must:

  - 📝 Be recorded in the **Decision Register (Notion/Jira)**
  - 📅 Timestamped and assigned accountable person
  - 📊 Linked to supporting documents (analysis, data, feedback)
  - 🔄 Reviewed periodically at sprint reviews or monthly board meetings

---

## **5. CHANGE CONTROL PROCESS**

### **5.1. Change Request Flow**

```

Stakeholder → Raise Change Request (via Jira/Notion)
↓
BA + PM → Evaluate Impact (Scope, Cost, Timeline)
↓
Product Council → Approve / Reject / Defer
↓
Dev Team → Implement (if approved)
↓
QA → Validate & Record Change Outcome

```

### **5.2. Change Evaluation Criteria**

| Criteria          | Description                     | Rating |
| ----------------- | ------------------------------- | ------ |
| **Value Impact**  | Effect on users or revenue      | +++    |
| **Effort / Cost** | Resources required              | ++     |
| **Risk Level**    | Potential for defects or delays | +      |
| **Strategic Fit** | Alignment with business goals   | +++    |
| **Urgency**       | Whether it can be deferred      | + / -  |

> Each request is scored and prioritized by _Value/Effort ratio._

---

## **6. APPROVAL WORKFLOW**

| Approval Type               | Approver           | Timing                 | Tool                     |
| --------------------------- | ------------------ | ---------------------- | ------------------------ |
| **Feature Scope**           | PO / PM            | Sprint Planning        | Jira                     |
| **Budget Allocation**       | Founder / Investor | Quarterly              | Notion Finance Board     |
| **Design/UI Change**        | UX Lead            | During Design Review   | Figma                    |
| **Technical Decision**      | Tech Lead          | PR Review / Design Doc | GitHub / Notion          |
| **Release Approval**        | QA + PM            | End of sprint          | Notion + Slack           |
| **Vendor/Partnership Deal** | Founder            | Case-by-case           | Email + Contract storage |

---

## **7. QUALITY CONTROL & COMPLIANCE**

| Activity                    | Objective                                | Responsible     | Tool              |
| --------------------------- | ---------------------------------------- | --------------- | ----------------- |
| **Requirements Review**     | Ensure clear & testable requirements     | BA / PO         | Notion / Jira     |
| **Design Review**           | Check UX/UI & consistency                | Design Lead     | Figma             |
| **Code Review**             | Ensure clean code & guideline compliance | Dev / Tech Lead | GitHub PR         |
| **Testing & QA**            | Ensure quality before release            | QA              | TestRail / Notion |
| **Retro & Lessons Learned** | Continuous process improvement           | PM / Team       | Miro Board        |

---

## **8. INFORMATION GOVERNANCE**

| Information Type                  | Security Level | Storage Policy                                   | Tool                      |
| --------------------------------- | -------------- | ------------------------------------------------ | ------------------------- |
| **Business Docs (BRD, Strategy)** | Confidential   | Notion (restricted access)                       | Notion                    |
| **User Data**                     | High (PII)     | Encryption, comply with VN GDPR (Decree 13/2023) | Firebase + Encryption     |
| **Financial Reports**             | High           | Founder & Investor only                          | Google Drive (restricted) |
| **Meeting Records**               | Medium         | Stored for 12 months                             | Notion / Google Meet      |
| **Decisions & Logs**              | Medium         | Permanent (audit)                                | Jira / Notion             |

---

## **9. MONITORING & ESCALATION**

| Situation                    | Responsible | Handling Method                                 |
| ---------------------------- | ----------- | ----------------------------------------------- |
| Progress delay >10%          | PM          | Escalate to Founder, re-plan sprint             |
| Budget overrun >15%          | Founder     | Review scope or cut phase                       |
| Poor quality (bug rate >10%) | QA          | Pause release, conduct root cause analysis      |
| Unlogged changes             | BA          | Block implementation, require retroactive entry |
| Decision deadlock            | PM + PO     | Trigger Decision Escalation Protocol            |

---

## **10. GOVERNANCE REVIEW CYCLE**

| Governance Level               | Meeting Frequency | Objectives                         |
| ------------------------------ | ----------------- | ---------------------------------- |
| **Operational (Team)**         | Weekly            | Sprint progress, blockers          |
| **Tactical (Product Council)** | Biweekly          | Priorities, resource allocation    |
| **Strategic (Board)**          | Monthly           | KPIs, finance, risks               |
| **Retrospective**              | Quarterly         | Lessons learned & governance audit |

---

## **11. RISKS & MITIGATION**

| Risk                            | Impact                         | Mitigation Measures                  |
| ------------------------------- | ------------------------------ | ------------------------------------ |
| Overly complex approval process | Slows decision-making speed    | Limit approvers, use async approvals |
| Scope creep                     | Missed timeline, over budget   | Strict change control policy         |
| Unrecorded decisions            | Lack of accountability         | Mandatory decision log               |
| Product-Tech conflicts          | Deployment delays              | Joint PO & Tech Lead review          |
| Lack of audit trail             | Loss of data or responsibility | Automated log backup (Jira, Notion)  |

---

## **12. GOVERNANCE MATURITY ROADMAP**

| Phase                              | Characteristics                           | Governance Goals                               |
| ---------------------------------- | ----------------------------------------- | ---------------------------------------------- |
| **Phase 1 – MVP (0–6 months)**     | Lean governance, fast decisions           | Focus on speed, minimum documentation          |
| **Phase 2 – Growth (6–18 months)** | Layered governance (team-level + council) | Ensure traceability, consistency               |
| **Phase 3 – Scale (18+ months)**   | Formal governance framework               | Standardize audit, risk management, compliance |

---

## **13. SUMMARY**

> The project’s Governance Approach is designed under the philosophy **“lean but accountable”** — fast, clear, and scalable.  
> The goal is not to add control layers but to **increase transparency and reduce risk when scaling**.

**Three core principles:**

1. **Transparency:** All decisions logged with accountable owners.
2. **Agility:** Streamlined approval processes fit for startup stages.
3. **Scalability:** Able to expand into formal governance at Series A+.
