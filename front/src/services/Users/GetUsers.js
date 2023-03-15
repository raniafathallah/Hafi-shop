
import axios from "axios";
import { useState ,useEffect} from "react";
import { GetUsers } from "../../config";

export const getUsers = async () => {
     console.log("in=side getusers");
     try {

           const local_User= await JSON.parse(localStorage.getItem('user'));
           // console.log("rtoken"+local_User.token);
      let config = {
     headers: {
       'Authorization': 'Bearer '+local_User.token
     }
     // user:local_User
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