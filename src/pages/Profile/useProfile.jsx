import { UserContext } from "../../contexts/UserContent.jsx";
import { GetAllTweetsByUser } from "../../services/TweetsServices.js";
import { useContext, useEffect, useState } from "react";

export const useProfile = () => {
    const { user } = useContext(UserContext);

    const [tweets, setTweets] = useState([]);

    async function findAllTweetsByUser() {
        const response = await GetAllTweetsByUser();
        setTweets(response.data);
    }

    useEffect(() => {
        findAllTweetsByUser();
    }, []);

    return { user, tweets };
}