import React, { FC, useEffect, useState } from "react";
import corzina from "../../style/Corzina.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../../store/kol";
import { cost } from "../../assets/card";
import { selectTovars, SetDelete, UpdateCost } from "../../store/corzina";
import { couldStartTrivia } from "typescript";
interface KorzcardProps {
  item: any;
  index: number;
  images: string[][];
  name: string[];
  ps: string[][];
  pss: string[][];
  cost: number;
  init: number;
}
const Korzcard: FC<KorzcardProps> = ({
  item,
  index,
  images,
  name,
  ps,
  pss,
  cost,
  init,
}) => {
  const imageUrl = images[item.id.categ][item.id.index];
  console.log("Image URL:", imageUrl);
  const dispatch = useDispatch();

  const productId = item.id.categ + "-" + item.id.index;
  const s = useSelector(selectTovars);
  let selectCurrentCount = useSelector(selectCount(productId));
  console.log(productId);
  const increaseCount = () => {
    console.log("item.id.cost", couldStartTrivia);
    const currentCount: number = selectCurrentCount;
    const newCost = init * (currentCount + 1);

    dispatch(UpdateCost({ productId, cost: newCost }));

    dispatch(increment(productId));

    console.log("item.id.cost", item.id.cost);
  };
  const deleteItem = () => {
    dispatch(SetDelete(index));
  };

  const decreaseCount = () => {
    dispatch(decrement(productId));

    const currentCount: number = selectCurrentCount;
    const newCost = item.id.cost - init;
    dispatch(UpdateCost({ productId, cost: newCost }));
    console.log("currentCount after decrement", currentCount);

    if (currentCount == 1) {
      console.log("Deleting item because count is 0");
      deleteItem();
    }
  };

  return (
    <>
      <div className={corzina.korzinacont}>
        <img key={index} src={imageUrl} id="e1" alt="sosi" />
        <div className={corzina.info}>
          <h1>{name[item.id.index]}</h1>
          <p>{ps[item.id.categ][item.id.index]}</p>
          <p>{pss[item.id.categ][item.id.index]}</p>
        </div>
        <p className={corzina.cost}>{item.id.cost + "р"}</p>
        <div className={corzina.kol}>
          <button onClick={() => increaseCount()}>+</button>
          <h1>{selectCurrentCount}</h1>
          <button onClick={() => decreaseCount()}>-</button>
        </div>
      </div>
    </>
  );
};

export default Korzcard;
