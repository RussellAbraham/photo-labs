import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const { topics, favourites, updateTopic } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} updateTopic={updateTopic} />
      <FavBadge favourites={favourites} selected={true} />
    </div>
  )
}

export default TopNavigation;