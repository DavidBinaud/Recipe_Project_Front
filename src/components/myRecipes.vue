<template>
  <table>
    <thead>
      <tr>
        <th>Nom</th>
      </tr>
    </thead>

    <tbody>
      <tr v-if="loader">
        <td colspan="1" class="center">
          <img src="../assets/spinner.gif" alt="This is a spinner" width="50" />
        </td>
      </tr>
      <Recipe
        v-for="recipe in this.$store.state.recipes"
        :key="recipe._id"
        :name="recipe.name"
        :id="recipe._id"
      />
    </tbody>
  </table>
</template>

<script>
import Recipe from "@/components/recipe";

export default {
  name: "myRecipes",
  components: {
    Recipe,
  },
  data() {
    return {
      loader: true,
    };
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