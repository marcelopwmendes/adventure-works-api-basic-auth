import { Request, Response } from "express";
import { validateAndReturnNumber } from "../helpers/TypeHelpers";
import PersonService from "../services/PersonService";
import BasePersonController from "./AbstractClasses/BasePersonController";

export class PersonController extends BasePersonController {
  constructor(personService: PersonService) {
    super(personService);
    this.personService = personService;
  }

  async getPerson(req: Request, res: Response) {
    try {
      let id: number = validateAndReturnNumber(req.params.id);

      const result = await this.personService.getById(id);
      res.send(result);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        res.sendStatus(500);
      }
    }
  }
}
