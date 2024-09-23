import { useRef } from "react"
import { Link } from "react-router-dom"
import api from '../../services/api'

export function Cadastro(){
    const nameRef=useRef()
    const emailRef=useRef()
    const PasswordRef=useRef()

    async function handleSubmmit(event){
        event.preventDefault();
        try{
            await api.post('/sign',{
                name:nameRef.current.value,
                email:emailRef.current.value,
                password:PasswordRef.current.value
            })
            alert('cadastrado com sucesso')
        }catch(err){
            alert('erro ao cadastrar ',err)
        }
    }
    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8  border  border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmmit}>
                <input ref={nameRef} placeholder="Nome"   type="text"    className="w-full px-2 border border-gray-300 rounded- focus:outline"/>
                <input ref={emailRef} placeholder="Email"  type="email"    className="w-full px-2 border border-gray-300 rounded- focus:outline"/>
                <input ref={PasswordRef} placeholder="Senha"  type="password" className="w-full px-2 border border-gray-300 rounded- focus:outline"/>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-300">Cadastra se</button>  
            </form>
            <Link to='/login' className="text-blue-700 hover: block  text-center">Ja tem uma conta</Link>
        </div>
    )
}