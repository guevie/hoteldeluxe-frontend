import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
// import { withRoomConsumer } from "../context";
import {withRoomConsumer} from '../context'

import Loading from "./Loading";

function RoomsContainer({ context}) {
  const { loading, sortedRooms, rooms } = context
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

//autrement

// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../context'
// import Loading from './Loading'

//  function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                (value) =>  {
//                 //    console.log(value);
//                 //ici se trouve le probleme
//                 const {loading,sortedRooms,rooms} = value
//                 if(loading){
//                     return <Loading />
//                 }
//                    return (
//                     <div>
//                     hello romms container
//                     <RoomsFilter rooms= {rooms} />
//                     <RoomsList rooms={sortedRooms}/>
//                 </div>
//                    )
//                }
//             }
//         </RoomConsumer>

//     )
// }

// export default RoomsContainer
