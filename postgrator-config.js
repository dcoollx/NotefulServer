require('dotenv').config();

module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'host': process.env.HOST,
  'port': 5432,
  'username': process.env.DB_USER,
  'password': process.env.DB_PASS,
  'database': process.env.NODE_ENV === 'production' ? process.env.DB_NAME : process.env.DB_NAME_TEST
};