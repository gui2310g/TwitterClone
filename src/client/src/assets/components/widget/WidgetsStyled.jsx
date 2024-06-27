import styled from "styled-components";



export const Widget = styled.section`
    position: sticky;
    width: 100%;
    max-width: 350px;
    padding: 10px;

    #following {
        border: 1px solid black;
        border-radius: 20px;
        margin-top: 20px;
        padding: 10px;
    }

    #users {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media (max-width: 1060px) {
       display: none;
      }
`

export const Search = styled.div`
    border: 1px solid gray;
    width: 350px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    
    form {
        margin: 20px;
    }

    input {
        border: none;
        font-size: 15px;
        outline: none;
        margin: 15px;
    }
`
