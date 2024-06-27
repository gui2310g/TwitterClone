import axios from "axios";

const baseUrl = "http://localhost:3000/";

export const GetAllUsers = () => {
    const response = axios.get(`${baseUrl}user`)
    return response;
}



