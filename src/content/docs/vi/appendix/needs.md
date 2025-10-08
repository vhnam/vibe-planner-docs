---
title: Ma Trận Truy Vết Yêu Cầu Nghiệp Vụ
---

## **Mục Đích**

Đảm bảo mỗi Yêu Cầu Nghiệp Vụ (Business Requirement) được truy vết về nhu cầu gốc (source need) và có tiêu chí chấp nhận rõ ràng (acceptance criteria).

---

## **BR-001: Nền Tảng Lập Kế Hoạch Tích Hợp**

**Nhu cầu gốc:** VẤN ĐỀ 1 – Lập kế hoạch phân mảnh, mất 10–15 giờ/chuyến

**Mô tả:**
Hệ thống phải cung cấp một nền tảng tích hợp (all-in-one), cho phép người dùng thực hiện toàn bộ quy trình lập kế hoạch du lịch – từ tìm kiếm đến hoàn thiện – trong một môi trường duy nhất.

**Mục tiêu nghiệp vụ:**

1. Giảm 50% thời gian lập kế hoạch (từ 10–15h xuống 5–7h)
2. Điểm hài lòng người dùng ≥ 4.2/5
3. 80% người dùng hoàn tất kế hoạch mà không chuyển sang app khác

**Tiêu chí thành công:**

- Thời gian trung bình lập kế hoạch ≤ 7 giờ
- Khảo sát người dùng: “Bạn hài lòng thế nào với trải nghiệm lập kế hoạch?” ≥ 4.2/5
- Analytics: 80% người dùng hoàn thành kế hoạch mà không dùng công cụ ngoài

**Tiêu chí chấp nhận:**

- [ ] Người dùng có thể tạo kế hoạch chuyến đi mới
- [ ] Có thể thêm địa điểm, hoạt động, ghi chú
- [ ] Có thể sắp xếp theo dòng thời gian
- [ ] Ước tính ngân sách
- [ ] Lưu và chỉnh sửa kế hoạch
- [ ] Xem kế hoạch trên thiết bị di động
- [ ] 95% uptime trong thời gian lập kế hoạch

**Phụ thuộc:**

- Hệ thống xác thực người dùng
- Hạ tầng cơ sở dữ liệu
- Giao diện tương thích di động

**Ưu tiên:** P0 (Bắt buộc phải có)

**Rủi ro:**

- Rủi ro: Quá nhiều tính năng → UX phức tạp
- Giảm thiểu: Phạm vi MVP chặt chẽ, bổ sung theo vòng lặp

---

## **BR-002: Khả Năng Lập Kế Hoạch Nhóm**

**Nhu cầu gốc:** VẤN ĐỀ 1 – 80% nhóm gặp khó khăn khi phối hợp

**Mô tả:**
Hệ thống phải hỗ trợ lập kế hoạch nhóm với cập nhật theo thời gian thực và kiểm soát quyền truy cập theo vai trò.

**Mục tiêu nghiệp vụ:**

1. 70% chuyến đi nhóm sử dụng tính năng cộng tác
2. Giảm 60% thời gian phối hợp
3. 90% kế hoạch nhóm được hoàn thành

**Tiêu chí thành công:**

- ≥ 70% kế hoạch nhóm dùng chế độ cộng tác
- Khảo sát: giảm 60% thời gian phối hợp
- 90% kế hoạch nhóm được hoàn thành

**Tiêu chí chấp nhận:**

- [ ] Người dùng có thể mời người khác cùng lập kế hoạch
- [ ] Nhiều người chỉnh sửa cùng lúc
- [ ] Cập nhật hiển thị thời gian thực
- [ ] Quyền theo vai trò: chủ sở hữu, biên tập viên, người xem
- [ ] Bình luận trên từng mục kế hoạch
- [ ] Giải quyết xung đột khi chỉnh sửa cùng lúc
- [ ] Thông báo khi có thay đổi

**Phụ thuộc:**

- Hạ tầng đồng bộ thời gian thực (WebSocket)
- Hệ thống phân quyền
- Dịch vụ thông báo

**Ưu tiên:** P1 (Nên có) – Có thể trì hoãn đến Tháng 6

**Rủi ro:**

- Rủi ro: Phức tạp kỹ thuật cao
- Giảm thiểu: Sử dụng thư viện real-time đã được chứng minh (Firebase, Socket.io)

---

## **BR-003: Nền Tảng Đánh Giá Cộng Đồng Đáng Tin Cậy**

