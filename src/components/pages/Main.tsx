import React from "react";

import main from "../../style/main.module.scss";
import Firstblock from "../Maincomp/Firstblock";
import About from "../Maincomp/About";
import Packaging from "../Maincomp/Packaging";
import Helpfulll from "../Maincomp/helpfulll";

const Main = () => {
  return (
    <main className={main.main}>
      <Firstblock />
      <About />
      <Packaging />
      <Helpfulll />
    </main>
  );
};

export default Main;
