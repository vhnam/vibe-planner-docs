---
title: Yêu cầu
---

> **Purpose:**
> Xác định và mô hình hóa các yêu cầu đã được thu thập, sao cho chúng rõ ràng, có thể kiểm chứng, và dễ dàng truy vết.
> Đây là bước chuyển hóa từ _“Elicited Stakeholder Needs (SRs)”_ → _“Formal Requirements (FRs & NFRs)”_.

---

## **1. MỤC TIÊU (Objectives)**

- Biến nhu cầu thô (elicited) thành yêu cầu **cụ thể, có thể đo lường và kiểm thử**.
- Mô hình hóa yêu cầu bằng **biểu đồ và cấu trúc logic** giúp cả stakeholder lẫn kỹ thuật đều hiểu.
- Xác định rõ phạm vi tính năng, hành vi hệ thống, và tương tác người dùng.
- Chuẩn bị đầu vào cho **Solution Design** và **Validation**.

---

## **2. PHẠM VI (Scope)**

Bao gồm các yêu cầu chức năng và phi chức năng liên quan đến:

- MVP: ứng dụng lập kế hoạch du lịch all-in-one (trip planner + review + collaboration)
- Người dùng chính: du khách cá nhân & nhóm
- Các thành phần hệ thống: app di động, web, backend API, và hệ thống dữ liệu.

---

## **3. PHÂN LOẠI YÊU CẦU (Types of Requirements)**

| **Loại**                        | **Mô tả**                                | **Ký hiệu** |
| ------------------------------- | ---------------------------------------- | ----------- |
| **Business Requirements**       | Mục tiêu kinh doanh cao cấp              | BR-xx       |
| **Stakeholder Requirements**    | Nhu cầu, mong muốn từ stakeholder        | SR-xx       |
| **Functional Requirements**     | Chức năng hệ thống cần cung cấp          | FR-xx       |
| **Non-Functional Requirements** | Ràng buộc chất lượng, hiệu suất, bảo mật | NFR-xx      |
| **Transition Requirements**     | Điều kiện để chuyển sang hệ thống mới    | TR-xx       |

---

## **4. FUNCTIONAL REQUIREMENTS (FRs)**

_(Derived and specified from SRs)_

| **ID**    | **Tên yêu cầu**       | **Mô tả chi tiết**                                                 | **Nguồn (SR)** | **Priority** |
| --------- | --------------------- | ------------------------------------------------------------------ | -------------- | ------------ |
| **FR-01** | Trip Creation         | Cho phép người dùng tạo kế hoạch du lịch mới (tên, ngày, điểm đến) | SR-01          | High         |
| **FR-02** | Trip Day Organizer    | Cho phép thêm, sửa, sắp xếp hoạt động theo ngày                    | SR-01          | High         |
| **FR-03** | Collaborative Editing | Cho phép chia sẻ kế hoạch du lịch với nhóm và chỉnh sửa real-time  | SR-02          | High         |
| **FR-04** | Version History       | Lưu lại các thay đổi, có thể khôi phục phiên bản cũ                | SR-02          | Medium       |
| **FR-05** | Review System         | Cho phép người dùng đăng, xem, và đánh giá địa điểm                | SR-04          | High         |
| **FR-06** | Review Verification   | Xác minh review (qua ảnh, geotag, hoặc xác thực người dùng)        | SR-04          | High         |
| **FR-07** | Post-Trip Sharing     | Gợi ý chia sẻ hành trình sau chuyến đi                             | SR-05          | Medium       |
| **FR-08** | Saved Itineraries     | Lưu, xem lại và clone kế hoạch cũ                                  | SR-06          | Medium       |
| **FR-09** | Business Listing      | Hiển thị doanh nghiệp địa phương, kèm review & liên hệ             | SR-07          | Medium       |
| **FR-10** | Gamification Layer    | Hệ thống điểm, huy hiệu để khuyến khích đóng góp                   | SR-09          | Medium       |
| **FR-11** | Recommendation Engine | Gợi ý điểm đến và hoạt động dựa trên hành vi người dùng            | SR-10          | High         |
| **FR-12** | Offline Mode          | Cho phép truy cập kế hoạch và bản đồ khi không có mạng             | SR-08          | High         |

---

## **5. NON-FUNCTIONAL REQUIREMENTS (NFRs)**

