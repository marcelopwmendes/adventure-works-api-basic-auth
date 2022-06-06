import PersonRepository from "../repositories/PersonRepository";

export default class PersonService {
  private _personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this._personRepository = personRepository;
  }

  public getById = async (id: number) => {
    try {
      let result = await this._personRepository.readById(id);

      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };
}
