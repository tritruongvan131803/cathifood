<script>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import HeaderBootstrap from "./components/HeaderBootstrap.vue";
import BannerBootstrap from "./components/BannerBootstrap.vue";

export default {
  components: {
    HeaderBootstrap,
    Footer,
    BannerBootstrap
  },
};
</script>

<template>
  <div>
    <HeaderBootstrap /> <!-- Header xuất hiện trên mọi trang -->

    <!-- Kiểm tra nếu đang ở trang chủ thì hiển thị Banner -->
    <BannerBootstrap v-if="$route.path === '/'" /> 

    <router-view /> <!-- Nội dung từng trang -->
    <Footer /> <!-- Footer xuất hiện trên mọi trang -->
  </div>
</template>
