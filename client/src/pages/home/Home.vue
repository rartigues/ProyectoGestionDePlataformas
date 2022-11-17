<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import CatalogoProductos from '../../components/CatalogoProductos.vue';
import BottonFooter from '../../components/BottonFooter.vue';
</script>

<template>
  <TopNavbar />
  <body style="background: rgb(252,254,255);">
    <CatalogoProductos />
  </body>
  <BottonFooter />
</template>
<style></style>

<script>
export default {
  components: {
    TopNavbar,
    CatalogoProductos
  },

  computed: {},
  
  mounted() {
  },
  
  data() {
    return {
    };
  },
};
</script>