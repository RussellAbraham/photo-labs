import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {id, slug, title} = props.topic;
  return (
    <div className="topic-list__item">
      <a href={slug} key={id}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
