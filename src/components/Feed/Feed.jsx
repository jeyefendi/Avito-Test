import styles from "./Feed.module.sass";
import Story from "./Story";
import { useQuery } from "react-query";
import { getStoryIds } from "../../services/api";

const Feed = () => {
  const { isLoading, data, isError, error, refetch } = useQuery(
    "hacker-news",
    getStoryIds,
    {
      staleTime: 60000,
      refetchInterval: 60000,
      refetchIntervalInBackground: true,
    }
  );

  if (isLoading) {
    return <h2 className="mx-16 my-8">Loading...</h2>;
  }

  if (isError) {
    return <h2 className="mx-16 my-8">{error.message}</h2>;
  }

  return (
    <>
      <main className={styles.feed}>
        {data.slice(0, 100).map((storyId) => (
          <>
            <Story key={storyId} storyId={storyId} />
          </>
        ))}
      </main>
      <button onClick={refetch} className="absolute top-4 right-16">
        <img src="/refresh.png" alt="Refetch" className="w-16"/>
      </button>
    </>
  );
};

export default Feed;
