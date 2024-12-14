import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Widgets from './components/widget/Widgets.jsx'
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
