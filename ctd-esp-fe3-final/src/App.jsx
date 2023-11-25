import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
