import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

import { GetAllTweetsByUserId, GetAllTweetsByUserLogged} from "../../services/TweetsServices.js";
import { findUserById, updateUser, userLogged } from "../../services/userServices.js";
import { UserContext } from "../../contexts/UserContent.jsx";
import { fetchData } from "../../utils/fetchData.jsx";
import { UserSchema } from "../../schemas/UserSchema.js";

export const useProfile = (reset) => {
  const { user, setUser, viewedUser, setViewedUser } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [tweets, setTweets] = useState([]);
  const [modal, setModal] = useState(false);

  async function fetchProfile() {
    try {
        if (id) {
            await fetchData(() => findUserById(id), (response) => setViewedUser(response.data));

            await fetchData(() => GetAllTweetsByUserId(id), (response) => setTweets(response.data));
        } else if (Cookies.get("token")) {
            await fetchData(
                () => userLogged(),
                (response) => {
                    setUser(response.data);
                    setViewedUser(response.data);
                }
            );
        
        await fetchData(() => GetAllTweetsByUserLogged(), (response) => setTweets(response.data));
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function onSubmit(data) {
    try {
      const validatedData = UserSchema.parse(data);
      await fetchData(() => updateUser(validatedData), (response) => setUser(response.data));
      reset();
      setModal(false);
      navigate(0, { replace: true });
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  }

  useEffect(() => {
    fetchProfile();
  });

  return { viewedUser, tweets, user, modal, setModal, onSubmit };
};
