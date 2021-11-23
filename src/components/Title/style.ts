import styled from 'styled-components'

export const Container = styled.div`
    margin-top: -6rem;

    div{
        background: var(--shape);
        padding: 1.5rem 24rem;
        margin-right: 80px;
        border-radius: 0.25rem;
        color: var(--text-title);
        align-self: center;

        header{
            display:flex;
            align-items: center;
            justify-content: center;
        }

        strong{
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
            color:#212121;
        }

        &.highlight-background{
            background: var(--blue-light);
            color: #FFF
        }

    }

`