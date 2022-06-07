import sql, { IRecordSet } from "mssql";
import { DatabaseConfig } from "../../../configs/DatabaseConfig";
import { Person } from "../models/Person";
import BasePersonRepository from "./AbstractClasses/BasePersonRepository";

export default class PersonRepository extends BasePersonRepository {
  constructor() {
    super();
  }

  async readById(id: number) : Promise<Array<Person>> {
    let result: Array<Person>;
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
  }
}
