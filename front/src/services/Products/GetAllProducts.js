
import axios from "axios";
import { GetAllProducts } from "../../config";

export const getAllProductsApi = async (data) => {
  console.log("Data: ", data);
  try {
    const response = await axios.get(GetAllProducts);
      console.log("Response register : ", response.data);
   // const results=response.data.data.data;
  //  console.log("Response registerreee : ", results);
   localStorage.setItem('products',JSON.stringify(response.data));

    return JSON.stringify(response.data);

  } catch (error) { 
    if (error) {
      const { response } = error;
      return response;
    }
  }
};