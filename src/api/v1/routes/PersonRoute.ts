import express from "express";
import IPersonController from "../controllers/Interfaces/IPersonController";
import { personController } from "../../../configs/bootstrap/PersonBootstrap";

const router = express.Router();

let controller: IPersonController = personController;

router.route("/person/:id").get(controller.getPerson.bind(controller));

module.exports = router;
