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
const dbconfig_1 = __importDefault(require("../../config/dbconfig"));
const sequelize_1 = require("sequelize");
const cardEntity_1 = __importDefault(require("./cardEntity"));
const Deck = dbconfig_1.default.define('decks', {
    deckName: sequelize_1.DataTypes.TEXT
});
Deck.hasMany(cardEntity_1.default, { as: 'deck_cards' });
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield Deck.sync();
}))();
exports.default = Deck;
