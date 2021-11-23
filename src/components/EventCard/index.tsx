import {Container,Card,CardTitle,CardDescription,CardIcons} from './style'
import landscapeImg from '../../assets/PlaceHolder.jpg'

export function EventCard(){
    return (
    <Container>
        <Card>
            <CardTitle>
                <h3><b>Nome do Evento:</b>  Paisagem linda de mais :D</h3>
            </CardTitle>
            <img width="1000px" height="600px"src={landscapeImg} alt="placeholderLandscape"/>
            <CardIcons>

            </CardIcons>
            <CardDescription>
                <div><span><b>Local:</b> Algum lugar lindo e maravilhoso</span></div>  
                <div><span><b>Data:</b> 20/11/2021</span></div>   
                <div><span><b>Horario:</b>15:00</span></div>
            </CardDescription>
        </Card>
    </Container>
        
    )
}