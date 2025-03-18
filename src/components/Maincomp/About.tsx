import React, { FC } from "react";
import main from "../../style/main.module.scss";
import { line, frame1, frame2 } from "../../assets/main";
const About: FC = () => {
  return (
    <div className={main.about}>
      <div className={main.aboutheader}>
        <img src={line} />
        <h1>О нас</h1>
        <img src={line} />
      </div>
      <div className={main.abcardcont}>
        <div className={main.abcard}>
          <h1>Aroma Bliss</h1>
          <img src={frame1} />
          <p>
            Мы стремимся к достижению высочайших стандартов качества и
            обслуживания, чтобы удовлетворить потребности наших клиентов. Мы
            уверены, что наша продукция будет радовать вас и приносить
            удовольствие каждый день.
          </p>
        </div>
        <div className={main.abcard}>
          <p>
            Добро пожаловать на сайт нашей компании, специализирующейся на
            производстве аромасвечей и диффузоров! Мы предлагаем широкий
            ассортимент продукции, которая создана с любовью и заботой о наших
            клиентах.
          </p>
          <img src={frame2} />
        </div>
      </div>
    </div>
  );
};

export default About;
