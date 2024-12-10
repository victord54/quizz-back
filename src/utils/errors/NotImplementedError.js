import CustomError from './CustomError.js';

export default class NotImplementedError extends CustomError {
    constructor(message = 'Not implemented') {
        super(message, 501);
    }
}