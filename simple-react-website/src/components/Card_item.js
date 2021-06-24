import React from "react";
import { Link } from "react-router-dom";

function Card_item(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic__wrapper" data={props.label}>
            <img
              src={props.src}
              alt="Travel Image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__items__info">
            <h5 className="cards__items__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card_item;
