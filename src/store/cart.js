import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    lastAddedProduct: null, // Lưu sản phẩm vừa thêm để hiển thị trong modal
    showModal: false, // Trạng thái hiển thị modal
  }),
  actions: {
    addToCart(product) {
      const item = this.cart.find((p) => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.lastAddedProduct = product;
      this.showModal = true; // Mở modal khi thêm sản phẩm
    },
    closeModal() {
      this.showModal = false;
    },
  },
});
