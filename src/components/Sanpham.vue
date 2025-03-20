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
    <b style="margin-left: 60px">5</b> sản phẩm

    <div class="list_product">
      <template v-for="(value, index) in list_sanpham">
        <div class="producta">
        <img v-bind:src="value.img" alt="" />
      <div style="height: 90px;" class="ghichu">
        <p class="fs-5 mt-2">{{ value.ghichu }}</p>
      </div>
          <div class="price d-flex justify-content-between">
            <p class="mt-3">{{ value.price.toLocaleString("vi-VN") }}đ</p>
            <button class="text-nowrap">
              <b>THÊM VÀO GIỎ</b> <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </template>
    </div>

    <!-- <div class="list_product">
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
    </div> -->
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
};
</script>

<style>

/* @media sẽ làm resposive */
@media (max-width: 1000px ){
  .list_product{
    display: grid !important; /* Đảm bảo grid được áp dụng */
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .allproduct{
    display: grid !important; /* Đảm bảo grid được áp dụng */
    grid-template-columns: repeat(1, 1fr) !important;
  }
 
}
@media (max-width: 600px ){
  .list_product{
    display: grid !important; /* Đảm bảo grid được áp dụng */
    grid-template-columns: repeat(1, 1fr) !important;
  }
 
}
.list_product {
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 20px;
  grid-template-columns: repeat(5, 1fr); /* Mặc định là 3 cột */

}
.producta {
  padding: 10px;
  border-radius: 10px;

}

.producta img {
  width: 100%;
  height: auto;
}
.producta .price {
  display: flex;
  align-items: center;
}
.price button {
  border: none;
  background-color: white;
  font-size: 13px;
  transition: all 0.3s ease;
}
.price button:hover {
  border: 1px solid rgb(139, 139, 11);
  padding: 5px;
  border-radius: 50px;
}
.producta:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
/* .list_product {
  overflow: hidden; 
  width: 100%; 
}

.card-header img {
  max-width: 100%; 
  max-height: 100%; 
  object-fit: contain; 
} */
.allproduct {
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}
.allproduct img {
  width: 100%;
}
.allproduct h1 {
  color: #2e3191;
  align-content: center;
  margin-left: 40px;
  font-size: 40px;
  padding: 15px;
}
</style>
