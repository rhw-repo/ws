import mysql from "mysql2/promise";

const connString = process.env.DATABASE_URL;

const connect = () => {
  return mysql.createConnection(connString).catch((err) => {
    console.log(err);
    return err;
  });
};

/* Also possible as aync promise */
/*mysql.createConnection({
host: '',
user: '',
port: 8889,
database: '',
password: ''
})
// Chain catch here*/

export { connect };
