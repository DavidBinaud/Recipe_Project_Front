<template>
  <div>
    <label for="my-pagination-select">Nombre par pages:</label>
    <select
      class="browser-default"
      name="pagination"
      id="my-pagination-select"
      v-model="itemNumber"
      @change="changeNumberPerPage(itemNumber)"
    >
      <option disabled value="">Please select one</option>
      <option>5</option>
      <option>10</option>
      <option>25</option>
      <option>50</option>
    </select>

    <ul class="pagination">
      <li v-if="page <= 1" class="disabled">
        <a href="#!"><font-awesome-icon icon="fa-solid fa-chevron-left" /></a>
      </li>
      <li v-else @click="pageDown">
        <a href="#!"><font-awesome-icon icon="fa-solid fa-chevron-left" /></a>
      </li>

      <template v-if="totalPages > 5">
        <li v-if="startPage > 1" @click="start">
          <a href="#!"><i class="material-icons">...</i></a>
        </li>
        <span v-for="n in availablePages" :key="n">
          <li v-if="n == page" class="active">
            <a href="#!">{{ n }}</a>
          </li>
          <li v-else class="page-item waves-effect" @click="toPage(n)">
            <a href="#!">{{ n }}</a>
          </li>
        </span>
        <li v-if="endPage < totalPages" @click="end">
          <a href="#!"><i class="material-icons">...</i></a>
        </li>
      </template>
      <template v-else>
        <span v-for="n in totalPages" :key="n">
          <li v-if="n == page" class="active">
            <a href="#!">{{ n }}</a>
          </li>
          <li v-else class="page-item waves-effect" @click="toPage(n)">
            <a href="#!">{{ n }}</a>
          </li>
        </span>
      </template>

      <li v-if="page >= totalPages" class="disabled">
        <a href="#!"><font-awesome-icon icon="fa-solid fa-chevron-right" /></a>
      </li>
      <li v-else @click="pageUp">
        <a href="#!"><font-awesome-icon icon="fa-solid fa-chevron-right" /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "myRecipes",
  emits: ["pagination-change"],
  data() {
    return {
      loader: true,
      page: 1,
      itemNumber: 10,
      limitPage: 5,
    };
  },
  props: {
    size: Number,
  },
  computed: {
    totalPages() {
      return Math.ceil(this.size / this.itemNumber);
    },
    startPage() {
      return this.page < 3 ? 1 : this.page - 2;
    },
    endPage() {
      return Math.min(this.startPage + 4, this.totalPages);
    },
    availablePages() {
      var a = [this.startPage],
        b = this.startPage;
      while (b < this.endPage) {
        a.push((b += 1));
      }
      return a;
    },
  },
  methods: {
    pageUp() {
      this.page++;
      this.$emit("pagination-change", this.page, this.itemNumber);
    },
    pageDown() {
      this.page--;
      this.$emit("pagination-change", this.page, this.itemNumber);
    },
    start() {
      this.page = 1;
      this.$emit("pagination-change", this.page, this.itemNumber);
    },
    end() {
      this.page = this.totalPages;
      this.$emit("pagination-change", this.page, this.itemNumber);
    },
    toPage(p) {
      this.page = p;
      this.$emit("pagination-change", this.page, this.itemNumber);
    },
    changeNumberPerPage(k) {
      this.page = 1;
      this.itemNumber = k;
      this.$emit("pagination-change", 1, this.itemNumber);
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
}
</style>