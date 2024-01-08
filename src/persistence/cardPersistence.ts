import {cardController} from "../controller/cardController";
import {deckController} from "../controller/deckController";

export const cardPersistence= {
    async NewCard(req:any,res:any) {
        try{
            const{recto,verso,deckId}=req.body;

            const nc= await cardController.createCard(recto,verso,deckId);
            if (nc) {
                res.status(201).json({message:'Card created',nc})
            }
        } catch(error) {
            console.error('Error in creation',error);
            res.status(500).json({error:"ISE"});
        }
    },
    async findAllCards(req:any,res:any) {
        try{
            const deckId = parseInt(req.params['deckId'],10);
            const fc=await cardController.getAllCards(deckId);
            if (fc !== null ) {
                res.status(201).json({cards:fc});
            }
            else {
                res.status(201).json(null);
            }
        } catch(err:any) {
            if (err.status === 404) {
                res.status(201).json(null);
            }
            else {
                res.status(500).json({error: "ISE"});
            }
        }

    },
    async deleteCard(req:any,res:any) {
        try{
            const cardId=parseInt(req.params['cardId'],10);
            const dc = await cardController.deleteCard(cardId);
            if(dc) {
                res.status(201).json({message: 'Card Deleted'});
            }
        }catch(error) {
            res.status(500).json({error:"ISE"});
        }
    }
}