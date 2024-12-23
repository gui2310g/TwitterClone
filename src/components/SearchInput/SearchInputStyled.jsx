import styled from "styled-components";
import { flex } from "../../utils/flexStyled.jsx";
import { widthHeight } from "../../utils/widthHeightStyled.jsx";
export const Search = styled.div`
    ${flex("none", "none", "center", "0")}
    ${widthHeight("100%", "100%", "40px", "40px")}
    border: 1px solid gray;
    border-radius: 20px;
`
export const Form = styled.form`
    margin: 20px;
    input {
        border: none;
        font-size: 15px;
        outline: none;
        margin: 15px;
    }
`
export const ErrorSpan = styled.span`
    color: red;
    font-weight: bold;
`