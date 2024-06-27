import axios from "axios";

const baseUrl = "http://localhost:3000/";

export const GetAllTweets = () => {
    const response = axios.get(`${baseUrl}Tweets`)
    return response;
}