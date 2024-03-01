import mainRight from "./media/main right.png";
import mainLeft from "./media/main left.png";
import IFBBPro from "./media/IFBBPro_png.png";
import Footer from "./components/Footer";
import Home from "./pages/Home";
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
