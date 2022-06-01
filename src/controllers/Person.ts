import { Request, Response } from "express";
import { DatabaseConfig } from "../configs/DatabaseConfig";
import sql from "mssql";

const getPerson = async (req: Request, res: Response) => {
  try {
    const databaseConfig: DatabaseConfig = DatabaseConfig.getInstance();
    sql.connect(databaseConfig.getSqlConfig(), (err) => {
      if (err) {
        console.log(err);
        res.send(err.message).status(500);
      }

      const request = new sql.Request();
      request.query(
        "SELECT * FROM Person.Password WHERE BusinessEntityID = 1",
        (err, recordset) => {
          if (err) {
            console.log(err);
            res.send(err.message).status(500);
          }
          res.send(recordset);
        }
      );
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.sendStatus(500);
    }
  }
};

export default { getPerson };
