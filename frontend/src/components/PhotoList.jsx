import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, toggleFavourites, favourites, onPhotoClick} = props;
  const PhotoListArray = photos.map((data, index) => {
    const isFavourited = favourites.includes(data.id);
    return (      
        <PhotoListItem
          key={index}
          data={data}
          isFavourited={isFavourited}
          toggleFavourites={()=>toggleFavourites(data.id)}
          onPhotoClick={onPhotoClick}
        />
      );    
  });

  return (
    <ul className="photo-list">
      {props.children || PhotoListArray}
    </ul>
  );

};

export default PhotoList;
