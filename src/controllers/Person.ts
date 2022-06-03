import { Request, Response } from "express";
import Person from "../services/Person";

const getPerson = async (req: Request, res: Response) => {
  try {
    const result = await Person.get();
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
