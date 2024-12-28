import { addComments, GetTweetById } from "../../services/TweetsServices.js";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData.jsx";
import { useParams } from "react-router-dom";

export const useTweetPage = () => {
    const [tweet, setTweets] = useState({});  
    const { id } = useParams();

    async function findTweet(tweetId) {
        await fetchData(
            () => GetTweetById(tweetId),
            (response) => setTweets(response.data)
        )
    }

    async function addComment(data) {
        await fetchData(
            () => addComments(data),
            (response) => setTweets((prev) => [response.data, ...prev]),
        )
    }

    async function onSubmit(data) {
        await addComment(data);
        reset();
    }
    useEffect(() => {
        if(id) findTweet(id);
    }), [id];

    return { tweet, onSubmit }
}