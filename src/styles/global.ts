import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #F0F2F5;
        --green:#33cc95;
        --blue:#2c2c2c;

        --blue-light:#fab52a;

        --text-title: #212121;
        --text-body: #969cb3;

        --shape:#FFFFFF
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing:antialiased;
    }

    body,input,textarea,button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: .06;
        cursor:not-allowed;
    }



`