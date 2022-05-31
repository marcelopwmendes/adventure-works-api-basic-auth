import express from "express";
const app = express();

require("dotenv").config();
import sql from "mssql";

import { DatabaseConfig } from "./configs/DatabaseConfig";

app.get("/", (req, res) => {
  const databaseConfig: DatabaseConfig = DatabaseConfig.getInstance();
  sql.connect(databaseConfig.getSqlConfig(), (err) => {
    if (err) {
      console.log(err);
      return;
    }

    const request = new sql.Request();
    request.query(
      "SELECT * FROM Person.Password WHERE BusinessEntityID = 1",
      (err, recordset) => {
        if (err) {
          console.log(err);
          return;
        }
        res.send(recordset);
      }
    );
  });
});

app.listen(3000, () => {
  console.log("Typescript server is running!");
});
