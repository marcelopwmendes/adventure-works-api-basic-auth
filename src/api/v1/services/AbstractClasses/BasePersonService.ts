import { Person } from "../../models/Person";
import BasePersonRepository from "../../repositories/AbstractClasses/BasePersonRepository";
import IPersonService from "../Interfaces/IPersonService";

export default abstract class BasePersonService implements IPersonService {
  protected personRepository: BasePersonRepository;

  constructor(personRepository: BasePersonRepository) {
    this.personRepository = personRepository;
  }

  abstract getById(id: number): Promise<Person[] | never>;
  abstract authenticate(
    email: string,
    password: string
  ): Promise<{ isValid: boolean; message: string } | never>;
}
