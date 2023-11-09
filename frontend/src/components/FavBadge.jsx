import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const {favourites, selected} = props;
  
  const isFavPhotoExist = (arr) => {
    return arr.length > 0;
  };

  return (
    <div className='fav-badge'>
      <FavIcon selected={selected} displayAlert={!!isFavPhotoExist(favourites)}/>
    </div>
  ) 
};

export default FavBadge;