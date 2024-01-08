import Deck from "../entity/deckEntity";
import {where} from "sequelize";
import Card from "../entity/cardEntity";

interface DeckAttributes{
    id:number,
    deckName:string,
    userId:number
}

export const deckController= {
    async createDeck(deckName:string,userId:number) {
        try{
            return await Deck.create({
                deckName,
                userId:userId
            });
        } catch(error) {
            console.error('Error creating deck',error);
            return null;
        }
    },
    async findDeck(deckId: number) {
        try{
            return await Deck.findByPk(deckId);
        } catch(error) {
            console.error('Error finding deck : ',error);
            return null;
        }
    }
    ,

    async findDeckByName(deckName:string){
        try{
            const[deck ,created]=await Deck.findOrCreate({where:{deckName}});
            return deck;
        } catch(error) {
            console.error('Error finding deck by name',error);
            return null;
        }

    },
    async findAllDecks(userId:number) {
        try {
            const deck=await Deck.findAll({where:{userId:userId}});
            return deck.map(deck => deck.get());

        } catch(error) {
            throw(error);
        }



    },
    async deleteDeck(deckId:number){
        try {
            return await Deck.destroy({
                where:{
                    id:deckId
                },
            });
        }catch (err) {
            throw(err);
        }
    }
}