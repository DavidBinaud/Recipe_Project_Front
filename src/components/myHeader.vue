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
        <navLinks id="nav-mobile" classes="right hide-on-med-and-down" />
      </div>
    </nav>

    <navLinks id="mobile-demo" classes="sidenav" />
  </div>
</template>

<script>
import navLinks from "@/components/navLinks";
export default {
  name: "myHeader",
  components: {
    navLinks,
  },
};

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});
</script>

<style>
.navbar-fixed {
  margin-bottom: 5%;
}
</style>