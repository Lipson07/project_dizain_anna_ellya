import React, { FC } from "react";
import corzina from "../../style/Corzina.module.scss";
import { line } from "../../assets/main";
import vector from "../../assets/card/Vector (3).png";
import { Link } from "react-router";
import Korzina from "../Korzina/Korzina";
const Corzina: FC = () => {
  return (
    <div className={corzina.corzina}>
      <div className={corzina.corzinaheader}>
        <div className={corzina.corzinaheadercont1}>
          <img src={line} />
          <h1>Корзина</h1>
          <img src={line} />
        </div>
        <div className={corzina.arrow}>
          <Link to="/">
            <img src={vector} />
          </Link>
        </div>
      </div>

      <div className={corzina.corzinacont}>
        <Korzina />
        <h1>Сумма к оплате:</h1>
        <button>Оформить заказ</button>
      </div>
    </div>
  );
};

export default Corzina;
