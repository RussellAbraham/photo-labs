import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {

  const { topics, photos } = props;

  const [favourites, setFavourites] = useState([]);
  
  const toggleFavourites = (photoId) => {
    if(favourites.includes(photoId)){
      setFavourites(favourites.filter((id) => id !== photoId))
    } else {
      setFavourites([...favourites, photoId])
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} />
      <PhotoList photos={photos} toggleFavourites={toggleFavourites} favourites={favourites} />
    </div>
  );
};

export default HomeRoute;
