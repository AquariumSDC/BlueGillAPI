require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  user: process.env.PGUSER,
})

// const dbconnect = async () => await pool.connect()

module.exports = pool;

