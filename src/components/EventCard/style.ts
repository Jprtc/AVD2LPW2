import styled from 'styled-components'

export const Container = styled.div`
    margin-top:4rem;
`

export const CardTitle = styled.div`
    padding-bottom:10px;
    padding-top:10px;
    padding-left:8px;
`

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin-right:88px;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    img{
        border-radius: 18px;
    }
`

export const CardIcons = styled.div`
    padding:10px 8px
`

export const CardDescription = styled.div`
padding: 2px 16px;

    div{
        padding-top:20px
    }

`