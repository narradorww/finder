import React from 'react';
import {Adress, Restaurant, RestaurantePhoto, RestaurantInfo, Title} from './style'
import ReactStars from "react-rating-stars-component"; 
import restaurante from '../../assets/restaurante-fake.png'


const RestaurantCard =({restaurant, onClick})=>{
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
                <Adress>{restaurant.vicinity|| restaurant.formatted_address}</Adress>
            </RestaurantInfo>
            <RestaurantePhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt="Foto do Restaurante"/>
        
        </Restaurant>
    )
}

export default RestaurantCard;