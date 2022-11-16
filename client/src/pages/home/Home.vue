<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import CatalogoProductos from '../../components/CatalogoProductos.vue';
</script>

<template>
  <TopNavbar />
  <CatalogoProductos />
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