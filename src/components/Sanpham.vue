<template>
  <div class="sanpham">
    <hr />
    <div class="breadcrumb" style="padding: 0; margin: 0">
      <RouterLink to="/" style="color: black; margin-left: 60px"
        >Trang chủ</RouterLink
      >
      &nbsp; ❯ &nbsp; Tất cả sản phẩm
    </div>
    <hr />
    <div class="allproduct">
      <img
        src="https://theme.hstatic.net/200000418743/1001254066/14/collection_banner.jpg?v=356"
        alt=""
      />
      <h1>Tất cả sản phẩm</h1>
    </div>

    <br />
    <!-- sản phẩm dùng bootstrap -->
    <b style="margin-left: 70px">5</b> sản phẩm
    <div class="list_product">
      <div class="row mb-2 justify-content-center">
        <router-link to=""></router-link>
        <template v-for="(value, index) in list_sanpham">
          <div class="col-lg-2 col-md-6">
            <div class="card-header">
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
</template>

<script>
import { RouterLink } from "vue-router";
export default {
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

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list_product {
  overflow: hidden; /* Tránh tràn ra ngoài */
  width: 100%; /* Giữ toàn bộ trong khung */
}

.card-header {
  height: 300px; /* Đặt chiều cao cố định */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa; /* Màu nền nhẹ để hình không bị mất viền */
}

.card-header img {
  max-width: 100%; /* Đảm bảo hình không vượt quá khung */
  max-height: 100%; /* Giữ hình ảnh nằm gọn trong card */
  object-fit: contain; /* Giữ nguyên tỉ lệ, không cắt hình */
}
.allproduct {
  background-color: #f8f8f8;
  display: flex;
  width: 100%;
}
.allproduct img {
  width: 40%;
}
.allproduct h1 {
  color: #2e3191;
  align-content: center;
  margin-left: 40px;
  font-size: 50px;
}
</style>
