---
title: BUSINESS ANALYSIS APPROACH
---

## **1. MỤC TIÊU (PURPOSE)**

Mục tiêu của Business Analysis Approach là:

- Xác định **cách tiếp cận phù hợp** để thực hiện hoạt động phân tích nghiệp vụ (Business Analysis) cho sản phẩm.
- Thiết lập **phương pháp, mức độ chi tiết, công cụ, vai trò và tiêu chí kiểm soát** trong suốt vòng đời dự án.
- Đảm bảo phân tích mang lại **hiểu biết chính xác, có thể hành động**, và **liên kết chặt chẽ** với các mục tiêu kinh doanh.

---

## **2. CÁC NGUYÊN TẮC HƯỚNG DẪN (GUIDING PRINCIPLES)**

| Nguyên tắc                     | Mô tả ứng dụng trong dự án                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **Value-Driven**               | Tập trung vào việc tạo _giá trị đo được_ (time saved, trust score, revenue) thay vì chỉ tài liệu hóa yêu cầu. |
| **Iterative & Adaptive**       | Phân tích song hành với phát triển Agile, cập nhật theo sprint (không phải one-time upfront).                 |
| **Stakeholder-Centered**       | Mọi yêu cầu đều được xác thực qua feedback thực tế từ user, partner, investor.                                |
| **Lean Documentation**         | Ghi chép “just enough” – dễ hiểu, có thể hành động, tập trung vào kết quả.                                    |
| **Traceability to Objectives** | Mỗi requirement phải liên kết rõ ràng với 1 hoặc nhiều Business Objective.                                    |
| **Evidence-Based Decision**    | Ưu tiên dữ liệu thực nghiệm (user testing, analytics) hơn cảm tính.                                           |

---

## **3. CÁCH TIẾP CẬN (APPROACH TYPE)**

| Hạng mục                   | Phương án lựa chọn                             | Giải thích                                                   |
| -------------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **Methodology Type**       | **Agile / Incremental**                        | Thích hợp với startup nhỏ, cần phản hồi nhanh từ người dùng. |
| **Delivery Mode**          | **Product-Centric** thay vì Project-Centric    | Liên tục cải tiến thay vì chỉ hoàn thành theo mốc thời gian. |
| **Requirements Evolution** | **Adaptive (Evolving)**                        | Yêu cầu không cố định – thay đổi theo kết quả user testing.  |
| **Validation Approach**    | **User Testing & Analytics-Based**             | Kiểm chứng qua dữ liệu hành vi thật.                         |
| **Documentation Style**    | **Living Documentation** (Notion + Miro + Git) | Cập nhật động, luôn phản ánh tình trạng hiện tại.            |

---

## **4. MỨC ĐỘ CHI TIẾT PHÂN TÍCH (LEVEL OF FORMALITY)**

| Tiêu chí                                        | Lý do lựa chọn                                              |
| ----------------------------------------------- | ----------------------------------------------------------- |
| **Formality Level:** _Medium-Low_               | Vì đây là startup Agile, nhóm nhỏ, cần linh hoạt.           |
| **Scope Definition:** _Progressive Elaboration_ | Xác định phạm vi từng phase, chi tiết hóa dần qua feedback. |
| **Documentation:** _Lightweight, Visual-First_  | Ưu tiên sơ đồ, flow, và prototype hơn text dài dòng.        |
| **Decision Log:** _Transparent & Collaborative_ | Mọi quyết định được ghi tại Notion hoặc Jira, có trace.     |

---

## **5. FRAMEWORK ÁP DỤNG**

### **5.1. BA Integration Framework**

```
BUSINESS NEED → BUSINESS REQUIREMENTS → STAKEHOLDER REQUIREMENTS → SOLUTION REQUIREMENTS → TRANSITION REQUIREMENTS
```

### **5.2. Quy trình áp dụng cho dự án du lịch**

| Giai đoạn         | Hoạt động BA chính                                         | Đầu ra                               |
| ----------------- | ---------------------------------------------------------- | ------------------------------------ |
| **1. Initiation** | Hiểu thị trường, xác định Value Gap, Stakeholder Map       | Current State Analysis               |
| **2. Definition** | Xác định Future State, Business Objectives, Solution Scope | Business Objectives & Scope Document |
| **3. Design**     | Phân rã thành Functional/Non-Functional Requirements       | BRD / User Stories                   |
| **4. Validation** | Prototype testing, survey, analytics                       | Validation Report                    |
| **5. Transition** | Chuẩn bị chuyển giao, training, KPI tracking               | Transition Plan                      |

---

## **6. KỸ THUẬT PHÂN TÍCH SỬ DỤNG (TECHNIQUES)**

| Nhóm kỹ thuật      | Cụ thể                                            | Mục đích                                          |
| ------------------ | ------------------------------------------------- | ------------------------------------------------- |
| **Elicitation**    | Stakeholder Interview, Workshop, Online Survey    | Thu thập insight người dùng, doanh nghiệp du lịch |
| **Analysis**       | Root Cause, Fishbone, Value Stream Mapping        | Xác định điểm nghẽn & cơ hội cải tiến             |
| **Modeling**       | Use Case, Process Flow, Data Model, State Diagram | Mô hình hóa hành vi & luồng dữ liệu               |
| **Validation**     | Wireframe Testing, A/B Testing, Analytics Review  | Đo hiệu quả yêu cầu trước khi release             |
| **Prioritization** | MoSCoW, Impact/Effort Matrix                      | Quyết định tính năng trong từng sprint            |
| **Traceability**   | Requirements Traceability Matrix (RTM)            | Liên kết yêu cầu ↔ mục tiêu ↔ kiểm thử            |
| **Monitoring**     | KPI Dashboard (Mixpanel, GA4)                     | Đánh giá hiệu quả kinh doanh sau triển khai       |

