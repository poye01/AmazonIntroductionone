import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-ef27b/us-central1/api",
  baseURL: "https://amazon-api-7ljy.onrender.com",
});

export { axiosInstance };
