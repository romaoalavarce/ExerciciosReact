import { useState } from 'react'

function App() {
  const [valor1, setValor1] = useState("")
  const [valor2, setValor2] = useState("")
  const [resultado, setResultado] = useState(null)

  function calcular() {
    const numero1 = Number(valor1)
    const numero2 = Number(valor2)

    setResultado({
      soma: numero1 + numero2,
      subtracao: numero1 - numero2,
      multiplicacao: numero1 * numero2,
      divisao: numero1 / numero2
    })
  }

  return (
    <div>
      <h1>Caixa do Mercado</h1>

      <input
        type="number"
        value={valor1}
        onChange={(e) => setValor1(e.target.value)}
      />

      <input
        type="number"
        value={valor2}
        onChange={(e) => setValor2(e.target.value)}
      />

      <button onClick={calcular}>
        Calcular
      </button>

      {resultado && (
        <div>
          <p>Soma: {resultado.soma}</p>
          <p>Subtração: {resultado.subtracao}</p>
          <p>Multiplicação: {resultado.multiplicacao}</p>
          <p>Divisão: {resultado.divisao}</p>
        </div>
      )}
    </div>
  )
}

export default App

