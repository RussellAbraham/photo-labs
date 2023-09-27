import React from 'react';

import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import photos from 'mocks/photos';




const findSimilarPhotos = (id, arr) => {
  //const selectedPhoto = arr.find(photo => photo.id === id);
  //return selectedPhoto.similar_photos;
  return arr[id].similar_photos;
};

const PhotoDetailsModal = (props) => {
  const { onClose, selectedPhoto, favourites, toggleFavourites } = props;
  const {
    id,
    location: { city, country },
    urls: { full },
    user: { username, name, profile },
  } = selectedPhoto;

  const similarPhotos = Object.values(findSimilarPhotos(id, photos));
  const isFavourited = favourites.includes(selectedPhoto.id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={onClose} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton isFavourited={isFavourited} toggleFavourites={() => toggleFavourites(id)} />
        <img className="photo-details-modal__image" src={full} alt={`Photo by ${username}`} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={profile} alt={`${username}'s profile`} />
          <div className="photo-details-modal__photographer-info">
            <p>{name}</p>
            <p className="photo-details-modal__photographer-location">
              {city}, {country}
            </p>
          </div>
        </div>
      </div>

      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <div className="photo-details-modal__images">
        <PhotoList photos={similarPhotos} favourites={favourites} toggleFavourites={toggleFavourites} />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
