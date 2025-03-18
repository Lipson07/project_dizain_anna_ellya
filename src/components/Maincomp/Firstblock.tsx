import React, { FC } from "react";
import main from "../../style/main.module.scss";
import {
  mainfon,
  el,
  image,
  linezavitok,
  div1,
  ellipse,
  kaply,
  svechi,
} from "../../assets/main";
import { Link } from "react-router";
const Firstblock: FC = () => {
  const imge = [div1, kaply, svechi];
  const texh1t = [
    "Ручная работа",
    "Натуральный состав",
    "Многогранные ароматы",
  ];
  const textp = [
    "Все свечи изготавливаются вручную, начиная от создания баночек из гипса, заканчивая заливкой соевого воска с ароматической композицией.",
    "В составе используем натуральный соевый воск, качественные ароматические масла США и Франции, а также деревянный фитиль, который издает приятный треск.",
    "Уникальные ноты, имеющие международные сертификаты качества. Ароматы, которые сделают ваш вечер особенным.",
  ];
  const classnm = [main.div1, main.kaply, main.svechi];

  return (
    <>
      <img className={main.imgfon} src={mainfon} />
      <div className={main.imgcurs}>
        <img className={main.el} src={el} id="e1" alt="" />

        <img className={main.image} src={image} id="e1" alt="" />
      </div>
      <div className={main.txtfoncont}>
        <div>
          <h1>Aroma Bliss</h1>
          <p>Это про уют в </p>
          <p>каждом доме</p>
          <Link to="/catalog">
            <button>Каталог</button>
          </Link>
        </div>
      </div>
      <div className={main.linezavitok}>
        <img src={linezavitok} alt="" />
        <div className={main.content}>
          {imge.map((img, index) => (
            <div className={classnm[index]} key={index}>
              <img src={img} alt="" />
              <div className={main.div2}>
                <h1>{texh1t[index]}</h1>
                <p>{textp[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Firstblock;
