import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Widget, Search, ErrorSpan } from "./WidgetsStyled.jsx";

import User from "../TweetUser/User.jsx";
import TweetButton from "../TweetButton/TweetButton.jsx";

import { GetAllUsers } from "../../../services/userServices.js";

const searchSchema = z.object({
  text: z
    .string()
    .min(1, { message: "Search can't be empty" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Search can't be only spaces",
    }),
});

const Widgets = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const navigate = useNavigate();

  function onSearch(data) {
    const { text } = data;
    navigate(`/search/${text}`);
    reset();
  }
  const [user, setUsers] = useState([]);

  async function findAllUsers() {
    const response = await GetAllUsers();
    setUsers(response.data);
  }

  useEffect(() => {
    findAllUsers();
  }, []);

  return (
    <Widget>
      <Search>
        <form onSubmit={handleSubmit(onSearch)}>
          <FaSearch />
          <input {...register("text")} type="text" placeholder="Search" />
        </form>
      </Search>

      {errors.text && <ErrorSpan>{errors.text.message}</ErrorSpan>}

      <div id="following">
        <h2>Who Follows?</h2>

        {user &&
          user.map((user, index) => {
            return (
              <div id="users" key={index._id}>
                <User secondary userAvatar={user.avatar} name={user.username} />
                <TweetButton text={"Follow"} />
              </div>
            );
          })}
      </div>
    </Widget>
  );
};

export default Widgets;
