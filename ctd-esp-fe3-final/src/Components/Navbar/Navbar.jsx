import React, { useContext } from "react";
//import ThemeToggle from "../ThemeToggle/ThemeToggle";
//import { ContextGlobal } from "../utils/global.context";
import { Link } from "react-router-dom";

const Navbar = () => {
 // const { theme } = useContext(ContextGlobal);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favs">Favoritos</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to='/dentista/:id'>Detalles</Link>
      {/* <ThemeToggle /> */}
    </nav>
  );
};

export default Navbar;
