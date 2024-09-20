import express from 'express';
import publicRoute from './src/routes/public.js';
import  privateRoute from './src/routes/private.js';
import { auth } from './src/middlewares/auth.js';
const app=express()

app.use(express.json())
app.use('/',publicRoute)
app.use('/',auth,privateRoute)

//app.use('/',)
app.listen(3000,()=>console.log('Server is running'))