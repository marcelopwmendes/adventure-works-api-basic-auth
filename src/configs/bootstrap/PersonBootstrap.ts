import PersonController from "../../api/v1/controllers/PersonController";
import PersonRepository from "../../api/v1/repositories/PersonRepository";
import PersonService from "../../api/v1/services/PersonService";

export default class PersonBootstrap {
  constructor() {}

  public wireObjects(): PersonController {
    let controller = new PersonController();
    let service = new PersonService();
    let repository = new PersonRepository();

    service.setPersonRepository(repository);
    controller.setPersonService(service);
    return controller;
  }
}
