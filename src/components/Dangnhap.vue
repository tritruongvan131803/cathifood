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
        <input type="email" placeholder="Email" v-model="form.email" />
        <p class="msg-error" v-if="error.email">{{ error.email }}</p>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Mật khẩu" v-model="form.matkhau" />
        <p class="msg-error" v-if="error.matkhau">{{ error.matkhau }}</p>
      </div>
      <p class="msg-errors">{{ msgErrors }}</p>
      <div class="form-actions">
        <button class="register-btn" @click="btndangnhap()">ĐĂNG NHẬP</button>
        <div class="quenmk">
          <div class="login-link">
            Bạn quên mật khẩu?
            <RouterLink to="/forgotpassword">Quên mật khẩu? </RouterLink>
          </div>
          <div class="login-link">
            Bạn chưa có tài khoản?
            <RouterLink to="/Register">Đăng ký </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import Footer from "./Footer.vue";
export default {
  data() {
    return {
      form: {
        email: "",
        matkhau: "",
      },
      msgErrors: "",
      error: {},
    };
  },
  methods: {
    async btndangnhap() {
      if (this.validateUser()) {
        let data = [];
        let result = await axios.get("http://localhost:3000/users");
        if (result.status == 200 && result.data.length > 0) {
          data = result.data.filter(
            (item) =>
              item.email == this.form.email && item.matkhau == this.form.matkhau
          );

          if (data.length > 0) {
            localStorage.setItem("userLogin", JSON.stringify(data[0]));
            this.$router.push({
              name: "Home",
            });
          } else {
            this.msgErrors = "Email and password is invalid";
          }
        }
      }
    },
    validateUser() {
      const error = {};
      if (!this.form.email) {
        error.email = "Bạn chưa nhập email";
      }
      if (!this.form.matkhau) {
        error.matkhau = "Bạn chưa nhập mật khẩu";
      } else if (!this.validEmail(this.form.email)) {
        error.email = "Bạn nhập email chưa đúng";
      }
      this.error = error;

      return Object.keys(error).length === 0;
    },
    validEmail(email) {
      const re =
        /^([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
      return re.test(email);
    },
  },
};
</script>
