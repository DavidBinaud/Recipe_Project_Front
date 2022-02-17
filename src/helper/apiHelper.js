import axios from "axios";

export const getRecipes = () => {
  return axios.get("https://node-recipe-project.herokuapp.com/recipes");
};

export const getRecipe = (id) => {
  return axios.get("https://node-recipe-project.herokuapp.com/recipe/" + id);
};
