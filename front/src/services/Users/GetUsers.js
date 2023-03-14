
import axios from "axios";
import { GetUsers } from "../../config";

export const getUsers = async () => {
     try {
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzQ3ZGIwMmY0YWUxMzRiYjY4MzBjNSIsImlhdCI6MTY3ODgxMDEzNSwiZXhwIjoxNjgxNDAyMTM1fQ.TLXpNq31K7We5WNUPbm0q9UMzmdWp3ahZD2GePOLTZ0';
    
let config = {
     headers: {
       'Authorization': 'Bearer ' + token
     }
   }

//const response = await axios.get(GetUsers);
// const response = await axios.get(`/api/users`);

     const response = await axios.get(GetUsers,{},config);
    
      console.log("Response register : ", response.data);
   const results=response.data.data.data;
   console.log("Response registerreee : ", results);
   localStorage.setItem('users',JSON.stringify(response.data));

    return JSON.stringify(response.data);

  } catch (error) { 
    if (error) {
      const { response } = error;
      return response;
    }
  }
};