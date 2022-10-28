import React from 'react';
import styles from './Feed.module.sass'

const Post = () => {
  return (
    <>
    <div className={styles.post}>
      <span>William Furgurson</span>
      <time dateTime='2022-10-06'>Oct 6</time>
      <h2>How to communicate effectively as a developer</h2>
      <span className={styles.rate}>69</span>    
    </div>
    <hr/>
    </>
  )
}

export default Post