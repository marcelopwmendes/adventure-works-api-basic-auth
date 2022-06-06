import express from "express";
import PersonBootstrap from "../../../configs/bootstrap/PersonBootstrap";

const router = express.Router();

let controller = new PersonBootstrap().wireObjects();

router.route("/person/:id").get(controller.getPerson);

module.exports = router;
