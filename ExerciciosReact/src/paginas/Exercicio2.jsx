import { useState } from 'react'

function Exercicio2() {
  const [numeroSecreto, setNumeroSecreto] = useState(
    Math.floor(Math.random() * 100) + 1
  )

  const [palpite, setPalpite] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [tentativas, setTentativas] = useState(0)

  function verificarPalpite() {
    const numero = Number(palpite)

    setTentativas(tentativas + 1)

    if (numero === numeroSecreto) {
      setMensagem("Acertou!")
    } else if (numero < numeroSecreto) {
      setMensagem("O número secreto é maior!")
    } else {
      setMensagem("O número secreto é menor!")
    }
  }

  return (
    <div>
      <h1>Jogo de Adivinhação</h1>

      <p>Escolhi um número entre 1 e 100.</p>

      <input
        type="number"
        value={palpite}
        onChange={(e) => setPalpite(e.target.value)}
      />

      <button onClick={verificarPalpite}>
        Tentar
      </button>

      <p>{mensagem}</p>

      <p>Tentativas: {tentativas}</p>
    </div>
  )
}

export default Exercicio2

