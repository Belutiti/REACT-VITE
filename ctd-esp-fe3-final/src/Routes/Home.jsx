import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { Link } from "react-router-dom"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [dentistas, setDentistas] = useState([]);

  const apiCall = () => {
    axios.get(url).then((data) => setDentistas(data.data));
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <main className="">
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
