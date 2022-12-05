<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import BottonFooter from '../../components/BottonFooter.vue';
import {useCart} from '../../stores/cart.js';

const store = useCart()
</script>


<template src="./cart.html"></template>


<script>
import { mapState, mapActions } from 'pinia'
export default {
  components: {
    TopNavbar,
    BottonFooter
  },
  mounted() {
    
  },
  computed: {
    ...mapState(useCart, {
      contents: 'getContents',
      count: 'count',
      cartTotal: 'total',
      shipping: 1500
    }),
    subtotal() {
      return this.cartTotal;
    },
    total() {
      if (this.subtotal > 0) {
        return this.subtotal + 1500;
      }
      return 0;
    },
  },
  methods: {
    createPedido() {
      console.log(`nombre: ${this.nombre}, direccion: ${this.direccion}, ciudad: ${this.ciudad}, provincia: ${this.provincia}, pais: ${this.pais}`);
      if (this.nombre && this.direccion && this.ciudad && this.provincia && this.pais && this.contents.length > 0) { 
        this.$toast.success('Pedido creado con exito');
        useCart().makeCompra(this.contents);
        this.$router.push('/');
        return 0;
      }
      if (this.contents.length === 0) {
        this.$toast.error('⚠️ No hay productos en el carrito ⚠️');
        return 0;
      }
      this.$toast.error("⚠️ Complete todos los campos para continuar ⚠️");
      return false;
    }
  },
  data() {
    

    return {
      currency: {
        name: 'CLP',
        symbol: '$'
      },
      promo: {
        code: 'EXAMPLECODE',
        value: 5000
      },
      nombre: '',
      direccion: '',
      ciudad: '',
      provincia: '',
      pais: 'Chile',
    };
  },
};
</script>
