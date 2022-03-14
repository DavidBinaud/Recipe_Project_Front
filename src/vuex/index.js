import Vue from "vue";
import Vuex from "vuex";
import Router from "../router/index";
import { getRecipes } from "@/api/apiHelper";
import { getRecipe } from "@/api/apiHelper";
import { createRecipe } from "@/api/apiHelper";
import { getJWT } from "@/api/apiHelper";

Vue.use(Vuex);

const state = {
  jwt: "",
  recipes: [],
  currentRecipe: {},
  login: {
    email: "",
    password: ""
  },
  recipeCreation: {
    name: "",
    items: "",
    steps: ""
  }
};

const mutations = {
  refreshRecipes(state, recipes) {
    state.recipes = recipes;
  },
  refreshCurrentRecipe(state, recipe) {
    state.currentRecipe = recipe;
  },
  updateRecipeCreationName(state, name) {
    state.recipeCreation.name = name;
  },
  updateRecipeCreationItems(state, items) {
    state.recipeCreation.items = items;
  },
  updateRecipeCreationSteps(state, steps) {
    state.recipeCreation.steps = steps;
  },
  updateEmail(state, email) {
    state.login.email = email;
  },
  updatePassword(state, password) {
    state.login.password = password;
  },
  updateJWT(state, jwt) {
    state.jwt = jwt;
  }
};

const actions = {
  login(context) {
    getJWT(state.login.email, state.login.password)
      .then(async (response) => {
        const data = await response.data;
        console.log(response);
        // check for error response
        if (response.status !== 200) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        context.commit("updateJWT", data.jwt);
        Router.push({ name: "home" });
        return Promise.resolve();
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
  refreshRecipes(context) {
    getRecipes()
      .then(async (response) => {
        const data = await response.data;
        console.log(response);
        // check for error response
        if (response.status !== 200) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        context.commit("refreshRecipes", data);
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
  refreshCurrentRecipe(context, id) {
    getRecipe(id)
      .then(async (response) => {
        const data = await response.data;
        console.log(response);
        // check for error response
        if (response.status !== 200) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        context.commit("refreshCurrentRecipe", data);
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
  createRecipe(context) {
    let recipe = {
      name: state.recipeCreation.name,
      items: state.recipeCreation.items,
      steps: state.recipeCreation.steps
    };
    createRecipe(recipe, state.jwt)
      .then(async (response) => {
        const data = await response.data;
        console.log(response);
        // check for error response
        if (response.status !== 200) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        Router.push({ name: "home" });
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  }
};

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions
});
