import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { GetAllTweetsByUserId, GetAllTweetsByUserLogged } from "../../services/TweetsServices.js"
import { findUserById, userLogged } from "../../services/userServices.js";
import { UserContext } from "../../contexts/UserContent.jsx";

export const useProfile = () => {
    const { user, setUser, viewedUser, setViewedUser } = useContext(UserContext);
    const [tweets, setTweets] = useState([]);
    const { id } = useParams();

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

    useEffect(() => {
        fetchProfile();
    }, [id]);

    return { viewedUser, tweets, user };
};
