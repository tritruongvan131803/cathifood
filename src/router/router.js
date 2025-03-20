import { createWebHistory, createRouter } from "vue-router";
import Sanpham from "../components/Sanpham.vue";
import Gioithieu from "../components/Gioithieu.vue";
import Tintuc from "../components/Tintuc.vue";
import Lienhe from "../components/Lienhe.vue";
import Dangki from "../components/Dangki.vue";
import Dangnhap from "../components/Dangnhap.vue";
import Quenmatkhau from "../components/Quenmatkhau.vue";
import UpdateUser from "../components/UpdateUser.vue";
import Combo from "../product/Combo.vue";
import Chedaudo from "../product/Chedaudo.vue";
import Chebap from "../product/Chebap.vue";
import Chemeden from "../product/Chemeden.vue";
import Chethapcam from "../product/Chethapcam.vue";
import Giohang from "../components/Giohang.vue";
const routes = [
 
  {
    path: "/Sanpham",
    name: "Sanpham",
    component: Sanpham,
  },
  {
    path: "/Giohang",
    name: "Giohang",
    component: Giohang,
  },
  {
    path: "/Gioithieu",
    name: "Gioithieu",
    component: Gioithieu,
  },
  {
    path: "/Tintuc",
    name: "Tintuc",
    component: Tintuc,
  },
  {
    path: "/Lienhe",
    name: "Lienhe",
    component: Lienhe,
  },
  {
    path: "/Register",
    name: "Dangki",
    component: Dangki,
  },
  {
    path: "/Login",
    name: "Dangnhap",
    component: Dangnhap,
  },
  {
    path: "/forgotpassword",
    name: "Quenmatkhau",
    component: Quenmatkhau,
  },
  {
    path: "/Combo4loaiche",
    name: "Combo",
    component: Combo,
  },
  {
    path: "/Chethapcam",
    name: "Chethapcam",
    component: Chethapcam,
  },
  {
    path: "/Chedaudo",
    name: "Chedaudo",
    component: Chedaudo,
  },
  {
    path: "/Chebap",
    name: "Chebap",
    component: Chebap,
  },
  {
    path: "/Chemeden",
    name: "Chemeden",
    component: Chemeden,
  },
 
  {
    path: "/UpdateUser/:id",
    name: "UpdateUser",
    component: UpdateUser,
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Giữ nguyên vị trí cuộn nếu quay lại trang trước đó
    }
    return { top: 0, left: 0, behavior: 'smooth' }; // Cuộn lên đầu trang với hiệu ứng mượt
  }
});

export default router;
