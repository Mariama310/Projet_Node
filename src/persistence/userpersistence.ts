import express from "express";

import {userController} from "../controller/userController";


export const userPersistence= {
    async NewUser(req: any,res:any) {
        try{
            const{firstName,lastName,age,email,password} = req.body;

            const nu=await userController.createUser(firstName,lastName,age,email,password);
            if (nu != null){
                res.status(201).json(nu);
            }
        }catch (error) {
            console.error('Error in creation : ',error);
            res.status(500).json({error: 'ISE'});
        }
    },

    async deleteUser(req:any,res:any) {
        try {
            const userId= parseInt(req.params.userId,10);

            const du = await userController.deleteUser(userId);
            if (du!=null) {
                res.status(201).json({message:'User deleted'});
            }
        } catch(error) {
            console.error('Error in deletion : ',error);
            res.status(500).json({error:"ISE"});
        }
    },

    async findUser(req:any,res:any) {
        try{
            const email =req.params.userEmail;
            console.log('email: ',email);
            const user= await userController.findUserByMail(email);
            if (user=== null) {
                console.log("No user in the db")
                res.status(201).json({message:"No user in the db",data: 0});
            }
            else {
                res.status(201).json(user);
            }

        } catch(error){
            res.status(500).json({error:"ISE"});
        }
    }

};


