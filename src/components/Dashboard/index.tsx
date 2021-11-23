import { Title } from '../Title'
import { EventCard } from '../EventCard'
import {Container} from './style'

export function Dashboard(){
    return (
        <Container>
            <Title/>
            <EventCard/>
        </Container>
    )
}