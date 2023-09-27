import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const {isFavourited, toggleFavourites} = props;

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavourites}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;