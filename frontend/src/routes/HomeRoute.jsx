import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {

  const { topics, photos, onPhotoClick, favourites, toggleFavourites, updateTopic } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} updateTopic={updateTopic} />
      <PhotoList 
        photos={photos} 
        toggleFavourites={toggleFavourites} 
        favourites={favourites} 
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
