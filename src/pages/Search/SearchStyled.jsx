import styled from "styled-components";
import { flex } from "../../utils/flexStyled.jsx";
export const SearchPage = styled.article`
    border: 1px solid gray;
    width: 100%;
    padding: 5px;
    
    ul {
        ${flex("none", "space-around", "none", "0")}
        font-weight: bold;
        list-style-type: none;
        cursor: pointer;
        border-bottom: 1px solid gray;
        padding: 10px;

        li {
            text-align: center;
            font-size: 17px;
            padding: 5px;
            width: 100px;

            &:hover {
                background-color: gray;
                color: white;
                transition: all 0.5s;
                border-radius: 10px;
            }

            span {border-bottom: 2px solid gray;}    
        }
    }


    #users {
        ${flex("none", "space-between", "center", "0")}
        padding: 10px;

        @media (max-width: 450px) {
            ${flex("column")}
        }
    }
`