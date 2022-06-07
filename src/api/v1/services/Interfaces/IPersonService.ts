import { Person } from "../../models/Person";

export default interface IPersonService {
  getById(id: number): Promise<Person[] | never>;
  authenticate(
    email: string,
    password: string
  ): Promise<{ isValid: boolean; message: string } | never>;
}