**Nhu cầu gốc:** VẤN ĐỀ 2 – 55% không tin review, phải kiểm tra 3–5 nguồn

**Mô tả:**
Hệ thống cần xây dựng một nền tảng review do cộng đồng đóng góp, với cơ chế xác thực đảm bảo độ chân thực và tin cậy.

**Mục tiêu nghiệp vụ:**

1. Điểm tin cậy ≥ 75% (khảo sát)
2. 90% review được xác thực trong vòng 48h
3. Giảm thời gian tìm hiểu từ 2–3h còn <1h/địa điểm

**Tiêu chí thành công:**

- ≥ 75% người dùng “tin tưởng review”
- 90% review được xác thực trong 48h
- Thời gian tìm hiểu trung bình <1h

**Tiêu chí chấp nhận:**

- [ ] Gửi review với rating 1–5 sao
- [ ] Tải lên ảnh (tối thiểu 3, tối đa 10)
- [ ] Viết đánh giá chi tiết
- [ ] Huy hiệu xác thực
- [ ] Điểm uy tín hiển thị
- [ ] Cơ chế báo cáo nội dung đáng ngờ
- [ ] Hệ thống duyệt nội dung cho quản trị viên
- [ ] Phát hiện spam bằng AI

**Phụ thuộc:**

- Xác thực người dùng
- Dịch vụ upload ảnh
- Công cụ kiểm duyệt
- Mô hình máy học phát hiện spam

**Ưu tiên:** P0 (Bắt buộc phải có)

**Rủi ro:**

- Rủi ro: Review giả/spam tràn lan
- Giảm thiểu: Kiểm duyệt nhiều lớp, cộng đồng báo cáo

---

## **BR-004: Ưu Tiên Người Dùng Việt Nam**

**Nhu cầu gốc:** VẤN ĐỀ 2 – Review không phản ánh góc nhìn người Việt

**Mô tả:**
Hệ thống phải được tối ưu cho người dùng Việt với nội dung ưu tiên tiếng Việt, giá hiển thị theo VND, và bối cảnh văn hoá phù hợp.

**Mục tiêu nghiệp vụ:**

1. 100% giao diện tiếng Việt
2. 80% review từ người dùng Việt
3. Điểm phù hợp văn hoá ≥ 4.5/5

**Tiêu chí thành công:**

- 100% UI tiếng Việt
- Dữ liệu cho thấy ≥ 80% người dùng là người Việt
- ≥ 4.5/5 cho khảo sát “Nội dung có phù hợp với người Việt không?”

**Tiêu chí chấp nhận:**

- [ ] Giao diện hoàn toàn bằng tiếng Việt
- [ ] Có tùy chọn tiếng Anh là phụ
- [ ] Giá hiển thị chính bằng VND
- [ ] Định dạng ngày/giờ kiểu Việt
- [ ] UX phù hợp văn hoá Việt
- [ ] Hướng dẫn nội dung ưu tiên góc nhìn người Việt
- [ ] Hỗ trợ khách hàng bằng tiếng Việt

**Phụ thuộc:**

- Hệ thống i18n
- Đội ngũ content tiếng Việt
- Cổng thanh toán nội địa

**Ưu tiên:** P0 (Bắt buộc phải có)

**Rủi ro:**

- Rủi ro: Chất lượng dịch thuật kém
- Giảm thiểu: Đội ngũ người Việt bản địa, vòng lặp phản hồi từ người dùng

---

## **BR-005: Hệ Thống Gamification & Khuyến Khích Đóng Góp**

**Nhu cầu gốc:** VẤN ĐỀ 3 – Chỉ 15–20% người dùng viết review → lãng phí tri thức cộng đồng

**Mô tả:**
Hệ thống cần triển khai các cơ chế trò chơi hóa (gamification) và phần thưởng để khuyến khích người dùng chia sẻ đánh giá và kinh nghiệm du lịch.

**Mục tiêu nghiệp vụ:**

1. Tăng tỷ lệ review từ 15% lên 35% trong Năm 1
2. Điểm chất lượng review trung bình ≥ 4.0/5
3. 50% người viết review đăng nhiều hơn 1 review

**Tiêu chí thành công:**

- 35% người hoàn thành chuyến đi viết review
- Điểm đánh giá từ bộ lọc kiểm duyệt ≥ 4.0/5
- 50% reviewer đăng từ 2 review trở lên

**Tiêu chí chấp nhận:**

