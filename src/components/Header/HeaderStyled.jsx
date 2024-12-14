import styled from "styled-components";

export const Headers = styled.header`
    @media (max-width: 550px) {
        background-color: black;
        position: fixed;
        z-index: 100;
        bottom: 0;
        width: 100%;
    }
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    
    @media (max-width: 1290px) {
        align-items: center;

        span, div {
          display: none;
        }
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 25px;
        padding: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
    }
    
    #HeaderLogo {
        width: 25px;
    }

    .headerLink:hover, #HeaderLogo:hover {
        background-color: rgb(222, 222, 223);
        border-radius: 20px;
        transition: all 1s;
    }

    @media (max-width: 550px) {
        flex-direction: row;
        justify-content: center;
        
        .HeaderIcon {
            color: white;
        }

        #Logo, button {
            display: none;
        }
    }
`

export const UserLogged = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    #logoutButton {
        background: none;
        font-size: 20px;
        border: none;
        cursor: pointer;
    }

    #logoutButton:hover {
        color: #1B8CD8;
        transition: 1s all;
    }
`