import express, { Router } from 'express';
import {userPersistence} from "../persistence/userpersistence";
import userEntity from "../entity/userEntity";
import {cardPersistence} from "../persistence/cardPersistence";
import {deckPersistence} from "../persistence/deckPersistence";
const router = express.Router();

router.post('/users', userPersistence.NewUser);
router.delete('/users/:userId',userPersistence.deleteUser);
router.get("/users/login/:userEmail",userPersistence.findUser);

router.post("/cards",cardPersistence.NewCard);
router.get('/cards/get/:deckId',cardPersistence.findAllCards);
router.delete('/cards/delete/:cardId',cardPersistence.deleteCard)

router.post("/decks",deckPersistence.NewDeck);
router.get('/decks/get/:userId',deckPersistence.findAllDecks);
router.delete('/decks/delete/:deckId',deckPersistence.deleteDeck);
export default router;