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
        <div class="dc">
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
            <i class="ri-map-pin-line"></i>
            <div class="diachi">
              <h3>Thời gian làm việc</h3>
              <p style="color: #7f8da7">
                Tất cả các ngày kể cả Lễ, Tết
              </p>
            </div>
          </div>
        </div>
        <div class="dc" style="margin-top: 15px;">
          <div class="information">
            <i class="ri-map-pin-line"></i>
            <div class="diachi">
              <h3>Điện thoại</h3>
              <p style="color: #7f8da7">
                0777 246 268
              </p>
            </div>
          </div>
          <div class="information" style="margin-left: 15px">
            <i class="ri-map-pin-line"></i>
            <div class="diachi">
              <h3>Email</h3>
              <p style="color: #7f8da7">
                cathifood.vn@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="image"></div>
    </div>
  </div>
</template>

<style>
.tintuc .column {
  display: flex;
  margin-top: 30px;
  width: 100%;
}
.tintuc .column .thongtin {
  width: 50%;
  margin-left: 50px;
}
.thongtin h1 {
  color: #2e3191;
  margin-bottom: 10px;
}
.dc{
    display: flex;
}
.information {
  width: 50%;
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
</style>
