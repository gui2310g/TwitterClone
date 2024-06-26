import styled from "styled-components";

export const ProfilePage = styled.article`
    color: black;
    width: 100%;
    max-width: 600px;
    border: 1px solid red;

    #profile {
        border-bottom: 1px solid black;
        padding-bottom: 20px;
    }
    #profile-name {
        border: 1px solid blue;
        height: 50px
    }

    #fds {
        display: flex;
        justify-content: space-between;
    }
    #profile img{
        width: 100%;
        max-width: 100%;
        height: 200px;
    }

    #profile #user {
        display: flex;
        flex-direction:column;
        margin: -70px 0px 0px 17px;
    }

    #profile #user img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        border-radius: 100px;
        border: 2px solid black;
    }

    #profile #user img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        border-radius: 100px;
        border: 2px solid black;
    }   

    button {
        width: 115px;
        height: 30px;
        border-radius: 20px;
        border: none;
        background-color: #1C9DF0;
        color: white;
        margin-right: 15px;
        cursor: pointer;
    }

    #followers {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
`