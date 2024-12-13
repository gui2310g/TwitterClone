import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:3000/";

export const CreateTweets = (body) => {
  const response = axios.post(`${baseUrl}Tweets/create`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "multipart/form-data"
    }
  },
  { withCredentials: true }
  )
  return response;
}

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
  }, 
  { withCredentials: true }
  );
  return response;
}

