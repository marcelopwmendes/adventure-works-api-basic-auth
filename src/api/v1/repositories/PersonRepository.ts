import sql, { IRecordSet } from "mssql";
import { DatabaseConfig } from "../../../configs/DatabaseConfig";
import { Person } from "../models/Person";

export default class PersonRepository {
  public readById = async (id: number) => {
    let result: IRecordSet<Person>;
    const databaseConfig: DatabaseConfig = DatabaseConfig.getInstance();

    await sql.connect(databaseConfig.getSqlConfig());

    let sqlQuery =
      "SELECT TOP 1 Person.BusinessEntityID, Person.FirstName, Person.LastName, Email.EmailAddress, Password.PasswordHash, Password.PasswordSalt \n\
                  FROM Person.Person As Person \n\
                    JOIN Person.EmailAddress As Email ON Email.BusinessEntityID = Person.BusinessEntityID \n\
                    JOIN Person.Password As Password ON Password.BusinessEntityID = Person.BusinessEntityID \n\
                  WHERE Person.BusinessEntityID = " +
      id;

    result = (await sql.query(sqlQuery)).recordset;

    return result;
  };
}
