import LogoImg from '../../assets/logo.svg'
import {Container,Content} from  './style'
// import{Title} from '../Title'


export function Header(){

    return(
        <Container>
            <Content>
            <img width="80px"height="80px" src={LogoImg} alt="D3 logo"/>
            <button type="button">
             Incluir
            </button> 
           
            </Content>
        </Container>
    )
}

