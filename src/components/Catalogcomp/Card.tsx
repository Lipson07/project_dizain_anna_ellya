import React, { FC } from "react";
import catalog from "../../style/Catalog.module.scss";
import { setCategory, selectCategory } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import {
  SetId,
  selectId,
  SetTovars,
  selectTovars,
  selectPrid,
} from "../../store/corzina";
import { increment } from "../../store/kol";
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
  const id = useSelector(selectId);
  const tovar = useSelector(selectTovars);
  const dispatch = useDispatch();
  const incr = (catalog: any, index: any) => {
    dispatch(increment(`${catalog}-${index}`));
  };
  const handleClick = async (
    id: { categ: number; index: number; cost: number },
    categ: number,
    index: number,
    cost: number
  ) => {
    id = { categ, index, cost };
    dispatch(SetId(id));
    dispatch(increment(`${category}-${index}`)); // Увеличиваем счетчик

    const productId = `${category}-${index}`; // Создаем уникальный id

    // Проверяем, есть ли товар с таким productId уже в корзине
    if (
      tovar.some(
        (item) => item.id?.categ === category && item.id?.index === index
      )
    ) {
      console.log("Товар уже есть в корзине");
      return; // Если есть, выходим
    }

    const newTovar = {
      id: { categ: category, index: index, cost: cost },
      cossts: cost,

      initialCost: cost,
    }; // Формируем объект товара
    dispatch(SetTovars(newTovar)); // Добавляем товар в Redux
  };

  const images: string[][] = [imagec1, imagec2, imagec3, imagec4];

  const ps: string[][] = [p1, p11, p12, p13];
  const cont = images[category];
  const pss: string[][] = [p2, p21, p22, p23];
  const costs: number[][] = [cost, cost1, cost2, cost3];
  return (
    <div className={catalog.card}>
      <div className={catalog.cardcont}>
        {cont.map((item, index: number) => (
          <div className={catalog.cardimg}>
            <img className={catalog.like} src={like} />
            <img className={catalog.item} src={item} key={index} />
            <div className={catalog.textcont}>
              <h1>{name[index]}</h1>
              <p className={catalog.p1}>{ps[category][index]}</p>
              <p className={catalog.p2}>{pss[category][index]}</p>
              <p className={catalog.cost}>{costs[category][index] + "р."}</p>
            </div>

            <button
              onClick={() =>
                handleClick(id, category, index, costs[category][index])
              }
            >
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
