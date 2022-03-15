import Vue from "vue";
import Router from "vue-router";
import store from "../vuex/index";
import Home from "@/components/Home";
import recipeCreate from "@/components/recipes/recipeCreate";
import recipeModify from "@/components/recipes/recipeModify";
import recipeShow from "@/components/recipes/recipeShow";
import myRecipes from "@/components/recipes/myRecipes";
import login from "@/components/login";
import userCreation from "@/components/userCreation";

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
  {
    path: "/recipe/:id",
    component: recipeShow
  },
  {
    path: "/login",
    component: login,
    name: "Login"
  },
  {
    path: "/create_user",
    component: userCreation,
    name: "UserCreation"
  },
  {
    path: "/modify_recipe/:id",
    component: recipeModify,
    name: "RecipeModify"
  },
  {
    path: "/myRecipes",
    component: myRecipes,
    name: "myRecipes"
  },
  {
    path: "/logout",
    name: "Logout",
    beforeEnter: (to, from, next) => {
      store.dispatch("logout");
      next({ name: "Login" });
    }
  }
];

const router = new Router({ routes: routes });

let publicRoutes = ["Login", "UserCreation", "Logout"];

router.beforeEach((to, from, next) => {
  //Public
  if (to.hasOwnProperty("name") && publicRoutes.includes(to.name))
    return next();
  else if (store.state.jwt !== "") return next();
  else return next({ name: "Login" });
});

export default router;
