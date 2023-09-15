import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    id,
    location: { city, country },
    imageSource,
    username,
    profile,
  } = props.sampleDataForPhotoListItem;
  
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
