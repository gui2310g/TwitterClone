import styled from "styled-components"
import { flex } from "../../utils/flexStyled.jsx"
import { widthHeight } from "../../utils/widthHeightStyled.jsx"

export const AuthContainer = styled.article`    
    ${flex("none", "center", "none", "200px")}
    font-family: 'Open-Sans', sans-serif;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 45%;
    left: 50%;
    
    img {
        ${widthHeight("100%", "300px")}
        object-fit : contain;
    }

    section {
        ${flex("column")}
        ${widthHeight("100%", "500px")}
    }

    h1 { font-size: 50px; }

    form { ${flex("column", "none", "none", "1rem")} }

    @media screen and (max-width: 1024px) {
        ${flex("column", "none", "center", "10px")}
        position: sticky;
        transform: none;
        
        img { width: 100px; }
    }
`
export const ErrorInput = styled.span`
    color: red;
    font-weight: bold;
    font-size: 13px;
`