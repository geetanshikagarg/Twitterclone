import React from "react";
import "../css/centersection.css";
import ViewTweet from "./ViewTweet";
import NewTweet from "./NewTweet";
import Navbar from "./Navbar";
import ClipLoader from "react-spinners/ClipLoader";
const CenterSection = ({
  tweets,
  setTweets,
  allTweets,
  setallTweets,

}) => {
  return (
    <div className="center">
      <Navbar/>
      <hr className="thin-hr" />
      <NewTweet
        tweets={tweets}
        setTweets={setTweets}
        allTweets={allTweets}
        setallTweets={setallTweets}
      />
      {
      allTweets.length === 0 ? <ClipLoader/> : 
      allTweets.map((tweet) => {
        return (
          <>
            <ViewTweet
              key={tweet.username}
              tweets={tweets}
              setTweets={setTweets}
              tweetContent={tweet}
              allTweets={allTweets}
              setallTweets={setallTweets}
             
            />
            <hr className="thin-hr" />
          </>
        );
      })}
    </div>
  );
};

export default CenterSection;
