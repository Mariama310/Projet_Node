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
const dbconfig_1 = __importDefault(require("./dbconfig"));
const express_1 = __importDefault(require("express"));
const dbsync_1 = require("./dbsync");
const projectRoutes_1 = __importDefault(require("../src/routes/projectRoutes"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const Card = require('../src/entity/cardEntity');
const Deck = require('../src/entity/deckEntity');
const User = require('../src/entity/userEntity');
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: [
        "http://localhost:4200"
    ], credentials: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, './dist/web3')));
app.use("/api", projectRoutes_1.default);
const router = express_1.default.Router();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbconfig_1.default.authenticate();
        console.log("Connection ok");
        yield (0, dbsync_1.syncDb)();
        console.log("Db synced");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (err) {
        console.error('Error : ' + err);
    }
}))();
