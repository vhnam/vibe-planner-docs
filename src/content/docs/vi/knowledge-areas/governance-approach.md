---
title: GOVERNANCE APPROACH
---

## **1. PURPOSE (MỤC TIÊU)**

Mục tiêu của **Governance Approach** là thiết lập **khung ra quyết định, phân quyền, quy trình phê duyệt và giám sát** nhằm:

- Đảm bảo mọi hoạt động phân tích và phát triển sản phẩm **được kiểm soát, minh bạch và nhất quán**.
- Giảm thiểu rủi ro do **mâu thuẫn quyết định, scope creep hoặc thay đổi không kiểm soát**.
- Đảm bảo **mọi bên liên quan được tham gia đúng mức** và mọi thay đổi đều được traceable.

> 🎯 **Kết quả mong muốn:** Mỗi quyết định có người chịu trách nhiệm, có lý do, có bằng chứng, và có cách đo lường tác động.

---

## **2. PRINCIPLES (NGUYÊN TẮC QUẢN TRỊ)**

| Nguyên tắc                          | Diễn giải                                                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Accountability over Authority**   | Người chịu trách nhiệm (Accountable) có quyền quyết định cuối cùng — không mập mờ giữa “tham gia” và “phê duyệt”. |
| **Transparency & Traceability**     | Mọi quyết định quan trọng được ghi nhận, lưu trữ, và có thể truy xuất nguồn gốc.                                  |
| **Consensus-driven, Data-informed** | Ưu tiên đồng thuận, nhưng dựa trên dữ liệu thay vì ý kiến cá nhân.                                                |
| **Adaptive Governance**             | Linh hoạt với giai đoạn phát triển sản phẩm (MVP → Scale-up).                                                     |
| **Risk-based Oversight**            | Mức độ kiểm soát tỉ lệ thuận với mức độ rủi ro hoặc chi phí của thay đổi.                                         |

---

## **3. GOVERNANCE STRUCTURE (CẤU TRÚC QUẢN TRỊ)**

### **3.1. Organizational Roles**

| Vai trò                     | Trách nhiệm chính                               | Quyền quyết định              |
| --------------------------- | ----------------------------------------------- | ----------------------------- |
| **Product Owner / Founder** | Định hướng sản phẩm, phê duyệt scope & priority | ✅ Final approver             |
| **Project Manager (PM)**    | Điều phối timeline, tài nguyên, và quy trình    | ✅ Approve execution plan     |
| **Business Analyst (BA)**   | Quản lý yêu cầu, tài liệu hóa, traceability     | 🔸 Advisory                   |
| **Tech Lead / Architect**   | Đánh giá khả thi kỹ thuật, kiến trúc giải pháp  | 🔸 Advisory                   |
| **Design Lead (UX/UI)**     | Bảo đảm trải nghiệm và UI consistency           | 🔸 Advisory                   |
| **Quality Assurance (QA)**  | Đảm bảo chất lượng đầu ra                       | 🔸 Approval for release       |
| **Stakeholders / Partners** | Đóng góp insight, phản hồi                      | ⚪ Consulted                  |
| **Investors / Advisors**    | Phê duyệt milestone tài chính                   | ✅ Final approver (financial) |

> 🔹 _Cấu trúc này áp dụng mô hình “RACI + lightweight governance” – phù hợp startup tốc độ cao._

---

### **3.2. Governance Tiers**

| Level                          | Quyền hạn                      | Loại quyết định                    | Cơ chế phê duyệt            |
| ------------------------------ | ------------------------------ | ---------------------------------- | --------------------------- |
| **Strategic (Board)**          | Định hướng dài hạn, tài chính  | Funding, pivot, major scope change | Monthly Board Review        |
| **Tactical (Product Council)** | Ưu tiên roadmap, release scope | Feature backlog, sprint scope      | Biweekly Review             |
| **Operational (Team Level)**   | Quyết định kỹ thuật & thiết kế | UI change, refactor, bug fix       | Daily standup / PR approval |

---

