import React, { useState } from "react";
import {
  Adress,
  Restaurant,
  RestaurantePhoto,
  RestaurantInfo,
  Title,
} from "./style";
import ReactStars from "react-rating-stars-component";
import restaurante from "../../assets/restaurante-fake.png";
import { Skeleton } from "../index";

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          value={restaurant.rating}
          edit={false}
          activeColor="#e7711c"
        />
        <Adress>{restaurant.vicinity || restaurant.formatted_address}</Adress>
      </RestaurantInfo>
      <RestaurantePhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        alt="Foto do Restaurante"
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
