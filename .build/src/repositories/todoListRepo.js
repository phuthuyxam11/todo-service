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
exports.TodoListRepo = void 0;
const AWS = __importStar(require("aws-sdk"));
const config_1 = require("../config");
const config = new config_1.Config();
const docClient = new AWS.DynamoDB.DocumentClient({ region: config.AWS_REGION });
class TodoListRepo {
    constructor() {
        this.create = async (params) => {
            try {
                return await docClient.put(params).promise();
            }
            catch (error) {
                // @ts-ignore
                return new Error(error);
            }
        };
        this.getAll = async (params) => {
            try {
                return await docClient.scan(params).promise();
            }
            catch (error) {
                // @ts-ignore
                return new Error(error);
            }
        };
        this.get = async (params) => {
            try {
                return await docClient.get(params).promise();
            }
            catch (error) {
                // @ts-ignore
                return new Error(error);
            }
        };
        this.update = async (params) => {
            try {
                return await docClient.update(params).promise();
            }
            catch (error) {
                // @ts-ignore
                return new Error(error);
            }
        };
        this.query = async (params) => {
            try {
                return await docClient.query(params).promise();
            }
            catch (error) {
                // @ts-ignore
                return new Error(error);
            }
        };
        this.delete = async (params) => {
            try {
                return await docClient.delete(params).promise();
            }
            catch (error) {
                // @ts-ignore
                return new Error(error);
            }
        };
    }
}
exports.TodoListRepo = TodoListRepo;
//# sourceMappingURL=todoListRepo.js.map