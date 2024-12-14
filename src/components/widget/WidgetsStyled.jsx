import styled from "styled-components";

export const Widget = styled.article`
    width: 100%;
    max-width: 350px;
    padding: 10px;

    @media (max-width: 1060px) {
       display: none;
    }
`
export const FollowingWidget = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    margin-top: 20px;
    padding: 10px;

    #users {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`