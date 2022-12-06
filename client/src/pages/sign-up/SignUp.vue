<script setup>
import TopNavbar from "../../components/TopNavbar.vue";
import BottonFooter from "../../components/BottonFooter.vue";
import { useUser } from "../../stores/user";
</script>

<template src="./SignUp.html"></template>

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
    async attemptSignUp() {
      // console.debug(`attemptSignUp(): nombre: ${this.nombre}, correo: ${this.correo}, password: ${this.password}`);
      if (!this.correo || !this.nombre || !this.apellido || !this.telefono || !this.password || !this.password2) {
        this.$toast.error("⚠️ Complete todos los campos para continuar ⚠️");
        return false;
      }
      if (this.password !== this.password2) {
        this.$toast.error("⚠️ Las contraseñas no coinciden ⚠️");
        return false;
      }
      const createdUser = await useUser().register(this.correo, this.password, this.nombre, this.apellido, this.telefono);
      // console.debug(`User: ${JSON.stringify(createdUser)}`);
      if (createdUser === 201) {
        this.$toast.success("👍 Registro exitoso 👍");
        this.$router.push("/");
        return true;
      }
      if (createdUser === 409) {
        this.$toast.info("⚠️ El correo ya existe ⚠️");
        return false;
      }
    },
  },

  data() {
    return {
      correo: "",
      nombre: "",
      apellido: "",
      telefono: "",
      password: "",
      password2: "",
    };
  },
};
</script>
