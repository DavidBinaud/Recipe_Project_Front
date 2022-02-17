<template>
  <!-- use the router-link component for navigation. -->
  <!-- specify the link by passing the `to` prop. -->
  <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->

  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo"
          ><span class="material-icons">face</span></router-link
        >
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/second">Second</router-link></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/second">Second</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "myHeader",
};

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});
</script>

<style>
</style>