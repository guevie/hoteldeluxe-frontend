//rfc creer une fonction
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import Services from '../component/Services'
import FuturesChambres from "../component/FuturesChambres";
function Accueil() {
  return (
    <>
    <Hero>
      <Banner
        title="Chambre de luxe"
        subtitle="les chambres de luxe commence àpartir de 300€"
      >
        <Link to="/rooms" className="btn-primary">
          Autres chambres
        </Link>
      </Banner>
    </Hero>
    <FuturesChambres />
    <Services />
    
    
    </>
  );
}

export default Accueil 
