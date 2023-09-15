import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    location: { city, country },
    imageSource,
    username,
    profile,
  } = props.data;
  /* Insert React */

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" id={id} src={profile} alt={`${username}'s profile`} />          
        <div className="photo-list__user-details">
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-location">
            {city}, {country}
          </p>
        </div>
      </div>
    </div>    
  );
};

export default PhotoListItem;
