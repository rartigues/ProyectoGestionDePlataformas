<!-- eslint-disable no-unused-vars -->
<script setup>
import {useCart} from '../stores/cart.js'
const cart = useCart()
</script>

<template>
  <nav class="navbar navbar-light navbar-expand shadow-sm navigation-clean">
    <div class="container"><a class="navbar-brand">
        <router-link to="/">Pastelitos Inc.</router-link>
      </a>
      <div id="navcol-1" class="collapse navbar-collapse"></div>
      <!-- <a class="btn btn-link border rounded-circle border-white ms-auto" role="button" href="#"
        style="margin-right: 9px;border-style: none;color: var(--bs-success);background: #00000005;">
        <i class="fas fa-shopping-cart" style="color: var(--bs-green);"></i>
      </a> -->
      <router-link to="/cart/" class="d-block text-decoration-none" id="dropdownUser2" aria-expanded="false" style="margin-top:4px; margin-right: 9px;">
        <i class="fas fa-shopping-cart" style="color: var(--bs-green);"></i>
      <span class="badge bg-primary rounded-pill">{{count}}</span>
      </router-link>
      <a class="btn btn-primary ms-auto" role="button" href="#" style="border-style: none;margin-right: 6px;">Regístrate!</a>
      <a class="btn btn-primary ms-auto" role="button" href="#" style="background: var(--bs-navbar-disabled-color);margin-right: -9px;border-style: none;">Login</a>
    </div>
  </nav>
</template>


<!-- for cart -->
<!-- <div class="shopping-cart">
  <router-link to="/cart/" class="d-block text-decoration-none" id="dropdownUser2" aria-expanded="false" style="margin-top:4px">
    <img src="/images-cloud/basket_icon.svg" alt="cart" width="28" class="rounded-circle">
    <span class="badge bg-primary rounded-pill">{{count}}</span>
  </router-link>
</div> -->


<script>

import { mapState} from 'pinia'

export default {
  
    
    name: "TopNavbar",
    components: {},
    props: {},
    data() {
        return {};
    },
    computed: {
      ...mapState(useCart, {
        count: 'count'
      })
    },
    methods: {},
    created() {},

};
</script>


