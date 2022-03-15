<template>
  <ul :id="id" :class="classes">
    <li>
      <router-link v-if="this.$store.state.jwt !== ''" to="/">Home</router-link>
    </li>
    <li>
      <router-link v-if="this.$store.state.jwt !== ''" to="/myRecipes"
        >Mes Recettes</router-link
      >
    </li>
    <li>
      <router-link v-if="this.$store.state.jwt !== ''" to="/recipe_create"
        >Créer une recette</router-link
      >
    </li>
    <li>
      <router-link v-if="this.$store.state.jwt === ''" to="/login"
        >Login</router-link
      >
    </li>
    <li>
      <router-link v-if="this.$store.state.jwt === ''" to="/create_user"
        >Créer un compte</router-link
      >
    </li>
    <li>
      <router-link v-if="this.$store.state.jwt !== ''" to="/logout"
        >Deconnexion</router-link
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