import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//const useToggle = function(initialState = false) {
//  const [state, setState] = useState(initialState);
//  const toggle = () => {
//    setState(!state);
//  };
//  return [state, toggle];
//};

function PhotoFavButton(props) {
  // {photoID, favs, toggleFav} = props;
  const {isFavourited, toggleFavourites} = props;
  // 
  //const [isIconSelected, toggleIcon] = useToggle(false);
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavourites}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;