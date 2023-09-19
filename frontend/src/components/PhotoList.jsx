import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, toggleFavourites, favourites} = props;
  const photosToRender = photos.map((data, index) => {
    const isFavourited = favourites.includes(data.id);
    return (      
        <PhotoListItem
          key={index}
          data={data}
          isFavourited={isFavourited}
          toggleFavourites={()=>toggleFavourites(data.id)}
        />
      );    
  });

  return (
    <ul className="photo-list">
      {photosToRender}
    </ul>
  );

};

export default PhotoList;
