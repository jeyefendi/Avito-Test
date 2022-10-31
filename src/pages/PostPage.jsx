import styles from "../components/Feed/Feed.module.sass";
import React, { useEffect, useState } from "react";
import { getStory } from "../services/api";
import { mapTime } from "../services/mapTime";


const PostPage = ({ storyId }) => {

  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    // eslint-disable-next-line
  }, []);

  return story && story.url ? (
      <div className={styles.story}>
        <h2>{story.title}</h2>
        <div className={styles.subtitle}>
          <span className={styles.author}>👤 {story.by}</span>
          <time dateTime={story.time}>⌛ {mapTime(story.time)}</time>
          <span className={styles.score}> ♥ {story.score}</span>
        </div>
      </div>
  ) : null;
}

export default PostPage;