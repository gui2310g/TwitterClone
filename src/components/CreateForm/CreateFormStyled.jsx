import styled from "styled-components";
import { flex } from "../../utils/flexStyled.jsx";
import { widthHeight } from "../../utils/widthHeightStyled.jsx";

export const CreateForm = styled.form`
    ${flex("column", "none", "center", "10px")}
    border-bottom: 1px solid gray;
    padding: 10px;
    
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
}
`