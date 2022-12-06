<!-- eslint-disable no-unused-vars -->
<script setup>
import {useCart} from '../stores/cart.js'
import {useUser} from '../stores/user.js'



const user = useUser()
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
      <router-link to="/cart/" class="d-block text-decoration-none" id="dropdownUser2" aria-expanded="false" style="margin-top:2px; margin-right: 9px;">
        <i class="fas fa-shopping-cart" style="color: var(--bs-green);"></i>
      <span class="badge bg-primary rounded-pill">{{count}}</span>
      </router-link>
      <!-- check if user is logged, show name and logout button -->
      <div v-if="isLoggedIn">
        <a class="btn btn-link border rounded-circle border-white ms-auto" role="button" href="#"
          style="margin-right: 9px;border-style: none;color: var(--bs-success);background: #00000005;">
          <i class="fas fa-user" style="color: var(--bs-green);">{{user.getUser.nombre}} {{user.getUser.apellido}}</i>
        </a>
        <a class="btn btn-link border rounded-circle border-white ms-auto" role="button" href="#" @click="logout"
          style="margin-right: 9px;border-style: none;color: var(--bs-success);background: #00000005;">
          <i class="fas fa-sign-out-alt" style="color: var(--bs-green);"></i>
        </a>        
      </div>
      <div v-else>
        <router-link to="/register/" class="btn btn-primary ms-auto" role="button" href="#" style="background: var(--bs-navbar-disabled-color);margin-right: 6px;border-style: none;">Regístrate!</router-link>
        <router-link to="/login/" class="btn btn-primary ms-auto" role="button" href="#" style="border-style: none;margin-right: -9px;">Login</router-link>
      </div>
      
    </div>
  </nav>
</template>


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
      }),
      ...mapState(useUser, {
        user: 'getUser',
        isLoggedIn: 'isLoggedIn'
      })
    },
    methods: {
      logout() {
        useUser().logout()
        this.$toast.info('Sesión cerrada')
        this.$router.push('/')
      }
    },
    created() {},

};
</script>


