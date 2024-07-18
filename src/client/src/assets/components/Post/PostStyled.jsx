import styled from "styled-components";

export const Posts = styled.article`
  border-bottom: 1px solid lightgray;
  max-width: 600px;
`;
export const PostBody = styled.section`
  padding: 20px;
  
  #description {
    margin: -25px 20px 0px 57px;
    text-align: left;
  
  }

  #description img {
    margin-top: 10px;
    width: 100%;
    max-height: 520px;
    border-radius: 20px;
    text-align: center;
  
  }
`;

export const PostFooter = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 15px 0px 10px 60px;
  }
`;
