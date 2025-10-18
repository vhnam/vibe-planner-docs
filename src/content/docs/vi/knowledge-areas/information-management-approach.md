---
title: INFORMATION MANAGEMENT APPROACH
---

## **1. PURPOSE (MỤC TIÊU)**

Xây dựng một **hệ thống quản lý thông tin** nhất quán, an toàn và có thể mở rộng, nhằm:

- Đảm bảo **mọi dữ liệu và tài liệu phân tích** (requirements, decisions, feedback, metrics…) được lưu trữ, truy xuất và cập nhật chính xác.
- Tạo **nguồn thông tin tin cậy duy nhất (Single Source of Truth)** cho toàn bộ nhóm sản phẩm.
- Hỗ trợ **traceability, version control, và knowledge reuse** trong các giai đoạn tiếp theo của dự án.

> 🎯 **Kết quả mong muốn:** “Không thông tin nào bị mất, không dữ liệu nào bị trôi, và mọi người đều làm việc trên cùng một phiên bản thực tế.”

---

## **2. SCOPE (PHẠM VI ÁP DỤNG)**

Áp dụng cho toàn bộ vòng đời của Business Analysis:

| Giai đoạn                     | Loại thông tin cần quản lý                | Ví dụ                           |
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

| Loại thông tin              | Mô tả                          | Định dạng              | Người quản lý     |
| --------------------------- | ------------------------------ | ---------------------- | ----------------- |
| **Business Objectives**     | Vision, mission, OKRs          | Markdown / Notion      | PO / BA           |
| **Requirements (BRD, FRD)** | Mô tả chức năng, phi chức năng | Markdown / DOCX / Jira | BA                |
| **Stakeholder Data**        | Profiles, interests, influence | Notion                 | BA                |
| **Process Models**          | Workflows, journey maps        | Miro / Draw.io         | BA                |
| **Design Artifacts**        | Wireframe, prototypes          | Figma                  | UX Lead           |
| **Change Records**          | Decision logs, CRs             | Jira / Notion          | PM                |
| **Reports & Dashboards**    | KPIs, metrics                  | Data Studio / Notion   | PM / Data Analyst |

---

### **3.2. Classification by Sensitivity**

| Cấp độ bảo mật   | Mô tả                          | Ví dụ                         |
| ---------------- | ------------------------------ | ----------------------------- |
| **Public**       | Có thể chia sẻ công khai       | Blog content, case studies    |
| **Internal**     | Dành cho nội bộ dự án          | Backlog, sprint report        |
| **Confidential** | Chỉ dành cho nhóm cốt lõi      | Roadmap, stakeholder feedback |
| **Restricted**   | Thông tin nhạy cảm, cần mã hóa | User data, financials         |

---

## **4. INFORMATION LIFECYCLE MANAGEMENT**

### **4.1. Lifecycle Stages**

| Giai đoạn              | Hoạt động chính                          | Người phụ trách | Công cụ              |
| ---------------------- | ---------------------------------------- | --------------- | -------------------- |
| **Creation**           | Thu thập, ghi nhận thông tin ban đầu     | BA, PM          | Notion, Miro         |
| **Validation**         | Kiểm tra tính chính xác và đồng thuận    | BA, PO          | Review checklist     |
| **Storage**            | Lưu trữ trong hệ thống chính thức        | PM              | Notion, Drive        |
| **Access & Use**       | Chia sẻ, tham chiếu, cộng tác            | Toàn team       | Notion, Jira         |
| **Update**             | Phiên bản hóa, cập nhật thay đổi         | BA              | Version log          |
| **Archive / Disposal** | Lưu trữ lâu dài hoặc xóa theo chính sách | PM              | Google Drive Archive |

---

### **4.2. Version Control Policy**

| Quy định                                                 | Mục tiêu                       |
| -------------------------------------------------------- | ------------------------------ |
| Mỗi tài liệu có **ID & version number** (VD: BR-01 v1.2) | Dễ truy xuất, so sánh thay đổi |
| **Change summary** phải được ghi trong phần đầu tài liệu | Minh bạch lý do thay đổi       |
| **Chỉ BA hoặc PM** được cập nhật bản chính thức          | Giảm sai sót                   |
| **Historical versions** lưu tối thiểu 12 tháng           | Phục hồi khi cần audit         |

---

## **5. STORAGE & TOOLING STRATEGY**

| Loại công cụ             | Công cụ được chọn                  | Mục đích                             |
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

| Vai trò                              | Quyền truy cập                     | Cấp độ         |
| ------------------------------------ | ---------------------------------- | -------------- |
| **Founder / PO**                     | Toàn quyền truy cập & phê duyệt    | Admin          |
| **PM / BA / Tech Lead**              | Toàn quyền trong module của mình   | Edit           |
| **Team Members (Dev, Design)**       | Xem & chỉnh sửa các phần liên quan | Edit / Comment |
| **External Stakeholders (Partners)** | Chỉ đọc, hạn chế chia sẻ           | View           |
| **Investors / Advisors**             | Xem báo cáo & roadmap              | View only      |

> 🔒 Tất cả tài liệu “Confidential” hoặc “Restricted” được bảo vệ bằng:

