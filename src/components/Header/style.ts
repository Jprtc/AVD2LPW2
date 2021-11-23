import styled from "styled-components"

const Container = styled.header`
    background-color:var(--blue);
`

const Content = styled.div`
    max-width: 1120px;
    margin:0 auto;

    padding:1rem 1rem 6rem;
    display:flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #282828;
        background:var(--blue-light);
        border:0;
        padding: 0 2rem;
        border-radius: 0.35rem;
        height:3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`

export{Container,Content}