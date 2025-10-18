---
title: Thông tin phân tích nghiệp vụ
---

> **Mục đích:**
> Xác định, tổ chức, và quản lý tất cả thông tin liên quan đến yêu cầu kinh doanh, nhu cầu stakeholder, và dữ liệu elicited, để đảm bảo tính nhất quán, khả truy vết, và sẵn sàng cho giai đoạn định nghĩa giải pháp (Solution Definition).

---

## **1. MỤC TIÊU (Purpose)**

- Cung cấp một **bức tranh toàn cảnh** về tất cả thông tin liên quan đến bài toán và yêu cầu.
- Đảm bảo mọi stakeholder có thể **truy xuất và hiểu cùng một nguồn dữ liệu** (single source of truth).
- Chuẩn bị nền tảng để:
  - Đặc tả Functional & Non-Functional Requirements.
  - Thiết lập mô hình traceability và baseline requirements.

---

## **2. NGUỒN DỮ LIỆU (Information Sources)**

| **Nguồn**                    | **Loại thông tin**                      | **Trạng thái**              |
| ---------------------------- | --------------------------------------- | --------------------------- |
| **Context.md**               | Bối cảnh thị trường, xu hướng, cơ hội   | Đã xác minh                 |
| **Stakeholders.md**          | Danh sách stakeholder, vai trò, nhu cầu | Đã xác minh                 |
| **Needs.md**                 | Nhu cầu cốt lõi người dùng & tổ chức    | Đã tổng hợp                 |
| **Solutions.md**             | Giải pháp đề xuất (draft)               | Đang phân tích              |
| **Changes.md**               | Yếu tố thay đổi & driver ảnh hưởng      | Đã cập nhật                 |
| **Business Requirements.md** | Mục tiêu & yêu cầu kinh doanh           | Đã phê duyệt cấp chiến lược |
| **Elicitation Results.md**   | Kết quả thu thập yêu cầu (elicited SRs) | Đã xác minh nội bộ          |

---

## **3. CẤU TRÚC THÔNG TIN (Information Architecture)**

### **3.1. Business Layer**

| Thành phần                     | Mô tả                                                          |
| ------------------------------ | -------------------------------------------------------------- |
| **Business Objectives**        | Định hướng và mục tiêu chiến lược (SO & BO)                    |
| **Business Requirements (BR)** | Các yêu cầu cấp kinh doanh, định nghĩa thành công của sản phẩm |
| **Value Metrics**              | Thước đo giá trị kinh doanh (ROI, retention, NPS, time saved)  |

### **3.2. Stakeholder Layer**

| Thành phần                      | Mô tả                                                  |
| ------------------------------- | ------------------------------------------------------ |
| **Stakeholder Profiles**        | Phân loại nhóm người dùng: cá nhân, nhóm, doanh nghiệp |
| **Stakeholder Needs (SN)**      | Các nhu cầu cốt lõi của từng nhóm                      |
| **Stakeholder Goals Alignment** | Mapping SN ↔ BR ↔ Business Objectives                  |

### **3.3. Requirement Layer**

| Thành phần                    | Mô tả                                                |
| ----------------------------- | ---------------------------------------------------- |
| **Elicited Needs (SR)**       | Nhu cầu thu thập từ stakeholder                      |
| **Business Rules (draft)**    | Các quy tắc chi phối hành vi hệ thống hoặc quy trình |
| **Constraints & Assumptions** | Giới hạn và giả định được xác định trong elicitation |
| **Open Questions / Risks**    | Các điểm cần xác minh hoặc rủi ro tiềm ẩn            |

---

## **4. CHẤT LƯỢNG & TRẠNG THÁI THÔNG TIN (Information Quality)**

| **Tiêu chí**      | **Đánh giá** | **Ghi chú**                                 |
| ----------------- | ------------ | ------------------------------------------- |
| **Accuracy**      | ⭐⭐⭐⭐     | Đã được xác minh qua 3 nguồn dữ liệu        |
| **Completeness**  | ⭐⭐⭐       | Một số yêu cầu kỹ thuật cần bổ sung         |
| **Consistency**   | ⭐⭐⭐⭐     | Không xung đột giữa SR và BR                |
| **Traceability**  | ⭐⭐⭐       | Sẽ được hoàn thiện khi có FR                |
| **Currency**      | ⭐⭐⭐⭐⭐   | Dữ liệu cập nhật trong tháng này            |
| **Accessibility** | ⭐⭐⭐⭐     | Lưu trữ tập trung (Notion / Git repo)       |
| **Security**      | ⭐⭐⭐⭐     | Chỉ nhóm core BA/Product có quyền chỉnh sửa |

---

## **5. QUẢN LÝ THÔNG TIN (Information Management Practices)**

