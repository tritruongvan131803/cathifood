<template>
  <div>
    <footer class="footer">
      <div class="footer-column">
        <h3>CÔNG TY TNHH CATHIFOOD</h3>
        <p>
          📍 Nhà máy: số 80 đường 28/3, Thanh Hà, Hội An, Quảng Nam | Cửa hàng:
          586 Cửa Đại, Sơn Phong, Hội An, Quảng Nam
        </p>
        <p>📞 0777 246 268</p>
        <p>✉️ cathifood.vn@gmail.com</p>
        <h4>Phương thức thanh toán</h4>
        <div class="payment-methods">
          <img
            src="https://theme.hstatic.net/200000418743/1001254066/14/payment_3_img.png?v=356"
            alt="VNPay"
          />
          <img
            src="https://theme.hstatic.net/200000418743/1001254066/14/payment_4_img.png?v=356"
            alt="MoMo"
          />
        </div>
      </div>

      <div class="footer-column">
        <h3>Chính sách</h3>
        <ul>
          <li>Chính sách bảo mật</li>
          <li>Chính sách vận chuyển</li>
          <li>Chính sách đổi trả</li>
          <li>Chính sách thanh toán</li>
          <li>Quy định sử dụng</li>
          <li>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Theo dõi chúng tôi tại</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">TikTok</a></li>
          <li><a href="#">Shopee</a></li>
        </ul>
      </div>
    </footer>
    <div class="floating-icons">
      <img
        src="https://static.harasocial.com/svg-funnel/ic_messenger_logo.png"
        alt="Messenger"
      />
    </div>
  </div>
</template>
<style>
.footer {
            background-color: #2b2e83;
            color: white;
            padding: 40px 20px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .footer-column {
            max-width: 300px;
            margin-bottom: 20px;
        }

        .footer h3 {
            font-size: 20px;
            margin-bottom: 15px;
        }

        .footer p, .footer li, .footer a {
            font-size: 17px;
            line-height: 1.8;
            color: white;
            text-decoration: none;
        }

        .footer ul {
            list-style: disc;
            padding-left: 20px;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        .payment-methods img {
            width: 50px;
            height: auto;
            margin-right: 10px;
            margin-top: 10px;
        }

        .contact-icons {
            display: flex;
            align-items: center;
            margin-top: 10px;
        }

        .contact-icons img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }

        .floating-icons {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .floating-icons img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            cursor: pointer;
        }
</style>
