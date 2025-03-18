import React from "react";
import catalog from "../../style/Catalog.module.scss";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../assets/card";
const Card = () => {
  const image = [image1, image2, image3, image4, image5, image6];
  return (
    <div className={catalog.card}>
      <div className={catalog.cardcont}>
        {image.map((item, index) => (
          <div className={catalog.cardimg}>
            <img src={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
