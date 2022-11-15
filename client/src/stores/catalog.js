import { defineStore } from 'pinia'

export const useCatalog = defineStore('catalog-store', {
  state: () => {
    return {
      productos: [],
      fetching: false
    }
  },

  getters: {
    results(state) {
      return state.productos;
    },

    isFetching(state) {
      return state.fetching;
    }
  },

  actions: {
    async fetchProductos() {
      this.fetching = true;
      const response = await fetch('localhost:3000/api/productos/');
      try {
        const result = await response.json();
        this.productos = result;
      } catch (err) {
        this.productos = [];
        console.error('Error loading productos:', err);
        return err;
      }

      this.fetching = false;
    }
  }
})