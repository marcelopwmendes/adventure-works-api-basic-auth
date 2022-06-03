import { DatabaseConfig } from "../configs/DatabaseConfig";
import sql from "mssql";

const read = async () => {
  let result = {};
  const databaseConfig: DatabaseConfig = DatabaseConfig.getInstance();

  try {
    await sql.connect(databaseConfig.getSqlConfig());
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }

  let sqlQuery = "SELECT * FROM Person.Password WHERE BusinessEntityID = 80";

  try {
    result = (await sql.query(sqlQuery)).recordset;
    console.log(result);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    //} finally {
    //  sql.close();
    //}
  }
  
  return result;
};

export default { read };
