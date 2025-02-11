<template>
  <div>
    <div class="auth-container">
      <div class="auth-option active">Đăng nhập</div>
      <div class="separator"></div>
      <router-link to="/Register" class="dk">
        <div class="auth-option inactive">Đăng ký</div></router-link
      >
    </div>
    <div class="form-container">
      <div class="form-group">
        <input type="email" placeholder="Vui lòng nhập Email của bạn" />
      </div>
    </div>
    <div class="form-actions">
      <button class="register-btn">GỬI EMAIL</button>
      <div class="login-link">
        Quay lại <RouterLink to="/Login">Đăng nhập </RouterLink>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Footer></Footer>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import Footer from './Footer.vue';
export default{
    components:{
        Footer
    }
}
</script>
<style>
    .form-actions{
        display: flex;
        justify-content: center;
    }
</style>
