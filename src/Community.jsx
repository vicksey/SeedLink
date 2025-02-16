import React, { useState } from "react";
import "./Community.css";
import koki from "./images/Koki'o ke'oke'o.jpg";
import treeofLife from "./images/TreeofLife.jpg"
import YellowConeflower from "./images/yellowConeflower.jpg";
import userProfile from "./images/profilePhoto.png"; // Example profile picture
import { FaThumbtack } from "react-icons/fa"; // Import pin icon from react-icons

const updates = [
  {
    name: "Alice",
    plant: "Tree of Life",
    picture: treeofLife,
    update: "This resilient plant symbolizes renewal and growth, and my fern is thriving after I moved it to a sunnier spot!",
    comments: [],
    isPinned: false, // New field to track pinned status
  },
  {
    name: "John",
    plant: "Koki'o ke'oke'o",
    picture: koki,
    update: "Known for its striking white flowers, my Koki'o ke'oke'o surprised me with a new leaf this week. It’s truly thriving!",
    comments: [],
    isPinned: false,
  },
  {
    name: "Sophia",
    plant: "Yellow Coneflower",
    picture: YellowConeflower,
    update: "With its vibrant yellow petals, the Yellow Coneflower adds so much life to my garden. This month, my bamboo companion grew 2 inches taller!",
    comments: [],
    isPinned: false,
  }
];

const Community = () => {
  const [posts, setPosts] = useState(updates);
  const [commentInputs, setCommentInputs] = useState(posts.map(() => "")); // Tracks text for each input

  const handleCommentSubmit = (index, event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (commentInputs[index].trim() === "") return; // Prevent empty comments

      const updatedPosts = [...posts];
      updatedPosts[index].comments.push({
        text: commentInputs[index],
        user: "User" // You can replace "User" with dynamic user data if available
      });
      setPosts(updatedPosts);

      const updatedCommentInputs = [...commentInputs];
      updatedCommentInputs[index] = ""; // Clear the input box
      setCommentInputs(updatedCommentInputs);
    }
  };

  const handleCommentChange = (index, event) => {
    const updatedCommentInputs = [...commentInputs];
    updatedCommentInputs[index] = event.target.value;
    setCommentInputs(updatedCommentInputs);
  };

  const togglePin = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].isPinned = !updatedPosts[index].isPinned; // Toggle pinned status
    setPosts(updatedPosts);
  };

  return (
    <div className="community-container">
      <h1 className="community-title">Plant Community Updates</h1>
      <div className="updates-list">
        {posts.map((post, index) => (
          <div className="update-card" key={index}>
            <img src={post.picture} alt="Community Plants" className="community-image" />
            <div className="plant-info">
              <h2 className="plant-name">{post.plant}</h2>
              <FaThumbtack
                className={`pin-icon ${post.isPinned ? "pinned" : ""}`}
                onClick={() => togglePin(index)}
              />
            </div>
            <p className="plant-owner">Owner: {post.name}</p>
            <p className="plant-update">{post.update}</p>

            {/* Display all comments above the text box */}
            {post.comments.length > 0 && (
              <div className="comments-section">
                {post.comments.map((comment, idx) => (
                  <div key={idx} className="comment-card">
                    <img src={userProfile} alt="User Profile" className="comment-avatar" />
                    <div className="comment-content">
                      <p className="comment-user">{comment.user}</p>
                      <p className="plant-comment">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Comment input field */}
            <textarea
              placeholder="Any comments?"
              value={commentInputs[index]}
              onChange={(event) => handleCommentChange(index, event)}
              onKeyDown={(event) => handleCommentSubmit(index, event)}
              className="comment-input"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
