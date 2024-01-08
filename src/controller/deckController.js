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
exports.deckController = void 0;
const deckEntity_1 = __importDefault(require("../entity/deckEntity"));
exports.deckController = {
    createDeck(deckName, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield deckEntity_1.default.create({
                    deckName,
                    userId: userId
                });
            }
            catch (error) {
                console.error('Error creating deck', error);
                return null;
            }
        });
    },
    findDeck(deckId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield deckEntity_1.default.findByPk(deckId);
            }
            catch (error) {
                console.error('Error finding deck : ', error);
                return null;
            }
        });
    },
    findDeckByName(deckName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [deck, created] = yield deckEntity_1.default.findOrCreate({ where: { deckName } });
                return deck;
            }
            catch (error) {
                console.error('Error finding deck by name', error);
                return null;
            }
        });
    },
    findAllDecks(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deck = yield deckEntity_1.default.findAll({ where: { userId: userId } });
                return deck.map(deck => deck.get());
            }
            catch (error) {
                throw (error);
            }
        });
    },
    deleteDeck(deckId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield deckEntity_1.default.destroy({
                    where: {
                        id: deckId
                    },
                });
            }
            catch (err) {
                throw (err);
            }
        });
    }
};
