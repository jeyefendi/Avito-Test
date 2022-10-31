import styles from "./Feed.module.sass";
import { Link } from "react-router-dom";
import React, { useState, useEffect, memo } from "react";
import { getStory } from "../../services/api";
import { mapTime } from "../../services/mapTime";

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    // eslint-disable-next-line
  }, []);

  return story && story.url ? (
    <Link to={`/story/${storyId}`}>
      <div className={styles.story}>
        <h2>{story.title}</h2>
        <div className={styles.subtitle}>
          <span className={styles.author}>👤 {story.by}</span>
          <time dateTime={story.time}>⌛ {mapTime(story.time)}</time>
          <span className={styles.score}> ♥ {story.score}</span>
        </div>
      </div>
      <hr/>
    </Link>
  ) : null;
};

export default React.memo(Story);
