import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useContextGlobal } from "../utils/global.context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state } = useContextGlobal();

  return (
    <nav style={{backgroundColor: state.theme ? "rgba(0, 0, 0, 0.346)" : "rgb(255 255 255 / 19%)"}}>
      <div className="navDetails">
        <Link to="/">HOME</Link>
        <Link to="/favs"><span id="fav">FAVORITOS</span><span>{state.favList.length}</span></Link>
        <Link to="/contacto">CONTACTO</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
