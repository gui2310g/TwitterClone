import axios from "axios";
import Cookies from "js-cookie";
import DefaultAvatar from "../assets/defaultAvatar.png"
import defaultBackground from "../assets/TwitterBackground.png"

const baseUrl = "http://localhost:8080/";

export const CreateAccount = (data) => {
  delete data.confirmPassword;
  const body = {...data, username: generateUserName(data.name), avatar: `${DefaultAvatar}`, background: `${defaultBackground}`}
  const response = axios.post(`${baseUrl}users`, body)
  return response
}
export const updateUser = (data) => {
  const response = axios.put(`${baseUrl}users/update`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`
    },
    withCredentials: true
  });
  return response;
}
  
export const GetAllUsers = () => {
  const response = axios.get(`${baseUrl}users/findAll`)
  return response;
}

export const SearchedUsers = (text) => {
  const response = axios.get(`${baseUrl}users/search?username=${text}`)
  return response;
}

export const LoginAccount = (data) => {
  const response = axios.post(`${baseUrl}auth`, data)
  return response;
}

export const findUserById = (id) => {
  const response = axios.get(`${baseUrl}users/findById/${id}`)
  return response;
}

export function userLogged() {
  const response = axios.get(`${baseUrl}users/findByAuth`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`
    }
  }, {
    withCredentials: true
  });
  return response;
}

export const generateUserName = (name) => {
    const WhSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);

    return `${WhSpaces}${randomNumber}`
}
