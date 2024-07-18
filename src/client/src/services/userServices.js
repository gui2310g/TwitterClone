import axios from "axios";
import Cookies from "js-cookie";
import DefaultAvatar from "../assets/imgs/defaultAvatar.png"
import defaultBackground from "../assets/imgs/TwitterBackground.png"

const baseUrl = "http://localhost:3000/";

export const CreateAccount = (data) => {
    delete data.confirmPassword;
    const body = {...data, username: generateUserName(data.name), avatar: `${DefaultAvatar}`, background: `${defaultBackground}`}
    const response = axios.post(`${baseUrl}user/create`, body)
    return response
}

export const GetAllUsers = () => {
    const response = axios.get(`${baseUrl}user`)
    return response;
}

export const SearchedUsers = (text) => {
    const response = axios.get(`${baseUrl}user/search?username=${text}`)
    return response;
}

export const LoginAccount = (data) => {
    const response = axios.post(`${baseUrl}auth/login`, data)
    return response;
}

export function userLogged() {
  const response = axios.get(`${baseUrl}user/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`
    }
  });
  return response;
}

export const generateUserName = (name) => {
    const WhSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);

    return `${WhSpaces}${randomNumber}`
}
