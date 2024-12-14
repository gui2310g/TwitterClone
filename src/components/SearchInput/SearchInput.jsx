import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { Search, Form, ErrorSpan } from "./SearchInputStyled.jsx";
import { searchSchema } from "../../schemas/searchSchema.js";

const SearchForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(searchSchema),
      });
    
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