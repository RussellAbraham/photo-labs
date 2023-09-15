import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const useToggle = function(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

function PhotoFavButton() {
  const [isIconSelected, toggleIcon] = useToggle(false);
  return (
    <div className="photo-list__fav-icon" onClick={toggleIcon}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon  selected={isIconSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;