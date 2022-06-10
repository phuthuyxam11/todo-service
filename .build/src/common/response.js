"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStruct = exports.BodyResponse = exports.Response = void 0;
const httpResponseCode_1 = require("../enum/httpResponseCode");
class Response {
}
exports.Response = Response;
class BodyResponse {
    constructor(statusCode, code, message, data) {
        this.statusCode = statusCode;
        this.code = code;
        this.message = message;
        this.data = data;
    }
    toString() {
        return {
            statusCode: this.statusCode,
            body: JSON.stringify({
                code: this.code,
                message: this.message,
                data: this.data,
            }),
        };
    }
}
exports.BodyResponse = BodyResponse;
class ResponseStruct {
    static success(data) {
        const result = new BodyResponse(httpResponseCode_1.HttpResponseCode.success, httpResponseCode_1.HttpResponseCode.success, 'success', data);
        return result.toString();
    }
    static error(message, code = httpResponseCode_1.HttpResponseCode.serverError) {
        const result = new BodyResponse(httpResponseCode_1.HttpResponseCode.serverError, code, message, null);
        return result.toString();
    }
}
exports.ResponseStruct = ResponseStruct;
//# sourceMappingURL=response.js.map