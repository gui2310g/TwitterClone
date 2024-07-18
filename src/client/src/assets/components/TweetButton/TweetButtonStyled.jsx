import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    max-width: ${props => (props.primary ? '230px' : (props.secondary ? '100px' : '90px'))};
    height: ${props => (props.primary ? '50px' : '30px')};
    margin-right: ${props => (props.secondary ? '10px' : '')};
    border-radius: 25px;
    background-color: #1c9cf0;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #1B8CD8;
        transition: all 0.5s;
    }

    @media (max-width: 1290px) {
        width: ${props => (props.primary ? '50px' : 'none')};   
    }
`