//rcc pour des classes
import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
// import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../component/StyledHero";

class ChambreSeule extends Component {
  constructor(props) {
    super(props);
    //  console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  //   componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    //   console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>aucune chambre de ce genre n'a pu être trouvée... </h3>
          <Link to="/rooms" className="btn-primary">
            retour aux chambres
          </Link>
        </div>
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
    const [mainImg,...defaultImg] = images
    // console.log(defaultImg);
    return(
    <>
    <StyledHero img={mainImg || this.state.defaultBcg}>
      <Banner title={`${name} room`}>
        <Link to="/rooms" className="btn-primary">
          retour aux chambres
        </Link>
      </Banner>
    </StyledHero>;
    <section className="single-room">
        <div className="single-room-images">
            {defaultImg.map((item,index) =>{
                return <img key={index} src={item} alt={name} />
            })}
        </div>
        <div className="single-room-info">
            <article className="desc">
                <h3>détails</h3>
                <p>{description}</p>
            </article>
            <article className="info">
                <h3>information</h3>
                <h6>prix   : {price}€</h6>
                <h6>taille : {size}€ SQFT</h6>
                <h6>
                    capacité maximum : {
                        capacity > 1 ? `${capacity}  personnes `:
                        `${capacity} personne`
                    }
                </h6>
                <h6>{pets ? "Les animaux de companie acceptés" :"Les animaux de compagnie ne sont pas autorises" }</h6>
                    <h6>{breakfast && "petit déjeuner inclus "}</h6>
            </article>
        </div>
    </section>
    <section className="room-extra">
        <h6>Suppléments</h6>
        <ul className="extras">
            {extras.map((item,index) =>{
                return <li key={index}>- {item} </li>
            })}
        </ul>
    </section>
    </>
    )}
}

export default ChambreSeule;
