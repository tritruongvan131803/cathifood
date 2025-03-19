<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import HeaderBootstrap from "./components/HeaderBootstrap.vue";
import BannerBootstrap from "./components/BannerBootstrap.vue";

export default {
  components: {
    HeaderBootstrap,
    Footer,
    BannerBootstrap,
  },
  data() {
    return {
      list_sanpham: [
        {
          img: "https://product.hstatic.net/200000418743/product/hop_combo_1024d70f32984bcebb53b16a23b05097_master.png",
          ghichu: "Combo Hoian Sweet Hoian | Ngọt ngào Hội An",
          price: 150000,
        },
        {
          img: "https://product.hstatic.net/200000418743/product/ctf_che_me_den_d6f8e46f7f0b4c2ab6bd7473ef836076_master.png",
          ghichu: "Chè mè đen ăn liền (xí mà Hội An)",
          price: 35000,
        },
        {
          img: "https://product.hstatic.net/200000418743/product/ctf_che_thap_cam_953ed4e1ae474ad88919f3095a2904e8_master.png",
          ghichu: "Chè thập cẩm ăn liền",
          price: 35000,
        },
        {
          img: "https://product.hstatic.net/200000418743/product/ctf_che_bap_052b6de09db14b82a417b5ce5468b7f2_master.png",
          ghichu: "Chè bắp Hội An ăn liền",
          price: 35000,
        },
        {
          img: "https://product.hstatic.net/200000418743/product/ctf_che_dau_do_ec329c9bee544069bb5fd02939892dd9_master.png",
          ghichu: "Chè đậu đỏ ăn liền",
          price: 35000,
        },
      ],
    };
  },
  mounted() {
    this.equalizeCardHeights();
    window.addEventListener("resize", this.equalizeCardHeights);
  },
  methods: {
    equalizeCardHeights() {
      this.$nextTick(() => {
        let maxHeight = 0;
        const cards = document.querySelectorAll(".card-body");

        // Đặt chiều cao về auto trước khi tính toán lại
        cards.forEach((card) => {
          card.style.height = "auto";
        });

        // Tìm chiều cao lớn nhất
        cards.forEach((card) => {
          if (card.offsetHeight > maxHeight) {
            maxHeight = card.offsetHeight;
          }
        });

        // Gán chiều cao lớn nhất cho tất cả các card-body
        cards.forEach((card) => {
          card.style.height = maxHeight + "px";
        });
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.equalizeCardHeights);
  },
};
</script>

<template>
  <div>
    <HeaderBootstrap />
    <!-- Header xuất hiện trên mọi trang -->

    <!-- Kiểm tra nếu đang ở trang chủ thì hiển thị Banner -->
    <BannerBootstrap v-if="$route.path === '/'" />

    <div
      style="display: flex; width: 100%"
      class="addgioithieu"
      v-if="$route.path === '/'"
    >
      <div
        style="
          width: 50%;
          justify-items: center;
          text-align: center;
          margin: 35px;
        "
        class="trai"
      >
        <img
          style="transition: transform 0.3s ease-in-out; width: 80%"
          src="https://theme.hstatic.net/200000418743/1001254066/14/img_home_banner_desktop_1.jpg?v=356"
          alt
        />
        <h1 style="color: #2e3191">Trân trọng quá khứ</h1>
        <p style="font-size: 25px">
          Là CẢng THỊ ngàn năm nơi Đông - Tây gặp gỡ, Hội An mang trong mình vô
          vàn giá trị văn hóa độc đáo. CaThiFood ra đời với sứ mệnh mang ẩm thực
          Hội An và ẩm thực Việt Nam nói chung vươn mình ra thế giới.
        </p>
        <RouterLink to="/Gioithieu">
          <button
            style="
              padding: 15px 20px;
              transition: all 0.2s linear;
              background-color: white;
              border: 1px solid #f0f0f0;
            "
          >
            Xem thêm
          </button>
        </RouterLink>
      </div>
      <div
        style="
          width: 50%;
          justify-items: center;
          text-align: center;
          margin: 35px;
        "
        class="trai"
      >
        <img
          style="transition: transform 0.3s ease-in-out; width: 80%"
          src="https://theme.hstatic.net/200000418743/1001254066/14/img_home_banner_desktop_2.jpg?v=356"
          alt
        />
        <h1 style="color: #2e3191">Hướng đến tương lai</h1>
        <p style="font-size: 25px">
          Áp dụng công nghệ hiện đại kết hợp với tư duy đổi mới dựa trên nền
          tảng văn hóa, CaThiFood mang đến bạn những sản phẩm tiện lợi, an toàn
          với sức khoẻ nhưng vẫn thấm đẫm hương vị truyền thống.
        </p>
        <RouterLink to="/Gioithieu">
          <button
            style="
              padding: 15px 20px;
              transition: all 0.2s linear;
              background-color: white;
              border: 1px solid #f0f0f0;
            "
          >
            Xem thêm
          </button>
        </RouterLink>
      </div>
    </div>

    <div style="width: 100%" class="info" v-if="$route.path === '/'">
      <h1 style="text-align: center; font-size: 55px; color: #2e3191">
        Mang sản phẩm tốt nhất đến khách hàng
      </h1>
      <br />
      <div
        class="rowif"
        style="display: flex; transition: all 0.2s linear; width: 100%"
      >
        <div style="width: 25%; text-align: center" class="hangif">
          <img
            style="transition: transform 0.3s ease-in-out; width: 85%"
            src="https://theme.hstatic.net/200000418743/1001254066/14/img_item_category_1.jpg?v=356"
            alt
          />
          <p
            style="color: #2e3191; transition: all 0.2s linear; font-size: 25px"
          >
            Nguyên liệu chọn lọc
          </p>
        </div>
        <div style="width: 25%; text-align: center" class="hangif">
          <img
            style="transition: transform 0.3s ease-in-out; width: 85%"
            src="https://theme.hstatic.net/200000418743/1001254066/14/img_item_category_2.jpg?v=356"
            alt
          />
          <p
            style="color: #2e3191; transition: all 0.2s linear; font-size: 25px"
          >
            Trang thiết bị hiện đại
          </p>
        </div>
        <div style="width: 25%; text-align: center" class="hangif">
          <img
            style="transition: transform 0.3s ease-in-out; width: 85%"
            src="https://theme.hstatic.net/200000418743/1001254066/14/img_item_category_3.jpg?v=356"
            alt
          />
          <p
            style="color: #2e3191; transition: all 0.2s linear; font-size: 25px"
          >
            Hương vị tươi ngon
          </p>
        </div>
        <div style="width: 25%; text-align: center" class="hangif">
          <img
            style="transition: transform 0.3s ease-in-out; width: 85%"
            src="https://theme.hstatic.net/200000418743/1001254066/14/img_item_category_4.jpg?v=356"
            alt
          />
          <p style="color: #2e3191; font-size: 25px">Không lạm dụng hóa chất</p>
        </div>
      </div>
    </div>

    <div class="sanphambanchay mt-5" v-if="$route.path === '/'">
      <br />
      <h1 style="text-align: center; font-size: 65px">Sản phẩm bán chạy</h1>
      <div class="list_product">
      <div class="row mb-2 justify-content-center">
        <template v-for="(value, index) in list_sanpham">
          <div class="col-lg-2 col-md-6">
            <div class="card-header mt-3">
              <img
                style="width: 100%"
                v-bind:src="value.img"
                alt=""
              />
            </div>
            <div class="card-body">
              <p class="fs-5">{{ value.ghichu }}</p>
              <div class="btn_add d-flex justify-content-around">
                <p class="mt-3">{{ value.price.toLocaleString("vi-VN") }}đ</p>
                <button class="btn btn-danger text-nowrap">
                  THÊM VÀO GIỎ
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    </div>

    <div class="chuyenphohoai" v-if="$route.path === '/'">
      <h1 style="margin-bottom: 40px; text-align: center; font-size: 65px">Chuyện phố Hoài </h1>
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
           <RouterLink to="/Tintuc" style="text-decoration: none; color: black;">
            <u>Xem thêm  </u> >
           </RouterLink>
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
            “Hội An trăm vật trăm ngonTừ từ lỗ miệng, để chồng con được nhờ”Bên
            cạnh những món đặc sản thường ngày như...
          </p>
          <RouterLink to="/Tintuc" style="text-decoration: none; color: black;">
            <u>Xem thêm  </u> >
           </RouterLink>
        </div>
        <div class="baiviet">
          <img
            style="cursor: pointer"
            src="https://file.hstatic.net/200000418743/article/ngay-hoi-bap-nep-cam-nam-hoi-an-2018-01_7d7b953c90544be894d60a17cf2f5911_grande.jpg"
            alt=""
          />
          <h1>Nhớ chè bắp "chưa qua sông"!</h1>
          <p>
            Mấy ngày nay do ảnh hưởng áp thấp nhiệt đới, trời miền Nam cứ mưa rả
            rích. Không phải là đứa “bánh bèo”, nhưng chẳng...
          </p>
          <RouterLink to="/Tintuc" style="text-decoration: none; color: black;">
            <u>Xem thêm  </u> >
           </RouterLink>
        </div>
      </div>
    </div>

    <div class="CTF" style="margin: 40px 0; padding: 45px 0; background-color: #f8f8f8; text-align: center;" v-if="$route.path === '/'" >
   <div class="ctf" style="margin: 55px 20px;">
    <h1 style="color: #2e3191; margin-bottom: 20px; font-size: 35px ">CATHIFOOD - Mang Hội An ra thế giới</h1>
      <p style=" font-size: 20px">Tiên phong tiếp nối di sản của cha ông từ hàng trăm năm, CaThiFood cung cấp các sản phẩm đặc sản địa phương được sản xuất bằng dây chuyền công nghệ hiện đại. Hành trình mang ẩm thực quê hương chinh phục thế giới chưa bao giờ là dễ dàng. Là những người trẻ đam mê gìn giữ văn hoá quê hương, sự tự tế, kiên trì và sáng tạo không ngừng sẽ là hành trang không thể thiếu của đội ngũ CaThiFood.</p>
    </div>
   </div>

    <div class="infomationa" v-if="$route.path === '/'">
      <div class="lienhe">
      <div class="lienhe4">
        <img src="https://theme.hstatic.net/200000418743/1001254066/14/about02_services_1_ico.png?v=356" alt="">
      <h1>Đa dạng cách thức mua hàng</h1>
      <p>Website / TikTok Shop / Shopee / Facebook</p>
      </div>
      <div class="lienhe4">
        <img src="https://theme.hstatic.net/200000418743/1001254066/14/about02_services_2_ico.png?v=356" alt="">
      <h1>Giao hàng nhanh chóng</h1>
      <p>Thời gian giao hàng từ 1 - 3 ngày làm việc</p>
      </div>
      <div class="lienhe4">
        <img src="https://theme.hstatic.net/200000418743/1001254066/14/about02_services_3_ico.png?v=356" alt="">
      <h1>Thanh toán tiện lợi</h1>
      <p>Chấp nhận thanh toán COD, VN Pay, Momo</p>
      </div>
      <div class="lienhe4">
        <img src="https://theme.hstatic.net/200000418743/1001254066/14/about02_services_4_ico.png?v=356" alt="">
      <h1>Đổi trả dễ dàng</h1>
      <p>Thời gian trả hàng lên tới 7 ngày</p>
      </div>
    </div>
    </div>
    <router-view />


    <!-- Nội dung từng trang -->
    <Footer />
    <!-- Footer xuất hiện trên mọi trang -->
  </div>
</template>

<style>
.addgioithieu .trai button:hover {
  color: #ffcb00;
  background: #21364b;
}
.trai img:hover {
  transform: scale(1.1);
}
.hangif p:hover {
  color: #ffcb00 !important;
  cursor: pointer;
}
.hangif img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.hangif img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
