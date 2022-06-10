"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoItem = exports.updateTodoList = exports.getTodo = exports.allTodoList = exports.createTodoList = void 0;
const todoListService_1 = require("./services/todoListService");
const todoListValidator_1 = require("./validator/todoListValidator");
const httpResponseCode_1 = require("./enum/httpResponseCode");
const response_1 = require("./common/response");
const todoListService = new todoListService_1.TodoListService();
const headers = {
    "content-type": "application/json",
};
const createTodoList = async (event) => {
    const reqBody = JSON.parse(event.body);
    // validate
    const todoListValidator = new todoListValidator_1.TodoListValidator(event.body);
    try {
        await todoListValidator.createValidate();
    }
    catch (err) {
        // @ts-ignore
        const errRes = new response_1.BodyResponse(httpResponseCode_1.HttpResponseCode.forbidden, httpResponseCode_1.HttpResponseCode.forbidden, "validation not passed", err.errors);
        return errRes.toString();
    }
    try {
        const result = await todoListService.create(reqBody);
        if (result instanceof Error) {
            return response_1.ResponseStruct.error("has error: " + result);
        }
        return response_1.ResponseStruct.success(result);
    }
    catch (err) {
        return response_1.ResponseStruct.error("has error: " + err);
    }
};
exports.createTodoList = createTodoList;
const allTodoList = async (event) => {
    try {
        const result = await todoListService.all();
        if (result instanceof Error) {
            return response_1.ResponseStruct.error("has error: " + result);
        }
        return response_1.ResponseStruct.success(result);
    }
    catch (err) {
        return response_1.ResponseStruct.error("has error: " + err);
    }
};
exports.allTodoList = allTodoList;
const getTodo = async (event) => {
    var _a;
    try {
        const result = await todoListService.find((_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id);
        if (result instanceof Error) {
            return response_1.ResponseStruct.error("has error: " + result);
        }
        return response_1.ResponseStruct.success(result);
    }
    catch (err) {
        return response_1.ResponseStruct.error("has error: " + err);
    }
};
exports.getTodo = getTodo;
const updateTodoList = async (event) => {
    var _a;
    const id = (_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id;
    const reqBody = JSON.parse(event.body);
    // validate
    const todoListValidator = new todoListValidator_1.TodoListValidator(event.body);
    try {
        await todoListValidator.updateValidate();
    }
    catch (err) {
        // @ts-ignore
        const errRes = new response_1.BodyResponse(httpResponseCode_1.HttpResponseCode.forbidden, httpResponseCode_1.HttpResponseCode.forbidden, "validation not passed", err.errors);
        return errRes.toString();
    }
    try {
        let result = await todoListService.update(id, reqBody);
        if (result instanceof Error) {
            return response_1.ResponseStruct.error("has error: " + result);
        }
        return response_1.ResponseStruct.success(result);
    }
    catch (err) {
        return response_1.ResponseStruct.error("has error: " + err);
    }
};
exports.updateTodoList = updateTodoList;
const deleteTodoItem = async (event) => {
    var _a;
    const id = (_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id;
    try {
        let result = await todoListService.delete(id);
        if (result instanceof Error) {
            return response_1.ResponseStruct.error("has error: " + result);
        }
        return response_1.ResponseStruct.success(result);
    }
    catch (err) {
        return response_1.ResponseStruct.error("has error: " + err);
    }
};
exports.deleteTodoItem = deleteTodoItem;
//# sourceMappingURL=handlers.js.map