import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin( {setTelaAtual} ) {
  const login = () => {
    // validação de login ainda será visto mais pra frente no curso
    setTelaAtual("telaPrincipal")
  }

  const mostrarTelaCadastro = () => {
    setTelaAtual("telaCadastro")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} />
        </StyledLabel>

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
