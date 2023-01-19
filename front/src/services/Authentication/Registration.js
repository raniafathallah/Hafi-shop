
import axios from "axios";
import { REGISTER } from "../../config";

export const postRegistrationApi = async (data) => {
  console.log("Data: ", data);
  try {
    const response = await axios.post(REGISTER,data);
    console.log("Response register : ", response.data);
    return response;
  } catch (error) { 
    if (error) {
      const { response } = error;
      return response;
    }
  }
};