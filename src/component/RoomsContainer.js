import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer } from '../context'
import Loading from './Loading'
 function RoomsContainer() {
    return (
        <div>
            hello romms container 
            <RoomsFilter />
            <RoomsList />
        </div>
    )
}

export default RoomsContainer
