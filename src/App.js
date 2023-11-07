import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";


const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [telaAtual, setTelaAtual] = useState("telaLogin");


  // const telaSelecionada = telaAtual === "telaLogin" ? (
  //   <TelaLogin setTelaAtual={setTelaAtual} />
  // ) : (
  //   <TelaCadastro  setTelaAtual={setTelaAtual}/>
  // )

 const selecionarTela = () => {
  switch(telaAtual){

    case "telaLogin" :
    return <TelaLogin setTelaAtual={setTelaAtual}/> 

    case "telaCadastro" :
      return <TelaCadastro setTelaAtual={setTelaAtual}/> 

     case "telaPrincipal"  :
      return <TelaPrincipal setTelaAtual={setTelaAtual}/>

   default: 
   return <TelaLogin />
  }

 }

 const telaSelecionada = selecionarTela();
  return (
    <MainContainer >
      <GlobalStyled />

      {telaSelecionada}

     
    </MainContainer>
  );
}

export default App;



 // if (telaAtual === "telaLogin") {
  //   return <TelaLogin />
  // }
  // if (telaAtual === "telaCadastro") {
  //   return <TelaCadastro />
  // }
  // if (telaAtual === "telaPrincipal") {
  //   return <TelaPrincipal />
  // }

  // switch(telaAtual){

  //   case "telaLogin":
  //   return <TelaLogin telaAtual={telaAtual}/>

  //   case "telaCadastro":
  //   return <TelaCadastro/>

  //   case "telaPrincipal":
  //     return <TelaPrincipal />

  //   default: 
  //     return <>Pagina nao encontrada</>
  //   }