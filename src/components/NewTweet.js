import React, { useState } from "react";
import avatar from "../assets/avtar1.png";
import "../css/centersection.css";
const NewTweet = ({ allTweets, setallTweets }) => {
const [input, setInput] = useState("");
//  const d = new Date();

const tweetpost = () => {
  const updatedList = [
    {
      userName: "Doe",
      date: "2023-02-09",
      tweet: input,
      numberOfLikes: 0,
      numberOfComments: 0,
      firstName: "John",
    },
    ...allTweets,
  ]
  setallTweets(updatedList);
  setInput("")
  };
  return (
    <div className="tweet">
      
      <div className="flex">
        <img
          className="dp"
          src={avatar}
          alt="user-avatar"
        />
        
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="tweet-input"
          type="text"
          placeholder="What's Happening?"
        />
      </div>
      <hr className="thin-hr" />
      {input==="" ?
      <button 
      disabled={true}
      onClick={tweetpost} className="tweet-btndisable">
      Tweet
      
      </button> 
       :
      <button 
      onClick={tweetpost} className="tweet-btn">
      Tweet
      </button>
}
      <hr className="thin-hr" />
    </div>
  );
};

export default NewTweet;
