import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Arial, 'Segoe UI', sans-serif;
    }
`
export const Main = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
`
