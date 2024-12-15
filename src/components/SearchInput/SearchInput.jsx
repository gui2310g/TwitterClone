import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Search, Form, ErrorSpan } from "./SearchInputStyled.jsx";
import { searchSchema } from "../../schemas/searchSchema.js";
import { useFormHook } from "../../hooks/useFormHook.jsx";

const SearchForm = () => {
  const { register, handleSubmit, reset, errors } = useFormHook(searchSchema)
    
  const navigate = useNavigate();
    
  const onSearch = (data) => {
    const { text } = data;
    navigate(`/search/${text}`);
    reset();
  }
  
  return (
    <>
        <Search>
            <Form onSubmit={handleSubmit(onSearch)}>
                <FaSearch />
                <input {...register("text")} type="text" placeholder="Search" />
            </Form>
        </Search>

        {errors.text && <ErrorSpan>{errors.text.message}</ErrorSpan>}
    </>
  );
};

export default SearchForm