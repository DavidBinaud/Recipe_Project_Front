<template>
  <div v-if="recipes.length > 0">
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
          v-for="recipe in recipesPagination"
          :key="recipe.id"
          :name="recipe.name"
          :id="recipe.id"
        >
        </Recipe>
      </tbody>
    </table>
    <pagination @pagination-change="paginationChange" :size="recipes.length" />
  </div>
  <div v-else>Aucune recettes</div>
</template>

<script>
import Recipe from "@/components/recipes/recipe";
import pagination from "../paginate/pagination";

export default {
  name: "recipesList",
  components: {
    Recipe,
    pagination,
  },
  data() {
    return {
      page: 1,
      itemByPage: 10,
    };
  },
  computed: {
    recipesPagination() {
      return this.recipes.slice(
        (this.page - 1) * this.itemByPage,
        this.page * this.itemByPage
      );
    },
  },
  props: {
    recipes: [],
    loader: Boolean,
  },
  methods: {
    paginationChange(page, items) {
      this.page = page;
      this.itemByPage = items;
    },
  },
};
</script>

<style>
.center {
  align-text: center;
}
</style>