import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  const {
    id,
    location: { city, country },
    imageSource,
    username,
    profile,
  } = sampleDataForPhotoListItem;
  
  /* Insert React */

  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-details">
        <div className="photographer-info">
          <img id={id} src={profile} alt={`${username}'s profile`} />
          <p className="username">{username}</p>
        </div>
        <div className="location-info">
          <p className="location">
            {city}, {country}
          </p>
          <p className="photo-id">ID: {id}</p>
        </div>
      </div>
    </div>    
  );
};

export default PhotoListItem;
