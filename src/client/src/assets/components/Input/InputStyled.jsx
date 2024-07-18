import styled from "styled-components";

export const InputSpace = styled.input`
    height: 30px;
    border-radius: 5px;
    border: 2px solid #1c9cf0;
    
    input[type="submit"] {
        height: 30px;
        border-radius: 20px;
        width: 100%;
        color: white;
        border: none;
        cursor: pointer;
        background-color: #1c9cf0;
    }

    input[type="submit"]:hover {
        background-color: #1B8CD8;
        transition: all 0.5s;
    }
`