import React, { FC } from "react";
import catalog from "../../style/Catalog.module.scss";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../assets/card";
import like from "../../assets/like.png";
const Card: FC = () => {
  const image: string[] = [image1, image2, image3, image4, image5, image6];
  const name: string[] = [
    "SALE",
    "Свеча Fruits ",
    "Flory candles",
    "Adele brand",
    "Сandle patal",
    "Свеча Flowers ",
  ];
  const p1: string[] = [
    "Свечи классик в ",
    "Ароматическая свеча с",
    "Ice matcha latte",
    "Свечи из соевого воска с",
    "Соевый воск",
    "Ароматическая свеча с",
  ];
  const p2: string[] = [
    "фарфоровой форме",
    "кусочками голубики",
    "Ice latte",
    "сухоцветами",
    "золото, серебро",
    "лепестками роз",
  ];
  const cost: number[] = [460, 660, 830, 740, 780, 880];
  return (
    <div className={catalog.card}>
      <div className={catalog.cardcont}>
        {image.map((item, index) => (
          <div className={catalog.cardimg}>
            <img className={catalog.like} src={like} />
            <img className={catalog.item} src={item} key={index} />
            <div className={catalog.textcont}>
              <h1>{name[index]}</h1>
              <p className={catalog.p1}>{p1[index]}</p>
              <p className={catalog.p2}>{p2[index]}</p>
              <p className={catalog.cost}>{cost[index] + "р."}</p>
            </div>
            <button>В корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
