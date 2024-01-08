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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPersistence = void 0;
const userController_1 = require("../controller/userController");
exports.userPersistence = {
    NewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, age, email, password } = req.body;
                const nu = yield userController_1.userController.createUser(firstName, lastName, age, email, password);
                if (nu != null) {
                    res.status(201).json(nu);
                }
            }
            catch (error) {
                console.error('Error in creation : ', error);
                res.status(500).json({ error: 'ISE' });
            }
        });
    },
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params.userId, 10);
                const du = yield userController_1.userController.deleteUser(userId);
                if (du != null) {
                    res.status(201).json({ message: 'User deleted' });
                }
            }
            catch (error) {
                console.error('Error in deletion : ', error);
                res.status(500).json({ error: "ISE" });
            }
        });
    },
    findUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.params.userEmail;
                console.log('email: ', email);
                const user = yield userController_1.userController.findUserByMail(email);
                if (user === null) {
                    console.log("No user in the db");
                    res.status(201).json({ message: "No user in the db", data: 0 });
                }
                else {
                    res.status(201).json(user);
                }
            }
            catch (error) {
                res.status(500).json({ error: "ISE" });
            }
        });
    }
};
