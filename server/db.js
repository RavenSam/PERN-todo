const { Pool } = require("pg")

const pool = new Pool({
   user: "postgres",
   password: "makhloufsam",
   host: "localhost",
   port: 5432,
   database: "permtodo",
})

module.exports = pool
