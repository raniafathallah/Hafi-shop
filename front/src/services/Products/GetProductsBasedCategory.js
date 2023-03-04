//{{URL}}api/products?category=Electronics



import axios from "axios";

export const GetProductsBasedCategory = async (data) => {
  console.log("Data: ", data);
  try {
    const response = await axios.get('api/products?category=Electronics');
      console.log("Response register cat: ", response.data);
   // const results=response.data.data.data;
  //  console.log("Response registerreee : ", results);
   localStorage.setItem('newproducts',JSON.stringify(response.data));

    return JSON.stringify(response.data);

  } catch (error) { 
    if (error) {
      const { response } = error;
      return response;
    }
  }
};