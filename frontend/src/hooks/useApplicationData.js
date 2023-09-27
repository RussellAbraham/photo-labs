// old file do not use, delete when sure
import React, {useState} from 'react';

const useApplicationData = () => {
  
  const state = {
    updateToFavPhotoIds : [],
    setPhotoSelected : null,
    onClosePhotoDetailsModal : false
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favourites, setFavourites] = useState([]);
  
  const toggleFavourites = (photoId) => {
    if(favourites.includes(photoId)){
      setFavourites(favourites.filter((id) => id !== photoId))
    } else {
      setFavourites([...favourites, photoId])
    }
  };
  
  const openModal = (photo) => {
    const {
      location: { city, country },
      urls:{full,regular},
      user : {username,name,profile,id}
    } = photo.data;
    setSelectedPhoto(photo.data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };  

  return {
    isModalOpen,
    selectedPhoto,
    favourites,
    toggleFavourites,
    openModal,
    closeModal
  }

};

export default useApplicationData;