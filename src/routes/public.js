import express from 'express'
import bcrypt from  'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
const router=express.Router()

const prisma=new PrismaClient()

const JWT_SCRET=process.env.JWT_SCRET


router.get('test',(req,res)=>{
    res.send('test')
})


//cadastro
router.post('/sign',async(req,res)=>{
    try{
    const {name,email,password}=req.body
    const salt=await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(password,salt)

    const user=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:hashpassword
        }
    })
    res.status(201).send({message:user})
    }catch(err){
    res.status(400).send({message:err})
    }
})

//login
router.post('/login',async(req,res)=>{
    try{
        const {email,senha}=req.body
        
        const user=await prisma.user.findUnique({ 
            where:{
                email:email
            }
        })
        if(!user){
            res.status(400).send({message:`usuario nao encontrado`})
        }
        const compararenha=bcrypt.compare(senha,user.password)

        if(!compararenha){
            res.status(401).send({message:`senha inconrrecta`})
        }
        const token=jwt.sign({id:user.id},JWT_SCRET,{expiresIn:'7d'})
        res.status(200).send({user,token})

    }catch(err){
    res.status(400).send({message:message.err})
    }

})

export  default router;