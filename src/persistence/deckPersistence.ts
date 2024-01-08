import {deckController} from "../controller/deckController";
import {cardController} from "../controller/cardController";

export const deckPersistence= {
    async NewDeck(req:any,res:any) {
        try{
            const {deckName,userId}=req.body

            const nd= await deckController.createDeck(deckName,userId);
            if (nd) {
                res.status(201).json({message:'Deck created',nd});
            }
        } catch(error) {
            console.error('Error in creation : ',error);
            res.status(500).json({error : "ISE"});
        }
    },

    async findAllDecks(req:any,res:any) {
        try{
            const userId = parseInt(req.params['userId'],10);
            const fd=await deckController.findAllDecks(userId);
            if (fd !== null ) {
                res.status(201).json({decks:fd});
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
    async deleteDeck(req:any,res:any){
        try{
            const deckId=parseInt(req.params['deckId'],10);
            const dc = await deckController.deleteDeck(deckId);
            if(dc) {
                res.status(201).json({message: 'Deck Deleted'});
            }
        }catch(error) {
            res.status(500).json({error:"ISE"});
        }
    }
}