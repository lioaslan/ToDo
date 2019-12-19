const bcrypt = require('bcrypt');
const pg = require("pg");
const dbString = "postgre://postgres:123@localhost:2000/Todo";

const client = new pg.Client(dbString);
client.connect();

module.exports = { 
    createUser : async (username, password) => {
        await client.query('delete from users');
        bcrypt.hash(password, 10, async (err, hash) => {
            const query = {
                text: 'insert into users(username, password) values($1, $2)',
                values: [username, hash]
            }
            await client.query(query);
        })
    }   
}