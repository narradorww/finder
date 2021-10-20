import React, {useState} from 'react'
import {Container, Logo, Map, Search, Wrapper} from './style'
import TextField, {Input} from '@material/react-text-field'
import logo from '../../assets/logo.svg'
import MaterialIcon from '@material/react-material-icon'


const Home =()=> {
    const [inputValue, setInputValue] = useState('')
    
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
        
        
        </Search>
    </Container>
    <Map/>
    </Wrapper>
    )
    
};


export default Home;