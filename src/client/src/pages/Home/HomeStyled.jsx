import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    min-width: fit-content;
    overflow-y: scroll;
    border: 1px solid red;
    margin: 0 auto;

    #posts {
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 100;
        border: 1px solid gray;
        width: 600px;
    }

    .TweetBox {
        padding-bottom: 10px;
        border-bottom: 8px solid gray #e6ecf0;
        padding-right: 10px;
    }

    .TweetBox form {
        display: flex;
        flex-direction: column;
    }

    .TweetBox img{
        border-radius: 50%;
        height: 40px;
    }

    .TweetBoxInput {
        display: flex;  
        gap: 20px;
        padding: 20px;
    }

    .TweetBoxInput input {
        flex: 1;
        font-size: 20px;
        border: none;
        outline: none;
    }

    .TweetBoxButton {
        width: 250px;
        max-width: 230px;
        height: 50px;
        border-radius: 25px;
        background-color: #1c9cf0;
        color: white;
        font-weight: bold;
        border: none;
        cursor: pointer;
    }
`
