import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = ({post, perfil, name, time, title, description, hashs, like}) => {
  return (
    <>
      <CardContainer>
        <ImageBackground src={post} />
        <Content>
          <UserInfo>
            <UserPicture src={perfil}/>
            <div>
              <h4>{name}</h4>
              <p>Há {time} minutos atrás</p>
            </div>
          </UserInfo>
          <PostInfo>
            <h4>{title}</h4>
            <p>
              {description}... <a href="#">Saiba Mais</a>
            </p>
          </PostInfo>
          <HasInfo>
            <h4>
              {hashs}
            </h4>
            <p>
              <FiThumbsUp /> {like}
            </p>
          </HasInfo>
        </Content>
      </CardContainer>
    </>
  );
};

export { Card };
