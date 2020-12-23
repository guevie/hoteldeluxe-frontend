import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../component/Title";

const getUnique = (items,value) => {
    return [...new Set(item.map(item => item[value]))]    
}
function RoomsFilter({rooms}) {
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
  let types = getUnique(rooms,'type')
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">type de chambre</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {}
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  );
}

export default RoomsFilter;
