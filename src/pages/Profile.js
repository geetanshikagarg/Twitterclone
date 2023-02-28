import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import LeftSection from "../components/LeftSection";
import avtar from "../assets/avtar1.png"
import Navbar from "../components/Navbar";
import ClipLoader from "react-spinners/ClipLoader";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    try{
      const data = await fetch("https://tweeter.free.beeceptor.com/profile");
      const result = await data.json();
      setProfile(result);
      console.log("result")
    }
    catch(error){
      navigate("/error")
      console.log("error")
    }
   
  };

  return (
    <div className="profile-main">
      <LeftSection />
     
      <div className="profile-header">Profile</div>
      
       {/* <Navbar/> */}
      <hr className="thin-hr" />
      
      <div className="profile">
       <div className="dp">
        <img
         className="avtar"
         src={avtar}
         alt="No profile image"/>
        </div>
        {Object.keys(profile).length === 0 ? ( <ClipLoader/> ):(
        <div className="profile-body">
        <>   
        
            <span>
                First  Name : 
              {profile.first_name}
              </span >
              <span>
              Last Name : 
              {profile.last_name}
              </span>
     
              
              <span>
               Email :  {profile.email}
              </span>
              <span>
               Gender : {profile?.gender}
              </span>
              <span>
               Country : {profile?.country}
              </span>
            </>
        
        </div>
        )}
      </div>

    </div>
  );
};

export default Profile;
