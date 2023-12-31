import axios from "./customize-axios";

const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
  return axios.post("/api/users", { name: name, job: job }, { timeout: 4000 });
};
const putUpdateUser = (name, job) => {
  return axios.put("/api/users/2", { name: name, job: job }, { timeout: 6000 });
};
const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`, { timeout: 6000 });
};
const loginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};
export { fetchAllUser, postCreateUser, putUpdateUser, deleteUser, loginApi };
