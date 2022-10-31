import styles from "./Feed.module.sass";
import Story from "./Story";
import React, { useEffect, useState } from "react";
import { getStoryIds } from "../../services/api";
import { useInfiniteScroll } from "../../services/useInfiniteScroll";

const Feed = () => {

  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <main className={styles.feed}>
      {storyIds.slice(0, count).map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </main>
  )
}

export default Feed;
