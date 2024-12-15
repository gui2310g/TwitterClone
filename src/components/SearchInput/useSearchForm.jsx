import { useNavigate } from "react-router-dom"

export const useSearchForm = (reset) => {
    const navigate = useNavigate();

    const onSearch = (data) => {
        const { text } = data;
        navigate(`/search/${text}`);
        reset();
    }

    return { onSearch };
}