- Google Workspace Access Control
- 2FA Authentication
- Chỉ PO hoặc PM có quyền chia sẻ ngoài tổ chức

---

## **7. TRACEABILITY & LINKAGE POLICY**

### **7.1. Traceability Matrix (RTM)**

| Mức liên kết                             | Mục tiêu                                                |
| ---------------------------------------- | ------------------------------------------------------- |
| **Business → Stakeholder → Requirement** | Mỗi yêu cầu phải gắn với mục tiêu và stakeholder cụ thể |
| **Requirement → Solution Component**     | Dễ dàng kiểm tra độ bao phủ (coverage)                  |
| **Requirement → Test Case**              | Đảm bảo khả năng xác minh (verifiability)               |
| **Decision → Change Request**            | Kiểm soát logic thay đổi                                |

### **7.2. Tool Implementation**

> Duy trì RTM trên **Notion / Jira** với custom linking giữa “Requirement”, “Feature”, và “Test Case”.

---

## **8. KNOWLEDGE MANAGEMENT PRACTICES**

| Hoạt động                        | Mục tiêu                        | Chu kỳ          |
| -------------------------------- | ------------------------------- | --------------- |
| **Weekly Sync Note**             | Tóm tắt các insights, blockers  | Hàng tuần       |
| **Sprint Retrospective Summary** | Ghi nhận bài học kinh nghiệm    | 2 tuần/lần      |
| **Post-Mortem Report**           | Phân tích nguyên nhân lỗi       | Khi có incident |
| **Knowledge Sharing Session**    | Chia sẻ best practices          | Hàng tháng      |
| **Documentation Review**         | Kiểm tra tính cập nhật tài liệu | Hàng quý        |

---

## **9. DATA RETENTION & DISPOSAL POLICY**

| Loại dữ liệu               | Thời gian lưu | Cách xử lý sau hạn          |
| -------------------------- | ------------- | --------------------------- |
| **Project Docs (BA, PM)**  | 3 năm         | Chuyển archive folder       |
| **Stakeholder Feedback**   | 2 năm         | Xóa PII, lưu aggregate data |
| **User Data (Beta)**       | Theo consent  | Xóa hoàn toàn sau yêu cầu   |
| **Financial & Legal Docs** | 5 năm         | Lưu trữ offline backup      |
| **Decision Logs**          | Vĩnh viễn     | Giữ để audit                |

---

## **10. INFORMATION QUALITY STANDARDS**

| Tiêu chí          | Yêu cầu                                              |
| ----------------- | ---------------------------------------------------- |
| **Accuracy**      | Phải được xác thực bởi ít nhất 1 nguồn độc lập       |
| **Completeness**  | Không thiếu thông tin quan trọng hoặc phần phụ thuộc |
| **Consistency**   | Ngôn ngữ, format, đơn vị đo phải đồng nhất           |
| **Relevance**     | Chỉ lưu thông tin có giá trị sử dụng                 |
| **Timeliness**    | Cập nhật trong vòng 48h sau thay đổi                 |
| **Accessibility** | Có thể truy xuất trong ≤3 click                      |
| **Security**      | Mã hóa, quyền truy cập phù hợp                       |

---

## **11. REVIEW & AUDIT SCHEDULE**

| Tần suất       | Hoạt động                        | Người phụ trách |
| -------------- | -------------------------------- | --------------- |
| **Hàng tuần**  | Review tài liệu active           | BA / PM         |
| **Hàng tháng** | Audit quyền truy cập             | PM              |
| **Hàng quý**   | Documentation health check       | PM / Tech Lead  |
| **Hàng năm**   | Compliance review (VN GDPR, PII) | Founder / Legal |

---

## **12. RISKS & MITIGATION**

| Rủi ro                   | Ảnh hưởng                           | Biện pháp giảm thiểu                 |
| ------------------------ | ----------------------------------- | ------------------------------------ |
| Mất dữ liệu / lỗi backup | Mất thông tin quan trọng            | Backup tự động hàng ngày             |
| Thiếu traceability       | Không chứng minh được nguồn yêu cầu | Áp dụng RTM chuẩn BABOK              |
| Tài liệu lỗi thời        | Gây sai lệch hiểu biết              | Quarterly review bắt buộc            |
| Truy cập trái phép       | Vi phạm bảo mật                     | Phân quyền nghiêm ngặt, log truy cập |
| Thiếu chuẩn đặt tên      | Khó tìm kiếm                        | Naming convention rõ ràng            |

---

## **13. SUMMARY (TÓM TẮT)**

> **Information Management Approach** của dự án Travel Planner được thiết kế để:
>
> - 🧭 **Tạo “Single Source of Truth”** — tất cả thông tin quan trọng tập trung tại Notion/Jira.
> - 🔒 **Đảm bảo an toàn và tuân thủ pháp luật Việt Nam** (Nghị định 13/2023 về bảo vệ dữ liệu cá nhân).
> - 🧩 **Kết nối chặt chẽ với Governance & Stakeholder Approach** để duy trì tính minh bạch, traceability, và hiệu quả cộng tác.
> - 🚀 **Hướng đến khả năng mở rộng quy mô** khi team tăng từ 5 → 20 người và tài liệu tăng gấp 10 lần.
