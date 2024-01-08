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
exports.cardPersistence = void 0;
const cardController_1 = require("../controller/cardController");
exports.cardPersistence = {
    NewCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { recto, verso, deckId } = req.body;
                const nc = yield cardController_1.cardController.createCard(recto, verso, deckId);
                if (nc) {
                    res.status(201).json({ message: 'Card created', nc });
                }
            }
            catch (error) {
                console.error('Error in creation', error);
                res.status(500).json({ error: "ISE" });
            }
        });
    },
    findAllCards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deckId = parseInt(req.params['deckId'], 10);
                const fc = yield cardController_1.cardController.getAllCards(deckId);
                if (fc !== null) {
                    res.status(201).json({ cards: fc });
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
    deleteCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cardId = parseInt(req.params['cardId'], 10);
                const dc = yield cardController_1.cardController.deleteCard(cardId);
                if (dc) {
                    res.status(201).json({ message: 'Card Deleted' });
                }
            }
            catch (error) {
                res.status(500).json({ error: "ISE" });
            }
        });
    }
};
