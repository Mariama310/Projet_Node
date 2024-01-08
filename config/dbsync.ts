
import sequelize from "./dbconfig";


export const syncDb=async() => {
    try{

        await sequelize.sync();

    } catch (error) {
        console.error('Database couldn\'t sync')
    }
};



