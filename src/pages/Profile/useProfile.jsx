import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

import { GetAllTweetsByUserId, GetAllTweetsByUserLogged } from "../../services/TweetsServices.js"
import { findUserById, updateUser, userLogged } from "../../services/userServices.js";
import { UserContext } from "../../contexts/UserContent.jsx";
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
                const response = await findUserById(id);
                setViewedUser(response.data); 
                const tweetsResponse = await GetAllTweetsByUserId(id);
                setTweets(tweetsResponse.data);
            } else if (Cookies.get("token")) {
                const response = await userLogged();
                setUser(response.data); 
                setViewedUser(response.data); 
                const tweetsResponse = await GetAllTweetsByUserLogged();
                setTweets(tweetsResponse.data);
            }
        } catch (err) {
            console.error(err);
        }
    }

    const onSubmit = async (data) => {
        try {
          const validatedData = UserSchema.parse(data);
          const response = await updateUser(validatedData);
          setUser(response.data);  
          reset();  
          setModal(false);  
          navigate(0, { replace: true});
        } catch (error) {
          console.error("Erro ao atualizar usuário:", error);
        }
      };
    
    useEffect(() => {
        fetchProfile();
    });

    
    return { viewedUser, tweets, user, modal, setModal, onSubmit };
};