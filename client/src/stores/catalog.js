import { defineStore } from 'pinia'

export const useCatalog = defineStore('catalog-store', {
  state: () => {
    return {
      productos: [],
      productosGrouped: [],
      fetching: false
    }
  },

  getters: {
    results(state) {
      
      return state.productos
    },

    isFetching(state) {
      return state.fetching;
    }
  },

  actions: {
    async fetchProductos() {
      this.fetching = true;
      
      try {
        const response = await fetch('http://127.0.0.1:3000/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        this.productos = data.productos;

        console.debug(this.productos);
      } catch (err) {
        this.productos = [];
        console.error('Error loading productos:', err);
        return err;
      }

      this.fetching = false;
    }
  }
})