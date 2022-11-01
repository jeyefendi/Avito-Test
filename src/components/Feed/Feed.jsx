import styles from "./Feed.module.sass";
import Story from "./Story";
import { useQuery } from "react-query";
import { getStoryIds } from "../../services/api";

const Feed = () => {

  const { isLoading, data } = useQuery('hacker-news', getStoryIds)

  if (isLoading) {
    return <h2 className="mx-16 my-8">Loading...</h2>
  }

  return (
    <main className={styles.feed}>
      {data.slice(0, 100).map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </main>
  )
}

export default Feed;
