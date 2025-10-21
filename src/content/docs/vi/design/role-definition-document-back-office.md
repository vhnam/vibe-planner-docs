---
title: TÀI LIỆU ĐỊNH NGHĨA VAI TRÒ — HỆ THỐNG BACK OFFICE
---

## I. TỔNG QUAN VAI TRÒ

| **Mã Vai Trò** | **Tên Vai Trò**                                                                    | **Loại**          | **Mục Tiêu Chính**                                                            |
| -------------- | ---------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------- |
| B01            | **Người Giám Tuyển / Kiểm Duyệt Hệ Thống (System Curator / Moderator)**            | Cốt lõi           | Duy trì chất lượng dữ liệu cộng đồng (spot, trip, review).                    |
| B02            | **Kỹ Sư Tích Hợp Dữ Liệu (Data Integrator / Engineer)**                            | Hạ tầng           | Kết nối, chuẩn hóa và đồng bộ dữ liệu từ nguồn ngoài (API, Sở Du Lịch).       |
| B03            | **Nhà Thiết Kế Gợi Ý (Recommendation Designer)**                                   | Trí tuệ nhân tạo  | Thiết kế, tinh chỉnh và kiểm thử hệ thống đề xuất và nhãn cảm xúc.            |
| B04            | **Quản Lý Cộng Đồng / Quản Trị Viên (Community Manager / Admin)**                  | Vận hành          | Giám sát hoạt động, xử lý báo cáo và duy trì môi trường an toàn.              |
| B05            | **Nhà Phân Tích Sản Phẩm / Vận Hành Dữ Liệu (Product Analyst / Insight Operator)** | Phân tích         | Theo dõi KPI, hành vi người dùng và hiệu suất tính năng.                      |
| B06            | **Quản Trị Viên Cấp Cao (Super Admin / System Owner)**                             | Quyền hạn tối cao | Toàn quyền cấu hình, phân quyền, kiểm tra và phê duyệt nội dung / người dùng. |

---

## II. ĐỊNH NGHĨA VAI TRÒ (Chi tiết)

---

### **B01 – Người Giám Tuyển / Kiểm Duyệt Hệ Thống**

| Thuộc Tính            | Mô Tả                                                                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Quản lý, hợp nhất và xác minh dữ liệu cộng đồng (spot, review, trip story).                                                                                |
| **Hành động chính**   | - Phê duyệt hoặc từ chối nội dung người dùng gửi lên.<br>- Hợp nhất các spot trùng lặp.<br>- Gắn cờ dữ liệu sai hoặc spam.<br>- Đề xuất chỉnh sửa tự động. |
| **Quyền hạn**         | `APPROVE_CONTENT`, `MERGE_SPOT`, `DELETE_REVIEW`, `VERIFY_MEDIA`, `FLAG_SPAM`.                                                                             |
| **Phạm vi truy cập**  | Toàn bộ dữ liệu UGC (nội dung do người dùng tạo).                                                                                                          |
| **Phụ thuộc**         | Làm việc chặt chẽ với Kỹ Sư Tích Hợp Dữ Liệu (B02).                                                                                                        |
| **Persona liên quan** | Duy – System Curator                                                                                                                                       |
| **Công cụ cần thiết** | Moderation Dashboard, Content Diff Tool, Auto-Merge AI Assistant.                                                                                          |

---

### **B02 – Kỹ Sư Tích Hợp Dữ Liệu**

| Thuộc Tính            | Mô Tả                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Tích hợp và chuẩn hóa dữ liệu từ các nguồn ngoài (API công, Sở Du Lịch, Google Places, v.v.).                                       |
| **Hành động chính**   | - Quản lý pipeline ETL.<br>- Mapping schema / taxonomy.<br>- Kiểm tra độ tươi mới dữ liệu.<br>- Phát hiện lỗi và kích hoạt đồng bộ. |
| **Quyền hạn**         | `MANAGE_PIPELINE`, `IMPORT_DATA`, `EDIT_SCHEMA`, `VALIDATE_SOURCE`, `RUN_SYNC`.                                                     |
| **Phạm vi truy cập**  | Nguồn dữ liệu bên ngoài, staging DB, curated DB.                                                                                    |
| **Phụ thuộc**         | Hỗ trợ Người Giám Tuyển và Nhà Thiết Kế Gợi Ý.                                                                                      |
| **Persona liên quan** | Quân – Data Integrator                                                                                                              |
| **Công cụ cần thiết** | Data Integration Dashboard, ETL Monitor, Quality Reports.                                                                           |

