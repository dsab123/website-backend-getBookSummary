const { Client } = require('pg');
    
const username = process.env.Username;
const password = process.env.Password;
const server = process.env.Server;
const database = process.env.Database;

exports.handler = async (event) => {
    const client = new Client({
      user: username,
      host: server,
      database: database,
      password: password,
      port: 5432,
    });
    
    client.connect();

    let result = await client.query(`select * from booksummaryinfo where summary_id = ${event.summary_id};`);
    
    if (result.rows.length > 0) {    
      return result.rows[0];
    } else {
      return [];
    }
};


