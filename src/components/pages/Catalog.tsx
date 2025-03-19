import React, { useEffect } from "react";
import { line } from "../../assets/main";
import catalog from "../../style/Catalog.module.scss";
import Card from "../Catalogcomp/Card";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, selectCategory } from "../../store/index";
const Catalog = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);

  const handleCategoryClick = (newCategory: number) => {
    dispatch(setCategory(newCategory));
  };

  return (
    <div className={catalog.catalog}>
      <div className={catalog.catalogheader}>
        <div className={catalog.catalogheadercont1}>
          <img src={line} />
          <h1>Каталог</h1>
          <img src={line} />
        </div>
        <div className={catalog.catalogheadercont2}>
          <h1
            className={category == 1 ? "ssss" : " "}
            onClick={() => handleCategoryClick(1)}
          >
            Свечи
          </h1>
          <h1
            className={category == 2 ? "ssss" : " "}
            onClick={() => handleCategoryClick(2)}
          >
            Подарочные наборы
          </h1>
          <h1
            className={category == 3 ? "ssss" : " "}
            onClick={() => handleCategoryClick(3)}
          >
            Диффузор для дома
          </h1>
          <h1
            className={category == 4 ? "ssss" : " "}
            onClick={() => handleCategoryClick(4)}
          >
            Подставки
          </h1>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Catalog;
