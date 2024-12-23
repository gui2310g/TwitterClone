import styled from "styled-components";
import { flex } from "../../utils/flexStyled.jsx";
import { widthHeight } from "../../utils/widthHeightStyled.jsx";
import { ModalStyled } from "../../utils/ModalStyled.jsx";

export const ProfilePage = styled.article`
  ${widthHeight("100%", "600px", "auto", "none")}
  color: black;
  border: 1px solid gray;

`;

export const ProfileHeader = styled.section`
  ${flex("none", "none", "center", "40")}
  padding: 5px;

  span { font-size: 12px; }

  a:hover {
    color: blue;
    transition: 1s all;
  }
`;

export const ProfileBody = styled.section`
  border-bottom: 1px solid black;
  padding-bottom: 20px;

  #user { ${flex("none", "space-between", "none", "0")} }

  img {
    ${widthHeight("100%", "100%", "100%", "200px")}
    object-fit: cover;
  }

  #userDescription {
    ${flex("column", "none", "none", "0")} 
    margin: -70px 0px 0px 17px;
  }

  #userDescription img {
    ${widthHeight("130px", "130px", "130px", "130px")}
    object-fit: cover; 
    aspect-ratio: 1;
    background-position: right;
    background-color: white;
    border-radius: 100%; 
    border: 2px solid black;
    margin-bottom: 10px;
  }

  #followers {
    ${widthHeight("none", "none", "none", "10px")}
    margin-top: 20px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 900; 
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")}; 
`;

export const Modal = styled.div`
  ${ModalStyled("30%", "none", "none", "50%", "1000")}
  transform: translate(-50%, -50%);
  background: white;  
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`

export const ModalContent = styled.div`
  ${ModalStyled("0%", "none", "none", "50%", "1000")}
  width: 340px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  .modal-header {
    ${flex("row", "space-around", "none", "0")} 
 
    button {
      background: transparent;
      cursor: pointer;
      border: none;
    }
  }

  .modal-form {
    ${flex("column", "center", "center", "10")} 
    margin-top: 20px;

    input { ${widthHeight("100%", "100%", "30px", "30px")} }

    input::placeholder { padding-left: 10px; }

    input[type="submit"] {
      width: 100px;
      background-color: #1c9df0;
      border-radius: 10px;
      border: none;
      color: white;
      cursor: pointer; 
    }

    input[type="submit"]:hover { 
      background-color: #1B8CD8; 
      transition: all 0.5s;  

    }
  }
`