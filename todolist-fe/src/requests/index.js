import axios from "axios";

export const loginRequest = async user => {
  const result = await axios.post("/users/login", user);
  return result.data;
};

export const initTodosRequest = async token => {
  const result = await axios.get("/todo/init", token);
  return result.data;
};

export const addTodoRequest = async (id, task) => {
  await axios.post("/todo/add", { id, task });
  console.log("Added Todo");
};

export const deleteTodoRequest = async id => {
  await axios.patch("/todo/delete", { id });
  console.log("Deleted todo");
};

export const changeStatusRequest = async (id, status) => {
  await axios.patch("/todo/change-status", { id, status });
  console.log("Changed status todo");
};

export const logoutRequest = async () => {
  const result = await axios.post("/users/logout");
  console.log(result);
  console.log("Logged out");
};
