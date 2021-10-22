import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import TextField, {Input} from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import {Card, RestaurantCard, Modal, Map, Loader, Skeleton} from './../../components'

import {CarouselTitles, Container, Logo, Search, Wrapper, Carousel, ModalTitle} from './style'

const Home =()=> {
    const [inputValue, setInputValue] = useState('')
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState(null)
    const [placeId, setPlaceId] = useState(null)
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

      function handleKeyPress(e){
          if (e.key === 'Enter'){
              setQuery(inputValue)
          }

      }

      function handleOpenModal(placeId){
          setPlaceId(placeId);
          setModalOpened(true);
      }

    return(
    

    <Wrapper>
    <Container>
        <Search><Logo src={logo} alt= "logo do buscador"></Logo>
        <TextField
          label='Pesquisar'
          outlined
          //onTrailingIconSelect={() => this.setState({value: ''})}
         trailingIcon={<MaterialIcon role="button" icon="location_searching"/>}
        >
        <Input
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
           onKeyPress={handleKeyPress} />
        </TextField>

        {restaurants.length > 0 ? (
            <>
            <CarouselTitles>Na sua Região </CarouselTitles>
            <Carousel {...settings}>
            {restaurants.map((restaurant)=> ( 
            <Card 
            key={restaurant.place_id}
            photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
            alt="Foto do Restaurante" 
            title={restaurant.name}
           />))
           }
        </Carousel>
            </>
        ): ( <Loader/> )}
        
        
        
        </Search>
        {restaurants.map((restaurant)=>(
            <RestaurantCard  onClick={()=> handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}/>
        ))}
        
    </Container>
    <Map query={query} placeId={placeId}/>


        <Modal open={modalOpened} onClose={()=>setModalOpened(!modalOpened)} >
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        </Modal>
                
    
    </Wrapper>
    )
    
};


export default Home;