import { Request, Response } from "express";
import { validateAndReturnNumber } from "../helpers/TypeHelpers";
import BasePersonService from "../services/AbstractClasses/BasePersonService";
import BasePersonController from "./AbstractClasses/BasePersonController";

import jwt from "jsonwebtoken";
import authConfig from "../../../configs/auth.json";

export default class PersonController extends BasePersonController {
  constructor(personService: BasePersonService) {
    super(personService);
    this.personService = personService;
  }

  async getPerson(req: Request, res: Response): Promise<void> {
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

  async authenticate(req: Request, res: Response): Promise<void> {
    console.log(req.body);

    let { email, password } = req.body;

    try {
      const result = await this.personService.authenticate(email, password);
      if (result.isValid) {
        let token = jwt.sign({ id: email }, authConfig.secret, {
          expiresIn: 86400,
        });
        res.status(200).send(token);
      }
      res.status(400).send(result.message);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