---

### **B03 – Nhà Thiết Kế Gợi Ý**

| Thuộc Tính            | Mô Tả                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Tối ưu engine gợi ý bằng cách kết hợp dữ liệu hành vi, cảm xúc và độ tin cậy.                                               |
| **Hành động chính**   | - Cấu hình thuật toán gợi ý.<br>- Quản lý “emotion tags” và “trip vibe”.<br>- Chạy A/B test.<br>- Đánh giá CTR / retention. |
| **Quyền hạn**         | `MANAGE_ALGORITHM`, `EDIT_TAGS`, `DEPLOY_MODEL`, `VIEW_ANALYTICS`, `RUN_AB_TEST`.                                           |
| **Phạm vi truy cập**  | Dữ liệu hành vi tổng hợp (ẩn danh).                                                                                         |
| **Phụ thuộc**         | Nhận input từ Giám Tuyển (độ tin cậy) và Tích Hợp (metadata chuẩn).                                                         |
| **Persona liên quan** | Thảo – Recommendation Designer                                                                                              |
| **Công cụ cần thiết** | Recommender Lab, Tag Editor, Experiment Dashboard.                                                                          |

---

### **B04 – Quản Lý Cộng Đồng / Quản Trị Viên**

| Thuộc Tính            | Mô Tả                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Theo dõi hoạt động người dùng, phản hồi vi phạm và đảm bảo môi trường an toàn.                                            |
| **Hành động chính**   | - Xử lý báo cáo vi phạm.<br>- Khóa / cảnh cáo tài khoản.<br>- Quản lý badge và điểm thưởng.<br>- Gửi thông báo cộng đồng. |
| **Quyền hạn**         | `MANAGE_USER`, `SUSPEND_ACCOUNT`, `HANDLE_REPORT`, `EDIT_BADGE`, `POST_ANNOUNCEMENT`.                                     |
| **Phạm vi truy cập**  | Hồ sơ người dùng, nhật ký báo cáo, cơ sở dữ liệu gamification.                                                            |
| **Phụ thuộc**         | Kết nối với module Creator / Loyalty từ hệ thống Frontline.                                                               |
| **Persona liên quan** | Trang (Community Builder – nội bộ), Long (Loyal Member feedback)                                                          |
| **Công cụ cần thiết** | User Activity Dashboard, Reward Manager, Notification Center.                                                             |

---

### **B05 – Nhà Phân Tích Sản Phẩm / Vận Hành Dữ Liệu**

| Thuộc Tính            | Mô Tả                                                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Theo dõi hiệu suất hệ thống, KPI người dùng và đưa ra insight cho nhóm sản phẩm.                                                       |
| **Hành động chính**   | - Phân tích hành vi (retention, engagement).<br>- Theo dõi chất lượng gợi ý.<br>- Xuất báo cáo KPI định kỳ.<br>- Kết nối với BI tools. |
| **Quyền hạn**         | `READ_ANALYTICS`, `EXPORT_DATA`, `CREATE_DASHBOARD`, `TAG_EVENT`.                                                                      |
| **Phạm vi truy cập**  | Kho dữ liệu phân tích (chỉ đọc).                                                                                                       |
| **Phụ thuộc**         | Cần dữ liệu từ tất cả các module Back Office.                                                                                          |
| **Persona liên quan** | Không có trực tiếp — tương ứng với nhóm Product-side stakeholder.                                                                      |
| **Công cụ cần thiết** | Analytics Portal (Mixpanel / Metabase / Superset).                                                                                     |

---

### **B06 – Quản Trị Viên Cấp Cao / Chủ Hệ Thống**

