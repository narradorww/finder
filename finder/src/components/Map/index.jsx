import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker} from 'google-maps-react'


import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants'


export const MapContainer = (props) => {
    const { restaurants } = useSelector((state)=> state.restaurants)
    const dispatch = useDispatch();
    const [map, setMap] = useState(null)
    const { google, query, placeId }  = props;

    useEffect(() => {
        if(query){
            searchByQuery(query)
        }
    },[query]);

    useEffect(() =>{
        if (placeId){
            getRestaurantById(placeId)
        }
    },[placeId]);



    function  getRestaurantById(placeId){
        const service = new google.maps.places.PlacesService(map) ;

        const request ={
                placeId,
                fields: ['name', 'opening_hours', 'closed_hours', 'formatted_address', 'formatted_phone-number']
        };

        service.textSearch(request, (place, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                dispatch(setRestaurant(place))
            }
        })


    }
    


    function searchByQuery(query){
        const service = new google.maps.places.PlacesService(map) ;

        const request ={
                location: map.center,
                radius: '200',
                type: ['restaurant'],
                query,
        };

        service.textSearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                console.log('restaurants>>>', results);
                dispatch(setRestaurants(results))
            }
        })


    }

    function searchNearby (map, center){
        const service = new google.maps.places.PlacesService(map) ;

        const request ={
                location: center,
                radius: '20000',
                type: ['restaurant'],
        };

    service.nearbySearch(request, (results, status) => {
        if(status === google.maps.places.PlacesServiceStatus.OK){
            console.log('restaurants>>>', results);
            dispatch(setRestaurants(results))
        }
    })
    }

    function onMapReady(_, map){
        setMap(map);
        searchNearby(map, map.center);
        
    }

    return(
        <Map
            google={google}
            centerAroundCurrentLocation
            onReady={onMapReady}
            onRecenter={onMapReady}
            {...props} >

                {restaurants.map((restaurant)=>(
                    <Marker key={restaurant.place_id}
                            name={restaurant.name}
                            position={{
                                lat: restaurant.geometry.location.lat(),
                                lng: restaurant.geometry.location.lng(),
                            }}
                     />

                ))}



        </Map>
        

    )

};

    



export default GoogleApiWrapper({
    apiKey:'AIzaSyBuhWfuhDU-ca39JKt7_WCM5jkAOjUE7FI',
    language: 'pt-BR',
  })(MapContainer);