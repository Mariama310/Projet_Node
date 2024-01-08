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
exports.cardController = void 0;
const cardEntity_1 = __importDefault(require("../entity/cardEntity"));
exports.cardController = {
    createCard(recto, verso, deckId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield cardEntity_1.default.create({
                    recto,
                    verso,
                    deckId: deckId
                });
            }
            catch (error) {
                console.error('Error creating user : ', error);
                return null;
            }
        });
    },
    getAllCards(deckId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const card = yield cardEntity_1.default.findAll({ where: { deckId: deckId } });
                console.log(card.map(card => card.get()));
                return card.map(card => card.get());
            }
            catch (error) {
                throw (error);
            }
        });
    },
    deleteCard(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield cardEntity_1.default.destroy({
                    where: {
                        id: cardId
                    },
                });
            }
            catch (err) {
                throw (err);
            }
        });
    }
};
