import {Sequelize} from "sequelize";


const sequelize = new Sequelize('learningfactdb', 'learningdbuser', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port:5433,
    logging:console.log,
});

export default sequelize;
//module.exports=sequelize;