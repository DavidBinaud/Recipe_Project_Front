<template>
  <div class="row">
    <div class="col s12">{{ this.$store.state.currentRecipe.name }}</div>
    <div class="col s6">{{ this.$store.state.currentRecipe.steps }}</div>
    <div class="col s6">
      Ingrédients
      <div v-for="item in itemsArray" :key="item">
        <div>{{ item }}</div>
      </div>
    </div>
    <div class="col s6">
      <strong>Auteur : </strong>
      {{ this.$store.state.currentRecipe.created_by.username }}
    </div>
    <router-link
      v-if="
        this.$store.state.currentRecipe.created_by.email ==
        this.$store.state.login.email
      "
      :to="url"
      >Modifier la recette
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RecipeShow",
  computed: {
    itemsArray() {
      if (Array.isArray(this.$store.state.currentRecipe.items)) {
        return this.$store.state.currentRecipe.items;
      }
      return [this.$store.state.currentRecipe.items];
    },
    url() {
      return "/modify_recipe/" + this.$route.params.id;
    },
  },
  mounted() {
    this.$store.dispatch("refreshCurrentRecipe", this.$route.params.id);
  },
};
</script>

<style>
</style>