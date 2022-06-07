import { Person } from "../../models/Person";

export default interface IPersonRepository {
  readById(id: number): Promise<Array<Person>>;
  validateEmailAndPassword(
    email: string,
    password: string
  ): Promise<{ isValid: boolean; message: string }>;
}