| **ID**     | **Loại**            | **Mô tả yêu cầu**                                     | **Tiêu chí chấp nhận**          | **Ưu tiên** |
| ---------- | ------------------- | ----------------------------------------------------- | ------------------------------- | ----------- |
| **NFR-01** | Hiệu năng           | App tải trong ≤2s, phản hồi thao tác <500ms           | Benchmark bằng Lighthouse / APM | High        |
| **NFR-02** | Tính khả dụng       | Uptime ≥99% trong 12 tháng                            | Monitoring logs                 | High        |
| **NFR-03** | Khả năng mở rộng    | Hỗ trợ ≥50K user đồng thời                            | Stress test đạt p95             | Medium      |
| **NFR-04** | Bảo mật             | Dữ liệu cá nhân mã hóa AES-256                        | Kiểm tra tuân thủ               | High        |
| **NFR-05** | Khả năng sử dụng    | Người dùng hoàn thành tạo plan đầu tiên trong ≤7 phút | Usability test                  | High        |
| **NFR-06** | Khả năng bảo trì    | Mã tuân thủ lint, test coverage ≥70%                  | CI/CD reports                   | Medium      |
| **NFR-07** | Tính tương thích    | Hỗ trợ Android ≥11, iOS ≥15, web Chrome/Safari        | QA matrix                       | Medium      |
| **NFR-08** | Tính tin cậy review | Fake review rate <5%                                  | AI/Manual moderation            | High        |

---

## **6. MÔ HÌNH YÊU CẦU (Requirement Models)**

### **6.1. Use Case Model (MVP-level)**

| **Use Case ID** | **Tên Use Case**       | **Tác nhân** | **Kết quả chính**                |
| --------------- | ---------------------- | ------------ | -------------------------------- |
| **UC-01**       | Create New Trip        | User         | Trip mới được lưu                |
| **UC-02**       | Add Activities         | User         | Hoạt động thêm vào kế hoạch      |
| **UC-03**       | Invite Collaborator    | User         | Thành viên nhận được lời mời     |
| **UC-04**       | Submit Review          | User         | Review xuất hiện trong danh sách |
| **UC-05**       | Verify Review          | System       | Review có dấu xác thực           |
| **UC-06**       | Recommend Destinations | System       | Hiển thị gợi ý cá nhân hóa       |
| **UC-07**       | Access Offline Mode    | User         | Hiển thị dữ liệu cached          |

_(Các UC này sẽ được vẽ lại thành sơ đồ Use Case UML trong giai đoạn thiết kế.)_

---

### **6.2. Process Flow (High-level Logic)**

```
[User] → (Create Trip)
        → (Add Day Plan)
        → (Invite Collaborator)
        → (Submit Review)
        → (Share Trip Post)
```

Parallel process:

```
(System) → (Verify Review)
         → (Generate Recommendations)
```

---

## **7. YÊU CẦU CHUYỂN TIẾP (Transition Requirements)**

| **ID**    | **Yêu cầu**                              | **Mục đích**                            | **Ghi chú**        |
| --------- | ---------------------------------------- | --------------------------------------- | ------------------ |
| **TR-01** | Nhập dữ liệu seed (địa điểm, review mẫu) | Hỗ trợ giai đoạn khởi động (cold start) | Cần 5000 địa điểm  |
| **TR-02** | Hướng dẫn onboarding tự động             | Giúp người dùng làm quen app            | MVP                |
| **TR-03** | Migration module                         | Cho phép import kế hoạch từ Excel       | Optional (Phase 2) |

---

## **8. TRACEABILITY OVERVIEW**

| **Nguồn (SR)** | **Functional Requirement** | **Business Objective**               |
| -------------- | -------------------------- | ------------------------------------ |
| SR-01          | FR-01, FR-02               | Giảm thời gian lập kế hoạch 50%      |
| SR-02          | FR-03, FR-04               | Tăng hiệu quả cộng tác nhóm          |
| SR-04          | FR-05, FR-06               | Tăng độ tin cậy review ≥75%          |
| SR-05          | FR-07, FR-10               | Tăng nội dung cộng đồng 200%         |
| SR-10          | FR-11                      | Cải thiện gợi ý điểm đến cá nhân hóa |

---

## **9. TRẠNG THÁI YÊU CẦU (Requirement Status Tracking)**

| **Status**    | **Ý nghĩa**                  |
| ------------- | ---------------------------- |
| **Draft**     | Đang đặc tả / mô hình hóa    |
| **Validated** | Đã được stakeholder xác nhận |
| **Approved**  | Đã phê duyệt để triển khai   |
| **Deferred**  | Lùi sang phase sau           |
| **Rejected**  | Không được chấp thuận        |

**Hiện tại:**

- 70% FRs = _Draft → Validated_
- 30% FRs = _Pending Approval (engineering & product)_

---

## **10. TỔNG KẾT**

> ✅ **Requirements — Specified and Modelled** là giai đoạn chuyển hóa trọng yếu:
> biến nhu cầu người dùng và mục tiêu kinh doanh thành **tập hợp yêu cầu rõ ràng, có thể kiểm thử và truy vết**.
>
> Giai đoạn này đảm bảo:
>
> - Mọi tính năng đều **liên kết trực tiếp với giá trị kinh doanh**.
> - Yêu cầu được mô hình hóa **dưới dạng có thể giao tiếp với cả Business lẫn Engineering**.
> - Chuẩn bị nền tảng cho **Solution Design & Validation**, với rủi ro hiểu sai yêu cầu gần như bằng 0.
