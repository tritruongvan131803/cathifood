<template>
     <div class="header">
    <div class="header-left">
      <RouterLink to="/Home">
        <img
          itemprop="logo"
          src="//theme.hstatic.net/200000418743/1001254066/14/logo.png?v=356"
          alt="CaThiFood"
          class="img-responsive logoimg ls-is-cached lazyloaded"
      /></RouterLink>
    </div>
    <div class="header-center">
      <ul class="mucluc">
        <li><RouterLink to="/Sanpham" class="link">Sản phẩm</RouterLink></li>
        <li>
          <RouterLink to="/Gioithieu" class="link">Giới thiệu</RouterLink>
        </li>
        <li><RouterLink to="/Tintuc" class="link">Tin tức</RouterLink></li>
        <li><RouterLink to="/Lienhe" class="link">Liên hệ</RouterLink></li>
      </ul>
    </div>
    <div class="header-right">
      <ul class="icon">
        <li><i class="bx bx-search"></i></li>
        <div class="icon-container">
          <RouterLink to="/register"><li class=""><i class="bx bx-user"></i></li></RouterLink>
          <div class="tooltip">
            <h3>THÔNG TIN TÀI KHOẢN</h3>
            <hr />
            <br />
            <p class="user-name">{{ userName }}</p>
            <ul>
               <router-link :to="'/UpdateUser/'+ userId" style="text-decoration: none; color: black;" ><li>Cập nhật thông tin</li></router-link>
              <li>Danh sách địa chỉ</li>
              <li @click="btndangxuat()">Đăng xuất</li>
            </ul>
          </div>
        </div>
        <li><i class="bx bx-cart"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return {
      userName: "",
      userId: "",
    };
  },
  methods:{
    btndangxuat(){
      localStorage.removeItem("userLogin")
      this.$router.push({
        name:"Dangnhap"
      })
    }
  },

  created(){
    let userLogin = localStorage.getItem("userLogin");
    if (userLogin) {
        let userData = JSON.parse(userLogin);
        this.userName = userData.name;
        this.userId = userData.id;
    }
  },
};
</script>


