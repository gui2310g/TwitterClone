import styled from "styled-components"

export const AuthContainer = styled.article`    
    font-family: 'Open-Sans', sans-serif;
    position: absolute;
    display: flex;
    justify-content: center;
    transform: translate(-50%, -50%);
    top: 45%;
    left: 50%;
    gap: 200px;
    
    img {
        width: 100%;
        max-width: 300px;
        object-fit : contain;
    }

    section {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
    }

    h1 {
        font-size: 50px; 
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media screen and (max-width: 1024px) {
        position: sticky;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transform: none;
        
        img {
          width: 100px;  
        }
    }
`

export const ErrorInput = styled.span`
    color: red;
    font-weight: bold;
    font-size: 13px;
`