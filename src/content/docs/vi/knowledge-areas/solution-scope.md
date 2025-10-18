---
title: Phạm vi giải pháp
---

## **1. MỤC ĐÍCH (PURPOSE)**

Mục tiêu của Solution Scope là xác định rõ:

- **Giải pháp cần đạt được điều gì** để hiện thực hóa _Future State_.
- **Phạm vi và giới hạn** của những gì sẽ được phát triển trong giai đoạn 1–3 năm.
- **Các tính năng cốt lõi**, **bên liên quan liên quan**, và **kết quả mong đợi** đo lường được.

---

## **2. LIÊN KẾT VỚI BUSINESS OBJECTIVES**

| Business Objective                              | Implication on Solution Scope                              |
| ----------------------------------------------- | ---------------------------------------------------------- |
| **Giảm 50% thời gian lập kế hoạch**             | Cần module tạo plan tự động, UI dễ dùng, tối ưu hành trình |
| **Tăng độ tin cậy nội dung (Trust Score ≥75%)** | Cần cơ chế xác thực review, AI detect fake content         |
| **Kích hoạt cộng đồng review (≥10K UGC)**       | Cần gamification, profile & điểm thưởng                    |
| **Tạo doanh thu $50K/năm đầu**                  | Cần tích hợp affiliate, quảng cáo, premium features        |
| **Hợp tác 5+ đối tác du lịch địa phương**       | Cần Partner Portal & business listing system               |
| **Giảm burn rate, duy trì lean team**           | Ưu tiên MVP core, sử dụng cloud service & automation       |

---

## **3. PHẠM VI CHỨC NĂNG (FUNCTIONAL SCOPE)**

### **3.1. Core Functional Domains**

| Domain                               | Description                                                         | Priority | Deliverable             |
| ------------------------------------ | ------------------------------------------------------------------- | -------- | ----------------------- |
| 🧭 **Trip Planning**                 | Lên kế hoạch du lịch theo ngày, tự động gợi ý điểm đến & lịch trình | ⭐⭐⭐⭐ | Planner Engine v1       |
| 🧑‍🤝‍🧑 **Collaboration**                 | Cộng tác nhóm theo thời gian thực, voting, comment, version control | ⭐⭐⭐   | Group Planning Module   |
| 🗺️ **Discovery & AI Recommendation** | Gợi ý điểm đến, khách sạn, quán ăn, route tối ưu                    | ⭐⭐⭐⭐ | AI Suggestion Engine    |
| 🗒️ **Review & Community**            | Hệ thống review xác thực, chấm điểm, bình luận                      | ⭐⭐⭐⭐ | Review System v1        |
| 🏆 **Gamification & Profile**        | Điểm thưởng, huy hiệu, bảng xếp hạng                                | ⭐⭐⭐   | User Profile + Rewards  |
| 💰 **Monetization**                  | Affiliate, sponsored listings, premium subscription                 | ⭐⭐⭐   | Revenue Module          |
| 📊 **Analytics & Dashboard**         | Tracking hành vi người dùng, báo cáo cho đối tác                    | ⭐⭐     | Partner Analytics       |
| 🔒 **Trust & Moderation**            | AI detect spam, manual verification, report system                  | ⭐⭐⭐⭐ | Trust System v1         |
| 📱 **Mobile-first UX**               | Ứng dụng PWA tối ưu trên smartphone                                 | ⭐⭐⭐⭐ | Responsive UI Framework |

---

### **3.2. Supporting Capabilities**

| Category            | Function                                            | Description |
| ------------------- | --------------------------------------------------- | ----------- |
| **User Management** | Đăng ký, đăng nhập, xác thực 2FA, social login      |             |
| **Data Management** | CRUD cho kế hoạch, review, địa điểm                 |             |
| **Integration**     | Booking APIs (Klook, Agoda), map API (Google Maps)  |             |
| **Notifications**   | Push, email, trip reminders                         |             |
| **Security**        | Role-based access, encryption, GDPR/PDPA compliance |             |
| **Offline Mode**    | Truy cập kế hoạch khi không có mạng                 |             |
| **Analytics**       | Mixpanel, GA4, nội bộ dashboard                     |             |

---

## **4. PHẠM VI PHI CHỨC NĂNG (NON-FUNCTIONAL SCOPE)**

| Category            | Target                      | KPI                |
| ------------------- | --------------------------- | ------------------ |
| **Performance**     | Page load < 2s, API < 500ms | Measured by APM    |
| **Availability**    | 99% uptime                  | Monthly monitoring |
| **Scalability**     | 50K concurrent users        | Load test reports  |
| **Usability**       | 4.2/5 satisfaction          | Post-beta survey   |
| **Security**        | No major breach incidents   | Pen-test, audits   |
| **Localization**    | 100% Vietnamese support     | i18n coverage      |
| **Maintainability** | Modular codebase            | CI/CD pipelines    |
| **Accessibility**   | WCAG 2.1 AA compliance      | UX audit           |

---

## **5. OUT-OF-SCOPE**

| Excluded Area                        | Reason                                                 |
| ------------------------------------ | ------------------------------------------------------ |
| **Offline booking / payment system** | Sử dụng affiliate thay vì xử lý thanh toán trực tiếp   |
| **AR/VR travel features**            | Không khả thi giai đoạn đầu                            |
| **International destinations**       | Chỉ tập trung **du lịch nội địa Việt Nam (phase 1–2)** |
| **AI chatbot hướng dẫn viên**        | Xem xét sau khi đạt PMF                                |
| **In-app video sharing**             | Không thuộc trọng tâm MVP                              |
| **Social feed dạng Facebook**        | Gây loãng mục tiêu, tập trung vào utility-first        |

---

