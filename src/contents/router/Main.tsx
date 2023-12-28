import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Join } from "../Join";
import { Login } from "../Login";
import { Footer, Header } from "../layout";
import { Gallery, Home, Info } from "../main";

export const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
};
