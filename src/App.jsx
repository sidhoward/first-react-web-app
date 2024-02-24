// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import IFBBPro from "./media/IFBBPro_png.png";
import mainRight from "./media/main right.png";
import mainLeft from "./media/main left.png";
import IFBBPro from "./media/IFBBPro_png.png";
import LandingPage from "./landingPage/LandingPage";
import Main from "./main/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import ScheduelSession from "./pages/ScheduelSession";
import Shop from "./pages/Shop";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home IFBBPro={IFBBPro} mainRight={mainRight} mainLeft={mainLeft}/>}/>
          <Route path="/scheduelsession" element={<ScheduelSession IFBBPro={IFBBPro} mainRight={mainRight} mainLeft={mainLeft}/>} />
          <Route path="/shop" element={<Shop IFBBPro={IFBBPro} mainRight={mainRight} mainLeft={mainLeft}/>} />
        </Routes>
      <Footer />
    </Router>  
  );
}

export default App;
