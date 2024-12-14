import styled from "styled-components";

export const Search = styled.div`
    border: 1px solid gray;
    max-width: 100%;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
`
export const Form = styled.form`
    margin: 20px;
    input {
        border: none;
        font-size: 15px;
        outline: none;
        margin: 15px;
    }
`
export const ErrorSpan = styled.span`
    color: red;
    font-weight: bold;
`