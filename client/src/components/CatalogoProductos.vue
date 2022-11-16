<script setup>
import {useCatalog} from '../stores/catalog.js';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12" style="margin-top: 5px;">
        <h2>🧁 Nuestra seleccion de pastelitos 🧁</h2>
      </div>
    </div>
    <div class="row" style="margin-top: 10px">
      <div class="col-12">
        <div class="card-deck">
          <div class="card" v-for="producto in productos" :key="producto.id">
            <img :src="producto.foto" class="card-img-top" :alt="producto.name">
            <div class="card-body">
              <h5 class="card-title
              ">{{producto.marca}}</h5>
              <p class="card-text">{{producto.nombre}}</p>
            </div>
            <div class="card-footer">
              <small class="" style="justify-content: left;">${{producto.precio}}</small>
              <!-- add small button with counter to buy -->
              <button class="btn btn-success btn-sm" @click="addToCart(producto)" style="float: right; font-size: smaller;" >Agregar al carrito</button>
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

    addToCart(producto) {
      // we'll populate this later
      //consolelog chosen product
      console.log(`Agregando ${producto.nombre} al carrito`)
      console.debug(producto)
    }
  },

  created() {
    // when the template is created, we call this action
    this.fetchProductos();
  }
};
</script>