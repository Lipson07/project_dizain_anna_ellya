import React, { FC, useEffect, useState } from "react";
import corzina from "../../style/Corzina.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../../store/kol";
import { cost } from "../../assets/card";
import { selectTovars, SetDelete, UpdateCost } from "../../store/corzina";
interface KorzcardProps {
  item: any;
  index: number;
  images: string[][];
  name: string[];
  ps: string[][];
  pss: string[][];
}
const Korzcard: FC<KorzcardProps> = ({
  item,
  index,
  images,
  name,
  ps,
  pss,
}) => {
  const imageUrl = images[item.id.categ][item.id.index];
  console.log("Image URL:", imageUrl);
  const dispatch = useDispatch();

  const productId = item.id.categ + "-" + item.id.index;
  const s = useSelector(selectTovars);
  let selectCurrentCount = useSelector(selectCount(productId));
  console.log(productId);
  const increaseCount = () => {
    console.log("item.id.cost", cost[item.id.index]);
    const newCost = cost[item.id.index] * selectCurrentCount;
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
    const newCost = cost[item.id.index] * currentCount;
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
        <p className={corzina.cost}>{item.cossts + "р"}</p>
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
