import React from 'react';
import styles from './Feed.module.sass'

const Post = () => {
  return (
    <>
    <div className={styles.post}>
      <span className={styles.author}>William Furgurson</span>
      <h2>How to communicate effectively as a developer</h2>
      <time dateTime='2022-10-06'>Oct 6 </time>
      <span className={styles.rate}> ♥ 69</span>    
    </div>
    <hr/>
    </>
  )
}

export default Post