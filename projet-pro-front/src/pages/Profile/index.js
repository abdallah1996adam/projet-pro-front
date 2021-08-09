import React, {useState, useEffect} from "react";

import userService from "../../services/users";

const Profile = () => {

  const [userData, setUserData] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await userService.getById()
        console.log(response);
      }catch(error){
        console.log(error);
      }
     
    }
    fetchData()

  },[])


  return (
    <>
    <div>
      <h1>  Welcome to the secret</h1>
    </div>
   
    </>
  );
};

export default Profile;
