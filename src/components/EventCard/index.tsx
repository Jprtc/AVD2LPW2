import {Container,Card,CardTitle,CardDescription,CardIcons} from './style'
import landscapeImg from '../../assets/PlaceHolder.jpg'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import excluir from '../../assets/excluir.png'


export function EventCard(){
    return (
    <Container>
        <Card>
            <CardTitle>
                <b>Nome do Evento:</b>  Paisagem linda de mais :D
            </CardTitle>
            <img width="1000px" height="600px"src={landscapeImg} alt="placeholderLandscape"/>
            <CardIcons>
                <button>
            <img src={like} width="40px" height="40px"  alt ='Like'/>
            </button>
            <button><img src={dislike} width="40px" height="40px"  alt ='Dislike'/></button>
            <button><img src={excluir} width="40px" height="40px" alt='Excluir'/></button>
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