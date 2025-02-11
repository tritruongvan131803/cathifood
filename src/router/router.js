import { createWebHistory, createRouter } from "vue-router";
import Header from "../components/Header.vue";
import Home from "../components/Home.vue";
import Sanpham from "../components/Sanpham.vue";
import Gioithieu from "../components/Gioithieu.vue";
import Tintuc from "../components/Tintuc.vue";
import Lienhe from "../components/Lienhe.vue";
import Dangki from "../components/Dangki.vue";
import Dangnhap from "../components/Dangnhap.vue";
import Quenmatkhau from "../components/Quenmatkhau.vue";
const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Sanpham",
    name: "Sanpham",
    component: Sanpham,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
