import express from 'express';
import { Prisma } from '@prisma/client';
import bycrpt, { compare } from 'bcrypt'
const app=express()
const router=express.Router()
const prisma=new Prisma()

router.get(3000,(req,res)=>{
    res.send('test')
})


//cadastro
router.post('/cadastro',async(req,res)=>{
    try{
    const {nome,email,senha}=req.body
    const salt=await bycrpt.genSalt(10)
    const hashpassword=await bycrpt.hash(senha,salt)
    const user=await prisma.user.create({
        data:{
            nome,
            email,
            senha:hashpassword,
        }
    })
    res.status(201).send({user})
    }catch(err){
    res.status(400).send({message:message.err})
    }
})

//login

export  default router;