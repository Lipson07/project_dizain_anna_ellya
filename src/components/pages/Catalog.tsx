import React from "react";
import { line } from "../../assets/main";
import catalog from "../../style/Catalog.module.scss";
import Card from "../Catalogcomp/Card";
const Catalog = () => {
  return (
    <div className={catalog.catalog}>
      <div className={catalog.catalogheader}>
        <div className={catalog.catalogheadercont1}>
          <img src={line} />
          <h1>Каталог</h1>
          <img src={line} />
        </div>
        <div className={catalog.catalogheadercont2}>
          <h1>Свечи </h1>
          <h1> Подарочные наборы</h1>
          <h1>Диффузор для дома</h1>
          <h1>Подставки</h1>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Catalog;
