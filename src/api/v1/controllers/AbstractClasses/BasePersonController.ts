import { Request, Response } from "express";
import BasePersonService from "../../services/AbstractClasses/BasePersonService";
import IPersonController from "../Interfaces/IPersonController";

export default abstract class BasePersonController
  implements IPersonController
{
  protected personService: BasePersonService;

  constructor(personService: BasePersonService) {
    this.personService = personService;
  }

  abstract getPerson(req: Request, res: Response): Promise<void>;
}
