import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:3000/";

export const GetAllTweets = () => {
    const response = axios.get(`${baseUrl}Tweets`)
    return response;
}

export const SearchedTweets = (text) => {
    const response = axios.get(`${baseUrl}Tweets/search?text=${text}`)
    return response;
}

export const GetAllTweetsByUser = () => {
    const response = axios.get(`${baseUrl}Tweets/byUserId`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      });
    return response;
}