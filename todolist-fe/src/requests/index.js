import axios from "axios";

export const login = user => {
  return axios
    .post("users/login", {
      username: user.username,
      password: user.pasword
    })
    .then(response => {
      const data = response.data;
      localStorage.getItem("usertoken", data.token);
      localStorage.getItem("todos", data.todos);
      return data;
    })
    .catch(err => console.log(err));
};

export const addTodo = todo => {
  return axios
    .post("todo/add", { todo })
    .then(renponse => {
      console.log("Added Todo");
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteTodo = todo => {
  return axios
    .post("todo/delete", { todo })
    .then(renponse => {
      console.log("Deleted");
    })
    .catch(err => {
      console.log(err);
    });
};

export const changeStatus = todo => {
  return axios
    .post("todo/change-status", { todo })
    .then(response => {
      console.log("Changed");
    })
    .catch(err => {
      console.log(err);
    });
};
