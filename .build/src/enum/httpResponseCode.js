"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponseCode = void 0;
var HttpResponseCode;
(function (HttpResponseCode) {
    HttpResponseCode[HttpResponseCode["success"] = 200] = "success";
    HttpResponseCode[HttpResponseCode["serverError"] = 500] = "serverError";
    HttpResponseCode[HttpResponseCode["unAuthorize"] = 401] = "unAuthorize";
    HttpResponseCode[HttpResponseCode["badRequest"] = 400] = "badRequest";
    HttpResponseCode[HttpResponseCode["forbidden"] = 403] = "forbidden";
})(HttpResponseCode = exports.HttpResponseCode || (exports.HttpResponseCode = {}));
//# sourceMappingURL=httpResponseCode.js.map