export default class Response {
    constructor({ isOK, data, api }) {
        this.isOK = isOK;
        this.data = data;
        this.api = api;
    }
}
