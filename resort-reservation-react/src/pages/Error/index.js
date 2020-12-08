import React from "react";
import { Link } from "react-router-dom";

import BackgroundBanner from "../../components/BackgroundBanner";
import Banner from "../../components/Banner";

export default function Error() {
  return (
    <BackgroundBanner>
      <Banner
        title="Página não encontrada"
        subtitle="Não foi possível encontrar a página desejada"
      >
        <Link to="/" className="btn-primary">
          Voltar para página inicial
        </Link>
      </Banner>
    </BackgroundBanner>
  );
}
