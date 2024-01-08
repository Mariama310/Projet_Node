import sequelize from "../../config/dbconfig";
import { DataTypes, Model } from 'sequelize';
import Deck from "./deckEntity";

const Card = sequelize.define("card",{
    recto: {
        type: DataTypes.TEXT,
        allowNull : false,
    },
    verso : {
        type: DataTypes.TEXT,
        allowNull : false,
    },
    state: {
        type:DataTypes.TEXT,
        validate:{
            isIn:[['New','To work on','Review']],
        },
        defaultValue:"New"
    }
});

(async() => {
    await Card.sync();
})();

export default Card;