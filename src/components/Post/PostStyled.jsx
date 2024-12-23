import styled from "styled-components";
import { flex } from "../../utils/flexStyled.jsx";
import { widthHeight } from "../../utils/widthHeightStyled.jsx";

export const Post = styled.article`
  border-bottom: 1px solid lightgray;
  max-width: 600px;
`;

export const PostBody = styled.section`
  padding: 20px;
  
  a {
    text-decoration: none;
    color: black;
  }
    
  #description {
    margin: -25px 20px 0px 57px;
    text-align: justify;
    word-wrap: break-word; 
    overflow: hidden; 
    text-overflow: ellipsis; 

    img {
      ${widthHeight("100%", "100%", "100%", "520")}
      margin-top: 10px;
      border-radius: 20px;
      object-fit: contain;
    }
  }
`;

export const PostFooter = styled.section`
  ${flex("none", "none", "center", "15")}

  section {
    ${flex("none", "none", "center", "0.5")}
    margin: 15px 0px 10px 60px;
  }
`;
