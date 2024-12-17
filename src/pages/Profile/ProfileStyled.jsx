import styled from "styled-components";

export const ProfilePage = styled.article`
  color: black;
  width: 100%;
  max-width: 600px;
  border: 1px solid gray;
`;
export const ProfileHeader = styled.section`
  display: flex;
  align-items: center;
  height: auto;
  gap: 40px;
  padding: 5px;

  span {
    font-size: 12px;
  }

  a:hover {
    color: blue;
    transition: 1s all;
  }
`;

export const ProfileBody = styled.section`
  border-bottom: 1px solid black;
  padding-bottom: 20px;

  #user {
    display: flex;
    justify-content: space-between;
  }

   img {
    width: 100%;
    max-width: 100%;
    height: 200px;
    object-fit: cover;
  }

  #userDescription {
    display: flex;
    flex-direction: column;
    margin: -70px 0px 0px 17px;
  }

  #userDescription img {
    width: 130px;
    height: 130px;
    background-color: white;
    border-radius: 100px;
    border: 2px solid black;
    margin-bottom: 10px;
  }

  #followers {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`;
