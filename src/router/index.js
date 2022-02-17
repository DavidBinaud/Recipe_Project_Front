import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import secondPage from "@/components/secondePage";
import recipeShow from "@/components/recipeShow";
import login from "@/components/login";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/second",
    component: secondPage
  },
  { path: "/recipe/:id", component: recipeShow },
  { path: "/login", component: login, name: "Login" }
];

/* Router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
}); */
const router = new Router({ routes: routes });

router.beforeResolve((to, from, next) => {
  console.error(router.app.$store.state);
  if (to.name !== "Login" && router.app.$store.state.jwt === "")
    next({ name: "Login" });
  else next();
});

export default router;
