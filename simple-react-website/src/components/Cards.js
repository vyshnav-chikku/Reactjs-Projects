import React from "react";
import Card_item from "./Card_item";
import "./Card.css";
import img1 from "./images/flyboard.jpg";
import img2 from "./images/dolphin.jpg";
import img3 from "./images/scuba.jpeg";
import img4 from "./images/snorkelling_maldives.jpg";
import img5 from "./images/banana_boat_ride.jpg";

function cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <Card_item
              src={img1}
              text="Fly Boarding in Maldives"
              label="Adventure"
              path="/services"
            />

            <Card_item
              src={img5}
              text="Banana Boat Ride in Maldives"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards_items">
            <Card_item
              src={img3}
              text="Scuba Diving Course in Maldives"
              label="Adventure"
              path="/services"
            />
            <Card_item
              src={img4}
              text="Snorkelling In Maldives"
              label="Adventure"
              path="/services"
            />
            <Card_item
              src={img2}
              text="Dolphin Watching In Maldives"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default cards;
