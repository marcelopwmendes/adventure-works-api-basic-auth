import { Request, Response } from "express";
import { validateAndReturnNumber } from "../helpers/TypeHelpers";
import Person from "../services/PersonService";

const getPerson = async (req: Request, res: Response) => {
  try {
    let id: number = validateAndReturnNumber(req.params.id);
console.log(id);

    const result = await Person.getById(id);
    console.log(result);
    res.send(result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.sendStatus(500);
    }
  }
};

export default { getPerson };
