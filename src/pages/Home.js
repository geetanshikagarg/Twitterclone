import React from "react";
import LeftSection from "../components/LeftSection";
import CenterSection from "../components/CenterSection";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RightSection from "../components/RightSection";

const Home = () => {
  const [allTweets, setallTweets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => 
    getTweets(), 100)
  }, []);

  const getTweets = async () => {
    try {
      const data = await fetch("https://twittertweets.free.beeceptor.com/");
      const result = await data.json();
      setallTweets(result);
     
    } catch (error) {
      navigate("/error");
    }
  };
 return (
    <main className="homepage ">
       <div id="fixed">
       <LeftSection/>
       </div>
     

      <CenterSection
      allTweets={allTweets}
      setallTweets={setallTweets}
      
      />

      <RightSection
      allTweets={allTweets}/>
    </main>
  );
};

export default Home;
