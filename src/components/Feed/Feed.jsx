import React, {Component} from "react";
import Post from "./Post";
import styles from './Feed.module.sass'


const BASE_PATH = 'https://hacker-news.firebaseio.com/v0/';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query='

class Feed extends Component {

  state = {
    searchQuery: '',
    result: {},
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(error => error);
  }

  setNews = result => {
    this.setState({ result });
  }

  render() {
    return (
      <main className={styles.feed}>
        <Post/>
        <Post/>
        <Post/>
      </main>
    );
  }
}

export default Feed;