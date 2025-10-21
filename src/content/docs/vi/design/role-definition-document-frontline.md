---
title: TÀI LIỆU ĐỊNH NGHĨA VAI TRÒ - HỆ THỐNG FRONTLINE
---

## 🧭 I. TỔNG QUAN VAI TRÒ

| **Mã vai trò** | **Tên vai trò**                                                             | **Loại**      | **Mục tiêu chính**                                         |
| -------------- | --------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------- |
| R01            | **Người Du Lịch (Traveler)**                                                | Cốt lõi       | Tạo, quản lý và lưu trữ kế hoạch cá nhân hoặc nhóm nhỏ.    |
| R02            | **Người Lên Kế Hoạch Nhóm (Group Planner)**                                 | Cốt lõi       | Tổ chức, cộng tác và quản lý kế hoạch nhóm.                |
| R03            | **Người Sưu Tầm / Đánh Giá Spot (Spot Curator / Reviewer)**                 | Nội dung      | Thu thập, lưu, đánh giá và xác minh địa điểm.              |
| R04            | **Người Đóng Góp Địa Phương / Nhà Khám Phá (Local Contributor / Explorer)** | Cộng tác viên | Đăng địa điểm, hành trình và dữ liệu thực tế.              |
| R05            | **Người Sáng Tạo / Thành Viên Cộng Đồng (Creator / Community Member)**      | Khuếch đại    | Chia sẻ hành trình, kể chuyện, lan tỏa cảm hứng.           |
| R06            | **Người Cộng Tác / Người Xem (Collaborator / Viewer)**                      | Phụ trợ       | Xem, phản hồi và theo dõi kế hoạch.                        |
| R07            | **Người Xem Khách (Guest Viewer)**                                          | Công khai     | Truy cập công khai, không cần đăng nhập.                   |
| R08            | **Cầu Nối Hệ Thống (System Bridge - ẩn)**                                   | Tích hợp      | Vai trò kỹ thuật cho recommendation, đồng bộ hoặc loyalty. |

---

## 🧩 II. ĐỊNH NGHĨA VAI TRÒ (Mô tả chi tiết)

---

### **R01 – Người Du Lịch (Traveler)**

| Thuộc tính            | Mô tả                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Người dùng cá nhân, lập kế hoạch du lịch cho bản thân hoặc nhóm nhỏ.                                             |
| **Hành động chính**   | - Tạo trip mới.<br>- Thêm spot từ danh sách yêu thích.<br>- Sắp xếp lịch theo ngày.<br>- Lưu hoặc clone trip cũ. |
| **Quyền hạn**         | `CREATE_TRIP`, `EDIT_TRIP`, `SAVE_SPOT`, `ADD_NOTE`, `SHARE_TRIP`, `COMMENT`.                                    |
| **Phạm vi truy cập**  | Trip của chính mình, trip được chia sẻ, các spot công khai.                                                      |
| **Phụ thuộc**         | Có thể nâng cấp lên `Group Planner` khi mời người khác tham gia.                                                 |
| **Persona liên quan** | Linh, Mai, Long                                                                                                  |
| **Mức độ ưu tiên UX** | Cực cao – đây là điểm bắt đầu hành trình người dùng.                                                             |

---

### **R02 – Người Lên Kế Hoạch Nhóm (Group Planner)**

| Thuộc tính            | Mô tả                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| **Mô tả**             | Người tạo kế hoạch nhóm (3–8 người), chịu trách nhiệm tổ chức và điều phối.                    |
| **Hành động chính**   | - Tạo trip nhóm.<br>- Mời cộng tác viên.<br>- Phân công to-do.<br>- Quản lý timeline và quyền. |
| **Quyền hạn**         | `CREATE_TRIP`, `INVITE_USER`, `MANAGE_COLLABORATOR`, `EDIT_TRIP`, `COMMENT`, `LOCK_PLAN`.      |
| **Phạm vi truy cập**  | Trip do họ tạo hoặc được phân quyền quản lý.                                                   |
| **Phụ thuộc**         | Cần có tài khoản xác thực (bắt buộc đăng nhập).                                                |
| **Persona liên quan** | Tuấn, Vy                                                                                       |
| **Mức độ ưu tiên UX** | Cao – cung cấp nền tảng cho trải nghiệm cộng tác.                                              |

