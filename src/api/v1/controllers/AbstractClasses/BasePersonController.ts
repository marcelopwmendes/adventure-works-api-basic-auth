import { Request, Response } from "express";
import PersonService from "../../services/PersonService";
import IPersonController from "../Interfaces/IPersonController";

export default abstract class BasePersonController
  implements IPersonController
{
  protected personService: PersonService;

  constructor(personService: PersonService) {
    this.personService = personService;
  }
  
  abstract getPerson(req: Request, res: Response): any;
}
