export default class Response {
    constructor(status, data) {
        this.status = status;
        if (status == "error")
            this.error = {
                data,
            };
        else this.payload = data;
    }
}
