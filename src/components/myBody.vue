<template>
  <div>
    This is the Body
    <div class="row">
      <div class="col s12"><myRecipes /></div>
    </div>
  </div>
</template>


<script>
import myRecipes from "@/components/recipes/myRecipes";

export default {
  name: "myBody",
  components: {
    myRecipes,
  },
};
</script>

<style>
</style>