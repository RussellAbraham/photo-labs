import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import topics from 'mocks/topics';
import photos from 'mocks/photos';


import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };  

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onPhotoClick={openModal} />
      {isModalOpen && (<PhotoDetailsModal onClose={closeModal} />)}
    </div>
  );
};

export default App;
