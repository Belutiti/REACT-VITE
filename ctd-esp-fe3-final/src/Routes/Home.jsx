import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useContextGlobal();
  
  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {state.homeList.map((dentista) => (
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
