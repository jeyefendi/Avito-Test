import React from "react";
import Post from "./Post";
import styles from './Feed.module.sass'

const Feed = () => {
  return (
    <main className={styles.feed}>
      {Array(100).fill().map((_, index) => (
        <Post key={index} id={index+1}/>
      )
        )}
    </main>
  )
}

export default Feed