<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      isHeaderVisible: true, // Mặc định header hiển thị
      lastScrollY: 0, // Vị trí scroll cuối cùng
      threshold: 50, // Ngưỡng để phát hiện thay đổi cuộn
      
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let currentScrollY = window.scrollY;

      if (currentScrollY > this.lastScrollY) {
        // Nếu cuộn xuống, ẩn Header
        this.isHeaderVisible = false;
      } else {
        // Nếu cuộn lên, hiển thị Header
        this.isHeaderVisible = true;
      }

      // Cập nhật vị trí scroll cuối cùng
      this.lastScrollY = currentScrollY;
    },
  },
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white fixed-top" :class="{ hidden: !isHeaderVisible }">
      <div class="container-fluid">
        <RouterLink to="/">
          <img
            style="margin-left: 10px"
            src="https://theme.hstatic.net/200000418743/1001254066/14/logo.png?v=356"
            width="200px"
            alt="Logo"
          />
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item px-2">
              <RouterLink to="/Sanpham" class="nav-link active fs-5">Sản phẩm</RouterLink>
            </li>
            <li class="nav-item px-2">
              <RouterLink to="/Gioithieu" class="nav-link active fs-5">Giới thiệu</RouterLink>
            </li>
            <li class="nav-item px-2">
              <RouterLink to="/Tintuc" class="nav-link active fs-5">Tin tức</RouterLink>
            </li>
            <li class="nav-item px-2">
              <RouterLink to="/Lienhe" class="nav-link active fs-5">Liên hệ</RouterLink>
            </li>
          </ul>
          <div class="d-flex gap-4">
            <a href="#" class="text-dark fs-3"><i class="bx bx-search"></i></a>
            <RouterLink to="/Register" class="text-dark fs-3"><i class="bx bx-user"></i></RouterLink>
            <a href="#" class="text-dark fs-3"><i class="bx bx-cart"></i></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
body{
  padding-top: 80px; /* Điều chỉnh giá trị này phù hợp với chiều cao navbar */
}
.navbar {
  transition: transform 0.3s ease-in-out;
}

.navbar.hidden {
  transform: translateY(-100%);
}

</style>