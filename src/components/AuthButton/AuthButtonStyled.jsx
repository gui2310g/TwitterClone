import styled from "styled-components";
import { widthHeight } from "../../utils/widthHeightStyled.jsx"
export const AuthButton = styled.button`
    ${widthHeight("100%", "100%", "30px", "30")}
    border-radius: 20px;
    color: white;
    border: none;
    cursor: pointer;
    background-color: #1c9cf0;

    &:hover {
        background-color: #1B8CD8;
        transition: all 0.5s;
    }
`