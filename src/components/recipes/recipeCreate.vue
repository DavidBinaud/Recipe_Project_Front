<template>
  <div class="row">
    <form @submit="checkForm" method="post">
      <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
      <label for="name">Nom</label>
      <input v-model="name" id="name" />
      <label for="items">Ingrédients</label>
      <textarea
        v-model="items"
        id="items"
        class="materialize-textarea"
      ></textarea>
      <label for="steps">Etapes</label>
      <textarea
        v-model="steps"
        id="steps"
        class="materialize-textarea"
      ></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact",
  computed: {
    name: {
      get() {
        return this.$store.state.recipeCreation.name;
      },
      set(value) {
        this.$store.commit("updateRecipeCreationName", value);
      },
    },
    items: {
      get() {
        return this.$store.state.recipeCreation.items;
      },
      set(value) {
        this.$store.commit("updateRecipeCreationItems", value);
      },
    },
    steps: {
      get() {
        return this.$store.state.recipeCreation.steps;
      },
      set(value) {
        this.$store.commit("updateRecipeCreationSteps", value);
      },
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
      this.$store.dispatch("createRecipe");
    },
  },
};
</script>