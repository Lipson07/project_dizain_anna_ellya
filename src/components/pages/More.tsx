import React, { useEffect } from "react";
import { Setcount, selectCount } from "../../store/count";
import { line } from "../../assets/main";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import vector from "../../assets/card/Vector (3).png";
import more from "../../style/More.module.scss";
import more1 from "../../assets/More/more1.png";
import more2 from "../../assets/More/more2.png";
const More = () => {
  const count = useSelector(selectCount);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={more.more}>
      {count == 1 ? (
        <>
          <div className={more.moreheader}>
            <div className={more.moreheadercont}>
              <img src={line} />
              <h1>Рекомендации к диффузорам</h1>
              <img src={line} />
            </div>
            <Link to="/">
              <img src={vector} className={more.vector} />
            </Link>
          </div>
          <div className={more.morecont}>
            <div className={more.morecont1}>
              <img src={more1} />
              <div>
                <h1>1. Выбор места</h1>
                <p>
                  • Избегайте сквозняков: Не ставьте диффузор вблизи открытых
                  окон или вентиляционных решеток, чтобы избежать быстрой
                  рассеивания аромата.
                </p>
                <h1>2. Настройка и обслуживание</h1>
                <p>
                  • Количество палочек: Для усиления аромата используйте большее
                  количество палочек, а для более легкого запаха — меньше.
                </p>
                <h1>3. Уход за диффузором </h1>
                <p>
                  • Чистка: Периодически очищайте сосуд диффузора от остатков
                  масла, чтобы избежать смешивания ароматов. Для этого просто
                  промойте его теплой мыльной водой.
                </p>
                <h1>4. Создание атмосферы</h1>
                <p>
                  • Темы ароматов: Используйте разные ароматы для различных
                  времён года или событий. Например, свежие цитрусовые масла
                  идеально подойдут для лета, а согревающий коричный аромат
                  создаст уют в зимние вечера.
                </p>
                <h1>5. Безопасность использования</h1>
                <p>
                  • Держите вдали от детей и животных: Некоторые эфирные масла
                  могут быть токсичными при употреблении. Убедитесь, что
                  диффузор находится в недоступном для детей и домашних животных
                  месте.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={more.moreheader}>
            <div className={more.moreheadercont}>
              <img src={line} />
              <h1>Рекомендации к свечам</h1>
              <img src={line} />
            </div>
            <Link to="/">
              <img src={vector} className={more.vector} />
            </Link>
          </div>
          <div className={more.morecont}>
            <div className={more.morecont1}>
              <img src={more2} />
              <div>
                <h1>1. Правильное горение</h1>
                <p>
                  • Первое горение: Позвольте свече гореть достаточно долго
                  (минимум 2 часа), чтобы воск растаял до краев контейнера. Это
                  предотвратит эффект "туннелирования".
                </p>
                <h1>2. Безопасность использования</h1>
                <h1>
                  Никогда не ставьте горящую свечу на легковоспламеняющиеся
                  поверхности.
                </h1>
                <p>
                  • Установите на устойчивую поверхность: Убедитесь, что свеча
                  стоит на ровной и термостойкой поверхности и вдали от ветра.
                </p>
                <h1>3. Создание атмосферы</h1>
                <p>
                  • Темы ароматов: Используйте разные ароматы в зависимости от
                  времени года или настроения, чтобы создавать особую атмосферу.
                </p>
                <h1>4. Уход за свечами</h1>
                <p>
                  • Хранение: Храните свечи в прохладном и темном месте,
                  защищенном от прямых солнечных лучей. Это поможет сохранить их
                  аромат и цвет.
                </p>
                <h1>5. Идеи для подарков</h1>
                <p>
                  • Подарочные наборы: Используйте наши свечи как оригинальные
                  подарки. Комплекты с разными ароматами идеально подойдут для
                  праздников и особых случаев.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default More;
