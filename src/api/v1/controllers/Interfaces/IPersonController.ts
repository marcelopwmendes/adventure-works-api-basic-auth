import { Request, Response } from "express";

export default interface IPersonController {
  getPerson(req: Request, res: Response): any;
}
