const pg = require("pg");
const dbString = "postgre://postgres:123@localhost:2000/Todo";

const client = new pg.Client(dbString);
client.connect();

module.exports = {
  getUser: async () => await client.query('select * from users'),
  getTodos: async () => await client.query("select * from todos"),
  addTodo: async (id, task) => {
    const query = {
      text: "insert into todos(id, task, status) values($1, $2, $3)",
      values: [id, task, "todo"]
    };
    await client.query(query);
  },
  deleteTodo: async id => {
    const query = {
        text: 'delete from todos where id = $1',
        values: [id]
    };
    await client.query(query);
  },
  changeStatus: async (id, status) => {
      const query = {
          text: 'update todos set status = $2 where id = $1',
          values: [id, status]
      };
      await client.query(query);
  }
};
