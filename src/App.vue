<template>
  <div id="app">
    <myHeader />
    <main>
      <router-view></router-view>
    </main>
    <myFooter />
  </div>
</template>

<script>
import myHeader from "./components/myHeader";
import myFooter from "./components/myFooter";

export default {
  name: "App",
  components: {
    myHeader,
    myFooter,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
