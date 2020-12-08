import React from "react";
import { Link } from "react-router-dom";

import BackgroundBanner from "../../components/BackgroundBanner";
import Banner from "../../components/Banner";
import RoomsSearch from "../../components/RoomsSearch";

export default function Rooms() {
  return (
    <>
      <BackgroundBanner banner="roomsBanner">
        <Banner title="Escolha um de nossos quartos">
          <Link to="/" className="btn-primary">
            Voltar para página inicial
          </Link>
        </Banner>
      </BackgroundBanner>
      <RoomsSearch />
    </>
  );
}
