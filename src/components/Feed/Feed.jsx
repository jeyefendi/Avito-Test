import React from "react";
import Post from "./Post";
import styles from './Feed.module.sass'

const Feed = () => {
  return (
  <main className={styles.feed}>
    <Post/>
    <Post/>
    <Post/>
  </main>
  )
};

export default Feed;
