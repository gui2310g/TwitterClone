import styled from "styled-components";

export const Headers = styled.header`
    display: flex;
    flex-direction: column;
    font-size: 30px;
    width: 300px;
    max-width: 300px;
    border: 1px solid blue;
`

export const Nav = styled.nav`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    position: fixed;
`

export const NavLink = styled.a`
    text-decoration: none;
    color: black;
    font-size: 25px;
    padding: 10px;
    display: flex;
    gap: 10px;
    align-items: center;

    &:hover {
        background-color: rgb(222, 222, 223);
        border-radius: 20px;
        transition: all 1s;
    }
`

export const Button = styled.button`
  width: 250px;
  max-width: 230px;
  height: 50px;
  border-radius: 25px;
  background-color: #1c9cf0;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1B8CD8;
    transition: all 1s;
  }
`;

