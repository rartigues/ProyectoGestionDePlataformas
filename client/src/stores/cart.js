import { defineStore } from 'pinia'

export const useCart = defineStore('cart-store', {
  state: () => {
    return {
      cart: []
    }
  },

  getters: {
    getContents(state) {
      const {cart} = state;

      return cart.reduce((contents, item) => {
        const index = contents.findIndex(added => added.id === item.id);
        if (index > -1 ) {
          ++contents[index].quantity;

          return contents;
        }

        item.quantity = 1;
        contents.push(item);

        return contents;
      }, []);
    },

    count(state) {
      return state.cart.length;
    },

    total(state) {
      const {cart} = state;

      return cart.reduce((total, item) => {
        total = total + item.precio;

        return total;
      }, 0);
    }
  },

  actions: {
    addToCart(producto) {
      this.cart = this.cart.slice(0);
      this.cart.push(producto);
    }
  }
})