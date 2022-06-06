import { Request, Response } from "express";
import { validateAndReturnNumber } from "../helpers/TypeHelpers";
import PersonService from "../services/PersonService";

export default class PersonController {
  private _personService: PersonService;

  constructor() {}

  public getPerson = async (req: Request, res: Response) => {
    try {
      let id: number = validateAndReturnNumber(req.params.id);

      const result = await this._personService.getById(id);
      res.send(result);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        res.sendStatus(500);
      }
    }
  };

  public setPersonService(personService: PersonService) {
    this._personService = personService;
  }
}
