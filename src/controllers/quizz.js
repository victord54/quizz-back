// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import database from "../utils/database/database.js";
import NotImplementedError from "../utils/errors/NotImplementedError.js";
import Response from "../utils/response.js";

/**
 * Endpoint for signing up a user with some infos and return an access and refresh token
 * @param {Express.Request} req
 * @param {Express.Response} res Sends the access and refresh token
 * @param {Express.Request} next Passes the error to the next middleware to handle it.
 */
export async function get(req, res, next) {
    try {
        // Get the questions from the database
        let query = await database.executeQuery(
            "SELECT * FROM question ORDER BY RAND() LIMIT 10;",
        );
        const response = new Response("success", query);
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

export async function create(req, res, next) {
    try {
        throw new NotImplementedError();
    } catch (err) {
        next(err);
    }
}

export async function remove(req, res, next) {
    try {
        throw new NotImplementedError();
    } catch (err) {
        next(err);
    }
}
