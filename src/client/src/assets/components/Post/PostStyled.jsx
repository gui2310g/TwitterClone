import styled from "styled-components";

export const Posts = styled.section`
  border-bottom: 1px solid lightgray;
  width: 100%;
  max-width: 600px;
`;

export const PostBody = styled.article`
  
  padding: 20px;
  
  #user {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  
  #photo img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50px;
  }

  #username {
    display: flex;
    gap: 5px;
  }

  #username span {
    font-size: 15px;
    font-weight: 600;
    color: gray;
  }

  #description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -25px 20px 0px 57px;
  }

  #description p {
    text-align: justify;
  }

  #description img {
    max-width: 520px;
    width: 100%;
    height: 100%;
    max-height: 520px;
    object-fit: cover;  
    border-radius: 20px;
    text-align: center;
  }
`;

export const PostFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 15px 0px 10px 60px;
  }

  img {
    
  }
`;
