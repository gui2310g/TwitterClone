import styled from "styled-components";

export const Main = styled.main`
    #posts {
        background-color: white;
        border: 1px solid gray;
        max-width: 600px;
    }

    .TweetBox {
        padding-bottom: 10px;
        padding-right: 10px;
        border-bottom: 2px solid lightgray;
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
        width: 250px;
    }

    .TweetBoxInput input {
        font-size: 20px;
        border: none;
        outline: none;
    }

    .TweetBoxButton {
        text-align: right;
    }
    
    @media (max-width: 550px) {
        .TweetBox {
          
        }
    }
`
