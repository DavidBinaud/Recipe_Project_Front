<template>
  <div>
    <div class="row">
      <div class="col s12"><recipesShow /></div>
    </div>
  </div>
</template>


<script>
import recipesShow from "@/components/recipes/recipesShow";

export default {
  name: "myBody",
  components: {
    recipesShow,
  },
};
</script>

<style>
</style>