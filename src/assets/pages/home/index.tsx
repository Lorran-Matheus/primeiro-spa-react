import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import bg from "../../img/bg.png";
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHightlight } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHightlight>
              Bem-vindo ao PulseWave,
              <br />
            </TitleHightlight>
            a rede social onde a batida nunca para.
          </Title>
          <TextContent>
            Aqui, fãs e produtores de música eletrônica se conectam para
            descobrir, divulgar e compartilhar eventos ao vivo — de raves
            underground a grandes festivais. Crie seu perfil, siga artistas e
            promotores, publique seus próprios eventos e explore o que está
            rolando na sua cidade ou ao redor do mundo.
          </TextContent>
          <Button
            title="Começar agora"
            variant="Secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={bg} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
