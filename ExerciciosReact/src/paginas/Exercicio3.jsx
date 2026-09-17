import { useState } from 'react'
import { Link } from 'react-router-dom'

function Exercicio3() {
  const opcoes = ['Pedra', 'Papel', 'Tesoura']

  const [escolhaJogador, setEscolhaJogador] = useState('')
  const [escolhaMaquina, setEscolhaMaquina] = useState('')
  const [resultado, setResultado] = useState('')
  const [vitorias, setVitorias] = useState(0)
  const [derrotas, setDerrotas] = useState(0)
  const [empates, setEmpates] = useState(0)

  function jogar(escolha) {
    const escolhaAleatoria =
      opcoes[Math.floor(Math.random() * opcoes.length)]

    setEscolhaJogador(escolha)
    setEscolhaMaquina(escolhaAleatoria)

    if (escolha === escolhaAleatoria) {
      setResultado('Empate!')
      setEmpates(empates + 1)
    } else if (
      (escolha === 'Pedra' && escolhaAleatoria === 'Tesoura') ||
      (escolha === 'Papel' && escolhaAleatoria === 'Pedra') ||
      (escolha === 'Tesoura' && escolhaAleatoria === 'Papel')
    ) {
      setResultado('Você venceu!')
      setVitorias(vitorias + 1)
    } else {
      setResultado('A máquina venceu!')
      setDerrotas(derrotas + 1)
    }
  }

  return (
    <div>
      <h1>Pedra, Papel e Tesoura</h1>

      <p>Escolha sua jogada:</p>

      <button onClick={() => jogar('Pedra')}>
        Pedra
      </button>

      <button onClick={() => jogar('Papel')}>
        Papel
      </button>

      <button onClick={() => jogar('Tesoura')}>
        Tesoura
      </button>

      <p>Você escolheu: {escolhaJogador}</p>

      <p>Máquina escolheu: {escolhaMaquina}</p>

      <h2>{resultado}</h2>

      <p>Vitórias: {vitorias}</p>
      <p>Derrotas: {derrotas}</p>
      <p>Empates: {empates}</p>

      <p>
        <Link to="/">
          <button>Voltar para Home</button>
        </Link>
      </p>
    </div>
  )
}

export default Exercicio3
