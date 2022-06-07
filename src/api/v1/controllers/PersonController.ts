import { Request, Response } from "express";
import { validateAndReturnNumber } from "../helpers/TypeHelpers";
import BasePersonService from "../services/AbstractClasses/BasePersonService";
import BasePersonController from "./AbstractClasses/BasePersonController";

export default class PersonController extends BasePersonController {
  constructor(personService: BasePersonService) {
    super(personService);
    this.personService = personService;
  }

  async getPerson(req: Request, res: Response) : Promise<void> {
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
