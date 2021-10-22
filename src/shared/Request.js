import axios from "axios";
import { getCookie } from "./Cookie";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: { "Authorization": `Bearer ${getCookie("token")}` },
});

export default instance;
