import Card from "../entity/cardEntity";
import {deckController} from "./deckController";
import Deck from "../entity/deckEntity";

interface CardAttributes{
    id:number,
    recto:string,
    verso:string,
    deckName:string,
    status: string
}
interface DeckAttributes {
    id:number,
    deckName:string
}

export const cardController= {
    async createCard(recto:string,verso:string,deckId:number){
        try{
            return await Card.create({
                recto,
                verso,
                deckId:deckId});

        } catch(error) {
            console.error('Error creating user : ', error);
            return null;
        }
    },
    async getAllCards(deckId:number) {
        try {
            const card=await Card.findAll({where:{deckId:deckId}});
            console.log(card.map(card => card.get()));
            return card.map(card => card.get());

        } catch(error) {
            throw(error);
        }
    },

    async deleteCard(cardId:number) {
        try {
            return await Card.destroy({
                where:{
                    id:cardId
                },
            });
        }catch (err) {
            throw(err);
        }
    }

}