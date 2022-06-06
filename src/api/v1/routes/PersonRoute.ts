import express from "express";
import controller from "../controllers/PersonController";

const router = express.Router();

router.route("/person/:id").get(controller.getPerson);

module.exports = router;
