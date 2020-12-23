import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
import Title from "./Title";

class FuturesChambres extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Nos chambres" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FuturesChambres;
