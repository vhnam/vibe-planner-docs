---
title: ROLE DEFINITION DOCUMENT — BACK OFFICE SYSTEM
---

## I. ROLE OVERVIEW

| **Role ID** | **Role Name**                          | **Type**       | **Primary Objective**                                                                 |
| ----------- | -------------------------------------- | -------------- | ------------------------------------------------------------------------------------- |
| B01         | **System Curator / Moderator**         | Core           | Maintain community data quality (spot, trip, review).                                 |
| B02         | **Data Integrator / Engineer**         | Infrastructure | Connect, standardize, and synchronize data from external sources (API, Tourism Dept). |
| B03         | **Recommendation Designer**            | Intelligence   | Design, tune, and test recommendation and emotional tagging systems.                  |
| B04         | **Community Manager / Admin**          | Operational    | Monitor user activity, handle reports, and maintain a safe environment.               |
| B05         | **Product Analyst / Insight Operator** | Analytical     | Track KPIs, user behavior, and feature performance.                                   |
| B06         | **Super Admin (System Owner)**         | Authority      | Full control over configuration, permissions, and approval of content/users.          |

---

## II. ROLE DEFINITIONS (Detailed Specification)

---

### **B01 – System Curator / Moderator**

| Attribute             | Description                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**       | Manage, merge, and verify community-generated data (spot, review, trip story).                                                                |
| **Primary Actions**   | - Approve or reject user-submitted content.<br>- Merge duplicate spots.<br>- Flag incorrect or spam data.<br>- Suggest automatic corrections. |
| **Permissions**       | `APPROVE_CONTENT`, `MERGE_SPOT`, `DELETE_REVIEW`, `VERIFY_MEDIA`, `FLAG_SPAM`.                                                                |
| **Data Access Scope** | All user-generated content (UGC).                                                                                                             |
| **Dependencies**      | Works closely with Data Integrator (B02).                                                                                                     |
| **Related Personas**  | Duy – System Curator                                                                                                                          |
| **Tools Needed**      | Moderation Dashboard, Content Diff Tool, Auto-Merge AI Assistant.                                                                             |

---

### **B02 – Data Integrator / Engineer**

| Attribute             | Description                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Description**       | Integrate and standardize data from external sources (public APIs, Tourism Board, Google Places, etc.).             |
| **Primary Actions**   | - Manage ETL pipeline.<br>- Map schema/taxonomy.<br>- Validate data freshness.<br>- Detect errors and trigger sync. |
| **Permissions**       | `MANAGE_PIPELINE`, `IMPORT_DATA`, `EDIT_SCHEMA`, `VALIDATE_SOURCE`, `RUN_SYNC`.                                     |
| **Data Access Scope** | External data sources, staging DB, curated DB.                                                                      |
| **Dependencies**      | Supports Curator and Recommendation Designer.                                                                       |
| **Related Personas**  | Quân – Data Integrator                                                                                              |
| **Tools Needed**      | Data Integration Dashboard, ETL Monitor, Quality Reports.                                                           |

---

### **B03 – Recommendation Designer**

| Attribute             | Description                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**       | Optimize recommendation engine using behavioral, emotional, and reliability data.                                                        |
| **Primary Actions**   | - Configure recommendation algorithms.<br>- Manage “emotion tags” and “trip vibes.”<br>- Run A/B tests.<br>- Evaluate CTR and retention. |
| **Permissions**       | `MANAGE_ALGORITHM`, `EDIT_TAGS`, `DEPLOY_MODEL`, `VIEW_ANALYTICS`, `RUN_AB_TEST`.                                                        |
| **Data Access Scope** | Aggregated, anonymized behavioral data.                                                                                                  |
| **Dependencies**      | Receives input from Curator (trust metrics) and Integrator (standardized metadata).                                                      |
| **Related Personas**  | Thảo – Recommendation Designer                                                                                                           |
| **Tools Needed**      | Recommender Lab, Tag Editor, Experiment Dashboard.                                                                                       |

---

### **B04 – Community Manager / Admin**

| Attribute             | Description                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Description**       | Monitor user activity, respond to reports, and ensure a safe and healthy community environment.                                     |
| **Primary Actions**   | - Handle violation reports.<br>- Suspend or warn accounts.<br>- Manage badges and reward points.<br>- Send community announcements. |
| **Permissions**       | `MANAGE_USER`, `SUSPEND_ACCOUNT`, `HANDLE_REPORT`, `EDIT_BADGE`, `POST_ANNOUNCEMENT`.                                               |
| **Data Access Scope** | User profiles, report logs, gamification database.                                                                                  |
| **Dependencies**      | Connects with Creator / Loyalty module from Frontline.                                                                              |
| **Related Personas**  | Trang (Community Builder – internalized), Long (Loyal Member feedback)                                                              |
| **Tools Needed**      | User Activity Dashboard, Reward Manager, Notification Center.                                                                       |

