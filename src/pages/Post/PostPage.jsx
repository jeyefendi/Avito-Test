import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { getSingleStory } from "../../services/api";
import styles from "./Post.module.scss";
import Comment from "../../components/Comment/Comment";
import { mapTime } from "../../services/mapTime";

const PostPage = ({ match }) => {
  const storyId = match.params.id;

  const { isLoading, data, isError, error } = useQuery(["story", storyId], () =>
    getSingleStory(storyId)
  );

  if (isLoading) {
    return <h2 className="mx-16 my-8">Loading...</h2>;
  }

  if (isError) {
    return <h2 className="mx-16 my-8">{error.message}</h2>;
  }

  return (
    <div className={styles.container}>
      <div className="w-fit max-w-4xl min-h-fit bg-white p-8 shadow-xl rounded-lg my-20 mx-auto">
      <a target="_blank" rel="noopener noreferrer" href={data.url}><h2 className="text-gray-700 font-bold mb-10 hover:underline">{data.title}</h2></a>
        <div className="flex justify-between items-center">
            <div className="flex gap-4 text-2xl">
                <a target="_blank" rel="noopener noreferrer" href={data.url}
                className="bg-white text-black-700 my-2 px-8 py-4 text-2xl border-black-400 border-2 rounded-lg hover:bg-black hover:text-white hover:shadow-black-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                Read
                </a>

                <NavLink to="/">
                    <p className="bg-white text-black-700 my-2 px-8 py-4 text-2xl border-black-400 border-2 rounded-lg hover:bg-black hover:text-white hover:shadow-black-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                    Back
                    </p>
                </NavLink>
            </div>
          <div className="flex gap-4 text-2xl px-4">
            <span className={styles.author}>💬 {data.descendants}</span>
            <time dateTime={data.time}>🕑 {mapTime(data.time)}</time>
            <span className={styles.author}>👤 {data.by}</span>
          </div>
        </div>

        {data.kids &&
          data.kids.length &&
          data.kids.map((commentId) => <Comment commentId={commentId} />)}
      </div>
    </div>
  );
};

export default PostPage;
