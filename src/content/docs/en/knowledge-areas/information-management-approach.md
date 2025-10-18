---
title: INFORMATION MANAGEMENT APPROACH
---

## **1. PURPOSE**

To establish a **consistent, secure, and scalable information management system** to:

- Ensure **all data and analysis documents** (requirements, decisions, feedback, metrics…) are accurately stored, retrieved, and updated.
- Create a **Single Source of Truth** for the entire product team.
- Support **traceability, version control, and knowledge reuse** in subsequent project phases.

> 🎯 **Desired outcome:** “No information lost, no data drifting, and everyone works on the same actual version.”

---

## **2. SCOPE**

Applied throughout the entire Business Analysis lifecycle:

| Phase                         | Type of information to manage             | Examples                        |
| ----------------------------- | ----------------------------------------- | ------------------------------- |
| **Planning**                  | Strategy, objectives, stakeholder maps    | Vision, SWOT, Stakeholder Grid  |
| **Elicitation**               | Raw notes, interviews, workshop output    | Meeting records, survey results |
| **Analysis**                  | Models, process flows, requirements specs | User journeys, use cases        |
| **Design Definition**         | User stories, acceptance criteria         | Jira tickets, UX specs          |
| **Validation & Verification** | Test results, feedback                    | Beta survey results             |
| **Change Management**         | Change logs, decision records             | Scope adjustments               |

---

## **3. INFORMATION TYPES & CLASSIFICATION**

### **3.1. Business Analysis Artifacts**

| Information Type            | Description                         | Format                 | Owner             |
| --------------------------- | ----------------------------------- | ---------------------- | ----------------- |
| **Business Objectives**     | Vision, mission, OKRs               | Markdown / Notion      | PO / BA           |
| **Requirements (BRD, FRD)** | Functional and non-functional specs | Markdown / DOCX / Jira | BA                |
| **Stakeholder Data**        | Profiles, interests, influence      | Notion                 | BA                |
| **Process Models**          | Workflows, journey maps             | Miro / Draw.io         | BA                |
| **Design Artifacts**        | Wireframes, prototypes              | Figma                  | UX Lead           |
| **Change Records**          | Decision logs, CRs                  | Jira / Notion          | PM                |
| **Reports & Dashboards**    | KPIs, metrics                       | Data Studio / Notion   | PM / Data Analyst |

---

### **3.2. Classification by Sensitivity**

| Security Level   | Description                         | Examples                      |
| ---------------- | ----------------------------------- | ----------------------------- |
| **Public**       | Can be shared publicly              | Blog content, case studies    |
| **Internal**     | For internal project use only       | Backlog, sprint report        |
| **Confidential** | Only for core team                  | Roadmap, stakeholder feedback |
| **Restricted**   | Sensitive info, requires encryption | User data, financials         |

---

## **4. INFORMATION LIFECYCLE MANAGEMENT**

### **4.1. Lifecycle Stages**

| Stage                  | Main Activities                          | Responsible | Tools                |
| ---------------------- | ---------------------------------------- | ----------- | -------------------- |
| **Creation**           | Collecting, recording initial info       | BA, PM      | Notion, Miro         |
| **Validation**         | Accuracy and consensus check             | BA, PO      | Review checklist     |
| **Storage**            | Storing in official system               | PM          | Notion, Drive        |
| **Access & Use**       | Sharing, referencing, collaborating      | Entire team | Notion, Jira         |
| **Update**             | Versioning, updating changes             | BA          | Version log          |
| **Archive / Disposal** | Long-term storage or deletion per policy | PM          | Google Drive Archive |

---

### **4.2. Version Control Policy**

| Rule                                                        | Objective                         |
| ----------------------------------------------------------- | --------------------------------- |
| Each document has **ID & version number** (e.g. BR-01 v1.2) | Easy retrieval, change comparison |
| **Change summary** must be recorded at the document head    | Transparent reason for changes    |
| **Only BA or PM** can update the official version           | Reduce errors                     |
| **Historical versions** kept for at least 12 months         | Restore for audit if needed       |

---

## **5. STORAGE & TOOLING STRATEGY**

| Tool Type                | Selected Tool                      | Purpose                              |
| ------------------------ | ---------------------------------- | ------------------------------------ |
| **Documentation**        | 🟢 _Notion_                        | Central knowledge base, traceability |
| **Collaboration**        | 🟢 _Google Workspace_              | Document sharing, meetings           |
| **Version Control**      | 🟢 _GitHub / Jira_                 | Requirements trace & PRDs            |
| **Design Repository**    | 🟢 _Figma_                         | UX/UI files                          |
| **Process Modeling**     | 🟢 _Miro / Draw.io_                | Workflow diagrams                    |
| **Storage & Backup**     | 🟢 _Google Drive + Notion export_  | Long-term archive                    |
| **Analytics & Tracking** | 🟢 _Google Data Studio / Metabase_ | Metrics dashboards                   |

