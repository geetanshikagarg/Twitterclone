import React, {useState} from "react"
import "../css/centersection.css";

const ViewTweet = ({tweetContent, allTweets, setallTweets}) => {
    const {firstName, userName, date, tweet, numberOfLikes, numberOfComments } = tweetContent;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTweet, setEditedTweet] = useState(tweet)

    const handleDeleteTweet = (tweetDel) => {
      const updatedList = allTweets.filter(item => item.tweet !== tweetDel)
      setallTweets(updatedList)
      alert("Tweet Deleted!!")
    }

    const handleEditTweet = (tweetToEdit) => {
      setIsEditing(false);
      const updatedListAfterEdit = allTweets.map(item => {
        // console.log(tweetToEdit,"toedit")
        if(item.tweet == tweetToEdit){
          return {
            ...item,
            tweet: editedTweet
        
          }
          
        }
        return item;
      })
     setallTweets(updatedListAfterEdit);
    }
   

    return (
      
      <div className="viewtweet">
        <div className="viewtweet-header">
          <span className="viewtweet-name">{firstName} </span>
          <span className="viewtweet-username">@{userName}</span>
          <span className="viewtweet-date">{date}</span>
        </div>
        
        <div className="viewtweet-content">
          
          {!isEditing ? tweet :(
          <div>
          <input
          onChange = {(e) => setEditedTweet(e.target.value)}
          value={editedTweet}
          className="tweet-input"
          type="text"
          placeholder={editedTweet}
        />
        <button onClick = {()=> handleEditTweet(tweet)}
         className="btn">Edit</button>
         
        </div>
        
        )
      }
        </div>
        <div className="viewtweet-adds">
          <span className="viewtweet-likes">
            <i className="fa-regular fa-heart"></i> { numberOfLikes}
          </span>
          <span className="viewtweet-comments">
            <i className="fa-regular fa-comment"></i> { numberOfComments}
          </span>
          <span onClick = {() => {setIsEditing(true)
                                   setEditedTweet(tweet)} }
          className="viewtweet__more__edit">
             <i className="fa-regular fa-pen-to-square"></i>
          </span>
          <span onClick = {()=> handleDeleteTweet(tweet)} className="viewtweet__more__delete">
            <i className="fa-solid fa-trash"></i>
          </span>
        </div>
      </div>
    );
  };
  
  export default ViewTweet;