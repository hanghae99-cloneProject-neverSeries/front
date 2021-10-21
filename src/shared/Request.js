import axios from "axios";
import { getCookie } from "./Cookie";

const instance = axios.create({
    baseURL: "http://15.164.234.148:4000/",
    headers: { "Authorization":`Bearer ${getCookie("token")}`  },
});

export default instance;
