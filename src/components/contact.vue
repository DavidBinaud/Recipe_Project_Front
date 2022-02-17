<template>
  <div class="row">
    <form>
      <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
      <input v-model="firstname" id="firstname" />
      <label for="firstname">Prénom</label>
      <input v-model="lastname" id="lastname" />
      <label for="lastname">Nom de famille</label>
      <input v-model="subject" id="subject" />
      <label for="subject">Sujet de la demande </label>

      <br />
      <textarea v-model="content"></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact",
  computed: {
    firstname: {
      get() {
        return this.$store.state.contact.firstname;
      },
      set(value) {
        this.$store.commit("updateFirstname", value);
      },
    },
    lastname: {
      get() {
        return this.$store.state.contact.lastname;
      },
      set(value) {
        this.$store.commit("updateLastname", value);
      },
    },
    subject: {
      get() {
        return this.$store.state.contact.subject;
      },
      set(value) {
        this.$store.commit("updateSubject", value);
      },
    },
    content: {
      get() {
        return this.$store.state.contact.content;
      },
      set(value) {
        this.$store.commit("updateContent", value);
      },
    },
  },
};
</script>