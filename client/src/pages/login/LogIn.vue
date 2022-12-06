<script setup>
import TopNavbar from "../../components/TopNavbar.vue";
import BottonFooter from "../../components/BottonFooter.vue";
import { useUser } from "../../stores/user";
</script>

<template src="./LogIn.html"></template>

<style></style>

<script>
export default {
  components: {
    TopNavbar,
    BottonFooter,
  },

  computed: {},

  mounted() {},

  methods: {
    async attemptLogin() {
      // console.debug(`attemptLogin(): correo: ${this.correo}, password: ${this.password}`);
      if (!this.correo || !this.password) {
        this.$toast.error("⚠️ Complete todos los campos para continuar ⚠️");
        return false;
      }
      const user = await useUser().login(this.correo, this.password);
      // console.debug(`User: ${JSON.stringify(user)}`);
      if (user === true) {
        this.$toast.success("👍 Login exitoso 👍");
        this.$router.push("/");
        return true;
      }
      this.$toast.info("⚠️ Usuario o contraseña incorrectos ⚠️");
      return false;

    }
  },

  data() {
    return {
      correo: "",
      password: "",
    };
  },
};
</script>
