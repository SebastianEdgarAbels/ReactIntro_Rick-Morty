import React from "react";
import "../views/Home.css";
import BasicModal from "./BasicModal";

function Cards({ cardChar }) {
  return (
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={cardChar.image} alt={cardChar.name} />
      </div>
      <div className="flip-card-back">
        <p>{cardChar.name}</p>
        <BasicModal
          name={cardChar.name}
          img={cardChar.image}
          specie={cardChar.species}
          status={cardChar.status}
        />
      </div>
    </div>
  );
}

export default Cards;