---

### **R03 – Người Sưu Tầm / Đánh Giá Spot (Spot Curator / Reviewer)**

| Thuộc tính            | Mô tả                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Người lưu trữ, đánh giá và quản lý các spot yêu thích hoặc đáng tin cậy.                                          |
| **Hành động chính**   | - Lưu spot từ nguồn ngoài (Maps, link).<br>- Đánh giá, thêm ảnh hoặc tag.<br>- Gắn nhãn độ tin cậy (reliability). |
| **Quyền hạn**         | `SAVE_SPOT`, `TAG_SPOT`, `ADD_REVIEW`, `RATE_SPOT`, `VIEW_STATISTICS`.                                            |
| **Phạm vi truy cập**  | Spot công khai, bộ sưu tập cá nhân.                                                                               |
| **Phụ thuộc**         | Có thể trở thành nguồn dữ liệu cho `Traveler` khi tạo trip.                                                       |
| **Persona liên quan** | Phương, Khánh                                                                                                     |
| **Mức độ ưu tiên UX** | Trung bình cao – cung cấp dữ liệu chất lượng cho hệ thống.                                                        |

---

### **R04 – Người Đóng Góp Địa Phương / Nhà Khám Phá (Local Contributor / Explorer)**

| Thuộc tính            | Mô tả                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Người sống tại địa phương hoặc du khách ghi lại hành trình thực tế.                                              |
| **Hành động chính**   | - Tạo spot mới (kèm ảnh và tọa độ).<br>- Ghi lại hành trình thực tế (route record).<br>- Đăng ảnh và mô tả ngắn. |
| **Quyền hạn**         | `CREATE_SPOT`, `UPLOAD_MEDIA`, `RECORD_ROUTE`, `EDIT_OWN_CONTENT`.                                               |
| **Phạm vi truy cập**  | Bản đồ công khai, nhật ký hành trình cá nhân.                                                                    |
| **Phụ thuộc**         | Cần xác minh vị trí (geotag, GPS).                                                                               |
| **Persona liên quan** | Ngọc, Hải                                                                                                        |
| **Mức độ ưu tiên UX** | Trung bình – mang lại giá trị dữ liệu thực địa.                                                                  |

---

### **R05 – Người Sáng Tạo / Thành Viên Cộng Đồng (Creator / Community Member)**

| Thuộc tính            | Mô tả                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Người sáng tạo nội dung, chia sẻ hành trình, kể lại câu chuyện du lịch.                             |
| **Hành động chính**   | - Chuyển trip thành “story”.<br>- Thêm ảnh, cảm xúc, nhạc nền.<br>- Theo dõi lượt xem và tương tác. |
| **Quyền hạn**         | `PUBLISH_STORY`, `MANAGE_PROFILE`, `VIEW_ANALYTICS`, `ENABLE_COMMENTS`.                             |
| **Phạm vi truy cập**  | Trip của mình, story đã đăng, khán giả công khai.                                                   |
| **Phụ thuộc**         | Cần dữ liệu đầu vào từ trip đã hoàn thành.                                                          |
| **Persona liên quan** | Trang                                                                                               |
| **Mức độ ưu tiên UX** | Trung bình – cao (thúc đẩy cộng đồng, tăng retention).                                              |

---

### **R06 – Người Cộng Tác / Người Xem (Collaborator / Viewer)**

| Thuộc tính            | Mô tả                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------- |
| **Mô tả**             | Người được mời vào kế hoạch nhóm, có thể xem và góp ý.                                       |
| **Hành động chính**   | - Xem lịch trình.<br>- Bình luận hoặc đề xuất spot.<br>- Đánh dấu trạng thái (OK / pending). |
| **Quyền hạn**         | `VIEW_TRIP`, `COMMENT`, `SUGGEST_SPOT`, `REACTION`.                                          |
| **Phạm vi truy cập**  | Trip được mời tham gia.                                                                      |
| **Phụ thuộc**         | Quyền do `Group Planner` cấp.                                                                |
| **Persona liên quan** | Vy, Huy                                                                                      |
| **Mức độ ưu tiên UX** | Trung bình – hỗ trợ cộng tác nhẹ nhàng, không gây nhiễu.                                     |

---

