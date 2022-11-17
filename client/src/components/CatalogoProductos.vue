<script setup>
import {useCatalog} from '../stores/catalog.js';
import {useCart} from '../stores/cart.js';
</script>

<template>
  <div class="container">
    <h2 class="text-center" style="margin-top: 0px;padding-top: 9px;">🧁Nuestro catalogo de pastelitos<strong>🧁</strong><br /><br /></h2>
    <div class="row product-list">
      <div v-for="producto in productos" :key="producto.id" class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img :src="producto.foto" class="bd-placeholder-img card-img-top" width="100%" height="225" />
          <div class="card-body">
            <p class="card-text">{{producto.nombre}}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="addToCart(producto)">Agregar al carrito</button>
              </div>
              <p class="text-muted">${{producto.precio}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script>
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(useCatalog, {productos: 'results'})
  },

  methods: {
    ...mapActions(useCatalog, ['fetchProductos']),

    ...mapActions(useCart, ['addToCart'])
  },

  created() {
    this.fetchProductos();

  }
};
</script>