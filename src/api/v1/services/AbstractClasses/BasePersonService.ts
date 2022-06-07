import { Person } from "../../models/Person";
import PersonRepository from "../../repositories/PersonRepository";
import IPersonService from "../Interfaces/IPersonService";

export default abstract class BasePersonService implements IPersonService {
  protected personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  abstract getById(id: number): Promise<Person[] | never>;
}
