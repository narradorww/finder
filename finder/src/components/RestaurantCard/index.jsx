import React from 'react';
import {Adress, Restaurant, RestaurantePhoto, RestaurantInfo, Title} from './style'
import ReactStars from "react-rating-stars-component"; 
import restaurante from '../../assets/restaurante-fake.png'


const RestaurantCard =()=>{
    return (

        <Restaurant>
            <RestaurantInfo>
                <Title>Nome do Restaurante</Title>
                <ReactStars
                        count={5}
                        isHalf
                        value={4}
                        edit={false}
                        activeColor="#e7711c"
                    />
                <Adress>Rua lala, numero 2024</Adress>
            </RestaurantInfo>
            <RestaurantePhoto src={restaurante} alt="restaurante fake"/>
        
        </Restaurant>
    )
}

export default RestaurantCard;