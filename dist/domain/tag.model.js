"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeCustom_1 = __importDefault(require("../infra/sequelizeCustom"));
const sequelize_1 = __importDefault(require("sequelize"));
exports.TagModel = sequelizeCustom_1.default.define('tag', {
    name: {
        type: sequelize_1.default.STRING,
        unique: true,
    },
    description: sequelize_1.default.TEXT,
    username: sequelize_1.default.STRING,
    usage_count: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
});
