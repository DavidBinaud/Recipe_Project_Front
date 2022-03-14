<template>
  <!-- use the router-link component for navigation. -->
  <!-- specify the link by passing the `to` prop. -->
  <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->

  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <navLinks id="nav-mobile" classes="right" />
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
</script>

<style>
.navbar-fixed {
  margin-bottom: 5%;
}
</style>