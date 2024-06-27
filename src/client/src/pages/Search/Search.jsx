import { Test } from "./SearchStyled.jsx"
import { useParams } from "react-router-dom"

const Search = () => {
    const { text } = useParams()
    return (
        <>
            <Test>{text}</Test>
        </>
    )
}

export default Search