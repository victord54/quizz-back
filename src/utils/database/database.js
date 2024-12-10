import { createPool } from "mysql2/promise";
import SQLError from "../errors/SQLError.js";

/**
 * Create a pool of connection to the database
 */
const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
});

/**
 * Execute a query to the database and return the result
 * @param {string} sql SQL query
 * @param {*} values Values to insert in the query
 * @returns {Promise<RowDataPacket[]>} Result of the query
 */
export async function executeQuery(sql, values) {
    try {
        const [rows] = await pool.query(sql, values);
        return rows;
    } catch (error) {
        throw new SQLError(error.message, error.sql, error.statusCode);
    }
}

/**
 * Start a transaction
 */
export async function commitTransaction() {
    try {
        await executeQuery("COMMIT");
    } catch (error) {
        throw error;
    }
}

/**
 * Rollback a transaction
 */
export async function rollbackTransaction() {
    try {
        await executeQuery("ROLLBACK");
    } catch (error) {
        throw error;
    }
}

/**
 * Test the connection to the database
 */
export async function testConnection() {
    try {
        executeQuery('SELECT "PONG" AS PING');
    } catch (error) {
        throw error;
    }
}

/**
 * Set the settings of the database connection like the sql mode and the autocommit mode to false
 */
export async function settingsSQL() {
    try {
        executeQuery(
            'SET SESSION sql_mode = "ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"',
        );
        // executeQuery("SET SESSION autocommit = 0"); // We don't care about autocommit.
    } catch (error) {
        throw error;
    }
}

export default {
    executeQuery,
    commitTransaction,
    rollbackTransaction,
    testConnection,
    settingsSQL,
};
