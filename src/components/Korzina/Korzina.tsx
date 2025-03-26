import React, { FC } from "react";
import corzina from "../../style/Corzina.module.scss";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { selectId, selectTovars } from "../../store/corzina";

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
import { json } from "stream/consumers";
import Korzcard from "./Korzcard";
const Korzina: FC = () => {
  const images: string[][] = [imagec1, imagec2, imagec3, imagec4];
  const ps: string[][] = [p1, p11, p12, p13];
  const pss: string[][] = [p2, p21, p22, p23];
  const id = useSelector(selectId);
  const costs = useSelector(selectTovars);

  const uniqueProducts = () => {
    const uniqueProductIds = new Set();
    return costs.filter((item) => {
      // Объединяем categ и index для создания уникального идентификатора
      const productId = `${item?.id?.categ}-${item?.id?.index}`;

      if (uniqueProductIds.has(productId)) {
        return false; // Уже видели этот товар, не включаем
      } else {
        uniqueProductIds.add(productId);
        return true; // Новый товар, включаем
      }
    });
  };

  const newCosts = uniqueProducts();
  console.log("costs", newCosts);
  return (
    <div className={corzina.korzina}>
      {costs.length == 0 ? (
        <>
          <h1>Корзина пока пуста </h1>
          <h1>Добавьте хотя бы один предмет</h1>
          <Link to="/catalog">
            <button>Каталог</button>
          </Link>
        </>
      ) : (
        <>
          {newCosts.map((item: any, index: number) => {
            console.log("i", item);
            console.log("item", item.id);
            return (
              <Korzcard
                images={images}
                name={name}
                ps={ps}
                pss={pss}
                item={item}
                index={index}
                cost={id.cost}
                init={item.initialCost}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Korzina;
