import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
  const {state}= useContextGlobal()

  return (
      <div className="App" style={{backgroundColor: state.theme ? 'pink' : "green"}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/dentista/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path='*' element={<h1>Page not found - Error 404</h1>}/>
        </Routes>
        <Footer />
      </div>

  );
}

export default App;
