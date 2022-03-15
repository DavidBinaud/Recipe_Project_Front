import axios from "axios";
import conf from "../conf.json";
const api_url = conf.api_recipe_url;

export const getRecipes = () => {
  return axios.get(api_url + "/recipes");
};

export const getRecipe = (id) => {
  return axios.get(api_url + "/recipe/" + id);
};

export const updateRecipe = (id, object, jwt) => {
  const config = {
    headers: { Authorization: `Bearer ${jwt}` }
  };
  let url = api_url + "/recipes/" + id;

  return axios.put(url, object, config);
};

export const deleteRecipe = (id, jwt) => {
  const config = {
    headers: { Authorization: `Bearer ${jwt}` }
  };
  let url = api_url + "/recipes/" + id;

  return axios.delete(url, config);
};

export const getJWT = (email, password) => {
  return axios.post(api_url + "/login", {
    email: email,
    password: password
  });
};

export const createRecipe = (object, jwt) => {
  const config = {
    headers: { Authorization: `Bearer ${jwt}` }
  };
  return axios.post(api_url + "/recipes/", object, config);
};

export const createUser = (object) => {
  return axios.post(api_url + "/users/", object);
};
