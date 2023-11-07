import { Div, Titulo } from "./styled";

function TelaPrincipal( {setTelaAtual}) {
  const deslogar = () => {
    // validação de logout ainda será visto mais pra frente no curso
    setTelaAtual("telaLogin")
  }

  return (
      <Div>
          <Titulo>Tela Principal</Titulo>
          <p>Boas-vindas à aplicação!</p>
          <button onClick={deslogar}>Deslogar</button>
      </Div>
  )
}

export default TelaPrincipal;