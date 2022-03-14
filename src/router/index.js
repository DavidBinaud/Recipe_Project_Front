import Vue from "vue";
import Router from "vue-router";
import store from "../vuex/index";
import Home from "@/components/Home";
import recipeCreate from "@/components/recipes/recipeCreate";
import recipeShow from "@/components/recipes/recipeShow";
import login from "@/components/login";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/recipe_create",
    component: recipeCreate
  },
  { path: "/recipe/:id", component: recipeShow },
  { path: "/login", component: login, name: "Login" }
];

/* Router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
}); */
const router = new Router({ routes: routes });

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && store.state.jwt === "")
    return next({ name: "Login" });
  else next();
});

export default router;
