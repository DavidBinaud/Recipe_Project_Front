import Vue from "vue";
import Vuex from "vuex";
import { getRecipes } from "@/helper/apiHelper";
import { getRecipe } from "@/helper/apiHelper";

Vue.use(Vuex);

const state = {
  jwt: "",
  recipes: [],
  currentRecipe: {},
  contact: {
    firstname: "",
    lastname: "",
    subject: "",
    content: ""
  }
};

const mutations = {
  refreshRecipes(state, recipes) {
    state.recipes = recipes;
  },
  refreshCurrentRecipe(state, recipe) {
    state.currentRecipe = recipe;
  },
  updateFirstname(state, firstname) {
    state.contact.firstname = firstname;
  },
  updateLastname(state, lastname) {
    state.contact.lastname = lastname;
  },
  updateSubject(state, subject) {
    state.contact.subject = subject;
  },
  updateContent(state, content) {
    state.contact.content = content;
  }
};

const actions = {
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
  }
};

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions
});
