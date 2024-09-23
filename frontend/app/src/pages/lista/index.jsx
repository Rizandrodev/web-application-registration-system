import api from "../../services/api"
import { useEffect,useState } from "react"

export function Lista(){
    const [allUsers,SetAllusers]=useState()

    const loadUser= async()=>{
        try{
            const token=localStorage.getItem('token')
            const {data:{user}}=await api.get('/users-list',{
                headers:{Authorization:`Bearer ${token}`}
            })
            SetAllusers(user)
        }catch(error){
            alert(error)
        }
    }
    useEffect(()=>{
        loadUser()
    })
    return(
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border-gray-300 rounded-md shadow-md">
            <h2 className="bg-gray-100 font-bold mb-6 text-center text-green-800" >Listar Usuarios</h2>
            <ul>
                {allUsers && allUsers.length>0 && 
                    allUsers.map((user)=>(
                     <li className="bg-gray-100 p-4 rounded-md " key={user.id}>
                        <p> Id:{user.id}</p>
                        <p>Nome {user.name}</p>
                        <p>Email{user.email}</p>
                     </li>   
                    ))}
            </ul>
        </div>
    )
}