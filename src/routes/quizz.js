import express from "express";
import { get, create, remove } from "../controllers/quizz.js";

const router = express.Router();

/**
 * Route for retrieving all the quizz from the database.
 */
router.get("/get", get);

/**
 * Route for creating a new quizz question.
 */
router.post("/create", create);

/**
 * Route for deleting a quizz question.
 */
router.delete("/remove", remove);

export default router;
