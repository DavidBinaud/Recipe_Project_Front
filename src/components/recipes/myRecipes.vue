<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="loader">
          <td colspan="1" class="center">
            <img
              src="../../assets/spinner.gif"
              alt="This is a spinner"
              width="50"
            />
          </td>
        </tr>
        <Recipe
          v-for="recipe in this.$store.state.recipes"
          :key="recipe.id"
          :name="recipe.name"
          :id="recipe.id"
          ><td>ADS</td></Recipe
        >
      </tbody>
    </table>
    <pagination />
  </div>
</template>

<script>
import Recipe from "@/components/recipes/recipe";
import pagination from "../paginate/pagination";

export default {
  name: "myRecipes",
  components: {
    Recipe,
    pagination,
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