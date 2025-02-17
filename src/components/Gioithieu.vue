<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <div class="bannergioithieu">
      <div class="gioithieu">
        <h1>GIỚI THIỆU</h1>
        <div class="breadcrumb">
          <RouterLink to="/Home">Trang chủ</RouterLink> &nbsp; ❯ &nbsp; Giới
          thiệu
        </div>
      </div>
    </div>
    <div class="gioithieuhoian">
      <h1>Mang Hội An ra thế giới</h1>
      <p>
        Tiên phong tiếp nối di sản của cha ông từ hàng trăm năm, CaThiFood cung
        cấp các sản phẩm đặc sản địa phương được sản xuất bằng dây chuyền công
        nghệ hiện đại. <br />
        Hành trình mang ẩm thực quê hương chinh phục thế giới chưa bao giờ là dễ
        dàng. <br />
        Là những người trẻ đam mê gìn giữ văn hoá quê hương, sự tự tế, kiên trì
        và sáng tạo không ngừng sẽ là hành trang không thể thiếu của đội ngũ
        CaThiFood.
      </p>
    </div>
    <div class="imggioithieu">
      <div class="hinh3">
        <img src="/src/img/1.jpg" alt="" />
        <h1>Sứ mệnh</h1>
        <p>Mang Hội An ra thế giới</p>
      </div>
      <div class="hinh3">
        <img src="/src/img/1.jpg" alt="" />
        <h1>Think Global – Act Local</h1>
        <p>
          Chúng tôi kết hợp tinh hoa toàn cầu với di sản văn hoá truyền
          thống,<br />
          tôn vinh hương vị truyền thống và giá trị bản địa.
        </p>
      </div>
      <div class="hinh3">
        <img src="/src/img/1.jpg" alt="" />
        <h1>Tử tế - Tiên phong - Tạo giá trị</h1>
        <p>
          Tử tế: công bằng với nhân viên, uy tín với đối tác, trung thực với
          khách hàng, <br />và trách nhiệm với cộng đồng. Tiên phong: không
          ngừng đổi mới, sáng tạo,<br />
          thích ứng linh hoạt. Tạo giá trị: nâng tầm ẩm thực truyền thống,<br />
          mang lại giá trị bền vững cho xã hội.
        </p>
      </div>
    </div>
    <div class="nguyenlieu">
      <h1 style="text-align: center">CATHIFOOD</h1>
      <H2 style="text-align: center">CAM KẾT VỚI KHÁCH HÀNG</H2>
    </div>
    <div class="column">
        <div class="columnleft">
        </div>
        <div class="columncenter">
            <img src="https://theme.hstatic.net/200000418743/1001254066/14/about02_ecosystem_img.jpg?v=356" alt="">
        </div>
        <div class="columnright">
        </div>
    </div>
  </div>
</template>

<style>
.column{
    display: flex;
    width: 100%;
    height: 600px;
}
.columnleft{
    width: 35%;
    background-color: #0c411e;
}
.columncenter{
    width: 30%;
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center; /* Căn giữa theo chiều dọc */
}
.columncenter img{
width: 90%;
height: 60%;

}
.columnright{
    width: 40%;
    background-color: #81671d;
}
.nguyenlieu {
  margin-top: 100px;
}
.nguyenlieu h1 {
  color: #252a2b;
  font-size: 25px;
  margin-bottom: 25px;
}
.nguyenlieu h2 {
  color: #2e3191;
  font-size: 35px;
  margin-bottom: 30px;
}
.imggioithieu {
  display: flex;
  justify-content: center;
  gap: 30px; /* Khoảng cách giữa hai hình */
}
.hinh3 p {
  margin: 5px 0;
  font-size: 18px;
}
.hinh3 img {
  width: 90%;
}
.hinh3 {
  text-align: center;
}
.hinh3 h1 {
  font-size: 25px;
  margin-top: 10px;
  color: #2e3191;
}
.bannergioithieu {
  background: url("https://theme.hstatic.net/200000418743/1001254066/14/slide_1_img.jpg?v=356")
    center/cover no-repeat;
  color: white;
  padding: 85px 20px;
  font-size: 18px;
  font-weight: bold;
}
.gioithieu {
  display: inline-block;
  width: 300px;
  height: 100px;
  padding: 13px 30px;
  background-size: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.breadcrumb {
  font-size: 16px;
  text-align: center;
  padding: 5px;
  display: inline-block;
}
.breadcrumb a {
  color: #fff;
  text-decoration: none;
}
.gioithieuhoian {
  text-align: center;
  padding: 80px;
  font-size: 20px;
}
.gioithieuhoian h1 {
  color: #2e3191;
  margin-bottom: 20px;
}
</style>
