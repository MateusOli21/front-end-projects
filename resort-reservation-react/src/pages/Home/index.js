import React from "react";
import { Link } from "react-router-dom";

import BackgroundBanner from "../../components/BackgroundBanner";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import FeaturedRooms from "../../components/FeaturedRooms";

export default function Home() {
  return (
    <div>
      <BackgroundBanner>
        <Banner
          title="Os melhores quartos para as melhores férias"
          subtitle="Encontre o quarto ideal para você em locais paradisíacos"
        >
          <Link to="/rooms" className="btn-primary">
            Veja quartos disponíveis
          </Link>
        </Banner>
      </BackgroundBanner>
      <Services />
      <FeaturedRooms />
    </div>
  );
}
