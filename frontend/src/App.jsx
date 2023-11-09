import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {

  const {
    isModalOpen,
    selectedPhoto,
    favourites,
    toggleFavourites,
    openModal,
    closeModal,
    updateTopic,
    photos,
    topics
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onPhotoClick={openModal} favourites={favourites} toggleFavourites={toggleFavourites} updateTopic={updateTopic} />
      {isModalOpen && (<PhotoDetailsModal onClose={closeModal} photos={photos} selectedPhoto={selectedPhoto} favourites={favourites} toggleFavourites={toggleFavourites} />)}
    </div>
  );
};

export default App;