## **6. CẤU TRÚC SẢN PHẨM (SOLUTION STRUCTURE)**

```
┌──────────────────────────────────────┐
│             FRONT-END                │
│  - Trip Planner UI                   │
│  - Review & Community Interface      │
│  - Partner Portal                    │
│  - PWA + Mobile Responsive Design    │
├──────────────────────────────────────┤
│           APPLICATION LAYER          │
│  - Planning Engine                   │
│  - Recommendation Engine             │
│  - Review Management                 │
│  - Collaboration + Chat              │
│  - Gamification Logic                │
├──────────────────────────────────────┤
│              DATA LAYER              │
│  - Firestore / PostgreSQL DB         │
│  - Content & Review Storage          │
│  - Analytics Pipeline (BigQuery)     │
├──────────────────────────────────────┤
│         INTEGRATION LAYER            │
│  - Booking APIs (Klook, Agoda)       │
│  - Maps API (Google Maps)            │
│  - Payment Gateway (Stripe, MoMo)    │
├──────────────────────────────────────┤
│          INFRASTRUCTURE LAYER        │
│  - Firebase Hosting / GCP Compute    │
│  - CI/CD Pipeline                    │
│  - Monitoring (Datadog, GA4)         │
└──────────────────────────────────────┘
```

---

## **7. STAKEHOLDER ALIGNMENT**

| Stakeholder          | Needs Covered in Scope                         | Example Deliverable           |
| -------------------- | ---------------------------------------------- | ----------------------------- |
| **Travelers**        | Planning, discovery, collaboration, review     | Trip Planner, Review System   |
| **Group Users**      | Real-time collaboration, chat, version control | Group Planning Module         |
| **Local Businesses** | Listing, promotion, review insights            | Partner Portal                |
| **Tourism Boards**   | Data insights, destination analytics           | Dashboard & Data Export       |
| **Investors**        | Proof of traction, monetization                | MVP KPIs, revenue module      |
| **Internal Team**    | Scalable architecture, automation              | CI/CD pipeline, documentation |

---

## **8. MVP PHASE SCOPE (FIRST 6 MONTHS)**

| Module                             | Description                                        | Deliverable |
| ---------------------------------- | -------------------------------------------------- | ----------- |
| **Planner Core**                   | Tạo/lưu kế hoạch du lịch, gợi ý AI                 | MVP v1      |
| **Review & Trust System**          | Người dùng đăng review, chấm điểm, xác thực cơ bản | v1          |
| **Collaboration**                  | Invite bạn bè, comment, voting                     | v1          |
| **Partner Listing (Prototype)**    | Listing thử nghiệm 100 đối tác                     | Alpha       |
| **Gamification Basic**             | Huy hiệu “Contributor”, điểm thưởng                | Beta        |
| **Affiliate Integration**          | Link Booking.com / Klook                           | Beta        |
| **Analytics Dashboard (Internal)** | Tracking user, retention, engagement               | Beta        |

🎯 **Goal:** 50K users, 10K reviews, 2 partnerships trong 12 tháng.

---

## **9. DELIVERABLES SUMMARY**

| Category          | Deliverable                              | Output Type         |
| ----------------- | ---------------------------------------- | ------------------- |
| **Product**       | MVP App + PWA                            | Functional Software |
| **Documentation** | BRD, SRS, UI Flow, API Spec              | Technical Docs      |
| **Data**          | Initial content set (1000+ destinations) | Database            |
| **Community**     | 100+ verified contributors               | Pilot community     |
| **Partnership**   | 5+ active listings                       | MoU / contract      |
| **Revenue**       | Affiliate + Premium setup                | Monetization system |

---

## **10. CONSTRAINTS & DEPENDENCIES**

| Type                     | Description                      |
| ------------------------ | -------------------------------- |
| **Resource Constraint**  | Team 5–7 người, ngân sách $180K  |
| **Technical Dependency** | Google Maps API, Firebase uptime |
| **Data Dependency**      | Local travel data curation       |
| **Legal Constraint**     | PDPA & nội dung người dùng       |
| **Timeline Dependency**  | MVP ≤ 5 tháng, Go-live ≤ 6 tháng |

---

## **11. SUCCESS CRITERIA**

| Dimension                    | Success Indicator                    | Target |
| ---------------------------- | ------------------------------------ | ------ |
| **Functional Fit**           | ≥80% business requirements delivered | ✅     |
| **User Adoption**            | 50K registered, 60% activation       | ✅     |
| **Quality**                  | NPS ≥40, <5% fake reviews            | ✅     |
| **Performance**              | 99% uptime, <2s page load            | ✅     |
| **ROI**                      | $50K revenue in Year 1               | ✅     |
| **Stakeholder Satisfaction** | ≥4.0/5 avg. rating                   | ✅     |

---

## **12. KẾT LUẬN PHẠM VI GIẢI PHÁP**

> **Solution Scope** xác định rõ ranh giới giữa “ý tưởng” và “thực thi”:
> Ứng dụng không chỉ dừng lại ở việc giúp người dùng lên kế hoạch du lịch,
> mà mở rộng thành **một nền tảng cộng đồng đáng tin cậy**, nơi dữ liệu và trải nghiệm hợp nhất để tạo giá trị cho toàn ngành du lịch Việt Nam.

> ⚙️ **Phạm vi giai đoạn đầu tập trung vào:**
>
> - Trip Planning + AI Suggestion
> - Review & Trust System
> - Real-time Collaboration
> - Gamification + Community Seeding
> - Partner Listing Prototype

> 🎯 **Mục tiêu:** Đạt Product-Market Fit trong vòng 12 tháng —
> tạo nền vững chắc để mở rộng sang hệ sinh thái du lịch quốc gia trong 3 năm tiếp theo.
