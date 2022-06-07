import { Person } from "../models/Person";
import BasePersonRepository from "../repositories/AbstractClasses/BasePersonRepository";
import BasePersonService from "./AbstractClasses/BasePersonService";

export default class PersonService extends BasePersonService {
  constructor(personRepository: BasePersonRepository) {
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

  async authenticate(
    email: string,
    password: string
  ): Promise<{ isValid: boolean; message: string } | never> {
    try {
      let result = await this.personRepository.validateEmailAndPassword(
        email,
        password
      );

      if (!result.isValid) {
        return {
          isValid: false,
          message: "Email or Password are not correct.",
        };
      }
      return result;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        
        throw new Error(error.message);
      }
      throw new Error("An undefined error was thrown.");
    }
  }
}
