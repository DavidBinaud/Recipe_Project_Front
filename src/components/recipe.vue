<template>
  <tr>
    <td>
      <router-link :to="url">{{ name }}</router-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Recipe",
  props: {
    name: String,
    id: String,
  },
  computed: {
    url() {
      return "/recipe/" + this.id;
    },
  },
};
</script>

<style>
</style>