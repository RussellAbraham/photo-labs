import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {topics} = props;
  console.log(topics)
  const topicsToRender = topics.map((topic, index)=>{
    return (
      <TopicListItem 
        key={index}
        topic={topic}
      />
    );
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicsToRender}
    </div>
  );
};

export default TopicList;
