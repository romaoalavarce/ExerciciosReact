import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './paginas/Home'
import Exercicio1 from './paginas/Exercicio1'
import Exercicio2 from './paginas/Exercicio2'
import Exercicio3 from './paginas/Exercicio3'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicio1" element={<Exercicio1 />} />
        <Route path="/exercicio2" element={<Exercicio2 />} />
        <Route path="/exercicio3" element={<Exercicio3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App