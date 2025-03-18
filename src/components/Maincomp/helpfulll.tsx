import React from "react";
import main from "../../style/main.module.scss";
import { line, card1, card2 } from "../../assets/main";
const Helpfulll = () => {
  return (
    <div className={main.helpfull}>
      <div className={main.helpfullheader}>
        <img src={line} />
        <h1>Полезности</h1>
        <img src={line} />
      </div>
      <div className={main.helpfullcont}>
        <div className={main.card}>
          <img src={card1} />
          <p>
            Мы рады предложить вам несколько простых рекомендаций для
            максимально полного наслаждения нашими ароматическими свечами.
          </p>
          <button>Подробнее</button>
        </div>
        <div className={main.card}>
          <img src={card2} />
          <p>
            Мы собрали для вас несколько полезных рекомендаций, которые помогут
            вам максимально использовать ваши диффузоры.
          </p>
          <button className={main.butt}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default Helpfulll;
