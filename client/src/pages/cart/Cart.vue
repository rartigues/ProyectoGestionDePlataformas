<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import BottonFooter from '../../components/BottonFooter.vue';
import {useCart} from '../../stores/cart.js'
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
    //console.log('mounted', this.contents)
  },
  computed: {
    ...mapState(useCart, {
      contents: 'getContents',
      count: 'count',
      cartTotal: 'total'
    }),
    total() {
      // const temp= Math.max(this.cartTotal - this.promo.value, 0);
      // console.log(this.cartTotal, this.promo.value, temp)
      return Math.max(this.cartTotal - this.promo.value, 0);
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
      }
    };
  },
};
</script>
