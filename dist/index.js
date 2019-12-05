"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./infra/server"));
const tag_model_1 = require("./domain/tag.model");
tag_model_1.TagModel.sync();
const server = new server_1.default(4000);
server.start();
