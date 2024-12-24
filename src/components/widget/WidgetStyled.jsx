import styled from "styled-components";
import { widthHeight } from "../../utils/widthHeightStyled.jsx";
import { flex } from "../../utils/flexStyled.jsx";

export const Widget = styled.article`
    ${widthHeight("100%", "350px")}
    padding: 10px;

    @media (max-width: 1060px) { display: none; }
`
export const FollowingWidget = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    margin-top: 20px;
    padding: 10px;

    #users {
        ${flex("none", "space-between", "center", "none")}

        a {
            text-decoration: none;
            color: black;
        }
    }
`