import axios from "axios";
import { Navigate } from "react-router-dom";
import { LOGIN } from "../../config";

export const postLoginApi = async (data) => {
  try {
    const response = await axios.post(LOGIN,data);
    localStorage.setItem('user',JSON.stringify(response.data));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    return response;
  } catch (error) {
    if (error) {
      const { response } = error;
      return response;
    }
  }
};