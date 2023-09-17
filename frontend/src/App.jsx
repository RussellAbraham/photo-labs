import React from 'react';

import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      <PhotoList/>
      {/*
        <TopicList />
        
      */}
    </div>
  );
};

export default App;
