import React, { FC } from "react";
import line from "../assets/img/main/line.png";
import "../style/footer.scss";
import logo from "../assets/Group 37.png";
import qr from "../assets/qr.png";
const Footer: FC = () => {
  return (
    <div className="footer">
      <img className="line" src={line} />
      <div className="footercont">
        <div className="logofoot">
          <img src={logo} />
        </div>
        <div className="info">
          <div className="infocont">
            <div className="infotitle">
              <p>Контакты:</p>
              <p>+79251235675</p>
              <p>+79251235871</p>
            </div>
            <div className="infotitle1">
              <p>Оплата и доставка</p>
              <p>Пользовательское соглашение </p>
            </div>
          </div>
          <div className="infocont1">
            <p>
              ИП Архипова Анна Игоревна ИНН 540702875002 630132,
              Россия,г.Москва. ул.Ломоносовский пр, д 107,{" "}
            </p>
            <p className="mail">
              По вопросам и предлодениям: info@aromabliss.ru
            </p>
          </div>
        </div>
        <div className="qr">
          <img src={qr} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
