import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useApplicationData from 'hooks/useReducer';

import topics from 'mocks/topics';
import photos from 'mocks/photos';


import './App.scss';

const App = () => {

  const {
    isModalOpen,
    selectedPhoto,
    favourites,
    toggleFavourites,
    openModal,
    closeModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onPhotoClick={openModal} favourites={favourites} toggleFavourites={toggleFavourites} />
      {isModalOpen && (<PhotoDetailsModal onClose={closeModal} selectedPhoto={selectedPhoto} favourites={favourites} toggleFavourites={toggleFavourites} />)}
    </div>
  );
};

export default App;
