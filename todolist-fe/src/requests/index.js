import axios from "axios";

export const login = async user => {
  const result = await axios.post("/users/login", user);
  return result.data;
};

export const initTodosRequest = async () => {
  const result = await axios.get('/todo/init');
  return result.data;
}

export const addTodoRequest = async todo => {
  await axios.post("/todo/add", { todo });
  console.log("Added Todo");
};

export const deleteTodoRequest = async id => {
  console.log(id)
  await axios.patch("/todo/delete", { id });
  console.log("Deleted todo");
};

export const changeStatusRequest = async (id, status) => {
  await axios.patch("/todo/change-status", { id, status });
  console.log("Changed status todo");
};
