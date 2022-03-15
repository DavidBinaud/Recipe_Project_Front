<template>
  <div class="row">
    <div>Créer votre profil</div>
    <form @submit="checkForm" method="post">
        <p v-if="errors.length > 0">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
      <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
      <label for="username">Pseudo</label>
      <input v-model="username" id="username" />
      <label for="email">Email</label>
      <input v-model="email" id="email" />
      <label for="password">Mot de Passe</label>
      <input v-model="password" id="password" type="password" />
      <br />
      <button type="submit" class="btn waves-light">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserCreate",
  data() {
    return {
      errors: [],
    };
  },
  computed: {
    username: {
      get() {
        return this.$store.state.user.username;
      },
      set(value) {
        this.$store.commit("updateCreationUsername", value);
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit("updateCreationEmail", value);
      },
    },
    password: {
      get() {
        return this.$store.state.user.password;
      },
      set(value) {
        this.$store.commit("updateCreationPassword", value);
      },
    },
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.errors = [];

      if (this.$store.state.user.username === "") {
        this.errors.push("Username cannot be empty");
      }

      if (this.$store.state.user.email === "") {
        this.errors.push("Email cannot be empty");
      }

      if (this.$store.state.user.password === "") {
        this.errors.push("Password cannot be empty");
      }

      this.$store.dispatch("createUser");
    },
  },
};
</script>