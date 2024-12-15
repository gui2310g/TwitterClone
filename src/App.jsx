import { Outlet } from 'react-router-dom'
import Header from './components/Header/HeaderComponent.jsx'
import Widget from './components/widget/WidgetComponent.jsx'
import { GlobalStyled, Main } from './GlobalStyled.jsx'
function App() {
return (
    <>
        <GlobalStyled />
        <Main>
            <Header />
            <Outlet/>
            <Widget />
        </Main>
    </>
)
}

export default App