| Thuộc Tính            | Mô Tả                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Mô tả**             | Người có toàn quyền trong hệ thống Back Office, đảm bảo an toàn và toàn vẹn dữ liệu.                                                       |
| **Hành động chính**   | - Cấp / thu hồi quyền người dùng Back Office.<br>- Xem log hệ thống.<br>- Chỉnh cấu hình API và deployment keys.<br>- Phê duyệt model mới. |
| **Quyền hạn**         | `FULL_ACCESS`, `MANAGE_ROLES`, `VIEW_LOGS`, `CONFIGURE_SYSTEM`, `APPROVE_RELEASE`.                                                         |
| **Phạm vi truy cập**  | Toàn hệ thống (superuser).                                                                                                                 |
| **Phụ thuộc**         | Giám sát tất cả vai trò khác.                                                                                                              |
| **Persona liên quan** | Không có (nội bộ Product Owner / CTO).                                                                                                     |
| **Công cụ cần thiết** | System Admin Console, Access Control Panel, Log Monitor.                                                                                   |

---

## III. SƠ ĐỒ QUAN HỆ VAI TRÒ

| **Từ (Vai Trò)**              | **Đến (Vai Trò)**             | **Loại Tương Tác**    | **Mục Đích**                                       |
| ----------------------------- | ----------------------------- | --------------------- | -------------------------------------------------- |
| Curator (B01)                 | Integrator (B02)              | Xác minh / Đồng bộ    | Đảm bảo dữ liệu bên ngoài được hợp nhất chính xác. |
| Integrator (B02)              | Recommendation Designer (B03) | Cung cấp / Bổ sung    | Cung cấp metadata chuẩn cho thuật toán.            |
| Curator (B01)                 | Community Manager (B04)       | Báo cáo / Gắn cờ      | Xử lý nội dung vi phạm người dùng.                 |
| Recommendation Designer (B03) | Product Analyst (B05)         | Theo dõi / Đánh giá   | Theo dõi hiệu suất gợi ý.                          |
| Super Admin (B06)             | Tất cả                        | Phê duyệt / Kiểm toán | Kiểm soát, bảo mật, kiểm toán hệ thống.            |

---

## IV. TỔNG HỢP PHÂN QUYỀN TRUY CẬP

| **Vai Trò**           | **Mức Truy Cập** | **Kiểm Duyệt**   | **Tích Hợp Dữ Liệu** | **Gợi Ý**    | **Phân Tích**       | **Người Dùng** | **Cấu Hình Hệ Thống** |
| --------------------- | ---------------- | ---------------- | -------------------- | ------------ | ------------------- | -------------- | --------------------- |
| Giám Tuyển (Curator)  | Trung bình       | ✅               | 🔸 (chỉ đọc)         | ❌           | 🔸 (xem thống kê)   | ❌             | ❌                    |
| Tích Hợp (Integrator) | Cao              | 🔸 (log đồng bộ) | ✅                   | 🔸           | 🔸                  | ❌             | ❌                    |
| Nhà Thiết Kế Gợi Ý    | Trung bình       | ❌               | 🔸 (metadata)        | ✅           | ✅                  | ❌             | ❌                    |
| Quản Lý Cộng Đồng     | Trung bình       | ✅ (nội dung)    | ❌                   | ❌           | 🔸 (dữ liệu thưởng) | ✅             | ❌                    |
| Phân Tích Sản Phẩm    | Chỉ đọc          | ❌               | ❌                   | ✅ (xem KPI) | ✅                  | ❌             | ❌                    |
| Super Admin           | Toàn quyền       | ✅               | ✅                   | ✅           | ✅                  | ✅             | ✅                    |

🔸 = quyền hạn giới hạn / chỉ đọc

---

## V. GHI CHÚ THIẾT KẾ & TRIỂN KHAI

| Danh Mục               | Ảnh Hưởng Thiết Kế                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Giao diện UX**       | Dashboard chia rõ module: Moderation – Data Sync – Recommendation – Analytics.                                     |
| **Kiểm soát truy cập** | Sử dụng RBAC theo `role_id`, có thể mở rộng ABAC (VD: `data.source == "external"` → chỉ Integrator được truy cập). |
| **Bảo mật**            | Tất cả hành động đều có `audit log` và yêu cầu `2FA`.                                                              |
| **Luồng công việc**    | Mọi thay đổi từ Curator / Integrator phải qua “approval flow” của Admin.                                           |
| **Tầng tích hợp**      | Back Office và Frontline kết nối qua `Content Pipeline API` và `Analytics Stream`.                                 |
