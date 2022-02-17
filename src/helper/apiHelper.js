import axios from "axios";

export const getRecipes = () => {
  return axios.get("https://node-recipe-project.herokuapp.com/recipes");
};

export const getRecipe = (id) => {
  return axios.get("https://node-recipe-project.herokuapp.com/recipe/" + id);
};

export const getJWT = (email, password) => {
  console.error("GETJWT");
  return axios.post("https://node-recipe-project.herokuapp.com/login", {
    email: email,
    password: password
  });
};
