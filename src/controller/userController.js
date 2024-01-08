"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userEntity_1 = __importDefault(require("../entity/userEntity"));
exports.userController = {
    createUser(firstName, lastName, age, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield userEntity_1.default.create({
                    firstName,
                    lastName,
                    age,
                    email,
                    password,
                });
            }
            catch (error) {
                console.error('Error creating user:', error);
                return null;
            }
        });
    },
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield userEntity_1.default.destroy({
                    where: {
                        id: userId
                    },
                })
                    .then((rowsDeleted) => {
                    console.log(`Deleted ${rowsDeleted} records`);
                    return 1;
                })
                    .catch((error) => {
                    console.error('Error deleting record User : ', error);
                });
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    },
    findUserByMail(mail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield userEntity_1.default.findOne({ where: { email: mail } });
                if (user) {
                    return user;
                }
            }
            catch (error) {
                console.error("Error userFindByMail", error);
            }
        });
    }
};
