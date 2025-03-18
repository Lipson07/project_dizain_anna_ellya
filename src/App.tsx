import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "@fontsource/italiana";
import Main from "./components/pages/Main";
import Footer from "./components/Footer";
import Catalog from "./components/pages/Catalog";
const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
