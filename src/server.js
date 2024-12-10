import express from 'express';
import http from 'http';
import cors from 'cors';

import AuthRoute from './routes/auth.js';
import QuizzRoute from './routes/quizz.js';
import logfile from './utils/logfile.js';
import Response from './utils/response.js';
import database from './utils/database/database.js';

/**
 * Server class
 */
export default class Server {
    /**
     * Constructor for the server
     */
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.server = http.createServer(this.app);

        // ============================ MIDDLEWARES ===========================
        /**
         * Middleware for allow cross origin requests
         */
        this.app.use(cors());

        /**
         * Middleware for parsing the body of the request
         */
        this.app.use(express.json());

        /**
         * Middleware for logging the request
         */
        this.app.use(logfile.logRequest);

        // ========================== ROUTES ==================================
        /**
         * Route for testing the server
         */
        this.app.get('/', async (req, res, next) => {
            try {
                const response = new Response('success', {
                    message: 'Hello world!',
                });
                res.status(200).json(response);
            } catch (err) {
                next(err);
            }
        });

        /**
         * Part of the route for the authentication
         */
        this.app.use('/auth', AuthRoute);

        /**
         * Part of the route for the quizz
         */
        this.app.use('/quizz', QuizzRoute);

        /**
         * Route for handling 404 errors
         */
        this.app.use('*', (req, res) => {
            res.status(404).json({
                message: 'Not found',
            });
        });

        // ========================== ERROR HANDLING ==========================
        /**
         * Middleware for logging the error
         */
        this.app.use(logfile.logError);

        /**
         * Middleware for handling errors
         */
        this.app.use((err, req, res, next) => {
            console.error(err);
            return res.status(err.statusCode || 500).json({
                error: err.name || 'Error',
                message: err.message || 'Internal server error',
            });
        });
    }

    /**
     * Start the server
     */
    async start() {
        try {
            await database.testConnection();
            console.log('database connection success');
            await database.settingsSQL();
            console.log('database settings success');
            this.server.listen(this.port || 3000, () => {
                console.log(`listening on port: ${this.port || 3000}`);
            });
        } catch (error) {
            console.log(error);
        }
    }
}