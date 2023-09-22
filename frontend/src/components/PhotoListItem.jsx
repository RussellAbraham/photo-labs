import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {isFavourited, toggleFavourites, onPhotoClick} = props;
  const {
    location: { city, country },
    urls:{full,regular},
    user : {username,name,profile,id}
  } = props.data;
  /* Insert React */
  
  const handlePhotoClick = () => {
    onPhotoClick()
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavourited={isFavourited} toggleFavourites={toggleFavourites} />
      <img className="photo-list__image" src={regular} alt={`Photo by ${username}`} onClick={onPhotoClick} />
      <div className="photo-list__user-details">
        <img 
          className="photo-list__user-profile" 
          id={id} 
          src={profile} 
          alt={`${username}'s profile`}           
        />          
        <div className="photo-list__user-details">
          <p className="photo-list__user-info">{name}</p>
          <p className="photo-list__user-location">
            {city}, {country}
          </p>
        </div>
      </div>
    </div>    
  );
};

export default PhotoListItem;
