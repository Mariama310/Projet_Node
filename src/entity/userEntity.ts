import sequelize from "../../config/dbconfig";
import { DataTypes, Model } from 'sequelize';
import Deck from "./deckEntity";

const User=sequelize.define("user",{
    firstName: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    age: DataTypes.INTEGER,
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate: {
            isEmail:true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.hasMany(Deck,{as:'user_decks'});


(async() => {
    await User.sync();
})();

export default User;