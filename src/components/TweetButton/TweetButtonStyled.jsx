import styled from "styled-components";
import { widthHeight } from "../../utils/widthHeightStyled.jsx";

export const TweetButton = styled.button`
    ${props => widthHeight(
        "100%", 
        props.$primary ? "230px" : props.$secondary ? "100px" : "90px", 
        props.$primary ? "50px" : "30px",
    )}
    margin-right: ${(props) => (props.$secondary ? '10px' : '')};
    border-radius: 25px;
    background-color: #1c9cf0;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #1B8CD8;
        transition: all 0.5s;
    }

    @media (max-width: 1290px) {
        width: ${(props) => (props.$primary ? '50px' : 'none')};   
    }
`