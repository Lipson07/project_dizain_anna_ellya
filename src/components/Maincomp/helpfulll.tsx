import React from "react";
import main from "../../style/main.module.scss";
import { line, card1, card2 } from "../../assets/main";
import { useSelector } from "react-redux";
import { Setcount, selectCount } from "../../store/count";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { useEffect } from "react";
const Helpfulll = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      dispatch(Setcount(parseInt(storedCount)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const handleClick = (c: number) => {
    dispatch(Setcount(c));
  };
  return (
    <div className={main.helpfull}>
      <div className={main.helpfullheader}>
        <img src={line} />
        <h1>Полезности</h1>
        <img src={line} />
      </div>
      <div className={main.helpfullcont}>
        <div className={main.card}>
          <img src={card1} />
          <p>
            Мы рады предложить вам несколько простых рекомендаций для
            максимально полного наслаждения нашими ароматическими свечами.
          </p>
          <Link to="/more">
            <button onClick={() => handleClick(1)}>Подробнее</button>
          </Link>
        </div>
        <div className={main.card}>
          <img src={card2} />
          <p>
            Мы собрали для вас несколько полезных рекомендаций, которые помогут
            вам максимально использовать ваши диффузоры.
          </p>
          <Link to="/more">
            <button className={main.butt} onClick={() => handleClick(2)}>
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Helpfulll;
