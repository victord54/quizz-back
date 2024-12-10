import express from "express";
import { login, logout, refresh, signup } from "../controllers/auth.js";

const router = express.Router();

/**
 * Route for signing up a user with some infos and return an access and refresh token
 */
router.get("/signup", signup);

/**
 * Route for log in a user with email and password and return an access and refresh token
 */
router.get("/login", login);

/**
 * Route for refreshing the access token with a refresh token
 */
router.post("/refresh", refresh);

/**
 * Route for logging out a user by deleting the refresh token from the database
 */
router.post("/logout", logout);

export default router;
