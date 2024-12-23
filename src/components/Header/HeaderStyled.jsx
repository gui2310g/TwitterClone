import styled from "styled-components";
import { flex } from "../../utils/flexStyled.jsx";
export const Header = styled.header`
  @media (max-width: 550px) {
    background-color: black;
    position: fixed;
    z-index: 100;
    bottom: 0;
    width: 100%;
  }
`;

export const Nav = styled.nav`
  ${flex("column", "none", "none", "20")}
  padding: 20px;

  @media (max-width: 1290px) {
    ${flex("none", "center", "center", "20")}

    span, div { display: none; }
  }

  a {
    ${flex("none", "none", "center", "10")}
    text-decoration: none;
    color: black;
    font-size: 25px;
    padding: 10px;
  }

  #HeaderLogo { width: 25px; }

  .headerLink:hover, #HeaderLogo:hover {
    background-color: rgb(222, 222, 223);
    border-radius: 20px;
    transition: all 1s;
  }

  @media (max-width: 550px) {
    ${flex("row", "center", "none", "0")}
 
    .HeaderIcon { color: white; }

    #Logo, button { display: none; }
  }
`;

export const UserLogged = styled.div`
  ${flex("none", "space-between", "center", "0")}

  #logoutButton {
    background: none;
    font-size: 20px;
    border: none;
    cursor: pointer;

    &:hover { 
      color: #1b8cd8; 
      transition: 1s all; 
    }
  }
`;
