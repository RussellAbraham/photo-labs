import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {id, title} = props.topic;
  return (    
    <div className="topic-list__item" key={id} onClick={()=>props.updateTopic(id)}>
      <span>{title}</span>
    </div>    
  );
};

export default TopicListItem;
