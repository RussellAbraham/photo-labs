import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import topics from 'mocks/topics';
import photos from 'mocks/photos';


import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const openModal = (photo) => {
    const {
      location: { city, country },
      urls:{full,regular},
      user : {username,name,profile,id}
    } = photo.data;
    setSelectedPhoto(regular);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };  

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onPhotoClick={openModal} />
      {isModalOpen && (<PhotoDetailsModal onClose={closeModal} selectedPhoto={selectedPhoto} />)}
    </div>
  );
};

export default App;
