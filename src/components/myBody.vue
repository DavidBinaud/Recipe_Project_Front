<template>
  <div class="container">
    This is the Body
    <div class="row">
      <div class="col s12"><myRecipes /></div>
    </div>
  </div>
</template>


<script>
import myRecipes from "./myRecipes";

export default {
  name: "myBody",
  components: {
    myRecipes,
  },
};
</script>

<style>
</style>