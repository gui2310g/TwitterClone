import styled from "styled-components";
import { flex } from "../../utils/flexStyled.jsx";
import { widthHeight } from "../../utils/widthHeightStyled.jsx";

export const TweetUser = styled.div`
  ${props => flex("row", "none", props.$secondary ? "center" : "", "10px")}
  margin: ${(props) => (props.$secondary ? "10px" : "0px")};
  
  img {
    ${widthHeight("50px", "50px", "50px", "50px")}
    object-fit: cover;
    border-radius: 50px;
  }

  #username {
    display: ${(props) => (props.$secondary ? "block" : "flex")};
    gap: 5px;

    span {
      font-size: 15px;
      font-weight: 600;
      color: gray;
    }
  }
`;
