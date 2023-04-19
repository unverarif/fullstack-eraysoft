import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Panini from "./pages/Panini";
import Kimlik from "./pages/Kimlik";
import { Help } from "./pages/Help";
import Referances from "./pages/Referances";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Footerv2 } from "./components/Footerv2";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/panini" element={<Panini />} />
          <Route path="/idscanner" element={<Kimlik />} />
          <Route path="/about" element={<About />} />
          <Route path='/help' element={<Help />} />
          <Route path="/referances" element={<Referances />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
        
        < Footerv2 />
      </BrowserRouter>
        
    </div>
  );
}

export default App;