## **4. DECISION-MAKING FRAMEWORK**

### **4.1. RACI Matrix**

| Hoạt động                         | R (Responsible) | A (Accountable) | C (Consulted) | I (Informed) |
| --------------------------------- | --------------- | --------------- | ------------- | ------------ |
| Xác định yêu cầu người dùng       | BA              | PO              | UX, Marketing | Dev team     |
| Phê duyệt MVP scope               | PM              | Founder         | Tech Lead, BA | All          |
| Ưu tiên backlog                   | PO              | Founder         | PM, BA        | Dev team     |
| Thay đổi tính năng (scope change) | PM              | PO              | Tech Lead     | QA           |
| Phê duyệt thiết kế UI/UX          | UX Lead         | PO              | BA            | Dev          |
| Phát hành sản phẩm (release)      | QA Lead         | PM              | PO, Tech Lead | All          |
| Báo cáo KPI / hiệu quả            | Data Analyst    | PM              | Founder       | Investors    |

---

### **4.2. Decision Log Policy**

- Mọi quyết định có tác động đến **scope, timeline, chi phí, hoặc chất lượng** đều phải:

  - 📝 Ghi vào **Decision Register (Notion/Jira)**
  - 📅 Gắn timestamp + người chịu trách nhiệm
  - 📊 Liên kết tới tài liệu hỗ trợ (analysis, data, feedback)
  - 🔄 Review định kỳ mỗi sprint review hoặc monthly board meeting

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

| Tiêu chí          | Mô tả                                   | Đánh giá |
| ----------------- | --------------------------------------- | -------- |
| **Value Impact**  | Ảnh hưởng đến người dùng hoặc doanh thu | +++      |
| **Effort / Cost** | Tài nguyên cần thiết                    | ++       |
| **Risk Level**    | Khả năng gây lỗi hoặc trễ               | +        |
| **Strategic Fit** | Có phù hợp mục tiêu kinh doanh không    | +++      |
| **Urgency**       | Có thể hoãn không                       | + / -    |

> Mỗi yêu cầu được chấm điểm, ưu tiên theo _Value/Effort ratio._

---

## **6. APPROVAL WORKFLOW**

| Loại phê duyệt              | Ai phê duyệt       | Khi nào                | Công cụ                  |
| --------------------------- | ------------------ | ---------------------- | ------------------------ |
| **Feature Scope**           | PO / PM            | Sprint Planning        | Jira                     |
| **Budget Allocation**       | Founder / Investor | Quarterly              | Notion Finance Board     |
| **Design/UI Change**        | UX Lead            | During Design Review   | Figma                    |
| **Technical Decision**      | Tech Lead          | PR Review / Design Doc | GitHub / Notion          |
| **Release Approval**        | QA + PM            | End of sprint          | Notion + Slack           |
| **Vendor/Partnership Deal** | Founder            | Case-by-case           | Email + Contract storage |

---

## **7. QUALITY CONTROL & COMPLIANCE**

| Hoạt động                   | Mục tiêu                                | Trách nhiệm     | Công cụ           |
| --------------------------- | --------------------------------------- | --------------- | ----------------- |
| **Requirements Review**     | Đảm bảo yêu cầu rõ ràng & testable      | BA / PO         | Notion / Jira     |
| **Design Review**           | Kiểm tra UX/UI & consistency            | Design Lead     | Figma             |
| **Code Review**             | Đảm bảo code clean & tuân thủ guideline | Dev / Tech Lead | GitHub PR         |
| **Testing & QA**            | Đảm bảo chất lượng trước release        | QA              | TestRail / Notion |
| **Retro & Lessons Learned** | Cải thiện quy trình liên tục            | PM / Team       | Miro Board        |

---

## **8. INFORMATION GOVERNANCE (QUẢN TRỊ THÔNG TIN)**

