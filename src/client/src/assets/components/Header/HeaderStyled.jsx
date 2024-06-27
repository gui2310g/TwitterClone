import styled from "styled-components";

export const Headers = styled.header`
    font-size: 30px;
 
    @media (max-width: 550px) {
        background-color: black;
        position: fixed;
        z-index: 100;
        bottom: 0;
        width: 100%;
    }

    a {
        color: black;
    }
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    
    @media (max-width: 1290px) {
        align-items: center;
      
        span {
          display: none;
        }
        
    }

    @media (max-width: 550px) {
        
        flex-direction: row;
        justify-content: center;
        
        .HeaderIcon {
            color: white;
        }

        #logo, .TweetNavButton {
            display: none;
        }
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    color: black;
    font-size: 25px;
    padding: 10px;
    display: flex;
    gap: 10px;
    align-items: center;

    .HeaderButton {
        background-color: black;
    }

    &:hover {
        background-color: rgb(222, 222, 223);
        border-radius: 20px;
        transition: all 1s;
    }
`

