import CustomError from "./CustomError.js";

export default class SQLError extends CustomError {
    constructor(message = "SQL error", sql = "", statusCode = 500) {
        super(message, statusCode);
        this.sql = sql;
    }
}
