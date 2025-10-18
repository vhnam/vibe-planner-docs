---
title: BUSINESS REQUIREMENTS ANALYSIS
---

## **1. BUSINESS CONTEXT**

- **Thị trường du lịch nội địa Việt Nam** tăng trưởng **15–20%/năm**, quy mô **$10–15 tỷ USD**.
- **Người dùng mục tiêu:** 18–45 tuổi (~40 triệu người), smartphone >70%.
- Hành vi du lịch chuyển dịch từ “booking-driven” sang **“self-organized trip”** → nhu cầu lên kế hoạch, tìm hiểu, cộng tác tăng mạnh.
- Hiện **chưa có nền tảng Việt Nam nào “all-in-one”**, trong khi các ông lớn (Google, Traveloka, TripAdvisor) chưa localize cho bối cảnh Việt Nam.
- **Cửa sổ cơ hội:** 2–3 năm trước khi cạnh tranh trực tiếp hình thành.

---

## **2. STRATEGIC PAIN POINTS & VALUE GAP**

| Vấn đề chính                                                | Ảnh hưởng                               | Cơ hội                                    |
| ----------------------------------------------------------- | --------------------------------------- | ----------------------------------------- |
| **Phân mảnh công cụ**: phải dùng 5–10 app khác nhau để plan | Mất 10–15h mỗi chuyến                   | Tích hợp toàn bộ vào 1 nền tảng           |
| **Thiếu review đáng tin cậy**                               | 55% người dùng không tin nguồn hiện tại | Xây dựng hệ sinh thái review xác thực     |
| **Khó phối hợp khi đi nhóm**                                | 80% nhóm gặp vấn đề                     | Cung cấp real-time collaboration          |
| **Kiến thức sau chuyến đi bị lãng phí**                     | 85% không chia sẻ lại                   | Tạo vòng chia sẻ & gamification cộng đồng |

💡 **Value Gap:** Thị trường thiếu một nền tảng “Vietnamese-first” giúp người dùng **lên kế hoạch nhanh hơn 50%**, **tin cậy hơn**, và **gắn kết cộng đồng du lịch**.

---

## **3. BUSINESS GOALS**

| ID        | Mục tiêu                    | Chỉ số thành công (KPIs)           |
| --------- | --------------------------- | ---------------------------------- |
| **BG-01** | Giảm thời gian lập kế hoạch | ≤7h cho chuyến 3–4 ngày            |
| **BG-02** | Tăng niềm tin vào review    | ≥75% người dùng thấy “reliable”    |
| **BG-03** | Kích hoạt cộng đồng chia sẻ | ≥60% người dùng viết review        |
| **BG-04** | Thu hút SMEs & điểm đến     | ≥500 SMEs đăng ký năm 1            |
| **BG-05** | Đạt doanh thu khởi điểm     | ≥$50K/năm đầu từ affiliate/premium |

---

## **4. CORE BUSINESS REQUIREMENTS**

Xem chi tiết tại [CORE BUSINESS REQUIREMENTS EXPLANATION](/en/appendix/business-requirements/)

| ID        | Business Requirement                                                                           | Mục tiêu giá trị                           |
| --------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **BR-01** | **Unified Travel Planner** – tích hợp tìm kiếm, sắp xếp, ghi chú, ngân sách trong 1 nền tảng   | Giải quyết phân mảnh & tiết kiệm thời gian |
| **BR-02** | **AI Recommendation Engine** – gợi ý hành trình, địa điểm, hoạt động theo sở thích & ngân sách | Cá nhân hóa trải nghiệm                    |
| **BR-03** | **Trusted Review System** – xác thực review thật, chống spam, phân loại theo người Việt        | Xây dựng niềm tin nội dung                 |
| **BR-04** | **Group Collaboration** – lập kế hoạch nhóm real-time, có voting & version control             | Tăng tính phối hợp nhóm                    |
| **BR-05** | **Knowledge Sharing Loop** – người dùng có động lực chia sẻ lại trải nghiệm, plan, tips        | Tạo cộng đồng bền vững                     |
| **BR-06** | **Local Business Hub** – kênh SME/điểm đến hiển thị, đo hiệu quả, thu hút khách                | Mở rộng hệ sinh thái & doanh thu           |
| **BR-07** | **Mobile-First & Scalable Platform** – UX mượt, load nhanh, ổn định                            | Giữ chân người dùng, tối ưu chi phí        |
| **BR-08** | **Secure & Compliant Data** – bảo mật, minh bạch, tuân thủ pháp luật VN                        | Xây dựng lòng tin & chuẩn hóa vận hành     |

---

## **5. STRATEGIC PRIORITIES (12-MONTH FOCUS)**

| Phase                       | Thời gian  | Ưu tiên             | Kết quả mong đợi                                    |
| --------------------------- | ---------- | ------------------- | --------------------------------------------------- |
| **Phase 1: MVP**            | Tháng 1–5  | BR-01, BR-02, BR-03 | Ứng dụng planning cơ bản + AI suggestion + review   |
| **Phase 2: Beta Expansion** | Tháng 6–8  | BR-04, BR-05        | Group collaboration & community sharing             |
| **Phase 3: Monetization**   | Tháng 9–12 | BR-06, BR-07, BR-08 | Local business hub + subscription + legal readiness |

---

## **6. STRATEGIC RISKS & RESPONSE**

| Risk                                    | Ảnh hưởng              | Phản ứng chiến lược                        |
| --------------------------------------- | ---------------------- | ------------------------------------------ |
| **Thói quen người dùng khó thay đổi**   | Adoption chậm          | Onboarding tối giản, AI suggestion hấp dẫn |
| **Thiếu nội dung ban đầu (cold start)** | Khó xây cộng đồng      | Gamification & influencer seeding          |
| **Cạnh tranh từ big players**           | Mất lợi thế tiên phong | Ra mắt nhanh, chiếm cộng đồng trước        |
| **Nguồn lực hạn chế ($180K)**           | Giới hạn tốc độ dev    | MVP lean, ưu tiên 3 tính năng cốt lõi      |
| **Window cơ hội 2–3 năm**               | Mất timing             | MVP ≤ 5 tháng, nhanh chóng test thị trường |

---

## **7. SUCCESS METRICS (BY YEAR 1)**

| Hạng mục                           | Chỉ tiêu mục tiêu                   |
| ---------------------------------- | ----------------------------------- |
| **Active Users (MAU)**             | ≥100,000                            |
| **Avg. Planning Time**             | ≤7 giờ/chuyến                       |
| **Review Trust Index**             | ≥75% người dùng đánh giá “reliable” |
| **Community Engagement**           | ≥60% người dùng viết review/chia sẻ |
| **Revenue**                        | ≥$50,000                            |
| **User Satisfaction (App rating)** | ≥4.2/5                              |

---

## **8. STRATEGIC SUMMARY**

> Ứng dụng gợi ý & lên kế hoạch du lịch hướng đến việc **định hình lại cách người Việt lên kế hoạch chuyến đi** – từ một chuỗi thao tác rời rạc, mất thời gian, trở thành trải nghiệm **tích hợp, đáng tin cậy, và cộng đồng hóa**.
>
> Thành công của dự án phụ thuộc vào:
>
> 1. **Tốc độ ra mắt (speed to market)**
> 2. **Xây dựng niềm tin (trust-first)**
> 3. **Tạo giá trị cộng đồng (network-driven growth)**
>
> 👉 Nếu triển khai đúng hướng, ứng dụng có thể trở thành **“TripAdvisor + Notion + Zalo Travel Hub”** dành riêng cho người Việt trong vòng **2 năm**.
