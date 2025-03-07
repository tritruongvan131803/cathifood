<template>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://theme.hstatic.net/200000418743/1001254066/14/slide_1_img.jpg?v=356" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://theme.hstatic.net/200000418743/1001254066/14/slide_2_img.jpg?v=356" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://theme.hstatic.net/200000418743/1001254066/14/slide_3_img.jpg?v=356" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const carousel = new bootstrap.Carousel(document.querySelector("#carouselExample"), {
    interval: 3000, // Chuyển ảnh mỗi 5 giây
    ride: "carousel", // lặp hình vô thời hạn
  });
});
</script>


/* Giải thích cách hoạt động
✅ Sử dụng onMounted():

Khi component BannerBootstrap.vue được mount, Bootstrap Carousel API sẽ tự động chạy.
✅ Dùng bootstrap.Carousel:

Thiết lập interval: 5000 để tự động chuyển ảnh sau 5 giây.
Thuộc tính ride: "carousel" giúp nó tự động lặp vô hạn. */