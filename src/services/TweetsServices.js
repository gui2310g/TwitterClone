import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/";

export const CreateTweets = (body) => {
  const response = axios.post(`${baseUrl}tweets`, body, {
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
  const response = axios.get(`${baseUrl}tweets/findAll`)
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

