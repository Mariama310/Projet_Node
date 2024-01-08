
import {Sequelize} from "sequelize";
import sequelize from "./dbconfig";
import express from "express";
import {syncDb} from "./dbsync";
import userRoutes from "../src/routes/projectRoutes";
import cors from "cors";
import path from "path";
const Card=require('../src/entity/cardEntity');
const Deck= require('../src/entity/deckEntity')
const User=require('../src/entity/userEntity');
const app = express();
const port = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: [
        "http://localhost:4200"
    ], credentials: true}));
app.use(express.static(path.join(__dirname,'./dist/web3')));


app.use("/api",userRoutes);


const router=express.Router();

(async() => {
    try{
        await sequelize.authenticate();
        console.log("Connection ok");

        await syncDb();
        console.log("Db synced");

        app.listen(port,() => {
            console.log(`Server is running on port ${port}`);})
    }
    catch(err) {
        console.error('Error : '+err);
    }
})();
