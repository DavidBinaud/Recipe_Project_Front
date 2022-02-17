<template>
  <div class="row">
    <div>Formulaire de connexion</div>
    <form @submit="checkForm" method="post">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>
      <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
      <input v-model="email" id="email" />
      <label for="email">Email</label>
      <input v-model="password" id="password" />
      <label for="password">Mot de Passe</label>
      <br />
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      errors: [],
    };
  },
  computed: {
    email: {
      get() {
        return this.$store.state.login.email;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      },
    },
    password: {
      get() {
        return this.$store.state.login.password;
      },
      set(value) {
        this.$store.commit("updatePassword", value);
      },
    },
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.errors = [];
      console.error("Check Form", this.$store.state.login);

      if (this.$store.state.login.email === "") {
        this.errors.push("Email cannot be empty");
      }

      if (this.$store.state.login.password === "") {
        this.errors.push("Password cannot be empty");
      }

      this.$store.dispatch("login");
    },
  },
};
</script>