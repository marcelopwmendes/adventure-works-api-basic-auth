import { Person } from "../../models/Person";

export default interface IPersonService {
  getById(id: number): Promise<Person[] | never>;
}