---

## **6. ACCESS CONTROL & SECURITY**

| Role                                 | Access Rights                   | Level          |
| ------------------------------------ | ------------------------------- | -------------- |
| **Founder / PO**                     | Full access & approval          | Admin          |
| **PM / BA / Tech Lead**              | Full rights within their module | Edit           |
| **Team Members (Dev, Design)**       | View & edit relevant parts      | Edit / Comment |
| **External Stakeholders (Partners)** | Read-only, limited sharing      | View           |
| **Investors / Advisors**             | View reports & roadmap          | View only      |

> 🔒 All “Confidential” or “Restricted” documents are protected by:

- Google Workspace Access Control
- 2FA Authentication
- Only PO or PM can share outside the organization

---

## **7. TRACEABILITY & LINKAGE POLICY**

### **7.1. Traceability Matrix (RTM)**

| Link Level                               | Objective                                                          |
| ---------------------------------------- | ------------------------------------------------------------------ |
| **Business → Stakeholder → Requirement** | Each requirement must be linked to specific goals and stakeholders |
| **Requirement → Solution Component**     | Easy to check coverage                                             |
| **Requirement → Test Case**              | Ensure verifiability                                               |
| **Decision → Change Request**            | Control change logic                                               |

### **7.2. Tool Implementation**

> Maintain RTM on **Notion / Jira** with custom linking between “Requirement,” “Feature,” and “Test Case.”

---

## **8. KNOWLEDGE MANAGEMENT PRACTICES**

| Activity                         | Objective                        | Frequency            |
| -------------------------------- | -------------------------------- | -------------------- |
| **Weekly Sync Note**             | Summarize insights, blockers     | Weekly               |
| **Sprint Retrospective Summary** | Record lessons learned           | Every 2 weeks        |
| **Post-Mortem Report**           | Analyze root causes of incidents | When incident occurs |
| **Knowledge Sharing Session**    | Share best practices             | Monthly              |
| **Documentation Review**         | Check document updates           | Quarterly            |

---

## **9. DATA RETENTION & DISPOSAL POLICY**

| Data Type                  | Retention Period | Post-Expiry Handling             |
| -------------------------- | ---------------- | -------------------------------- |
| **Project Docs (BA, PM)**  | 3 years          | Move to archive folder           |
| **Stakeholder Feedback**   | 2 years          | Delete PII, keep aggregated data |
| **User Data (Beta)**       | Per consent      | Fully delete upon request        |
| **Financial & Legal Docs** | 5 years          | Store offline backup             |
| **Decision Logs**          | Permanent        | Retain for audit                 |

---

## **10. INFORMATION QUALITY STANDARDS**

| Criterion         | Requirement                                         |
| ----------------- | --------------------------------------------------- |
| **Accuracy**      | Must be verified by at least one independent source |
| **Completeness**  | No missing critical information or dependencies     |
| **Consistency**   | Language, format, units must be uniform             |
| **Relevance**     | Only retain information with practical use value    |
| **Timeliness**    | Update within 48 hours after changes                |
| **Accessibility** | Retrievable within ≤3 clicks                        |
| **Security**      | Encryption and appropriate access rights            |

---

## **11. REVIEW & AUDIT SCHEDULE**

| Frequency     | Activity                         | Responsible     |
| ------------- | -------------------------------- | --------------- |
| **Weekly**    | Review active documents          | BA / PM         |
| **Monthly**   | Audit access rights              | PM              |
| **Quarterly** | Documentation health check       | PM / Tech Lead  |
| **Annual**    | Compliance review (VN GDPR, PII) | Founder / Legal |

---

## **12. RISKS & MITIGATION**

| Risk                      | Impact                             | Mitigation Measures             |
| ------------------------- | ---------------------------------- | ------------------------------- |
| Data loss / backup errors | Loss of important information      | Daily automated backups         |
| Lack of traceability      | Unable to prove requirement source | Apply BABOK standard RTM        |
| Outdated documents        | Misleading understanding           | Mandatory quarterly review      |
| Unauthorized access       | Security breaches                  | Strict permissions, access logs |
| Inconsistent naming       | Difficult to search                | Clear naming conventions        |

---

## **13. SUMMARY**

> The **Information Management Approach** of the Travel Planner project is designed to:
>
> - 🧭 **Create a “Single Source of Truth”** — all critical information centralized in Notion/Jira.
> - 🔒 **Ensure security and compliance with Vietnamese law** (Decree 13/2023 on personal data protection).
> - 🧩 **Closely integrate with Governance & Stakeholder Approach** to maintain transparency, traceability, and collaboration efficiency.
> - 🚀 **Aim for scalability** as the team grows from 5 → 20 members and documents increase tenfold.
