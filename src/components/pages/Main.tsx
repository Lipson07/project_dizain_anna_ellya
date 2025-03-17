import React from "react";
import { mainfon, el, image } from "../../assets/main";
import main from "../../style/main.module.scss";
const Main = () => {
  return (
    <main className={main.main}>
      <img className={main.imgfon} src={mainfon} />
      <div className={main.imgcurs}>
        <img className={main.el} src={el} id="e1" alt="" />

        <img className={main.image} src={image} id="e1" alt="" />
      </div>
      <div className={main.txtfoncont}>
        <h1>Aroma Bliss</h1>
        <p>Это про уют в </p>
        <p>каждом доме</p>
        <button>Каталог</button>
      </div>
    </main>
  );
};

export default Main;
