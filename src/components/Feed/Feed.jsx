import styles from './Feed.module.sass'
import Story from "./Story";
import React, {useEffect, useState} from "react";
import { getStoryIds } from '../../services/api';

const Feed = () => {

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);


  return storyIds.map(storyId =>
    <main className={styles.feed}>
      <Story key={storyId} storyId={storyId} />
    </main>
  )
}

export default Feed