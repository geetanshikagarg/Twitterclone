import React, { useState } from "react";
import "../css/rightsection.css";

const RightSection = ({allTweets}) => {
  const [val, setVal] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (searchedTweet) => {
    if (searchedTweet === '') {
      setSearchResult([]);
    } else {
      const searchedTweetList = allTweets.filter((item) =>
        item.tweet.toLowerCase().includes(searchedTweet.toLowerCase())
      );
      setSearchResult(searchedTweetList);
    }
  };

  return (
    <div className="right-panel">
      <div className="rightpanel-searchbar ">
        <i className="rightpanel-searchbar-icon fa-solid fa-magnifying-glass"></i>
        <input
          value={val}
          autoFocus="true"
          onChange={(e) => {
            setVal(e.target.value);
            handleSearch(e.target.value);
          }}
          placeholder="Search Twitter"
          className="searchbar-input"
          type="text"
        />
      </div>

      <div className="rightpanel-seachresult">
        {searchResult.length === 0 ? (
         allTweets?.map((item) => {
          return (
            <span>
              {item.tweet}
              <hr className="thin-hr" />
            </span>
          );
        })
      
        ) : (
          searchResult.map((item) => {
            return (
              <span>
                {item.tweet}
                <hr className="thin-hr" />
              </span>
            );
          })
        )}
      </div>

    </div>
  );
};

export default RightSection;