### **5.1. Repository Structure**

| Tầng               | Ví dụ                | Mục đích                           |
| ------------------ | -------------------- | ---------------------------------- |
| **/context/**      | Market, Trends       | Theo dõi bối cảnh kinh doanh       |
| **/stakeholders/** | Personas, Needs      | Quản lý stakeholder mapping        |
| **/requirements/** | BRD, SRD, FRD        | Lưu trữ tài liệu yêu cầu           |
| **/elicitation/**  | Notes, Workshop logs | Lưu biên bản & insight từ workshop |
| **/validation/**   | Feedback logs        | Dùng để trace phản hồi và version  |
| **/solutions/**    | Design drafts        | Liên kết giữa yêu cầu ↔ thiết kế   |

### **5.2. Version Control & Traceability**

- Sử dụng Git / Notion với **version history tự động**
- Gắn **ID tracking code** theo chuẩn:

  ```
  BR-01 → Business Requirement
  SR-05 → Stakeholder / Elicited Requirement
  FR-XX → Functional Requirement (chưa phát hành)
  NFR-XX → Non-Functional Requirement
  ```

- Dự kiến sau bước phân tích FR sẽ tạo **Traceability Matrix (RTM)**
  → để theo dõi từ BR → SR → FR → Test Case.

---

## **6. TỔNG HỢP THÔNG TIN THEN CHỐT (Key Information Summary)**

| **Hạng mục**                     | **Nội dung chính**                                                       |
| -------------------------------- | ------------------------------------------------------------------------ |
| **Business Context**             | Thị trường tăng trưởng 15–20%/năm; chưa có nền tảng Việt Nam all-in-one  |
| **Problem Definition**           | Quy trình lập kế hoạch phân mảnh; thiếu tin cậy; khó cộng tác            |
| **Stakeholder Groups**           | Du khách cá nhân, nhóm, SMEs du lịch, cơ quan du lịch                    |
| **Core Business Goals**          | Giảm 50% thời gian lập kế hoạch, xây dựng hệ sinh thái cộng đồng tin cậy |
| **Elicited Needs Summary (SR)**  | 10 nhóm nhu cầu chính (SR-01 → SR-10)                                    |
| **Information Confidence Level** | 85–90% xác thực; cần refinement kỹ thuật giai đoạn tới                   |
| **Next Deliverable**             | Requirements Analysis & Design Definition (RADD) phase                   |

---

## **7. RỦI RO THÔNG TIN (Information Risks)**

| **Rủi ro**                            | **Tác động**              | **Mitigation**                            |
| ------------------------------------- | ------------------------- | ----------------------------------------- |
| Thiếu thống nhất định nghĩa thuật ngữ | Gây hiểu nhầm giữa team   | Thiết lập **Glossary of Terms**           |
| Dữ liệu phân tán nhiều file           | Khó cập nhật đồng bộ      | Thiết lập Notion “single source of truth” |
| Thiếu traceability khi sang FR        | Mất kết nối BR ↔ SR ↔ FR  | Dựng RTM sớm, đánh ID chuẩn               |
| Version conflict                      | Sai lệch giữa các nhóm    | Dùng Git + quy trình review nội bộ        |
| Elicitation bias                      | Thiếu góc nhìn khách quan | Cross-check từ nhiều stakeholder          |

---

## **8. KẾ HOẠCH CẬP NHẬT & DUY TRÌ (Maintenance Plan)**

| **Hoạt động**                  | **Tần suất**      | **Trách nhiệm**           |
| ------------------------------ | ----------------- | ------------------------- |
| **Information review meeting** | Hàng tháng        | Business Analyst Lead     |
| **Data validation sync**       | Mỗi sprint        | Product Owner + Tech Lead |
| **Version tagging**            | Sau mỗi milestone | Documentation Manager     |
| **Archiving**                  | 6 tháng/lần       | BA team                   |
| **Access audit**               | 1 năm/lần         | Ops / Security            |

---

## **9. TỔNG KẾT**

> ✅ **Business Analysis Information** đóng vai trò như **hệ thần kinh trung tâm** của dự án — nơi mọi dữ liệu về nhu cầu, mục tiêu, và insight được tổng hợp, chuẩn hóa và quản lý có cấu trúc.
>
> Nó đảm bảo:
>
> - **Độ tin cậy cao** của thông tin trước khi chuyển sang thiết kế giải pháp.
> - **Tính truy vết đầy đủ** giữa nhu cầu ↔ mục tiêu ↔ yêu cầu.
> - **Tính minh bạch và kiểm soát phiên bản**, giúp toàn bộ nhóm (PM, BA, Dev, Stakeholder) luôn làm việc cùng một nguồn dữ liệu nhất quán.
