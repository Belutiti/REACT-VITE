import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ name, username, id }) => {
const [favArray, setFavArray] = useState([]);

  useEffect(() => {
    const obtenerLs = localStorage.getItem("favoritos");
    if (obtenerLs) {
      setFavArray(JSON.parse(obtenerLs));
    }
  }, []);

  const addFav = () => {
    const favInfo = { id, name, username };
    const nuevaFavArray = [...favArray, favInfo];
    localStorage.setItem("favoritos", JSON.stringify(nuevaFavArray));
    setFavArray(nuevaFavArray)
  };

  return (
    <div className="card">
      <div className="card-details">
        <h2 className="text-title">{`${id} - ${name}`}</h2>
        <p className="text-body">{username}</p>
      </div>
      <button onClick={addFav} className="card-button">
        Add fav
      </button>
    </div>
  );
};

export default Card;
