"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListService = void 0;
const uuid_1 = require("uuid");
const priorityCode_1 = require("../enum/priorityCode");
const Repo = __importStar(require("../repositories/todoListRepo"));
const config_1 = require("../config");
const config = new config_1.Config();
const db = config.TABLE_NAME;
const todoListRepo = new Repo.TodoListRepo();
class TodoListService {
    async create(data) {
        // biz create todo list
        data.priority = data.priority ? data.priority : priorityCode_1.PriorityCode.normal;
        const todoListItem = Object.assign(Object.assign({}, data), { todoId: (0, uuid_1.v4)(), createAt: String(new Date()) });
        const todoList = {
            TableName: String(db),
            Item: todoListItem,
        };
        let createData = await todoListRepo.create(todoList);
        return createData instanceof Error ? createData : todoListItem;
    }
    async all() {
        // biz get todo list
        const todoList = {
            TableName: String(db),
            Select: "ALL_ATTRIBUTES",
        };
        const result = await todoListRepo.getAll(todoList);
        return result instanceof Error ? result : (result.Items ? result.Items : []);
    }
    async find(id) {
        // biz find todo list
        const todo = {
            TableName: String(db),
            Key: {
                todoId: id
            }
        };
        return await todoListRepo.get(todo);
    }
    async update(id, data) {
        // biz update todo item
        const todoItem = await this.find(id);
        if (Object.keys(todoItem).length === 0)
            return new Error("Todo Item not found");
        const todoRecord = {
            TableName: String(db),
            Key: {
                todoId: id
            },
            UpdateExpression: `set #title = :title, #description = :description, #priority = :priority, #order = :order`,
            ExpressionAttributeNames: {
                "#title": "title",
                "#description": "description",
                "#priority": "priority",
                "#order": "order"
            },
            ExpressionAttributeValues: {
                // @ts-ignore
                ":title": data.title ? data.title : todoItem.title,
                // @ts-ignore
                ":description": data.description ? data.description : todoItem.description,
                // @ts-ignore
                ":priority": data.priority ? data.priority : todoItem.priority,
                // @ts-ignore
                ":order": data.order ? data.order : todoItem.order
            },
            ReturnValues: "ALL_NEW"
        };
        return await todoListRepo.update(todoRecord);
    }
    async delete(id) {
        // biz delete todo list
        const todo = {
            TableName: String(db),
            Key: {
                todoId: id
            }
        };
        return await todoListRepo.delete(todo);
    }
}
exports.TodoListService = TodoListService;
//# sourceMappingURL=todoListService.js.map