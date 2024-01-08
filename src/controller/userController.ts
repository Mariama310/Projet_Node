import sequelize from "../../config/dbconfig";
import UserEntity from "../entity/userEntity";
import User from "../entity/userEntity";

interface UserAttributes {
    id:number,
    firstName:string,
    lastName:string,
    age:number,
    email:string,
    password:string
}
export const userController= {
    async createUser(firstName:string,lastName:string,age:number, email:string, password:string) {
        try {
            return await User.create({
                firstName,
                lastName,
                age,
                email,
                password,
            });
        } catch (error) {
            console.error('Error creating user:', error);
            return null;
        }
    },

    async deleteUser(userId: number){
        try{
            await User.destroy({
                where:{
                    id: userId
                },
            })
                .then((rowsDeleted) => {
                    console.log(`Deleted ${rowsDeleted} records`);
                    return 1;
                })
                .catch((error) => {
                    console.error('Error deleting record User : ',error);
                })
        } catch(error){
            console.error(error);
            return null;
        }
    },

    async findUserByMail(mail:string) {
        try{
            let user=await User.findOne({where:{email:mail}}) as UserAttributes|null;
            if(user){
                return user;
            }
        } catch (error) {
            console.error("Error userFindByMail",error);
        }
    }
};


