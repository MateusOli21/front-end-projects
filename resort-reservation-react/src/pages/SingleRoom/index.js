import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { RoomContext } from "../../Context/RoomContext";

import defaultBcg from "../../assets/images/room-1.jpeg";
import SectionTitle from "../../components/SectionTitle";
import BackgroundBanner from "../../components/BackgroundBanner";
import Banner from "../../components/Banner";

import {
  ContainerError,
  RoomContainer,
  RoomImages,
  Img,
  RoomInfos,
  ContentTitle,
  DescriptionSection,
  InfoSection,
  ExtraSection,
  ExtraList,
} from "./styles";

export default function SingleRoom(props) {
  const [roomState] = useState({
    room: props.match.params.room,
    defaultBcg,
  });

  let { getRoom } = useContext(RoomContext);
  const room = getRoom(roomState.room);

  if (!room) {
    return (
      <ContainerError>
        <Banner title="Quarto não encontrado...">
          <Link to="/" className="btn-primary">
            Voltar para página inicial
          </Link>
        </Banner>
      </ContainerError>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [mainImg, ...defaultImg] = images;

  return (
    <div>
      <BackgroundBanner banner="roomsBanner" img={mainImg}>
        <Banner title={name}>
          <Link to="/rooms" className="btn-primary">
            Voltar para quartos
          </Link>
        </Banner>
      </BackgroundBanner>
      <RoomContainer>
        <SectionTitle title="Informações do quarto" />
        <ContentTitle>Imagens</ContentTitle>
        <RoomImages>
          {defaultImg.map((item, index) => (
            <Img key={index} src={item} alt={name} />
          ))}
        </RoomImages>
        <RoomInfos>
          <DescriptionSection>
            <ContentTitle>Detalhes</ContentTitle>
            <p>{description}</p>
          </DescriptionSection>

          <InfoSection>
            <ContentTitle>Sobre</ContentTitle>
            <p>Preço: R${price}</p>
            <p>Tamanho: {Math.round(size / 10.764)} m²</p>
            <p>
              Capacidade máxima:{" "}
              {capacity > 1 ? `${capacity} pessoas` : `${capacity} pessoa`}
            </p>
            <p>{pets ? "Animais permitidos" : "Animais não são permitidos"}</p>
            <p>{breakfast && "Café da manhã incluso"}</p>
          </InfoSection>

          <ExtraSection>
            <ContentTitle>Extras</ContentTitle>
            <ExtraList>
              {extras.map((item, index) => (
                <li key={index}> {item}</li>
              ))}
            </ExtraList>
          </ExtraSection>
        </RoomInfos>
      </RoomContainer>
    </div>
  );
}
