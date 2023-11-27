import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import axios from "axios";
import { Link } from "react-router-dom"
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const {theme}= useContext(ContextGlobal)
  const url = "https://jsonplaceholder.typicode.com/users";
  const [dentistas, setDentistas] = useState([]);

  const apiCall = () => {
    axios.get(url).then((data) => setDentistas(data.data));
  };

  useEffect(() => {
    apiCall();
  }, []);


  return (
    <main className={theme ? 'estiloClaro' : 'estiloOscuro'}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentistas.map((dentista) => (
          <Link key={dentista.id} to={`/dentista/${dentista.id}`}>
            <Card 
              key={dentista.id}
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
            />
          </Link>
          ))}
      </div>
    </main>
  );
};

export default Home;
