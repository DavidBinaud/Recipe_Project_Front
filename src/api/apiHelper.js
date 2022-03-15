import axios from "axios";

export const getRecipes = () => {
  return axios.get("https://node-recipe-project.herokuapp.com/recipes");
};

export const getRecipe = (id) => {
  return axios.get("https://node-recipe-project.herokuapp.com/recipe/" + id);
};

export const updateRecipe = (id, object, jwt) => {
  const config = {
    headers: { Authorization: `Bearer ${jwt}` }
  };
  let url = "https://node-recipe-project.herokuapp.com/recipes/" + id;

  return axios.put(url, object, config);
};

export const deleteRecipe = (id, jwt) => {
  const config = {
    headers: { Authorization: `Bearer ${jwt}` }
  };
  let url = "https://node-recipe-project.herokuapp.com/recipes/" + id;

  return axios.delete(url, config);
};

export const getJWT = (email, password) => {
  return axios.post("https://node-recipe-project.herokuapp.com/login", {
    email: email,
    password: password
  });
};

export const createRecipe = (object, jwt) => {
  const config = {
    headers: { Authorization: `Bearer ${jwt}` }
  };
  return axios.post(
    "https://node-recipe-project.herokuapp.com/recipes/",
    object,
    config
  );
};

export const createUser = (object) => {
  return axios.post("https://node-recipe-project.herokuapp.com/users/", object);
};
