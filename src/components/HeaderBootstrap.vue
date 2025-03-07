<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid">
        <RouterLink to="/">
          <img style="margin-left: 10px;" src="https://theme.hstatic.net/200000418743/1001254066/14/logo.png?v=356" width="200px"  alt=""></RouterLink>
      
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
              <RouterLink to="/Sanpham"  class="nav-link active fs-5 " aria-current="page" 
                >Sản phẩm</RouterLink
              >
            </li>
            <li class="nav-item px-2">
              <RouterLink to="/Gioithieu" class="nav-link active fs-5" >Giới thiệu</RouterLink>
            </li>
            <li class="nav-item px-2">
              <RouterLink to="/Tintuc" class="nav-link active fs-5" aria-current="page" 
                >Tin tức</RouterLink
              >
            </li>
            <li class="nav-item px-2">
              <RouterLink to="/Lienhe" class="nav-link active fs-5">Liên hệ</RouterLink>
            </li>
          </ul>
          <div class="d-flex gap-4 ">
            <a href="#" class="text-dark fs-3"><i class="bx bx-search"></i></a>
            <!-- Icon User -->
            <RouterLink to="/Register"  class="text-dark fs-3"><i class="bx bx-user"></i></RouterLink>
            <!-- Icon Notification -->
            <a href="#" class="text-dark fs-3"><i class="bx bx-cart"></i></a>
            <!-- Icon Shopping Cart -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
