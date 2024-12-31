import { addComments, findAllCommentsByTweetId, GetTweetById } from "../../services/TweetsServices.js";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData.jsx";
import { useParams } from "react-router-dom";

export const useTweetPage = (reset) => {
    const [tweet, setTweet] = useState(null);  
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    async function fetchTweetData(tweetId) {
        try {
            await fetchData(
                () => GetTweetById(tweetId),
                (response) => setTweet(response.data)
            );

            await fetchData(
                () => findAllCommentsByTweetId(tweetId),
                (response) => setComments(response.data)
            );
        } catch (err) {
            console.error(err);
        }
    }

    async function addComment(data) {
        await fetchData(
            () => addComments(data, id),
            (response) => setComments((prev) => [response.data, ...prev]),
        );
    }

    async function onSubmit(data) {
        await addComment(data);
        reset();
    }

    useEffect(() => {
        if (id) {
            fetchTweetData(id);
        }
    }, [id]);

    return { tweet, comments, onSubmit }
}