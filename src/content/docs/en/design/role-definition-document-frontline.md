---
title: ROLE DEFINITION DOCUMENT - FRONTLINE SYSTEM
---

## I. ROLE OVERVIEW

| **Role ID** | **Role Name**                    | **Type**    | **Primary Objective**                                                 |
| ----------- | -------------------------------- | ----------- | --------------------------------------------------------------------- |
| R01         | **Traveler**                     | Core        | Create, manage, and store personal or small-group travel plans.       |
| R02         | **Group Planner**                | Core        | Organize, collaborate, and manage group travel plans.                 |
| R03         | **Spot Curator / Reviewer**      | Content     | Collect, save, review, and verify spots.                              |
| R04         | **Local Contributor / Explorer** | Contributor | Post local spots, routes, and real-world travel data.                 |
| R05         | **Creator / Community Member**   | Amplifier   | Share journeys, tell stories, and spread inspiration.                 |
| R06         | **Collaborator / Viewer**        | Peripheral  | View, comment, and follow travel plans.                               |
| R07         | **Guest Viewer**                 | Public      | Access public content without logging in.                             |
| R08         | **System Bridge (hidden)**       | Integration | Technical role for recommendation, synchronization, or loyalty logic. |

---

## II. ROLE DEFINITIONS (Detailed Specification)

---

### **R01 – Traveler**

| Attribute             | Description                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Description**       | Individual user creating travel plans for themselves or a small group.                                            |
| **Primary Actions**   | - Create a new trip.<br>- Add spots from favorites.<br>- Organize itinerary by day.<br>- Save or clone old trips. |
| **Permissions**       | `CREATE_TRIP`, `EDIT_TRIP`, `SAVE_SPOT`, `ADD_NOTE`, `SHARE_TRIP`, `COMMENT`.                                     |
| **Data Access Scope** | Own trips, shared trips, public spots.                                                                            |
| **Dependencies**      | Can be upgraded to `Group Planner` when inviting others.                                                          |
| **Related Personas**  | Linh, Mai, Long                                                                                                   |
| **UX Priority**       | Very high – this is the entry point user of the system.                                                           |

---

### **R02 – Group Planner**

| Attribute             | Description                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| **Description**       | Creates group plans (3–8 people) and manages coordination.                                                |
| **Primary Actions**   | - Create group trips.<br>- Invite collaborators.<br>- Assign tasks.<br>- Manage timeline and permissions. |
| **Permissions**       | `CREATE_TRIP`, `INVITE_USER`, `MANAGE_COLLABORATOR`, `EDIT_TRIP`, `COMMENT`, `LOCK_PLAN`.                 |
| **Data Access Scope** | Trips they create or have management rights for.                                                          |
| **Dependencies**      | Requires authenticated account (login required).                                                          |
| **Related Personas**  | Tuấn, Vy                                                                                                  |
| **UX Priority**       | High – provides the foundation for collaborative experiences.                                             |

---

### **R03 – Spot Curator / Reviewer**

| Attribute             | Description                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Description**       | User who collects, reviews, and manages trusted or favorite spots.                                               |
| **Primary Actions**   | - Save spots from external sources (Maps, links).<br>- Review, add photos, or tag.<br>- Label reliability level. |
| **Permissions**       | `SAVE_SPOT`, `TAG_SPOT`, `ADD_REVIEW`, `RATE_SPOT`, `VIEW_STATISTICS`.                                           |
| **Data Access Scope** | Public spots, personal collections.                                                                              |
| **Dependencies**      | Can provide data input for `Traveler` during trip creation.                                                      |
| **Related Personas**  | Phương, Khánh                                                                                                    |
| **UX Priority**       | Medium-high – provides quality data for the system.                                                              |

---

### **R04 – Local Contributor / Explorer**

| Attribute             | Description                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description**       | Locals or travelers who record real-life journeys.                                                                                   |
| **Primary Actions**   | - Create new spots (with photos and coordinates).<br>- Record real routes (GPS tracking).<br>- Upload images and short descriptions. |
| **Permissions**       | `CREATE_SPOT`, `UPLOAD_MEDIA`, `RECORD_ROUTE`, `EDIT_OWN_CONTENT`.                                                                   |
| **Data Access Scope** | Public map, personal route logs.                                                                                                     |
| **Dependencies**      | Requires location verification (geotag, GPS).                                                                                        |
| **Related Personas**  | Ngọc, Hải                                                                                                                            |
| **UX Priority**       | Medium – high local data value.                                                                                                      |

---

### **R05 – Creator / Community Member**