- [ ] Hệ thống tính điểm cho đóng góp (review, ảnh, mẹo du lịch...)
- [ ] Hệ thống huy hiệu (Đồng, Bạc, Vàng, Bạch Kim)
- [ ] Bảng xếp hạng theo tháng và tổng thể
- [ ] Trang cá nhân hiển thị thành tích
- [ ] Tính năng mở khóa dựa trên mức độ đóng góp
- [ ] Danh hiệu "Reviewer nổi bật", "Chuyên gia địa phương"
- [ ] Hệ thống quy đổi phần thưởng (giảm giá, tính năng premium...)

**Phụ thuộc:**

- Hệ thống tính điểm
- Thiết kế bộ huy hiệu
- Tích hợp với đối tác phần thưởng

**Ưu tiên:** P1 (Nên có) – Giai đoạn 2 (Tháng 6–9)

**Rủi ro:**

- Rủi ro: Người dùng lợi dụng hệ thống để lấy điểm
- Giảm thiểu: Kiểm tra chất lượng, xét duyệt thủ công, phát hiện gian lận

---

## **BR-006: Hạ Tầng Có Khả Năng Mở Rộng**

**Nhu cầu gốc:** CƠ HỘI 1 – Thị trường tăng trưởng 15–20%/năm, 40–45 triệu người dùng tiềm năng

**Mô tả:**
Hệ thống cần được thiết kế để có khả năng mở rộng, phục vụ ít nhất 50,000 người dùng trong Năm 1, với tốc độ tăng trưởng gấp đôi mỗi năm.

**Mục tiêu nghiệp vụ:**

1. Đạt 50,000 người dùng đăng ký trước Tháng 12
2. Tăng trưởng MAU ≥ 15% mỗi tháng
3. Uptime ≥ 99% kể cả trong giờ cao điểm

**Tiêu chí thành công:**

- 50,000 người dùng đăng ký
- Tăng trưởng MAU ≥ 15%/tháng
- Uptime ≥ 99% (tối đa downtime 7.2h/tháng)

**Tiêu chí chấp nhận:**

- [ ] Hệ thống xử lý 10,000 người dùng đồng thời
- [ ] Tốc độ tải trang <3 giây khi tải cao
- [ ] Database mở rộng đến ≥ 1 triệu bản ghi
- [ ] Sử dụng CDN cho tài nguyên tĩnh
- [ ] Hạ tầng auto-scaling
- [ ] Kiểm tra tải đạt ≥ 2x công suất dự kiến
- [ ] Kế hoạch phục hồi thảm họa
- [ ] Hệ thống giám sát và cảnh báo

**Phụ thuộc:**

- Hạ tầng cloud (AWS/GCP/Azure)
- Dịch vụ CDN
- Tối ưu cơ sở dữ liệu
- Đội DevOps

**Ưu tiên:** P0 (Bắt buộc phải có) – Nền tảng hạ tầng

**Rủi ro:**

- Rủi ro: Tăng trưởng viral gây quá tải hệ thống
- Giảm thiểu: Kiểm thử tải, hạ tầng mở rộng tự động, giám sát liên tục

---

## **BR-007: Tích Hợp Kênh Kiếm Tiền Đa Dạng**

**Nhu cầu gốc:** CƠ HỘI 2 – Hiệu ứng mạng và mô hình doanh thu đa nguồn

**Mô tả:**
Hệ thống cần tích hợp nhiều kênh kiếm tiền (affiliate, quảng cáo, gói premium) và tối ưu hoá khả năng tăng trưởng lan truyền để đạt mô hình kinh doanh bền vững.

**Mục tiêu nghiệp vụ:**

1. Doanh thu đạt $50,000 trong Năm 1
2. Hệ số lan truyền (K-factor) ≥ 1.2
3. Có ≥ 3 kênh doanh thu đang hoạt động vào Tháng 9

**Tiêu chí thành công:**

- Doanh thu tích lũy ≥ $50,000
- Mỗi người dùng đem về ≥ 1.2 người dùng mới
- ≥ 3 kênh kiếm tiền hoạt động

**Tiêu chí chấp nhận:**

- [ ] Tích hợp affiliate (Booking.com, Traveloka...)
- [ ] Framework hiển thị quảng cáo không gây khó chịu
- [ ] Định nghĩa rõ gói premium
- [ ] Chương trình giới thiệu với tracking
- [ ] Cơ chế chia sẻ lan truyền (mạng xã hội, chia sẻ trực tiếp)
- [ ] Hệ thống phân tích conversion
- [ ] Tích hợp cổng thanh toán

