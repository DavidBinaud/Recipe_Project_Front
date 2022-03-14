<template>
  <div class="row">
    <form @submit="checkForm" method="post">
      <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
      <input v-model="name" id="name" />
      <label for="name">Nom</label>
      <textarea v-model="items" id="items"></textarea>
      <label for="items">Ingrédients</label>
      <textarea v-model="steps" id="steps"></textarea>
      <label for="steps">Etapes</label>

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
      console.error(this.name, this.items, this.steps);
      this.$store.dispatch("createRecipe");
    },
  },
};
</script>