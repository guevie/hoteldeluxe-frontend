
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import FormConnexion from '../component/FormConnexion'

function PageConnexion() {
    return (
        <>
    <Hero>
      <Banner
        title="Chambre de luxe"
        subtitle="Page d'authentification"
      >
        {/* <Link to="/formConnexion" className="btn-primary">
          Authentification
        </Link> */}
      </Banner>
    </Hero>
    <FormConnexion />
    </>
    )
}

export default PageConnexion
