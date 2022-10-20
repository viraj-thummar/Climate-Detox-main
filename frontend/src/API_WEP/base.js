import axios from "axios";

export const baseURL = "https://backend.climatedetox.in";
//export const baseURL = "http://localhost:8000";


export const CdnURL = "";
export const baseAxios = axios.create({
  baseURL: baseURL,
  //withCredentials: true,
});