**Phụ thuộc:**

- Ký kết hợp tác affiliate
- Tích hợp ad network
- Bộ xử lý thanh toán
- Nền tảng phân tích dữ liệu

**Ưu tiên:** P0 (Bắt buộc phải có) – Doanh thu quan trọng để duy trì

**Rủi ro:**

- Rủi ro: Kiếm tiền ảnh hưởng trải nghiệm người dùng
- Giảm thiểu: Kiểm thử người dùng, triển khai dần, theo dõi churn

---

## **BR-008: API Cho Đối Tác & Hệ Sinh Thái**

**Nhu cầu gốc:** CƠ HỘI 3 – Cơ quan du lịch thiếu dữ liệu, doanh nghiệp nhỏ khó tiếp cận khách hàng

**Mô tả:**
Hệ thống phải cung cấp API và công cụ phân tích cho đối tác (cơ quan du lịch, doanh nghiệp) để tận dụng dữ liệu nền tảng và tiếp cận du khách.

**Mục tiêu nghiệp vụ:**

1. Ký hợp tác với ≥ 5 sở/ban/ngành du lịch trong Năm 1
2. Có ≥ 500 doanh nghiệp địa phương được liệt kê
3. Điểm hài lòng đối tác ≥ 4.0/5

**Tiêu chí thành công:**

- ≥ 5 cơ quan du lịch hợp tác
- ≥ 500 doanh nghiệp có mặt trên nền tảng
- Khảo sát đối tác: ≥ 4.0/5

**Tiêu chí chấp nhận:**

- [ ] Cổng đối tác cho cơ quan du lịch
- [ ] API cung cấp dữ liệu có kiểm soát
- [ ] Hệ thống quản lý danh sách doanh nghiệp
- [ ] Dashboard phân tích cho đối tác
- [ ] Công cụ chiến dịch tiếp thị đồng thương hiệu
- [ ] Tùy chọn white-label cho cơ quan du lịch
- [ ] Thoả thuận chia sẻ dữ liệu rõ ràng và minh bạch

**Phụ thuộc:**

- Framework phát triển API
- Quy trình onboarding đối tác
- Cơ sở pháp lý chia sẻ dữ liệu
- Đội sales/business development

**Ưu tiên:** P1 (Nên có) – Phát triển sau khi có độ phủ

**Rủi ro:**

- Rủi ro: Lo ngại quyền riêng tư dữ liệu
- Giảm thiểu: Ẩn danh dữ liệu, chính sách minh bạch, tuân thủ chuẩn GDPR

---

## **TÓM TẮT: Tổng Quan Yêu Cầu Nghiệp Vụ**

| BR ID  | Tên                            | Nhu cầu gốc | Ưu tiên | Giai đoạn   |
| ------ | ------------------------------ | ----------- | ------- | ----------- |
| BR-001 | Nền tảng lập kế hoạch tích hợp | Vấn đề 1    | P0      | MVP         |
| BR-002 | Lập kế hoạch nhóm              | Vấn đề 1    | P1      | Giai đoạn 2 |
| BR-003 | Nền tảng đánh giá cộng đồng    | Vấn đề 2    | P0      | MVP         |
| BR-004 | Ưu tiên người dùng Việt Nam    | Vấn đề 2    | P0      | MVP         |
| BR-005 | Gamification & Khuyến khích    | Vấn đề 3    | P1      | Giai đoạn 2 |
| BR-006 | Hạ tầng mở rộng                | Cơ hội 1    | P0      | MVP         |
| BR-007 | K                              |             |         |             |

ênh kiếm tiền | Cơ hội 2 | P0 | Giai đoạn 1 |
| BR-008 | API cho đối tác | Cơ hội 3 | P1 | Giai đoạn 2 |

---

## **Quy Tắc Truy Vết**

### **Truy vết xuôi (Forward Traceability):**

- Mỗi BR sẽ liên kết đến → Yêu cầu của các bên liên quan → Yêu cầu chức năng → Thiết kế → Triển khai

### **Truy vết ngược (Backward Traceability):**

- Mỗi BR được truy vết về → Nhu cầu nghiệp vụ → Tuyên bố vấn đề / cơ hội

### **Tác động của thay đổi:**

- Bất kỳ thay đổi nào đối với BR đều cần phân tích tác động đến tất cả các yêu cầu liên quan