| Loại thông tin                    | Mức độ bảo mật | Quy định lưu trữ                      | Công cụ                   |
| --------------------------------- | -------------- | ------------------------------------- | ------------------------- |
| **Business Docs (BRD, Strategy)** | Confidential   | Notion (restricted access)            | Notion                    |
| **User Data**                     | High (PII)     | Mã hóa, tuân thủ NĐ 13/2023 (VN GDPR) | Firebase + Encryption     |
| **Financial Reports**             | High           | Chỉ Founder & Investor                | Google Drive (restricted) |
| **Meeting Records**               | Medium         | Lưu trữ 12 tháng                      | Notion / Google Meet      |
| **Decisions & Logs**              | Medium         | Vĩnh viễn (audit)                     | Jira / Notion             |

---

## **9. MONITORING & ESCALATION**

| Tình huống                     | Người chịu trách nhiệm | Biện pháp xử lý                                 |
| ------------------------------ | ---------------------- | ----------------------------------------------- |
| Chậm tiến độ >10%              | PM                     | Escalate lên Founder, re-plan sprint            |
| Budget vượt >15%               | Founder                | Review lại scope hoặc cắt giảm phase            |
| Chất lượng kém (bug rate >10%) | QA                     | Tạm dừng release, mở root cause analysis        |
| Thay đổi không được ghi log    | BA                     | Block implementation, yêu cầu retroactive entry |
| Mất đồng thuận quyết định      | PM + PO                | Kích hoạt Decision Escalation Protocol          |

---

## **10. GOVERNANCE REVIEW CYCLE**

| Tầng quản trị                  | Tần suất họp | Mục tiêu                           |
| ------------------------------ | ------------ | ---------------------------------- |
| **Operational (Team)**         | Weekly       | Sprint progress, blockers          |
| **Tactical (Product Council)** | Biweekly     | Priorities, resource allocation    |
| **Strategic (Board)**          | Monthly      | KPIs, finance, risks               |
| **Retrospective**              | Quarterly    | Lessons learned & governance audit |

---

## **11. RISKS & MITIGATION**

| Rủi ro                           | Ảnh hưởng                    | Biện pháp giảm thiểu                          |
| -------------------------------- | ---------------------------- | --------------------------------------------- |
| Quy trình phê duyệt quá phức tạp | Giảm tốc độ ra quyết định    | Giới hạn người phê duyệt, dùng async approval |
| Scope creep                      | Mất timeline, ngân sách      | Strict change control policy                  |
| Quyết định không được ghi nhận   | Thiếu accountability         | Decision log bắt buộc                         |
| Conflict giữa Product và Tech    | Trì hoãn triển khai          | PO & Tech Lead joint review                   |
| Thiếu audit trail                | Mất dữ liệu hoặc trách nhiệm | Tự động backup log (Jira, Notion)             |

---

## **12. GOVERNANCE MATURITY ROADMAP**

| Giai đoạn                         | Đặc điểm                                         | Mục tiêu quản trị                            |
| --------------------------------- | ------------------------------------------------ | -------------------------------------------- |
| **Phase 1 – MVP (0–6 tháng)**     | Lean governance, ra quyết định nhanh             | Tập trung tốc độ, document đủ tối thiểu      |
| **Phase 2 – Growth (6–18 tháng)** | Bắt đầu phân lớp quản trị (team-level + council) | Bảo đảm traceability, consistency            |
| **Phase 3 – Scale (18+ tháng)**   | Formal governance framework                      | Chuẩn hóa audit, risk management, compliance |

---

## **13. SUMMARY (TÓM TẮT)**

> Governance Approach của dự án được thiết kế theo triết lý **“lean but accountable”** – tức là nhanh, rõ ràng, và có thể mở rộng.
> Mục tiêu không phải là thêm tầng kiểm soát, mà là **tăng độ minh bạch và giảm rủi ro khi scale**.

**Ba nguyên tắc cốt lõi:**

1. **Minh bạch (Transparency):** Mọi quyết định đều có log và người chịu trách nhiệm.
2. **Nhanh (Agility):** Quy trình phê duyệt tối giản, phù hợp startup stage.
3. **Bền vững (Scalability):** Có thể mở rộng sang governance chính thức khi đạt Series A+.
