<template>
  <recipesList :recipes="recipes" :loader="loader"></recipesList>
</template>

<script>
import recipesList from "./recipesList";

export default {
  name: "myRecipes",
  components: {
    recipesList,
  },
  data() {
    return {
      loader: true,
    };
  },
  computed: {
    recipes() {
      return this.$store.state.recipes.filter(
        (recipe) => recipe.created_by.email === this.$store.state.login.email
      );
    },
  },
  mounted() {
    this.$store.dispatch("refreshRecipes");
  },
  beforeUpdate() {
    this.loader = false;
  },
};
</script>

<style>
.center {
  align-text: center;
}
</style>