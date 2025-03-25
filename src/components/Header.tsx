import React, { FC, useState } from "react";
import "../style/header.scss";
import logo from "../assets/Group 37.png";
import like from "../assets/like.png";
import shoppingcart from "../assets/shopping-cart.png";
import { Link } from "react-router";
const Header: FC = () => {
  const [text, setText] = useState<string | null>(null);
  const me = (id: string) => {
    setText(id);
  };
  const mo = (s: null) => {
    setText(s);
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="title">
        <h1 className="italiana">Aroma Bliss</h1>
      </div>
      <div className="icons">
        <div className="icon">
          <div>
            <img
              className="img"
              src={like}
              onMouseEnter={() => me("1")}
              onMouseOut={() => mo(null)}
            ></img>
            <h1 className={text == "1" ? "textheader" : "imgtxt"}>Избраное</h1>
          </div>
          <Link to="/corzina">
            <div>
              <img
                className="img"
                src={shoppingcart}
                onMouseEnter={() => me("2")}
                onMouseOut={() => mo(null)}
              ></img>

              <h1 className={text == "2" ? "textheader1" : "imgtxt"}>
                Корзина
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
