<template>
  <div class="tintuc">
    <hr />
    <div class="breadcrumb">
      <RouterLink to="/Home" style="color: black; margin-left: 60px"
        >Trang chủ</RouterLink
      >
      &nbsp; ❯ &nbsp; Liên hệ
    </div>
    <hr />

    <div class="column">
      <div class="thongtin">
        <h1>Thông tin liên hệ</h1>
        <div class="dc" style="margin-top: 15px">
          <div class="information">
            <i class="ri-map-pin-line"></i>
            <div class="diachi">
              <h3>Địa chỉ</h3>
              <p style="color: #7f8da7">
                586 Cửa Đại, Sơn Phong, Hội An, Quảng Nam
              </p>
            </div>
          </div>
          <div class="information" style="margin-left: 15px">
            <i class="ri-mail-line"></i>
            <div class="diachi">
              <h3>Thời gian làm việc</h3>
              <p style="color: #7f8da7">Tất cả các ngày kể cả Lễ, Tết</p>
            </div>
          </div>
        </div>
        <div class="dc" style="margin-top: 15px">
          <div class="information">
            <i class="ri-phone-fill"></i>
            <div class="diachi">
              <h3>Điện thoại</h3>
              <p style="color: #7f8da7">0777 246 268</p>
            </div>
          </div>
          <div class="information" style="margin-left: 15px">
            <i class="ri-mail-line"></i>
            <div class="diachi">
              <h3>Email</h3>
              <p style="color: #7f8da7">cathifood.vn@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="question">
          <h1>Gửi thắc mắc cho chúng tôi</h1>
          <p>
            Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
            tôi sẽ liên lạc lại với bạn sớm nhất có thể.
          </p>
          <div class="formquestion">
            <input type="text" placeholder="Tên của bạn" v-model="form.name">
            <div class="Email">
              <input type="text" placeholder="Email của bạn" v-model="form.email">
              <input
                style="margin-right: -10px"
                type="text"
                placeholder="Số điện thoại của bạn"
                v-model="form.sdt">
            </div>
            <input
              type="text"
              placeholder="Nội dung"
              style="padding-bottom: 120px"
              v-model="form.noidung">
          </div>
          <button @click="btnnoidung()">GỬI CHO CHÚNG TÔI</button>
        </div>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.567797991128!2d108.33294957591961!3d15.879297244493019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420dd67e6c51bd%3A0x69adfff658cb9651!2zNTg2IEPhu61hIMSQ4bqhaSwgQ-G6qW0gQ2jDonUsIEjhu5lpIEFuLCBRdeG6o25nIE5hbSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1739879668815!5m2!1svi!2s"
          width="500"
          height="550"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email:"",
        sdt:"",
        noidung:""
      },
    };
  },
  methods:{
    btnnoidung(){
      console.log(this.form);
      
    }
  }
};
</script>
<style>
.tintuc .column {
  display: flex;
  margin-top: 30px;
  width: 100%;
}
.tintuc .column .thongtin {
  width: 60%;
  margin-left: 50px;
}
.thongtin h1 {
  color: #2e3191;
  margin-bottom: 10px;
}
.dc {
  display: flex;
}
.information {
  width: 60%;
  display: flex;
}
.information i {
  margin-right: 10px;
  align-content: center; /* canh theo chiều dọc */
  font-size: 20px;
  border-radius: 50%;
  padding: 6px;
  border: 1px solid #7f8da7;
}
.question {
  margin-top: 40px;
  width: 75%;
}
.question button {
  padding: 9px 25px;
  border-radius: 30px;
  background-color: #2e3191;
  color: white;
  border: none;
  margin: 20px 0;
  cursor: pointer;
  transition: all 0.3s linear;
  /* transition: transform 3.5s ease-in-out; */
}
.question button:hover {
  background-color: rgb(184, 184, 15);
  /* transform: rotateY(360deg); */
}
.question p {
  font-size: 19px;
  margin-bottom: 15px;
}
.Email {
  display: flex;
}
.formquestion input {
  margin: 10px;
  border: 0.5px solid #9a9ea5;
  background-color: white;
}
</style>
