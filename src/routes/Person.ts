import express from "express";
import { DatabaseConfig } from "../configs/DatabaseConfig";
import sql from "mssql";

const router = express.Router();

router.get("/person", (req, res) => {
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

module.exports = router;
