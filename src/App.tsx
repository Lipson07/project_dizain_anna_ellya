import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "@fontsource/italiana";
import Main from "./components/pages/Main";
import Footer from "./components/Footer";
import Catalog from "./components/pages/Catalog";
import Moredost from "./components/pages/Moredost";
import More from "./components/pages/More";
import Corzina from "./components/pages/Corzina";
const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/delivery" element={<Moredost />} />
        <Route path="/more" element={<More />} />
        <Route path="/corzina" element={<Corzina />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
