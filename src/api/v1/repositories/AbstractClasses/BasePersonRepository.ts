import { Person } from "../../models/Person";
import IPersonRepository from "../Interfaces/IPersonRepository";

export default abstract class BasePersonRepository
  implements IPersonRepository
{
  abstract readById(id: number): Promise<Array<Person>>;
}