---

## **7. STAKEHOLDER ENGAGEMENT STRATEGY**

| Nhóm                      | Vai trò                                    | Mức độ tham gia | Phương thức tương tác     |
| ------------------------- | ------------------------------------------ | --------------- | ------------------------- |
| **Founders / PM**         | Quyết định ưu tiên, định hướng chiến lược  | 🔵 High         | Weekly OKR review         |
| **Product & Dev Team**    | Phát triển tính năng, phản hồi feasibility | 🟢 Medium       | Daily standup, Jira board |
| **End Users (Travelers)** | Cung cấp insight, phản hồi UX              | 🔵 High         | Beta testing, surveys     |
| **Local Businesses**      | Cung cấp data & hợp tác                    | 🟡 Medium       | Partnership workshop      |
| **Tourism Boards**        | Stakeholder chính, data consumer           | 🟡 Medium       | Quarterly sync            |
| **Investors**             | Theo dõi tiến độ, ROI                      | 🟢 Medium       | Monthly report            |

🧩 _BA đóng vai trò cầu nối giữa các nhóm — đảm bảo mọi người hiểu cùng một ngôn ngữ giá trị (Value Language)._

---

## **8. REQUIREMENTS GOVERNANCE**

| Quy tắc              | Cách thực thi                                                        |
| -------------------- | -------------------------------------------------------------------- |
| **Change Control**   | Mọi thay đổi yêu cầu phải được ghi vào backlog và có owner approve.  |
| **Versioning**       | Mỗi tài liệu BRD/Feature có version rõ ràng trên Notion.             |
| **Traceability**     | Mỗi User Story gắn link tới Business Objective liên quan.            |
| **Validation Cycle** | Mỗi sprint có ít nhất 1 vòng review với user thật.                   |
| **Measurement**      | Mọi yêu cầu đều có KPI đo tác động (ví dụ: time saved, activation%). |

---

## **9. BUSINESS ANALYSIS DELIVERABLES**

| Deliverable                         | Format               | Purpose                                   |
| ----------------------------------- | -------------------- | ----------------------------------------- |
| **Stakeholder Map**                 | Diagram              | Xác định ai ảnh hưởng & ai chịu ảnh hưởng |
| **Current State Report**            | Document             | Hiểu vấn đề & giá trị bị mất              |
| **Future State Blueprint**          | Diagram/Document     | Vẽ bức tranh đích đến                     |
| **Business Requirements Doc (BRD)** | Structured Document  | Xác định yêu cầu nghiệp vụ cấp cao        |
| **Solution Scope**                  | Table + Diagram      | Giới hạn phạm vi giải pháp                |
| **Use Case Specification**          | UML / Markdown       | Mô tả hành vi chi tiết                    |
| **Feature Backlog (User Stories)**  | Jira / Notion        | Quản lý yêu cầu theo sprint               |
| **Validation Report**               | Dashboard / Summary  | Kết quả thử nghiệm & phản hồi người dùng  |
| **Transition Plan**                 | Checklist + Schedule | Kế hoạch đưa sản phẩm vào vận hành        |

---

## **10. CÔNG CỤ HỖ TRỢ (TOOLS & ENVIRONMENT)**

| Giai đoạn         | Công cụ chính                | Mục đích                     |
| ----------------- | ---------------------------- | ---------------------------- |
| **Discovery**     | Notion, Miro, Google Form    | Brainstorm & survey          |
| **Modeling**      | FigJam, Lucidchart           | Process & data visualization |
| **Documentation** | Notion, Confluence           | Living documentation         |
| **Collaboration** | Slack, Jira                  | Agile tracking               |
| **Analytics**     | GA4, Mixpanel, Looker Studio | Insight validation           |
| **Feedback**      | Hotjar, Typeform             | User testing feedback        |

---

## **11. RỦI RO & CHIẾN LƯỢC GIẢM THIỂU**

| Rủi ro                        | Ảnh hưởng            | Biện pháp giảm thiểu            |
| ----------------------------- | -------------------- | ------------------------------- |
| **Yêu cầu thay đổi liên tục** | Scope creep          | MoSCoW + Sprint Planning strict |
| **Stakeholder conflict**      | Delay quyết định     | RACI rõ ràng + PM moderation    |
| **Thiếu dữ liệu thực tế**     | Quyết định sai hướng | Early beta, analytics setup sớm |
| **Over-documentation**        | Chậm tiến độ         | Lean doc template               |
| **Thiếu đo lường giá trị**    | Mất định hướng       | KPI & traceability dashboard    |

---

## **12. KẾT LUẬN (SUMMARY)**

> **Business Analysis Approach** của ứng dụng này chọn hướng **Lean–Agile–Value-driven**,
> đảm bảo rằng mọi yêu cầu đều được **xác thực bằng dữ liệu, phản hồi người dùng, và gắn trực tiếp với Business Objective**.

**Cốt lõi:**

- 📊 _Phân tích không chỉ để hiểu vấn đề — mà để đo được giá trị sau khi giải quyết._
- 🔁 _Phân tích không dừng lại ở tài liệu — mà là chu trình liên tục giữa học hỏi, thử nghiệm, và điều chỉnh._
- 🧭 _BA trở thành “bộ nhớ tập thể” của dự án — giữ cho đội ngũ đi đúng hướng với tầm nhìn dài hạn._