| Attribute             | Description                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Description**       | Content creator sharing travel stories and experiences.                                                         |
| **Primary Actions**   | - Turn trips into “stories.”<br>- Add images, emotions, or background music.<br>- Track views and interactions. |
| **Permissions**       | `PUBLISH_STORY`, `MANAGE_PROFILE`, `VIEW_ANALYTICS`, `ENABLE_COMMENTS`.                                         |
| **Data Access Scope** | Own trips, published stories, public audience.                                                                  |
| **Dependencies**      | Requires completed trip data as input.                                                                          |
| **Related Personas**  | Trang                                                                                                           |
| **UX Priority**       | Medium–high (encourages community engagement and retention).                                                    |

---

### **R06 – Collaborator / Viewer**

| Attribute             | Description                                                                         |
| --------------------- | ----------------------------------------------------------------------------------- |
| **Description**       | Invited member of a group plan who can view and give feedback.                      |
| **Primary Actions**   | - View itinerary.<br>- Comment or suggest spots.<br>- Mark progress (OK / pending). |
| **Permissions**       | `VIEW_TRIP`, `COMMENT`, `SUGGEST_SPOT`, `REACTION`.                                 |
| **Data Access Scope** | Trips they were invited to.                                                         |
| **Dependencies**      | Permissions granted by `Group Planner`.                                             |
| **Related Personas**  | Vy, Huy                                                                             |
| **UX Priority**       | Medium – supports light collaboration without friction.                             |

---

### **R07 – Guest Viewer**

| Attribute             | Description                                                                |
| --------------------- | -------------------------------------------------------------------------- |
| **Description**       | Public viewer accessing shared plans or stories via links without account. |
| **Primary Actions**   | - View maps and timelines.<br>- React with emoji or simple reactions.      |
| **Permissions**       | `READ_ONLY_ACCESS`, `ADD_REACTION` (optional).                             |
| **Data Access Scope** | Public trips and public stories.                                           |
| **Dependencies**      | No login required.                                                         |
| **Related Personas**  | Huy                                                                        |
| **UX Priority**       | Medium-low – essential for viral sharing and exposure.                     |

---

### **R08 – System Bridge (Hidden Role)**

| Attribute             | Description                                                                        |
| --------------------- | ---------------------------------------------------------------------------------- |
| **Description**       | Automated system role – handles recommendation, loyalty, and data synchronization. |
| **Primary Actions**   | - Analyze behavior.<br>- Update badges / points.<br>- Recommend new trips / spots. |
| **Permissions**       | `SYSTEM_READ_ALL`, `GENERATE_RECOMMENDATION`, `UPDATE_REWARD_STATE`.               |
| **Data Access Scope** | Entire system (read-only + computed write).                                        |
| **Dependencies**      | Connected to Recommendation Engine & Data Sync module.                             |
| **Related Personas**  | Thảo (Recommendation Designer)                                                     |
| **UX Priority**       | Hidden – backend logic only.                                                       |

---

## III. ROLE RELATIONSHIP MAP

| **From (Source Role)** | **To (Target Role)** | **Interaction Type** | **Purpose**                                 |
| ---------------------- | -------------------- | -------------------- | ------------------------------------------- |
| Traveler               | Group Planner        | Upgrade / Merge      | When a user invites others to join.         |
| Group Planner          | Collaborator         | Invite / Share       | Assign collaboration roles in planning.     |
| Traveler               | Curator / Reviewer   | Consume              | Use reviewed / saved spots.                 |
| Contributor            | Creator              | Inspire              | Create stories from real journeys.          |
| Creator                | Viewer               | Publish              | Share public stories.                       |
| System Bridge          | All                  | Recommend / Reward   | Provide recommendations and reward updates. |

---

## IV. ACCESS CONTROL SUMMARY

| **Role**               | **Access Level** | **Create**    | **Edit**         | **View** | **Share** | **Moderate**    |
| ---------------------- | ---------------- | ------------- | ---------------- | -------- | --------- | --------------- |
| Traveler               | Owner            | ✅            | ✅               | ✅       | ✅        | ❌              |
| Group Planner          | Owner+           | ✅            | ✅               | ✅       | ✅        | 🔸(within trip) |
| Curator / Reviewer     | Content          | ✅            | ✅(own)          | ✅       | ❌        | ❌              |
| Contributor / Explorer | Content          | ✅            | ✅(own)          | ✅       | ✅        | ❌              |
| Creator / Community    | Content+         | ✅            | ✅(own)          | ✅       | ✅        | ❌              |
| Collaborator           | Limited          | ❌            | 🔸(suggest only) | ✅       | ❌        | ❌              |
| Guest Viewer           | Public           | ❌            | ❌               | ✅       | ❌        | ❌              |
| System Bridge          | System           | ✅(automated) | ✅               | ✅       | ✅        | ✅              |
