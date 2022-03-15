import Vue from "vue";
import Vuex from "vuex";
import Router from "../router/index";
import { getRecipes } from "@/api/apiHelper";
import { getRecipe } from "@/api/apiHelper";
import { updateRecipe } from "@/api/apiHelper";
import { deleteRecipe } from "@/api/apiHelper";
import { createRecipe } from "@/api/apiHelper";
import { createUser } from "@/api/apiHelper";
import { getJWT } from "@/api/apiHelper";

Vue.use(Vuex);

const state = {
  jwt: "",
  recipes: [],
  currentRecipe: {},
  login: {
    email: "",
    password: "",
    username: ""
  },
  recipeCreation: {
    name: "",
    items: "",
    steps: ""
  },
  user: {
    email: "",
    username: "",
    password: ""
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
  updateCreationUsername(state, username) {
    state.user.username = username;
  },
  updateCreationEmail(state, email) {
    state.user.email = email;
  },
  updateCreationPassword(state, password) {
    state.user.password = password;
  },
  updateJWT(state, jwt) {
    state.jwt = jwt;
  },
  updateLoginUsername(state, username) {
    state.login.username = username;
  }
};

const actions = {
  login(context) {
    getJWT(state.login.email, state.login.password)
      .then(async (response) => {
        const data = await response.data;
        // check for error response
        if (response.status !== 200) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        context.commit("updateJWT", data.jwt);
        context.commit("updateLoginUsername", data.username);
        Router.push({ name: "home" });
        return Promise.resolve();
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
  logout(context) {
    context.commit("updateJWT", "");
    context.commit("updateLoginUsername", "");
    context.commit("updateEmail", "");
    context.commit("updatePassword", "");
  },
  refreshRecipes(context) {
    getRecipes()
      .then(async (response) => {
        const data = await response.data;
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
    return new Promise((resolve, reject) =>
      getRecipe(id)
        .then(async (response) => {
          const data = await response.data;
          // check for error response
          if (response.status !== 200) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }

          context.commit("refreshCurrentRecipe", data);
          resolve();
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        })
    );
  },
  createRecipe(context) {
    let recipe = {
      name: state.recipeCreation.name,
      items: state.recipeCreation.items,
      steps: state.recipeCreation.steps
    };
    context.commit("updateRecipeCreationName", "");
    context.commit("updateRecipeCreationItems", "");
    context.commit("updateRecipeCreationSteps", "");

    createRecipe(recipe, state.jwt)
      .then(async (response) => {
        const data = await response.data;
        // check for error response
        if (response.status !== 201) {
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
  },
  updateRecipe(context, id) {
    let recipe = {
      name:
        state.recipeCreation.name === ""
          ? state.currentRecipe.name
          : state.recipeCreation.name,
      items:
        state.recipeCreation.items === ""
          ? state.currentRecipe.items
          : state.recipeCreation.items,
      steps:
        state.recipeCreation.steps === ""
          ? state.currentRecipe.steps
          : state.recipeCreation.steps
    };

    updateRecipe(id, recipe, state.jwt)
      .then(async (response) => {
        const data = await response.data;
        // check for error response
        if (response.status !== 201) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        Router.push({ path: `/recipe/${id}` });
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
  deleteRecipe(context, id) {
    deleteRecipe(id, state.jwt)
      .then(async (response) => {
        const data = await response.data;
        // check for error response
        if (response.status !== 201) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        Router.push({ name: "myRecipes" });
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
  createUser(context) {
    let user = {
      email: state.user.email,
      password: state.user.password,
      username: state.user.username
    };
    context.commit("updateCreationUsername", "");
    context.commit("updateCreationEmail", "");
    context.commit("updateCreationPassword", "");
    createUser(user)
      .then(async (response) => {
        const data = await response.data;
        // check for error response
        if (response.status !== 201) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        context.commit("updateEmail", user.email);
        context.commit("updatePassword", user.password);
        context.dispatch("login");
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