### **R07 – Người Xem Khách (Guest Viewer)**

| Thuộc tính            | Mô tả                                                                          |
| --------------------- | ------------------------------------------------------------------------------ |
| **Mô tả**             | Người xem kế hoạch hoặc story công khai qua link chia sẻ, không cần tài khoản. |
| **Hành động chính**   | - Xem bản đồ và timeline.<br>- Phản hồi nhẹ (reaction / emoji).                |
| **Quyền hạn**         | `READ_ONLY_ACCESS`, `ADD_REACTION` (tùy chọn).                                 |
| **Phạm vi truy cập**  | Trip và story công khai.                                                       |
| **Phụ thuộc**         | Không yêu cầu đăng nhập.                                                       |
| **Persona liên quan** | Huy                                                                            |
| **Mức độ ưu tiên UX** | Trung bình thấp – nhưng quan trọng cho viral sharing.                          |

---

### **R08 – Cầu Nối Hệ Thống (System Bridge - ẩn)**

| Thuộc tính            | Mô tả                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| **Mô tả**             | Vai trò hệ thống tự động, không có người dùng thực — phục vụ cho gợi ý, loyalty và đồng bộ dữ liệu. |
| **Hành động chính**   | - Phân tích hành vi.<br>- Cập nhật badge / điểm.<br>- Gợi ý trip hoặc spot mới.                     |
| **Quyền hạn**         | `SYSTEM_READ_ALL`, `GENERATE_RECOMMENDATION`, `UPDATE_REWARD_STATE`.                                |
| **Phạm vi truy cập**  | Toàn hệ thống (đọc tất cả, ghi tính toán).                                                          |
| **Phụ thuộc**         | Gắn với Recommendation Engine & Data Sync module.                                                   |
| **Persona liên quan** | Thảo (Recommendation Designer)                                                                      |
| **Mức độ ưu tiên UX** | Không hiển thị – logic backend.                                                                     |

---

## 🧠 III. BẢN ĐỒ MỐI QUAN HỆ GIỮA CÁC VAI TRÒ

| **Từ (Nguồn)** | **Đến (Đích)**     | **Loại tương tác** | **Mục đích**                            |
| -------------- | ------------------ | ------------------ | --------------------------------------- |
| Traveler       | Group Planner      | Nâng cấp / Gộp     | Khi người dùng mời người khác tham gia. |
| Group Planner  | Collaborator       | Mời / Chia sẻ      | Phân quyền cộng tác vào kế hoạch.       |
| Traveler       | Curator / Reviewer | Sử dụng            | Dùng spot đã được đánh giá / lưu.       |
| Contributor    | Creator            | Truyền cảm hứng    | Tạo nội dung kể lại hành trình.         |
| Creator        | Viewer             | Công bố            | Chia sẻ story công khai.                |
| System Bridge  | Tất cả             | Gợi ý / Thưởng     | Gợi ý và cập nhật điểm thưởng.          |

---

## 🧮 IV. TÓM TẮT QUYỀN TRUY CẬP

| **Vai trò**            | **Mức truy cập** | **Tạo**     | **Chỉnh sửa**   | **Xem** | **Chia sẻ** | **Kiểm duyệt** |
| ---------------------- | ---------------- | ----------- | --------------- | ------- | ----------- | -------------- |
| Traveler               | Chủ sở hữu       | ✅          | ✅              | ✅      | ✅          | ❌             |
| Group Planner          | Chủ sở hữu+      | ✅          | ✅              | ✅      | ✅          | 🔸(trong trip) |
| Curator / Reviewer     | Nội dung         | ✅          | ✅(riêng)       | ✅      | ❌          | ❌             |
| Contributor / Explorer | Nội dung         | ✅          | ✅(riêng)       | ✅      | ✅          | ❌             |
| Creator / Community    | Nội dung+        | ✅          | ✅(riêng)       | ✅      | ✅          | ❌             |
| Collaborator           | Giới hạn         | ❌          | 🔸(chỉ đề xuất) | ✅      | ❌          | ❌             |
| Guest Viewer           | Công khai        | ❌          | ❌              | ✅      | ❌          | ❌             |
| System Bridge          | Hệ thống         | ✅(tự động) | ✅              | ✅      | ✅          | ✅             |
