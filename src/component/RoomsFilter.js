import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../component/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  //  console.log(context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  let types = getUnique(rooms, "type");
  //ajouter toute les options
  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Recherche d'une chambre" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">type chambre</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
            {/* <option value="single">Seule</option> */}
          </select>
        </div>
        {/* end select type */}

        {/* select client */}
        <div className="form-group">
          <label htmlFor="capacity">client</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
            {/* <option value="single">Seule</option> */}
          </select>
        </div>
        {/* end select client */}

        {/* prix de chambre  */}
        <div className="form-group">
          <label htmlFor="price">prix chambre {price}€</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* fin prix de chambre  */}

        {/* taille et prix  */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-input">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />

            
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* fin taille et prix  */}
        {/* supplémentaire */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">petit déjeuner</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">animaux</label>
          </div>
        </div>
        {/* fin supplémentaire */}
      </form>
    </section>
  );
}

export default RoomsFilter;
