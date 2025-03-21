import React, { FC } from "react";
import main from "../../style/main.module.scss";
import { line, p1, p2, p3, star, arrow } from "../../assets/main";
import { Link } from "react-router";
const Packaging = () => {
  return (
    <div className={main.packaging}>
      <div className={main.packagingheader}>
        <img src={line} />
        <h1>Упаковка и доставка</h1>
        <img src={line} />
      </div>
      <div className={main.packagingcont}>
        <div className={main.packagingimg}>
          <img src={p1} className={main.p1} />
          <div>
            <img src={p2} />
            <img src={p3} />
          </div>
        </div>
        <div className={main.packagingtext}>
          <div className={main.packagingtextcont}>
            <img className={main.star1} src={star} alt="" />

            <h1>Ваш заказ в надёжных руках</h1>

            <img className={main.star2} src={star} alt="" />
          </div>
          <p>
            Мы уделяем особое внимание упаковке наших продуктов. Все аромасвечи
            и диффузоры упаковываются в специальные крафт-коробки, которые
            защищают их от повреждений во время транспортировки.
          </p>
          <p>
            Мы также добавляем дополнительную упаковку из пузырчатой пленки и
            защитных материалов, чтобы обеспечить максимальную безопасность
            вашего заказа.
          </p>
          <p className={main.lastp}>
            Стоимость доставки рассчитывается исходя из итогового веса.
          </p>
          <img src={arrow} className={main.arrow} alt="" />
          <Link to="/delivery">
            <button>Подробнее о доставке</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packaging;
