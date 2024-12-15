import { FaSearch } from "react-icons/fa";
import { Search, Form, ErrorSpan } from "./SearchInputStyled.jsx";
import { searchSchema } from "../../schemas/searchSchema.js";
import { useFormHook } from "../../hooks/useFormHook.jsx";
import { useSearchForm } from "./useSearchForm.jsx";

const SearchFormComponent = () => {
  const { register, handleSubmit, reset, errors } = useFormHook(searchSchema)
    
  const { onSearch } = useSearchForm(reset);
  
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

export default SearchFormComponent