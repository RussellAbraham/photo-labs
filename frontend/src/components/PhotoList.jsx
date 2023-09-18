import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos} = props;
  const photosToRender = photos.map((data, index) => {
    return (      
        <PhotoListItem
          key={index}
          data={data}
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
