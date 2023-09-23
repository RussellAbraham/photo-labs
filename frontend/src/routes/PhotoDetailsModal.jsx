import React from 'react';

import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import photos from 'mocks/photos';




const findSimilarPhotos = (id, arr) => {
  //const selectedPhoto = arr.find(photo => photo.id === id);
  //return selectedPhoto.similar_photos;
  return arr[id].similar_photos; 
};

const PhotoDetailsModal = (props) => {
  const { onClose, selectedPhoto } = props;
  const {
    id,
    location: { city, country },
    urls: { full },
    user: { username, name, profile },
  } = selectedPhoto;

  const similarPhotos = Object.values(findSimilarPhotos(id, photos));

  console.log(similarPhotos);
  
  const PhotoListArray = similarPhotos.map((photo) => {
    if(photo.id !== id) {
      return (
        <PhotoListItem 
          id={photo.id}
          key={photo.id}
          data={photo}
        />
      );
    }
  });

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={onClose} alt="close symbol" />
      </button>
      <div className="photo-details-modal__item">
        <div className="photo-details-modal__top-bar">
          <img className="photo-details-modal__image" src={full} alt={`Photo by ${username}`} />
        </div>
        <div className="photo-details-modal__user-details">
          <img className="photo-details-modal__user-profile" src={profile} alt={`${username}'s profile`} />
          <div className="photo-details-modal__user-info">
            <p>{name}</p>
            <p>
              {city}, {country}
            </p>
          </div>
        </div>
      </div>   
      <h3 className="photo-details-modal__header">Similar Photos</h3>
   
    </div>
  )
};

export default PhotoDetailsModal;
