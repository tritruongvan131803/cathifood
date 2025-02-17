<template>
  <div>
    <div class="container">
      <RouterLink to="/Login" class="login">Đăng nhập</RouterLink>
      <div class="separator"></div>
      <div class="register">Đăng ký</div>
    </div>
    <div class="form-container">
      <div class="form-group">
        <input type="text" placeholder="Họ và Tên" v-model="form.name" />
        <p class="msg-error" v-if="error.name">{{ error.name }}</p>
      </div>
      <div class="form-group gender-group">
        <input
          type="radio"
          id="female"
          name="gender"
          value="Nữ"
          v-model="form.gioitinh"
        />
        <label for="female">Nữ</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="Nam"
          v-model="form.gioitinh"
        />
        <label for="male">Nam</label>
        <p class="msg-error" v-if="error.gioitinh">{{ error.gioitinh }}</p>
      </div>
      <div class="form-group">
        <input type="date" placeholder="mm/dd/yyyy" v-model="form.date" />
        <p class="msg-error" v-if="error.date">{{ error.date }}</p>
      </div>
      <div class="form-group">
        <input type="email" placeholder="Email" v-model="form.email" />
        <p class="msg-error" v-if="error.email">{{ error.email }}</p>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Mật khẩu" v-model="form.matkhau" />
        <p class="msg-error" v-if="error.matkhau">{{ error.matkhau }}</p>
      </div>
      <div class="form-actions">
        <button @click="btndangky()" class="register-btn">ĐĂNG KÝ</button>
        <div class="login-link">
          Bạn đã có tài khoản?
          <RouterLink to="/Login">Đăng nhập ngay</RouterLink>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Footer from "./Footer.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      form: {
        name: "",
        gioitinh: "",
        date: "",
        email: "",
        matkhau: "",
      },
      error: "",
    };
  },
  methods: {
    async btndangky() {
      if (this.validateUser()) {
        let userItem = {
          name: this.form.name,
          gioitinh: this.form.gioitinh,
          date: this.form.date,
          email: this.form.email,
          matkhau: this.form.matkhau,
        };
        let result = await axios.post("http://localhost:3000/users", userItem);
        console.log(result);
        if (result.status == 201) {
          Swal.fire({
            title: "success!",
            text: "Bạn đã đăng ký thành công!",
            icon: "success",
            timer: 2000,
          });
          setTimeout(() => {
            this.$router.push(
              {
                name: "Dangnhap",
              },
              2000
            );
          });
        }
      }
    },
    validateUser() {
      const error = {};

      if (!this.form.name) {
        error.name = "Bạn chưa nhập Họ và Tên";
      }
      if (!this.form.gioitinh) {
        error.gioitinh = "Bạn chưa nhập giới tính";
      }
      if (!this.form.date) {
        error.date = "Bạn chưa nhập ngày tháng năm";
      }
      if (!this.form.email) {
        error.email = "Bạn chưa nhập email";
      }
      if (!this.form.matkhau) {
        error.matkhau = "Bạn chưa nhập mật khẩu";
      }
      else if(!this.validEmail(this.form.email)){
        error.email = "Bạn nhập email chưa đúng";
      }
      this.error = error;

      return Object.keys(error).length === 0;
    },
    validEmail(email){
        const re = /^([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
        return re.test(email);
    }
  },
};
</script>
