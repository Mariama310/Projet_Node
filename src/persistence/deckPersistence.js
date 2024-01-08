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
exports.deckPersistence = void 0;
const deckController_1 = require("../controller/deckController");
exports.deckPersistence = {
    NewDeck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { deckName, userId } = req.body;
                const nd = yield deckController_1.deckController.createDeck(deckName, userId);
                if (nd) {
                    res.status(201).json({ message: 'Deck created', nd });
                }
            }
            catch (error) {
                console.error('Error in creation : ', error);
                res.status(500).json({ error: "ISE" });
            }
        });
    },
    findAllDecks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params['userId'], 10);
                const fd = yield deckController_1.deckController.findAllDecks(userId);
                if (fd !== null) {
                    res.status(201).json({ decks: fd });
                }
                else {
                    res.status(201).json(null);
                }
            }
            catch (err) {
                if (err.status === 404) {
                    res.status(201).json(null);
                }
                else {
                    res.status(500).json({ error: "ISE" });
                }
            }
        });
    },
    deleteDeck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deckId = parseInt(req.params['deckId'], 10);
                const dc = yield deckController_1.deckController.deleteDeck(deckId);
                if (dc) {
                    res.status(201).json({ message: 'Deck Deleted' });
                }
            }
            catch (error) {
                res.status(500).json({ error: "ISE" });
            }
        });
    }
};
