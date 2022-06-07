import { Person } from "../../models/Person";

export default interface IPersonRepository {
  readById(id: number): Promise<Array<Person>>;
}
