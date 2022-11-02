import { useQuery } from 'react-query';
import { getSingleStory } from '../../services/api';


const Comment = ({ commentId }) => {
    const { isLoading, data, isError, error } = useQuery(
        [ 'story', 0 ],
        () => getSingleStory(0),
    );

    if (isLoading) {
        return <h2 className="mx-16 my-8">Loading...</h2>;
    }

    if (isError) {
        return <h2 className="mx-16 my-8">{error.message}</h2>;
    }

    console.log(data);

    return (
        <>
        </>
    );
};

export default Comment;
