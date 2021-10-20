import React, {useState} from 'react'
import {CarouselTitles, Container, Logo, Map, Search, Wrapper, Carousel} from './style'
import TextField, {Input} from '@material/react-text-field'
import Slider from 'react-slick'
import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import MaterialIcon from '@material/react-material-icon'
import {Card, RestaurantCard, Modal} from './../../components'


const Home =()=> {
    const [inputValue, setInputValue] = useState('')
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };



    return(
    
    
    <Wrapper>
    <Container>
        <Search><Logo src={logo} alt= "logo do buscador"></Logo>
        <TextField
          label='Pesquisar'
          outlined
          //onTrailingIconSelect={() => this.setState({value: ''})}
         trailingIcon={<MaterialIcon role="button" icon="location_searching"/>}
        ><Input
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
        <CarouselTitles>Na sua Região </CarouselTitles>
        <Carousel {...settings}>
            <Card photo={restaurante} title="Burgue"/>
            <Card photo={restaurante} title="Burgue"/>
            <Card photo={restaurante} title="Pizza"/>
            <Card photo={restaurante} title="Burgue"/>
            <Card photo={restaurante} title="Pastel"/>
            <Card photo={restaurante} title="Burgue"/>
            <Card photo={restaurante} title="Burgue"/>
            <Card photo={restaurante} title="Burgue"/>
        </Carousel>
        <button onClick={()=>setModalOpened(true)}>Abrir Modal</button>
        
        </Search>
        <RestaurantCard/>
    </Container>
    <Map/>
    <Modal open={modalOpened} onClose={()=>setModalOpened(!modalOpened)} />
    </Wrapper>
    )
    
};


export default Home;