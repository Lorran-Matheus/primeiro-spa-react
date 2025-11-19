import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

import { api } from "../../../services/api";

const Login = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Email não é válido")
        .required("Preencha o email e envie"),
      password: yup
        .string()
        .min(3, "No mínimo 3 caracteres")
        .required("Preencha o senha e envie"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      console.log('retorno api', data)
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert(`          EMAIL: jose@gmail.com
          SENHA: 123456`);
      }
    } catch {
      alert("Lembre de rodar o db.json no console... 'npm run api'");
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name={"email"}
              control={control}
              errorMessage={errors?.email?.message}
              placeholder="Email"
              leftIcon={<MdEmail />}
            />
            <Input
              name={"password"}
              control={control}
              errorMessage={errors?.password?.message}
              placeholder="Senha"
              type="password"
              leftIcon={<MdLock />}
            />
            <Button
              title="Entrar"
              variant="secondary"
              size={30}
              type="submit"
            />
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
