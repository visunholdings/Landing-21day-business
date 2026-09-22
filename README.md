# Landing page AI Agent Business 21 Day — Hùng Trịnh

Đây là bản landing page tĩnh để xem và duyệt nội dung. Trang dùng nhận diện màu, kiểu chữ và nhịp bố cục từ brand guideline VISUNAI, nhưng giới thiệu chương trình dưới thương hiệu cá nhân Hùng Trịnh. Ảnh được tối ưu từ thư mục `Anh Hung web`; file gốc không bị sửa.

## Xem thử trên máy

Mở Terminal trong thư mục này và chạy:

```sh
python3 -m http.server 8767
```

Sau đó mở `http://127.0.0.1:8767/` trên trình duyệt. Trang có thể mở trực tiếp bằng `index.html`, nhưng xem qua local HTTP sẽ gần với môi trường website thật hơn.

## Các file chính

- `index.html`: toàn bộ nội dung và cấu trúc landing page.
- `styles.css`: giao diện desktop, tablet, điện thoại.
- `main.js`: cập nhật học phí theo ngày, tạo email nháp từ form đăng ký, điều khiển CTA theo cuộn trang và đóng menu mobile sau khi chọn mục.
- `assets/hung-hero.jpg`, `assets/hung-founder.jpg`: ảnh Hùng đã tối ưu cho web.

## Nội dung chương trình đang dùng

- Nguồn nội dung đã chốt: `../NOI DUNG LANDING FINAL.md`.
- Core Challenge gồm ba module: ngày 1–7 dựng nền và kiểm chứng; ngày 8–14 xây Agent và test end-to-end; ngày 15–21 vận hành thật và chứng minh kết quả.
- Học viên chọn **một trong ba track**: Sales Follow-up, Content & Insight hoặc Operations/SOP.
- Điều kiện hoàn thành: 21/21 nhiệm vụ, đủ 100% output, bài REVISE phải đạt PASS, không còn lỗi an toàn nghiêm trọng, có demo và video feedback ngày 21.
- Core chỉ yêu cầu Agent Team Map. VPS, API, n8n/Make nâng cao, payment automation, CRM đầy đủ, auto-post, video AI nâng cao, Agent Team chạy thật và Multi-Agent orchestration thuộc Advanced Lab.

## Trạng thái kỹ thuật hiện tại

- Học phí hiển thị tự động theo ngày Việt Nam: bắt đầu từ 1.000.000đ ngày 21/09/2026, tăng 99.000đ mỗi ngày và dừng ở 5.000.000đ. Quy tắc thương mại này cần anh Hùng xác nhận trước khi công bố.
- Chưa có cổng thanh toán và chưa thu tiền trực tiếp trên trang.
- Form **không lưu lead tự động**. Form yêu cầu chọn track và xác nhận điều kiện đầu vào; khi hợp lệ, nút đăng ký mở ứng dụng email với nội dung điền sẵn. Khách vẫn phải tự bấm Gửi.
- Địa chỉ nhận hiện dùng là `hungtrinhth@gmail.com` trong `index.html` và `main.js`; cần xác nhận trước khi công bố.
- Lịch cohort, kênh hỗ trợ, chính sách hoàn/hủy và dời cohort cụ thể vẫn cần được chốt trong vận hành. Landing không khẳng định các chính sách này đã có hiệu lực.
- Form có disclosure quyền riêng tư tại chỗ: landing không tự lưu lead; dữ liệu chỉ rời thiết bị khi người dùng tự bấm Gửi trong ứng dụng email.
- Font Montserrat và Inter được tải từ Google Fonts; nếu không có mạng, trình duyệt dùng font dự phòng.

## Việc cần chốt trước khi công bố

1. Xác nhận email nhận yêu cầu. Nếu thay, sửa cả link `mailto:` trong `index.html` và địa chỉ nhận trong `main.js`.
2. Chốt lịch cohort, hình thức hỗ trợ/review và cơ chế mở nhiệm vụ.
3. Quyết định có dùng form lead tự động hay không. Nếu có, cần endpoint/form thật và thử một lượt gửi có bằng chứng nhận dữ liệu; không coi email nháp là lead đã ghi nhận.
4. Bổ sung điều khoản tham gia, chính sách hoàn/hủy, thông báo quyền riêng tư và thông tin liên hệ phù hợp trước khi thu tiền.
5. Khi có kênh thanh toán, thay CTA bằng luồng đăng ký/thanh toán thật và kiểm thử trước khi công bố công khai.

Không có testimonial, số liệu doanh thu hay khan hiếm suất được tạo thêm trong bản này.
