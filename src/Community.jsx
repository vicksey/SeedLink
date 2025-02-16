import React from "react";
import "@/Community.css";

const updates = [
  {
    name: "Alice",
    pet: "Buddy",
    picture: "./images/plant.png",
    update: "Buddy loves his new toy and has been playing non-stop!"
  },
  {
    name: "John",
    pet: "Mittens",
    picture: "",
    update: "Mittens found a cozy spot on the windowsill to nap."
  },
  {
    name: "Sophia",
    pet: "Charlie",
    picture: "",
    update: "Charlie went for his first swim and had a blast!"
  }
];

const Community = () => {
  return (
    <div className="community-container">
      <h1 className="community-title">Pet Community Updates</h1>
      <div className="updates-list">
        {updates.map((update, index) => (
          <div className="update-card" key={index}>
            <img src={update.picture} alt={`${update.pet}'s picture`} className="pet-picture" />
            <h2 className="pet-name">{update.pet}</h2>
            <p className="pet-owner">Owner: {update.name}</p>
            <p className="pet-update">{update.update}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
