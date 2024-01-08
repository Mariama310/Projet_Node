"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('learningfactdb', 'learningdbuser', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
    logging: console.log,
});
exports.default = sequelize;
//module.exports=sequelize;
