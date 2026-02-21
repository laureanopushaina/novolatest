import RoomCard from "../components/RoomCard";
import {rooms} from "../data/rooms";
import "./Rooms.css"

function Rooms(){
    return(
        <section id="rooms" className="rooms-section">
            <h2>Nuestras Habitaciones</h2>
            <div className="rooms-grid">
                {rooms.map((room)=>(
                    <RoomCard
                    key={room.id}
                    img={room.img}
                    title={room.title}
                    price={room.price}
                    description={room.description}
                    />

                ))}
            </div>
            

        </section>
    )
}

export default Rooms