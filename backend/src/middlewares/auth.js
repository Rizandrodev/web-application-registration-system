import Jwt ,{decode} from 'jsonwebtoken'

const JWT_SCRET = process.env.JWT_SCRET

const auth=(req,res,next)=>{
    const token = req.headers.authorization
    if (!token) return res.status(401).json({message: 'No token provided'})
    try{
    const decoded = decode(token, JWT_SCRET)
    req.user = decoded
    }catch(err){
        return res.status(401).json({message: 'Token is not valid'})
    }
    next()  
}

export {auth}