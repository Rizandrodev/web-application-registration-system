import express from 'express';
import publicRoute from './src/routes/public.js';
const app=express()

app.use(express.json())
app.use('/',publicRoute)
//app.use('/',)
app.listen(3000,()=>console.log('Server is running'))