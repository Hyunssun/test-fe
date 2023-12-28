import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Join, Login } from "./contents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/main/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
