import React, { useEffect, useState, useContext } from "react";
//import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card/Card";

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const [favoritosLs, setFavoritosLs] = useState([]);

  useEffect(() => {
    const cardStorage = localStorage.getItem("favoritos");
    if (cardStorage) {
      const cardParse = JSON.parse(cardStorage);
      setFavoritosLs(cardParse);
    }
  }, []);

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoritosLs.map((favoritoLs) => (
          <Card
            key={favoritoLs.id}
            name={favoritoLs.name}
            username={favoritoLs.username}
            id={favoritoLs.id}
            >
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favs;
