import styled from "styled-components";

export const SearchPage = styled.article`
    border: 1px solid red;
    width: 600px;
    padding: 5px;
    
    ul {
        display: flex;
        justify-content: space-around;
        font-weight: bold;
        list-style-type: none;
        cursor: pointer;
        border-bottom: 1px solid gray;
        padding: 10px;

        li {
            text-align: center;
            font-size: 17px;
            padding: 5px;
            width: 200px;
        }
        
        span {
            border-bottom: 2px solid gray;
        }

        li:hover {
            background-color: gray;
            color: white;
            transition: all 0.5s;
            border-radius: 10px;
        }

        
    }

    #users {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }

    
`
