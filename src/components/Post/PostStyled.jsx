import styled from "styled-components";
import { flex } from "../../utils/flexStyled.jsx";
import { widthHeight } from "../../utils/widthHeightStyled.jsx";

export const Post = styled.article`
  border-bottom: 1px solid lightgray;
  max-width: 600px;
  color: black;
  cursor: pointer;
  height: min-content;
  .no-pointer-events { pointer-events: none; } 

  cursor: ${props => (props.$isActive ? "pointer" : "default")}; 
`;

export const PostBody = styled.section`
  padding: 20px;
  
  a {
    text-decoration: none;
    color: black;
    pointer-events: auto; 

    &:hover { text-decoration: underline;}
  }
    
  #description {
    margin: -25px 20px 0px 57px;
    text-align: justify;
    word-wrap: break-word; 
    overflow: hidden; 
    text-overflow: ellipsis; 

    img {
      ${widthHeight("100%", "100%", "100%", "520px")}
      margin-top: 10px;
      border-radius: 20px;
      object-fit: contain;
    }
  }
`;

export const PostFooter = styled.section`
  ${flex("none", "none", "center", "15px")}

  section {
    ${flex("none", "none", "center", "0.5px")}
    margin: 15px 0px 10px 60px;
  }
`;
