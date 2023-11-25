import React from "react";
import './Card.css';

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <div className="card-details">
        <h2 className="text-title">{`${id} - ${name}`}</h2>
        <p className="text-body">{username}</p>
      </div>
        <button onClick={addFav} className="card-button">Add fav</button>
    </div>
  );
};

export default Card;
