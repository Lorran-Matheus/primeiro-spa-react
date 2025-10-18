import { MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import banner2 from "../../img/banner2.png";
import banner3 from "../../img/banner3.png";
import banner4 from "../../img/banner4.png";
import bg from "../../img/bg.png";

import {
  Column,
  Container,
  CreateText,
  ForgetText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  TitleHightlight,
} from "./styles";

const Login = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title width={40}>
            Crie seu perfil, siga artistas e promotores, publique seus próprios
            eventos e explore o que está rolando na sua cidade ou ao redor do
            mundo.
          </Title>
          <SubtitleLogin>
            O PulseWave é mais do que uma agenda de shows: é uma comunidade que
            vive o som, o ritmo e a energia da música eletrônica.
          </SubtitleLogin>
          <TitleHightlight>
            Entre no fluxo. Sinta a vibe. Viva a experiência.
          </TitleHightlight>
          <div className="thumb">
            <img src={banner2} alt="Background" />
            <img src={banner3} alt="Background" />
          </div>
          <div className="thumb2">
            <img src={banner4} alt="Background" />
            <img src={bg} alt="Background" />
          </div>
        </Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Entre e faça a mudança.</SubtitleLogin>
          <form>
            <Input placeholder="Email" leftIcon={<MdEmail />}/>
            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="secondary" size={30} onClick={handleClickSignIn} type="Button"/>
          </form>
          <Row>
            <ForgetText>Esqueci minha senha</ForgetText>
            <CreateText>Criar Conta</CreateText>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export { Login };
