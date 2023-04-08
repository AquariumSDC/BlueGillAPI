require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  user: process.env.PGUSER,
})

module.exports = pool;

