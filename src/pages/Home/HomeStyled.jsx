import styled from "styled-components";
import { flex } from "../../utils/flexStyled.jsx";
import { widthHeight } from "../../utils/widthHeightStyled.jsx";
export const Posts = styled.section`
    background-color: white;
    border: 1px solid gray;
    max-width: 600px;
`
export const PostCreate = styled.form`
    ${flex("column", "none", "none", "none")}
    border-bottom: 1px solid black;
    padding-bottom: 10px;
`
export const PostHeader = styled.div`
    ${flex("column", "none", "center", "10")}
    
    img {
        ${widthHeight("40px", "40px", "40px", "40px")}
        border-radius: 20px;
    }

    h2 { text-align: center; }
    
    textarea {
        ${widthHeight("100%", "500px", "50px", "50px")}
        resize: none;
        height: 50px;
    }

    input[type="text"] { ${widthHeight("100%", "340px", "20px", "20px")} }

    input[type="submit"] {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #1c9df0;
        color: white;
    } 

    #submit { cursor: pointer;}
`