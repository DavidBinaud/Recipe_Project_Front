<template>
  <ul class="pagination">
    <li v-if="page <= 1" class="disabled">
      <a href="#!"><i class="material-icons">double_chevron_left</i></a>
    </li>
    <li v-else @click="start">
      <a href="#!"><i class="material-icons">double_chevron_left</i></a>
    </li>

    <li v-if="page <= 1" class="disabled">
      <a href="#!"><i class="material-icons">chevron_left</i></a>
    </li>
    <li v-else @click="pageDown">
      <a href="#!"><i class="material-icons">chevron_left</i></a>
    </li>

    <div v-for="n in maxPages" :key="n">
      <li v-if="n == page" class="active">
        <a href="#!">{{ n }}</a>
      </li>
      <li v-else class="page-item waves-effect" @click="toPage(n)">
        <a href="#!">{{ n }}</a>
      </li>
    </div>

    <li v-if="page >= maxPages" class="disabled">
      <a href="#!"><i class="material-icons">chevron_right</i></a>
    </li>
    <li v-else @click="pageUp">
      <a href="#!"><i class="material-icons">chevron_right</i></a>
    </li>

    <li v-if="page >= maxPages" class="disabled">
      <a href="#!"><i class="material-icons">double_chevron_right</i></a>
    </li>
    <li v-else @click="end">
      <a href="#!"><i class="material-icons">double_chevron_right</i></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "myRecipes",
  data() {
    return {
      loader: true,
      page: 1,
      itemNumber: 10,
    };
  },
  computed: {
    maxPages() {
      return Math.ceil(this.$store.state.recipes.length / this.itemNumber);
    },
  },
  methods: {
    pageUp() {
      this.page++;
      console.error(this.page);
    },
    pageDown() {
      this.page--;
      console.error(this.page);
    },
    start() {
      this.page = 1;
      console.error(this.page);
    },
    end() {
      this.page = this.maxPages;
      console.error(this.page);
    },
    toPage(p) {
      this.page = p;
      console.error(this.page);
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
}
</style>