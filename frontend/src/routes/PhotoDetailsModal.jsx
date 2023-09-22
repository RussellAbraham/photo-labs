import React from 'react';

import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {onClose, selectedPhoto} = props;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={onClose} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <img className="photo-details-modal__image" src={selectedPhoto} />
      </div>      
    </div>
  )
};

export default PhotoDetailsModal;
