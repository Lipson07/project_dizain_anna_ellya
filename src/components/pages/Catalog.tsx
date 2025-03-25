import React, { FC, useEffect } from "react";
import { line } from "../../assets/main";
import catalog from "../../style/Catalog.module.scss";
import Card from "../Catalogcomp/Card";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, selectCategory } from "../../store/index";
import { Link } from "react-router";
import vector from "../../assets/card/Vector (3).png";
const Catalog: FC = () => {
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
          <Link to="/">
            <img src={vector} />
          </Link>
          <h1
            className={category == 0 ? "ssss" : " "}
            onClick={() => handleCategoryClick(0)}
          >
            Свечи
          </h1>
          <h1
            className={category == 1 ? "ssss" : " "}
            onClick={() => handleCategoryClick(1)}
          >
            Подарочные наборы
          </h1>
          <h1
            className={category == 2 ? "ssss" : " "}
            onClick={() => handleCategoryClick(2)}
          >
            Диффузор для дома
          </h1>
          <h1
            className={category == 3 ? "ssss" : " "}
            onClick={() => handleCategoryClick(3)}
          >
            Подставки
          </h1>
        </div>
      </div>
      <Card  />
    </div>
  );
};

export default Catalog;
