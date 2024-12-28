import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/";

export const CreateTweets = async (data) => {
  const response = await axios.post(`${baseUrl}tweets`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`
    }
  },
  { withCredentials: true });
  return response;
};

export const GetAllTweets = () => {
  const response = axios.get(`${baseUrl}tweets/findAll`)
  return response;
}

export const GetTweetById = (tweetId) => {
  const response = axios.get(`${baseUrl}tweets/find/${tweetId}`)
  return response;
}

export const SearchedTweets = (text) => {
  const response = axios.get(`${baseUrl}tweets/search?text=${text}`)
  return response;
}

export const GetAllTweetsByUserId = (id) => {
  const response = axios.get(`${baseUrl}tweets/findByUser/${id}`)
  return response;
}

export const GetAllTweetsByUserLogged = () => {
  const response = axios.get(`${baseUrl}tweets/findByAuth`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`
    }
  }, 
  { withCredentials: true }
  );
  return response;
}

export const addComments = async (data, tweetId) => {
  const response = await axios.post(`${baseUrl}tweets/${tweetId}/comments`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`
    }
  },
  { withCredentials: true });
  return response;
}