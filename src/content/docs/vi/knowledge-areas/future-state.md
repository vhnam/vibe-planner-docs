---
title: FUTURE STATE
---

## **1. TỔNG QUAN**

### **1.1. Mục đích của mô tả Future State**

Phân tích “Future State” nhằm:

- Xác định **mục tiêu định lượng và định tính** của trạng thái mong muốn.
- Làm cơ sở cho việc xác định **gaps** giữa hiện tại và tương lai.
- Định hướng **solution architecture** và **roadmap triển khai**.

### **1.2. Tầm nhìn tổng thể**

> “Tạo nên nền tảng du lịch Việt Nam thông minh, nơi người dùng có thể **lên kế hoạch, khám phá, chia sẻ và kết nối** một cách tự nhiên — tất cả trong một trải nghiệm liền mạch, đáng tin cậy và cộng đồng hóa.”

---

## **2. MÔ TẢ TRẠNG THÁI TƯƠNG LAI (FUTURE STATE OVERVIEW)**

| Thành phần                                  | Mô tả trong trạng thái tương lai                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Người dùng (Users)**                      | Có thể tạo kế hoạch du lịch hoàn chỉnh chỉ trong **<5 giờ**, với dữ liệu cá nhân hóa, review xác thực, và gợi ý dựa trên AI.          |
| **Cộng đồng (Community)**                   | Mỗi người dùng là một phần của hệ sinh thái chia sẻ — **80% review đến từ người thật**, có cơ chế xác thực và gamification.           |
| **Doanh nghiệp du lịch (Local Businesses)** | Có thể **quảng bá dịch vụ, nhận phản hồi thật**, và truy cập **insight dashboard** để hiểu hành vi du khách.                          |
| **Cơ quan du lịch (Tourism Boards)**        | Truy cập dữ liệu du lịch tổng hợp, phân tích xu hướng, và **chạy chiến dịch quảng bá hiệu quả hơn**.                                  |
| **Sản phẩm (Product)**                      | Ứng dụng all-in-one với các module tích hợp: gợi ý AI, bản đồ thông minh, lập kế hoạch nhóm, lưu trữ hành trình và chia sẻ công khai. |
| **Tổ chức (Company)**                       | Vận hành lean, doanh thu bền vững, có brand recognition là “ứng dụng du lịch của người Việt”.                                         |

---

## **3. TRẠNG THÁI TƯƠNG LAI THEO 6 KHÍA CẠNH (BABOK)**

### **3.1. Business Process (Quy trình kinh doanh)**

**Từ:**

- Quy trình thủ công, rời rạc, người dùng phải nhảy giữa nhiều công cụ (Google Maps, Notes, Facebook Group, Excel…).

**Đến:**

- Một **workflow tự động, thống nhất**:

  1. Gợi ý điểm đến dựa trên sở thích & lịch trình
  2. Lên kế hoạch theo ngày, theo nhóm
  3. Tự động tối ưu tuyến đường & ngân sách
  4. Xuất plan, chia sẻ và nhận phản hồi
  5. Lưu review sau chuyến đi
  6. Review được xác thực và gợi ý ngược lại cho hệ thống

🟢 **Kết quả:** Quy trình lên kế hoạch 1–2 ngày hiện nay → rút còn 4–5 giờ.

---

### **3.2. Business Capability (Năng lực kinh doanh)**

| Năng lực hiện tại                | Năng lực tương lai                       |
| -------------------------------- | ---------------------------------------- |
| Không có hệ thống lên kế hoạch   | Lập kế hoạch tự động (AI + Template)     |
| Review rời rạc, thiếu tin cậy    | Review xác thực (verified + trust score) |
| Không có công cụ cộng tác nhóm   | Planning realtime + voting + chat        |
| Không có dữ liệu hành vi du lịch | Travel behavior insights dashboard       |
| Doanh nghiệp marketing offline   | Digital discovery & performance tracking |

🧭 **Trọng tâm:** Từ _informal planning_ sang _intelligent, integrated planning ecosystem_.

---

### **3.3. Organizational Structure (Tổ chức)**

| Hiện tại                                      | Trong tương lai                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------- |
| Team 3–5 người, chưa có chức năng chuyên biệt | Cấu trúc lean 20 người, chia 4 nhóm chính: Product, Engineering, Growth, Partnerships |
| Thiếu quy trình OKR nội bộ                    | Áp dụng **OKR-based management** liên kết trực tiếp tới business outcomes             |
| Phụ thuộc founder                             | Có leadership trung cấp, văn hóa dữ liệu & ownership rõ ràng                          |

📈 **Mục tiêu:** Tổ chức vận hành linh hoạt, hiệu quả, có khả năng tự mở rộng.

---

### **3.4. Technology Architecture (Kiến trúc công nghệ)**

| Giai đoạn hiện tại       | Giai đoạn tương lai (Year 3+)               |
| ------------------------ | ------------------------------------------- |
| MVP với React + Firebase | Full microservice trên GCP/AWS, API-first   |
| Dữ liệu user cơ bản      | Machine learning recommendation engine      |
| Manual moderation        | AI-based review authenticity detection      |
| No data warehouse        | Centralized data lake + analytics dashboard |
| No offline capability    | Offline-first PWA cho traveler di động      |

🧠 **Tầm nhìn:** Trở thành “AI-powered Travel Companion” — không chỉ là công cụ, mà là _assistant cá nhân_.

---

### **3.5. Stakeholder Experience (Trải nghiệm các bên liên quan)**

#### **Người dùng cuối**

