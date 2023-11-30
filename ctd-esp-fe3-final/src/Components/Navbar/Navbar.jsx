import ThemeToggle from "../ThemeToggle/ThemeToggle";

import { Link } from "react-router-dom";

const Navbar = () => {

return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favs">Favoritos</Link>
      <Link to="/contacto">Contacto</Link>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
