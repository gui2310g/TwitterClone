import axios from "axios";

const baseUrl = "http://localhost:3000/";

export const GetAllUsers = () => {
    const response = axios.get(`${baseUrl}user`)
    return response;
}

export const SearchedUsers = (text) => {
    const response = axios.get(`${baseUrl}user/search?username=${text}`)
    return response;
}



