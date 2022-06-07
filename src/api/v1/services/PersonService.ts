import { Person } from "../models/Person";
import PersonRepository from "../repositories/PersonRepository";
import BasePersonService from "./AbstractClasses/BasePersonService";

export default class PersonService extends BasePersonService {
  constructor(personRepository: PersonRepository) {
    super(personRepository);
    this.personRepository = personRepository;
  }

  async getById(id: number): Promise<Person[] | never> {
    try {
      let result = await this.personRepository.readById(id);

      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An undefined error was thrown.");
    }
  }
}
