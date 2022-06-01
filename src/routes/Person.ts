import express from "express";
import controller from "../controllers/Person";

const router = express.Router();

router.get("/person", controller.getPerson);

module.exports = router;
