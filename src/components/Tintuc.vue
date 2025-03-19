<template>
  <div class="tintuc">
    <hr />
    <div class="breadcrumb" style="padding: 0; margin: 0;">
      <RouterLink to="/" style="color: black; margin-left: 60px"
        >Trang chủ</RouterLink
      >
      &nbsp; ❯ &nbsp; Tin tức
    </div>
    <hr />

    <div class="tintucchinh">
      <h1 style="margin-left: 60px; padding: 20px 0; color: #2e3191">
        Tin tức
      </h1>
      <div class="columnbaiviet">
        <div class="baiviet">
          <img
            style="cursor: pointer"
            src="https://file.hstatic.net/200000418743/article/may_ratort_c2b868245852489da4bd25cb6cee9cb3_1024x1024.jpg"
            alt=""
          />
          <h1>
            Công nghệ Retort – Giải pháp đột phá trong chế biến và bảo quản thực
            phẩm
          </h1>
          <p>
            Công nghệ retort là gì? Công nghệ retort là phương pháp tiệt trùng
            sử dụng nhiệt độ và áp suất cao để loại bỏ vi sinh vật có...
          </p>
          <p style="font-size: 15px; margin-top: 10px; color: #7f8da7">
            bởi: CATHIFOOD | 14 Tháng 01, 2025
          </p>
        </div>
        <div class="baiviet">
          <img
            style="cursor: pointer"
            src="https://file.hstatic.net/200000418743/article/hoi-an-mua-tet-bi-kip-tron-pho-va-tan-huong-khong-khi-an-yen-6-1121_836b7656f41947a48bde1c39972b0636_grande.jpg"
            alt=""
          />
          <h1>Chè Phố Hội</h1>
          <p>
            “Hội An trăm vật trăm ngonTừ từ lỗ miệng, để chồng con được nhờ”Bên cạnh những món đặc sản thường ngày như...
          </p>
          <p style="font-size: 15px; margin-top: 10px; color: #7f8da7">
            bởi: CATHIFOOD | 25 Tháng 12, 2024
          </p>
        </div>
        <div class="baiviet">
          <img
            style="cursor: pointer"
            src="https://file.hstatic.net/200000418743/article/ngay-hoi-bap-nep-cam-nam-hoi-an-2018-01_7d7b953c90544be894d60a17cf2f5911_grande.jpg"
            alt=""
          />
          <h1>
            Nhớ chè bắp "chưa qua sông"!
          </h1>
          <p>
            Mấy ngày nay do ảnh hưởng áp thấp nhiệt đới, trời miền Nam cứ mưa rả rích. Không phải là đứa “bánh bèo”, nhưng chẳng...
          </p>
          <p style="font-size: 15px; margin-top: 10px; color: #7f8da7">
            bởi: CATHIFOOD | 02 Tháng 07, 2024
          </p>
        </div>
      </div>
      <div class="columnbaiviet" style="margin-top:30px;margin-bottom: 60px;">
        <div class="baiviet">
          <img
            style="cursor: pointer"
            src="https://file.hstatic.net/200000418743/article/anh-5_d7b9b94e65f645ee83ece4ef25a70ecd_grande.jpg"
            alt=""
          />
          <h1>
            Xí mà phù: Phong vị ẩm thực khó quên ở Hội An
          </h1>
          <p>
            Là một món quà sáng thanh mát giản dị, gánh xí mà hai thế hệ đã trở thành một điểm ghé chân của biết bao người dân...
          </p>
          <p style="font-size: 15px; margin-top: 10px; color: #7f8da7">
            bởi: CATHIFOOD | 02 Tháng 09, 2024
          </p>
        </div>
        <div class="baiviet">
          <img
            style="cursor: pointer"
            src="https://file.hstatic.net/200000418743/article/che-dau-do-ghienan.com_.vn-012_3e9c9e0f0d5d4a1fb42cd10d664bc507.webp"
            alt=""
          />
          <h1>
            Vì sao giới trẻ đua nhau ăn chè đậu đỏ trong ngày lễ Thất tịch?
          </h1>
          <p>
            Những năm gần đây, cứ mỗi khi đến ngày Thất tịch (7/7 âm lịch) là giới trẻ lại đua nhau ăn chè đậu đỏ với mong muốn...
          </p>
          <p style="font-size: 15px; margin-top: 10px; color: #7f8da7">
            bởi: CATHIFOOD | 14 Tháng 01, 2025
          </p>
        </div>
        <div class="baiviet">
          <img
            style="cursor: pointer"
            src="https://file.hstatic.net/200000418743/article/may_ratort_c2b868245852489da4bd25cb6cee9cb3_1024x1024.jpg"
            alt=""
          />
          <h1>
            Công nghệ Retort – Giải pháp đột phá trong chế biến và bảo quản thực
            phẩm
          </h1>
          <p>
            Công nghệ retort là gì? Công nghệ retort là phương pháp tiệt trùng
            sử dụng nhiệt độ và áp suất cao để loại bỏ vi sinh vật có...
          </p>
          <p style="font-size: 15px; margin-top: 10px; color: #7f8da7">
            bởi: CATHIFOOD | 14 Tháng 01, 2025
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tintucchinh {
  width: 100%;
}
.columnbaiviet {
  display: flex;
  justify-content: center;
  margin-left: 60px;
  width: 95%;
  gap: 30px;
}
.baiviet {
  width: 30%;
  overflow: hidden;
}
.baiviet img {
  width: 80%;
  transition: transform 0.3s ease;
 
}
.baiviet img:hover{
    transform: scale(1.03); /* Phóng to ảnh 20% */
}
.baiviet h1 {
  color: #2e3191;
  font-size: 20px;
  margin-bottom: 10px;
  cursor: pointer;
}
.baiviet h1:hover {
  color: rgb(182, 182, 13);
}
</style>
