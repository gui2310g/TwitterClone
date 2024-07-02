import axios from "axios";

const baseUrl = "http://localhost:3000/";

export const GetAllTweets = () => {
    const response = axios.get(`${baseUrl}Tweets`)
    return response;
}

export const SearchedTweets = (text) => {
    const response = axios.get(`${baseUrl}Tweets/search?text=${text}`)
    return response;
}