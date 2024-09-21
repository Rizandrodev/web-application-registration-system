import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import { Cadastro } from "./pages/Cadastro"
import { Lista } from "./pages/lista"
/*"email":"Lucas@gmail.com",
  "password":"78d5d54d" */
function App() {
  return (
    
    <BrowserRouter>
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold text-center">Sistema de Cadastro</h1>
    </header>
    <Routes>
        <Route path="/" element={<Cadastro/>} />
        <Route path="/login" element={<Cadastro/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
