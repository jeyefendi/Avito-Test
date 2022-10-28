import React, {Component} from "react";
import Post from "./Post";
import styles from './Feed.module.sass'

class Feed extends Component {

  render() {
    
    return (
      <main className={styles.feed}>
        <Post/>
      </main>
    );
  }
}

export default Feed;