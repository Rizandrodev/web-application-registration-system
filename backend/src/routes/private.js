import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import  express  from "express";
const router=express.Router(); ;

//listar os usuarios

router.get("/users-list",async (req,res)=>{
    try{
    const users=await prisma.user.findMany();
    res.status(201).json(users);
    }catch(err){
        res.status(500).json({message:`falha no servidor ${err}`})
    }
})
export default router