import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "@fontsource/italiana";
import Main from "./components/pages/Main";
const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
