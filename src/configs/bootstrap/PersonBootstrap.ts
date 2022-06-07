import BasePersonController from "../../api/v1/controllers/AbstractClasses/BasePersonController";
import BasePersonRepository from "../../api/v1/repositories/AbstractClasses/BasePersonRepository";
import BasePersonService from "../../api/v1/services/AbstractClasses/BasePersonService";

import PersonController from "../../api/v1/controllers/PersonController";
import PersonRepository from "../../api/v1/repositories/PersonRepository";
import PersonService from "../../api/v1/services/PersonService";

let repository : BasePersonRepository = new PersonRepository();

let service: BasePersonService = new PersonService(repository);
let personController: BasePersonController = new PersonController(service);

export { personController };
