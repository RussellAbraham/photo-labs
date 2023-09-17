import React from 'react';

import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <TopicList />
      <PhotoList/>
    </div>
  );
};

export default App;
