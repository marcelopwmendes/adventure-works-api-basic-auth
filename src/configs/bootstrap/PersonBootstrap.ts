import BasePersonController from "../../api/v1/controllers/AbstractClasses/BasePersonController";
import IPersonController from "../../api/v1/controllers/Interfaces/IPersonController";
import { PersonController } from "../../api/v1/controllers/PersonController";
import PersonRepository from "../../api/v1/repositories/PersonRepository";
import PersonService from "../../api/v1/services/PersonService";

let repository = new PersonRepository();

let service = new PersonService(repository);
let personController: BasePersonController = new PersonController(service);

export { personController };
