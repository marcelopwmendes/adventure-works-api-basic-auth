const express = require("express");
const app = express();

require('dotenv').config()
const sql = require("mssql");

app.get("/", (req, res) => {
    const config = {
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        server: process.env.DATABASE_SERVER,
        database: process.env.DATABASE_NAME,
        trustServerCertificate: true,

    }

    sql.connect(config, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        const request = new sql.Request();
        request.query('SELECT * FROM Person.Password WHERE BusinessEntityID = 1', (err, recordset) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(recordset);
        });
    })
});

const server = app.listen(3000, () => {
    console.log("Server is running...");
});