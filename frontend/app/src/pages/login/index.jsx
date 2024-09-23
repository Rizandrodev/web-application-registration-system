import { useRef } from "react"
import { Link,useNavigate } from "react-router-dom"
import api from "../../services/api"
export function Login(){
    const emailRef=useRef()
    const SenhaRef=useRef()
    const navigate=useNavigate()

    async function handlesubmmit(event){
        event.preventDefault();
        try{
            const {data:token}=await api.post('/login',{
                email:emailRef.current.value,
                password:SenhaRef.current
            
            })
            localStorage.setItem(token,'token')
            navigate('/list')
        }catch(err){
            alert("erro no login",err)
        }
    }
    return(
        
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 ">Login</h2>       
            <form className="flex flex-col gap-5" onSubmit={handlesubmmit}>
                <input placeholder="Email" type="email"  className="w-full px-2 border border-gray-300 bg-white rounded-s-none focus:outline"  />
                <input placeholder="Senha" type="password" className="w-full px-2 border border-gray-300  bg-white rounded- focus:outline"   />
                
                <button className="w-full  min-w-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-300" >Logasr</button>              </form>
        </div>
    )
}