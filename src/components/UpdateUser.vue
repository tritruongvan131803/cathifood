<template>
  <div class="div">
    <div class="auth-container">
      <div class="auth-option active">Cập nhật thông tin</div>
    </div>
    <div class="form-container">
      <div class="form-group">
        <input type="email" placeholder="Name" v-model="form.name" />
        <p class="msg-erorrs" v-if="errors.name">{{ errors.name }}</p>
      </div>
      <div class="form-group">
        <input type="email" placeholder="Email" v-model="form.email" />
        <p class="msg-erorrs" v-if="errors.email">{{ errors.email }}</p>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Mật khẩu" v-model="form.matkhau" />
        <p class="msg-erorrs" v-if="errors.matkhau">{{ errors.matkhau }}</p>
      </div>
    </div>
    <div class="form-actions">
      <button class="register-btn" @click="updateUser()">Cập nhật</button>
      <button class="register-btn">GO TO LIST POST</button>
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
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "./Footer.vue";
import Swal from "sweetalert2";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        matkhau: "",
      },
      errors: {},
    };
  },
  methods: {
    async updateUser() {
      if (this.validateUser()) {
        let item = {
          name: this.form.name,
          email: this.form.email,
          matkhau: this.form.matkhau,
        };
        let result = await axios.put(
          "http://localhost:3000/users/" + this.$route.params.id,
          item
        );
        if (result.status == 200) {
          localStorage.setItem("userLogin", JSON.stringify(result.data));
          Swal.fire({
            title: "success!",
            text: "Bạn đã cập nhật thành công!",
            icon: "success",
            timer: 2000,
          });
          setTimeout(() => {
            this.$router.push(
              {
                name: "Home",
              },
              2000
            );
          });
        }
      }
    },
    validateUser() {
      const errors = {};

      if (!this.form.name) {
        errors.name = "Bạn chưa nhập Họ và Tên";
      }
      if (!this.form.email) {
        errors.mail = "Bạn chưa nhập email";
      }
      if (!this.form.matkhau) {
        errors.matkhau = "Bạn chưa nhập mật khẩu";
      } else if (!this.validEmail(this.form.email)) {
        errors.email = "Bạn nhập email chưa đúng";
      }
      this.errors = errors;

      return Object.keys(errors).length === 0;
    },
    validEmail(email) {
      const re =
        /^([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
      return re.test(email);
    },
  },
  mounted() {
    /* cập nhật thông tin */
    let userLogin = localStorage.getItem("userLogin");
    this.form.name = JSON.parse(userLogin)["name"];
    this.form.email = JSON.parse(userLogin)["email"];
    this.form.matkhau = JSON.parse(userLogin)["matkhau"];
  },
};
</script>
