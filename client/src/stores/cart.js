/* eslint-disable no-unused-labels */
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
    },
    async makeCompra(contents) {
      // console.log(`makeCompra()`);
      // console.log(`Contents: ${JSON.stringify(contents)}`);
      try {
        // for every item in cart, create a LineaCompra. Copy getContents() way of doing it.
        // map lineacompra productoId, cantidad, total
        var lineasCompra =  contents.map(item => {
          return {
            productoId: item.id,
            cantidad: item.quantity,
            total: item.precio
          }
        });

        // console.log(JSON.stringify(lineasCompra));
        const response = await fetch('http://127.0.0.1:3000/api/compras', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: 14,
            total: this.total + 1500,
            lineasCompra: lineasCompra
          })
        });
        const JSONresponse = await response.json();
        console.debug(`Compra response: ${JSON.stringify(JSONresponse)}`);
        // empty cart
        this.cart = [];
        

        console.debug(`Contenidos del carrito: ${JSON.stringify(this.cart)}`);
      } catch (err) {
        // this.productos = [];
        console.error('Error loading productos:', err);
        return
      }
    }
  }
})