- Có thể tạo kế hoạch du lịch đẹp, logic, và khả thi chỉ bằng vài thao tác.
- Nhận gợi ý “smart” phù hợp sở thích, ngân sách, thời gian.
- Cảm thấy **an tâm** nhờ review xác thực & dữ liệu đáng tin.
- Có profile cá nhân hiển thị thành tích du lịch (Travel Portfolio).

#### **Doanh nghiệp địa phương**

- Được giới thiệu đúng tệp khách.
- Nhận phản hồi thật, minh bạch.
- Có thể chạy chiến dịch “featured listing” hiệu quả, đo được ROI.

#### **Cơ quan du lịch**

- Có dữ liệu về hành vi du khách: nơi đến, chi tiêu, xu hướng.
- Dễ dàng hợp tác truyền thông, phân tích vùng tăng trưởng.

🪩 **Kết quả:** Hệ sinh thái du lịch minh bạch – đáng tin – bền vững.

---

### **3.6. Business Performance (Hiệu suất kinh doanh)**

| Chỉ số             | Hiện tại | Mục tiêu tương lai (3 năm) |
| ------------------ | -------- | -------------------------- |
| Registered Users   | 0        | 500K                       |
| Active Users (MAU) | 0        | 150K                       |
| Average Plan Time  | 10–15h   | ≤5h                        |
| Verified Reviews   | 0        | 100K                       |
| Retention (M3)     | —        | ≥50%                       |
| NPS                | —        | ≥60                        |
| Revenue            | 0        | $500K ARR                  |
| Gross Margin       | —        | ≥70%                       |
| Partner Listings   | 0        | ≥1000                      |

🟢 **Tác động:** Mỗi chỉ số gắn trực tiếp với _value proposition_ cốt lõi: tiết kiệm – tin cậy – cộng đồng.

---

## **4. MÔ HÌNH GIÁ TRỊ TƯƠNG LAI (VALUE MODEL)**

```
Input:
  User intent + travel preferences + budget + time
       ↓
Processing:
  AI Recommendation Engine + Community Data + Verified Reviews
       ↓
Output:
  Personalized itinerary + real-time collaboration + trusted experience
       ↓
Feedback:
  Post-trip review → improves recommendation accuracy → strengthens community trust
```

✨ **Vòng lặp giá trị (Value Loop):**

- Mỗi người dùng không chỉ “tiêu thụ” giá trị mà còn **tạo giá trị** cho hệ thống.
- Hệ thống càng có nhiều người dùng → dữ liệu càng tốt → gợi ý càng chính xác → giá trị càng tăng → thu hút người dùng mới.

---

## **5. LỢI ÍCH ĐỊNH LƯỢNG & ĐỊNH TÍNH**

| Loại giá trị         | Mô tả                                       | Chỉ số minh chứng           |
| -------------------- | ------------------------------------------- | --------------------------- |
| **Functional Value** | Giảm thời gian lập kế hoạch                 | -50% planning time          |
| **Emotional Value**  | Cảm giác an tâm, tự tin                     | NPS ≥60                     |
| **Social Value**     | Trở thành một phần cộng đồng du lịch        | 35% contribution rate       |
| **Economic Value**   | Tiết kiệm chi phí và tăng thu nhập cho SMEs | $2M+ attributed revenue     |
| **Strategic Value**  | Dữ liệu du lịch Việt minh bạch & bền vững   | 20+ provincial partnerships |

---

## **6. CÁC YẾU TỐ THEN CHỐT CỦA TƯƠNG LAI (CRITICAL FUTURE SUCCESS FACTORS)**

| Nhóm yếu tố    | Thành phần then chốt                                      |
| -------------- | --------------------------------------------------------- |
| **Sản phẩm**   | UX dễ hiểu, AI recommendation mạnh, multi-device seamless |
| **Cộng đồng**  | Gamification, trust score, review xác thực                |
| **Dữ liệu**    | Tập trung và làm sạch, tuân thủ bảo mật (PDPA)            |
| **Kinh doanh** | Đa luồng doanh thu, unit economics dương                  |
| **Vận hành**   | Lean nhưng có khả năng mở rộng, automation cao            |
| **Văn hóa**    | Data-driven, collaboration-first, user empathy            |

---

## **7. ĐỊNH HƯỚNG CHUYỂN TIẾP (TRANSITION OUTLOOK)**

| Giai đoạn                 | Mục tiêu chuyển đổi        | Kết quả cần đạt                         |
| ------------------------- | -------------------------- | --------------------------------------- |
| **Phase 1 (0–6 tháng)**   | MVP + Community Seeding    | 10K users, 2 partnerships               |
| **Phase 2 (6–18 tháng)**  | PMF + Growth               | 100K users, revenue $250K               |
| **Phase 3 (18–36 tháng)** | Ecosystem Integration      | 500K users, network effects ổn định     |
| **Phase 4 (36+ tháng)**   | Expansion & Regional Scale | Mở rộng Đông Nam Á (VN-first advantage) |

---

## **8. KẾT LUẬN FUTURE STATE**

> **Future State của ứng dụng du lịch Việt Nam** không chỉ là một sản phẩm kỹ thuật,
> mà là **một hệ sinh thái số hóa**:
> nơi dữ liệu, trải nghiệm và cộng đồng kết nối với nhau,
> tạo thành vòng lặp giá trị bền vững cho người dùng, doanh nghiệp và xã hội.

> 🌏 _“Khi người Việt nghĩ đến du lịch, họ không tìm thông tin — họ mở ứng dụng của chúng tôi.”_
