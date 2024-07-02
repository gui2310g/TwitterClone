import { FaPray, FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Search, Form, ErrorSpan } from "./SearchInputStyled.jsx";

const searchSchema = z.object({
    text: z
      .string()
      .min(1, { message: "Search can't be empty" })
      .refine((value) => !/^\s*$/.test(value), {
        message: "Search can't be only spaces",
      }),
});

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