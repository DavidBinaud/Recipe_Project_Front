<template>
  <ul :id="id" :class="classes">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/second">Second</router-link></li>
    <li>
      <router-link v-if="this.$store.state.jwt === ''" to="/login"
        >Login</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "navLinks",
  props: {
    id: String,
    classes: String,
  },
};
</script>

<style>
</style>