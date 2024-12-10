// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import NotImplementedError from "../utils/errors/NotImplementedError.js";

/**
 * Endpoint for signing up a user with some infos and return an access and refresh token
 * @param {Express.Request} req
 * @param {Express.Response} res Sends the access and refresh token
 * @param {Express.Request} next Passes the error to the next middleware to handle it.
 */
export async function signup(req, res, next) {
    // try {
    //     // get infos from request body
    //     const { email, password } = req.body;
    //     let missingFields = "";
    //     if (!email) missingFields += "email ";
    //     if (!password) missingFields += "password";
    //     if (missingFields !== "")
    //         throw new CustomError(`Missing fields: ${missingFields}`, 400);
    // } catch (err) {
    //     next(err);
    // }
    try {
        throw new NotImplementedError();
    } catch (err) {
        next(err);
    }
}

export async function login(req, res, next) {
    try {
        throw new NotImplementedError();
    } catch (err) {
        next(err);
    }
}

export async function refresh(req, res, next) {
    try {
        throw new NotImplementedError();
    } catch (err) {
        next(err);
    }
}

export async function logout(req, res, next) {
    try {
        throw new NotImplementedError();
    } catch (err) {
        next(err);
    }
}
