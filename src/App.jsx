import { Outlet } from 'react-router-dom'
import Header from './assets/components/Header/Header.jsx'
import Widgets from './assets/components/widget/Widgets.jsx'
import { GlobalStyled, Main } from './GlobalStyled.jsx'
function App() {
return (
    <>
        <GlobalStyled />
        <Main>
            <Header />
            <Outlet/>
            <Widgets />
        </Main>
    </>
)
}

export default App
