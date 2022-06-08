import express from "express";
import IPersonController from "../controllers/Interfaces/IPersonController";
import { personController } from "../../../configs/bootstrap/PersonBootstrap";

import authMiddleware from '../middlewares/AuthMiddleware'

const router = express.Router();

let controller: IPersonController = personController;

router.route("/person/:id").get(authMiddleware, controller.getPerson.bind(controller));

router
  .route("/person/authenticate")
  .post(controller.authenticate.bind(controller));

module.exports = router;
