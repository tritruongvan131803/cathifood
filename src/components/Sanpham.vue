<template>
  <div class="sanpham">
    <hr />
    <div class="breadcrumb">
      <RouterLink to="/Home" style="color: black; margin-left: 60px"
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
    <div class="product">
      <div class="producta">
      <router-link to="/Combo4loaiche" style="text-decoration: none; color: black;">
        <div class="ab">
          <img
            class="default-img"
            src="https://product.hstatic.net/200000418743/product/hop_combo_1024d70f32984bcebb53b16a23b05097_master.png"
            alt=""
          />
          <img
            class="hover-img"
            src="https://product.hstatic.net/200000418743/product/dsc06938_8b8ebd47e2f64447a6bf8eab1752c899_master.jpg"
            alt=""
          />
          <p class="a" style="margin-top: 20px; font-size: 20px">
            Combo Hoian Sweet Hoian | Ngọt ngào Hội An
          </p>
        </div>
      </router-link>
        <div class="price">
          <p style="font-weight: bold; font-size: 19px">150.000</p>
          <div class="addcart">
            <button style="font-weight: 600">THÊM VÀO GIỎ</button>
            <i class="ri-shopping-bag-fill"></i>
          </div>
        </div>
      </div>
      <div class="producta">
        <router-link to="/Chemeden" style="text-decoration: none; color: black;">
          <div class="ab">
          <img
            src="https://product.hstatic.net/200000418743/product/ctf_che_me_den_d6f8e46f7f0b4c2ab6bd7473ef836076_master.png"
            alt=""
          />
          <img
            class="hover-img"
            src="https://product.hstatic.net/200000418743/product/dsc06865-edit-edit_099f380e8e0e4dc2a985632228fee846_master.jpg"
            alt=""
          />
          <p class="a" style="margin-top: 20px; font-size: 20px">
            Chè mè đen ăn liền (xí mà Hội An)
          </p>
        </div>
        </router-link>
        <div class="price">
          <p style="font-weight: bold; font-size: 20px">35.000</p>
          <div class="addcart">
            <button style="font-weight: 600">THÊM VÀO GIỎ</button>
            <i class="ri-shopping-bag-fill"></i>
          </div>
        </div>
      </div>
      <div class="producta">
        <router-link to="/Chethapcam" style="text-decoration: none; color: black;">
          <div class="ab">
          <img
            src="https://product.hstatic.net/200000418743/product/ctf_che_thap_cam_953ed4e1ae474ad88919f3095a2904e8_master.png"
            alt=""
          />
          <img
            class="hover-img"
            src="https://product.hstatic.net/200000418743/product/dsc06883-edit_33280842633c469580f3cb06f561ecba_master.jpg"
            alt=""
          />
          <p class="a" style="margin-top: 20px; font-size: 20px">
            Chè thập cẩm ăn liền
          </p>
        </div>
        </router-link>
        
        <div class="price">
          <p style="font-weight: bold; font-size: 20px">35.000</p>
          <div class="addcart">
            <button style="font-weight: 600">THÊM VÀO GIỎ</button>
            <i class="ri-shopping-bag-fill"></i>
          </div>
        </div>
      </div>
      <div class="producta">
        <router-link to="/Chebap"  style="text-decoration: none; color: black;">
          <div class="ab">
          <img
            src="https://product.hstatic.net/200000418743/product/ctf_che_bap_052b6de09db14b82a417b5ce5468b7f2_master.png"
            alt=""
          />
          <img
            class="hover-img"
            src="https://product.hstatic.net/200000418743/product/dsc06929-edit-edit_d6e24cac20a246b68412303fda91a46e_master.jpg"
            alt=""
          />
          <p class="a" style="margin-top: 20px; font-size: 20px">
            Chè bắp Hội An ăn liền
          </p>
        </div>
        </router-link>
       
        <div class="price">
          <p style="font-weight: bold; font-size: 20px">35.000</p>
          <div class="addcart">
            <button style="font-weight: 600">THÊM VÀO GIỎ</button>
            <i class="ri-shopping-bag-fill"></i>
          </div>
        </div>
      </div>
      <div class="producta">
        <router-link to="/Chedaudo"  style="text-decoration: none; color: black;">
          <div class="ab">
          <img
            src="https://product.hstatic.net/200000418743/product/ctf_che_dau_do_ec329c9bee544069bb5fd02939892dd9_master.png"
            alt=""
          />
          <img
            class="hover-img"
            src="https://product.hstatic.net/200000418743/product/dsc06985-edi_f3bcbd3594634201a012be2ba02c513d_master.jpg"
            alt=""
          />
          <p class="a" style="margin-top: 20px; font-size: 20px">
            Chè đậu đỏ ăn liền
          </p>
        </div>
        </router-link>
       
        <div class="price">
          <p style="font-weight: bold; font-size: 20px">35.000</p>
          <div class="addcart">
            <button style="font-weight: 600">THÊM VÀO GIỎ</button>
            <i class="ri-shopping-bag-fill"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
 
</script>

<style>
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
.product {
  width: 100%;
  height: auto;
  display: flex;
  margin: 70px 0px;
  gap: 15px;
  justify-content: center; /* chỉnh theo chiều ngang */
}
.producta {
  width: 18%;
  height: auto;
  padding: 8px;
  position: relative;
}
.producta .ab {
  cursor: pointer;
}
.producta:hover {
  box-shadow: 4px 8px 10px 4px rgba(0, 0, 0, 0.1);
}
.producta img {
  width: 100%;
  display: block;
  transition: opacity 0.3s ease-in-out;
}

.hover-img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.producta:hover .hover-img {
  opacity: 1;
}

.producta:hover .default-img {
  opacity: 0;
}
.price {
  align-items: center;
  margin-top: 20px;
  display: flex;
}
.price .addcart {
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}
.addcart button {
  font-size: 12px;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.addcart button:hover {
  border: 1px solid #ffca00;
  border-radius: 30px;
}
.addcart i {
  padding: 8px;
  margin-left: 5px;
  border: 1px solid #ffca00;
  border-radius: 50%;
  background-color: #ffca00;
  color: white;
}
.a {
  height: 50px;
}
</style>
