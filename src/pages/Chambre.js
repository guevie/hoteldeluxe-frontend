//rafc créer de constant
import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";

export const Chambre = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Autres chambres">
        <Link to="/" className="btn-primary">
          retour à l'Accueil
        </Link>
      </Banner>
    </Hero>
  );
};

export default Chambre;