---

### **B05 – Product Analyst / Insight Operator**

| Attribute             | Description                                                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**       | Track system performance, user KPIs, and generate insights for the Product Team.                                                                     |
| **Primary Actions**   | - Analyze user behavior (retention, engagement).<br>- Track recommendation quality.<br>- Generate regular KPI reports.<br>- Integrate with BI tools. |
| **Permissions**       | `READ_ANALYTICS`, `EXPORT_DATA`, `CREATE_DASHBOARD`, `TAG_EVENT`.                                                                                    |
| **Data Access Scope** | Analytics warehouse (read-only).                                                                                                                     |
| **Dependencies**      | Requires data from all Back Office modules.                                                                                                          |
| **Related Personas**  | None directly — corresponds to Product-side stakeholders.                                                                                            |
| **Tools Needed**      | Analytics Portal (Mixpanel / Metabase / Superset).                                                                                                   |

---

### **B06 – Super Admin / System Owner**

| Attribute             | Description                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Description**       | Full-access user responsible for system integrity and security within Back Office.                                                |
| **Primary Actions**   | - Grant/revoke Back Office roles.<br>- View system logs.<br>- Configure API and deployment keys.<br>- Approve new model releases. |
| **Permissions**       | `FULL_ACCESS`, `MANAGE_ROLES`, `VIEW_LOGS`, `CONFIGURE_SYSTEM`, `APPROVE_RELEASE`.                                                |
| **Data Access Scope** | Entire system (superuser).                                                                                                        |
| **Dependencies**      | Oversees all other roles.                                                                                                         |
| **Related Personas**  | None (internal Product Owner / CTO).                                                                                              |
| **Tools Needed**      | System Admin Console, Access Control Panel, Log Monitor.                                                                          |

---

## III. ROLE RELATIONSHIP MAP

| **From (Role)**               | **To (Role)**                 | **Interaction Type** | **Purpose**                                 |
| ----------------------------- | ----------------------------- | -------------------- | ------------------------------------------- |
| Curator (B01)                 | Integrator (B02)              | Validate / Sync      | Ensure external data is correctly merged.   |
| Integrator (B02)              | Recommendation Designer (B03) | Feed / Enrich        | Provide standardized metadata to algorithm. |
| Curator (B01)                 | Community Manager (B04)       | Flag / Report        | Handle user content violations.             |
| Recommendation Designer (B03) | Product Analyst (B05)         | Monitor / Evaluate   | Track recommendation performance.           |
| Super Admin (B06)             | All                           | Approve / Audit      | Control, security, and system auditing.     |

---

## IV. ACCESS CONTROL SUMMARY

| **Role**          | **Access Level** | **Moderation**    | **Data Integration** | **Recommendation** | **Analytics**     | **User Ops** | **System Config** |
| ----------------- | ---------------- | ----------------- | -------------------- | ------------------ | ----------------- | ------------ | ----------------- |
| Curator           | Medium           | ✅                | 🔸 (read)            | ❌                 | 🔸 (review stats) | ❌           | ❌                |
| Integrator        | High             | 🔸 (sync logs)    | ✅                   | 🔸                 | 🔸                | ❌           | ❌                |
| Recomm. Designer  | Medium           | ❌                | 🔸 (meta)            | ✅                 | ✅                | ❌           | ❌                |
| Community Manager | Medium           | ✅ (user content) | ❌                   | ❌                 | 🔸 (reward data)  | ✅           | ❌                |
| Product Analyst   | Read-only        | ❌                | ❌                   | ✅(KPI view)       | ✅                | ❌           | ❌                |
| Super Admin       | Full             | ✅                | ✅                   | ✅                 | ✅                | ✅           | ✅                |

🔸 = limited / read-only access

---

## V. Design & Implementation Notes

| Category              | Design Implication                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| **UX Level**          | Dashboard UI should clearly separate modules: Moderation – Data Sync – Recommendation – Analytics.  |
| **Access Control**    | Use RBAC via `role_id`, extendable with ABAC (e.g., `data.source == "external"` → only Integrator). |
| **Security**          | All actions require `audit log` and `2FA`.                                                          |
| **Workflow**          | Any changes from Curator / Integrator must go through an Admin “approval flow.”                     |
| **Integration Layer** | Back Office connects to Frontline via `Content Pipeline API` and `Analytics Stream`.                |
