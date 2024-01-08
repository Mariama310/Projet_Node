import sequelize from "../../config/dbconfig";
import { DataTypes, Model } from 'sequelize';
import Card from "./cardEntity";
import User from "./userEntity";

const Deck= sequelize.define('decks',{
    deckName: DataTypes.TEXT
})
Deck.hasMany(Card, {as:'deck_cards'});

(async() => {
    await Deck.sync();
})();

export default Deck;