import styled from "styled-components";

export const Posts = styled.section`
  background-color: #f7f7f7;
  width: 100%;
  height: auto;
  max-width: 500px;
  border: 1px solid gray;
  border-radius: 10px;
`;

export const PostBody = styled.article`
  div {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  img {
    max-width: 300px;
    width: 100%;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;

    border-radius: 0 0.3rem 0.3rem 0;
  }

 
  #user {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #userphoto {
    width: 50px;
    height: 50px;
    border-radius: 40px;
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
    margin: 10px;
  }
`;
