import { Person } from "../../models/Person";
import IPersonRepository from "../Interfaces/IPersonRepository";

export default abstract class BasePersonRepository
  implements IPersonRepository
{
  abstract readById(id: number): Promise<Array<Person>>;
  abstract validateEmailAndPassword(
    email: string,
    password: string
  ): Promise<{ isValid: boolean; message: string }>;

  abstract validateEmail(email: string): Promise<boolean>;
  abstract validatePassword(email: string, password: string): Promise<boolean>;
}
