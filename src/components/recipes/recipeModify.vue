<template>
  <div class="row">
    <form @submit="checkForm" method="post">
      <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
      <label for="name">Nom</label>
      <input v-model="name" id="name" />
      <label for="items">Ingrédients</label>
      <textarea v-model="items" id="items"> </textarea>
      <label for="steps">Etapes</label>
      <textarea v-model="steps" id="steps"> </textarea>

      <button type="submit" class="btn waves-light">Mettre à jour</button>
      <button class="btn waves-light deep-orange accent-4" @click="btnClick">
        Supprimer
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RecipeModify",
  computed: {
    name: {
      get() {
        return this.$store.state.currentRecipe.name;
      },
      set(value) {
        this.$store.commit("updateRecipeCreationName", value);
      },
    },
    items: {
      get() {
        return this.$store.state.currentRecipe.items;
      },
      set(value) {
        this.$store.commit("updateRecipeCreationItems", value);
      },
    },
    steps: {
      get() {
        return this.$store.state.currentRecipe.steps;
      },
      set(value) {
        this.$store.commit("updateRecipeCreationSteps", value);
      },
    },
    itemsArray() {
      if (Array.isArray(this.$store.state.currentRecipe.items)) {
        return this.$store.state.currentRecipe.items;
      }
      return [this.$store.state.currentRecipe.items];
    },
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.errors = [];

      if (this.$store.state.recipeCreation.name === "") {
        this.errors.push("Name cannot be empty");
      }

      if (this.$store.state.recipeCreation.items === "") {
        this.errors.push("Ingrédients cannot be empty");
      }

      if (this.$store.state.recipeCreation.steps === "") {
        this.errors.push("Etapes cannot be empty");
      }

      console.error(this.name, this.items, this.steps);
      this.$store.dispatch("updateRecipe", this.$route.params.id);
    },
    btnClick() {
      console.warn(
        "Supression de la recette" + this.$store.state.currentRecipe.name
      );
      this.$store.dispatch("deleteRecipe", this.$route.params.id);
    },
  },
  mounted() {
    this.$store
      .dispatch("refreshCurrentRecipe", this.$route.params.id)
      .then(() => {
        /**
         * Checks wether can acces the page or not
         */
        if (
          this.$store.state.currentRecipe.created_by.email !==
          this.$store.state.login.email
        ) {
          this.$router.push({ name: "myRecipes" });
        }
      });
  },
};
</script>