// import { MdEmail, MdLock } from "react-icons/md";
// import { IoPerson } from "react-icons/io5";
import { Link } from "react-router";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { Container, Column, Title, Paragraph, Wrapper } from "./styles";

const Register = () => {
  const { control } = useForm({
    mode: "onChange",
  });

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>Crie sua conta e comece a divulgar seus eventos!</Title>
          <Paragraph>
            Conecte-se com pessoas interessadas no que você faz, alcance mais
            público e mantenha todos informados sobre suas próximas atrações.
            Preencha seus dados e entre para a comunidade que faz os melhores
            eventos acontecerem.
          </Paragraph>
        </Column>
        <Wrapper>
          <h1>Comece agora!</h1>
          <p>Crie sua conta e comece sua divulgação.</p>
          <form action="push">
            <Input
              name={"text"}
              // leftIcon={<IoPerson />}
              control={control}
              placeholder="Nome completo"
            />
            <Input name={"email"}
              // leftIcon={<MdEmail />}
              control={control}
              placeholder="E-mail" />
            <Input name={"password"} 
            // leftIcon={<MdLock />} 
            control={control} 
            placeholder="Senha" />
          </form>
          <div className="button-container">
            <Button title="Criar minha conta" variant="Secondary" />
          </div>

          <div className="text-container">
            <div className="check-container">
              <input type="checkbox" />
              <h3>
                Declaro que aceito as Políticas de Privacidade e os Termos de
                Uso.
              </h3>
            </div>

            <p>
              Já tenho conta.
              <Link className="hok" to="/login">
                Fazer Login
              </Link>
            </p>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export { Register };
