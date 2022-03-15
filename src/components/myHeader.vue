<template>
  <!-- use the router-link component for navigation. -->
  <!-- specify the link by passing the `to` prop. -->
  <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->

  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <ul
          v-if="this.$store.state.jwt !== ''"
          class="left hide-on-med-and-down"
        >
          <li>
            <div id="welcome">
              Bonjour, {{ this.$store.state.login.username }}
            </div>
          </li>
        </ul>
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

#welcome {
  margin-left: 1em;
}
</style>