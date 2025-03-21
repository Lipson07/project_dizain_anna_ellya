import React, { FC } from "react";
import catalog from "../../style/Catalog.module.scss";
import { setCategory, selectCategory } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import {
  imagec1,
  imagec2,
  imagec3,
  imagec4,
  name,
  p1,
  p11,
  p12,
  p13,
  p2,
  p21,
  p22,
  p23,
  cost,
  cost1,
  cost2,
  cost3,
} from "../../assets/card";
import like from "../../assets/like.png";
const Card: FC = () => {
  const category = useSelector(selectCategory);

  const images: string[][] = [imagec1, imagec2, imagec3, imagec4];

  const ps: string[][] = [p1, p11, p12, p13];

  const pss: string[][] = [p2, p21, p22, p23];
  const costs: number[][] = [cost, cost1, cost2, cost3];
  return (
    <div className={catalog.card}>
      <div className={catalog.cardcont}>
        {images[category].map((item, index) => (
          <div className={catalog.cardimg}>
            <img className={catalog.like} src={like} />
            <img className={catalog.item} src={item} key={index} />
            <div className={catalog.textcont}>
              <h1>{name[index]}</h1>
              <p className={catalog.p1}>{ps[category][index]}</p>
              <p className={catalog.p2}>{pss[category][index]}</p>
              <p className={catalog.cost}>{costs[category][index] + "р."}</p>
            </div>
            <button>В корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
