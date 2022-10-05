const { USER_DB, PASS_DB, DATABASE, HOST_DB, DIALECT, PORT_DB, } = require("dotenv").config().parsed;

module.exports =
{
  "development": {
    "username": USER_DB,
    "password": PASS_DB,
    "database": DATABASE,
    "host": HOST_DB,
    "dialect": DIALECT,
    "port": PORT_DB
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}