import sql, { IRecordSet } from "mssql";
import { DatabaseConfig } from "../../../configs/DatabaseConfig";
import { Person } from "../models/Person";
import BasePersonRepository from "./AbstractClasses/BasePersonRepository";

export default class PersonRepository extends BasePersonRepository {
  constructor() {
    super();
  }

  async readById(id: number): Promise<Array<Person>> {
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

  async validateEmailAndPassword(
    email: string,
    password: string
  ): Promise<{ isValid: boolean; message: string }> {
    const databaseConfig: DatabaseConfig = DatabaseConfig.getInstance();

    await sql.connect(databaseConfig.getSqlConfig());
    let isEmailValid: boolean = await this.validateEmail(email);

    if (!isEmailValid) {
      return { isValid: false, message: "User email does not exists." };
    }

    let isPasswordValid: boolean = await this.validatePassword(email, password);
    if (!isPasswordValid) {
      return { isValid: false, message: "Password is wrong." };
    }

    return { isValid: true, message: "" };
  }

  async validateEmail(email: string): Promise<boolean> {
    let sqlQuery =
      "SELECT COUNT(Email.EmailAddress) As c \n\
                    FROM Person.Person As Person \n\
                    JOIN Person.EmailAddress As Email ON Email.BusinessEntityID = Person.BusinessEntityID \n\
                    WHERE Email.EmailAddress = '" +
      email +
      "'";
    let result = await (await sql.query(sqlQuery)).recordset[0].c;

    if (result > 0) {
      return true;
    }
    return false;
  }

  async validatePassword(
    email: string,
    password: string
  ): Promise<boolean> {
    let sqlQuery =
      "SELECT COUNT(Email.EmailAddress) As c \n\
                    FROM Person.Person As Person \n\
                    JOIN Person.Password As Password ON Password.BusinessEntityID = Person.BusinessEntityID \n\
                    JOIN Person.EmailAddress As Email ON Email.BusinessEntityID = Person.BusinessEntityID \n\
                    WHERE Email.EmailAddress = '" +
      email +
      "' AND Password.PasswordHash = '" +
      password +
      "'";
    let result = await (await sql.query(sqlQuery)).recordset[0].c;

    if (result > 0) {
      return true;
    }
    return false;
  }
}
