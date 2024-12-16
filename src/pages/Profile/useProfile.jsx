import { UserContext } from "../../contexts/UserContent.jsx";
import { GetAllTweetsByUserId, GetAllTweetsByUserLogged } from "../../services/TweetsServices.js";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useProfile = () => {
    const { user } = useContext(UserContext);

    const [tweets, setTweets] = useState([]);

    async function findAllTweetsByUser() {
        try {
            const response = await GetAllTweetsByUserId();
            setTweets(response.data);  
        } catch (err) {
            console.error(err)
        }  
    } 
    
    async function findAllTweetsByUserLogged() {
        try {
            const response = await GetAllTweetsByUserLogged();
            setTweets(response.data);  
        } catch (err) {
              console.error(err)
        }  
    }

    useEffect(() => {
        if (Cookies.get("token", { withCredentials: true })) {
          findAllTweetsByUserLogged();  
        } else {
          findAllTweetsByUser(); 
        }
    }, []);

    return { user, tweets };
}