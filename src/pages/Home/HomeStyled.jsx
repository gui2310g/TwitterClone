import styled from "styled-components";

export const Posts = styled.section`
    background-color: white;
    border: 1px solid gray;
    max-width: 600px;
`
export const PostCreate = styled.form`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
`
export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  
    img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
    }

    h2 { text-align: center; }
    textarea {
        resize: none;
        height: 50px;
        width: 100%;
        max-width: 500px;
    }

    label {
        text-align: left;
    }
    input[type="url"] {
        width: 100%;
        max-width: 500px;
        height: 20px;
    }

    input[type="submit"] {
        padding: 10px;
        border-radius: 10px;
        border: none;
    
        background-color: #1c9df0;
        color: white;
    } 

    #submit { cursor: pointer;}
`

