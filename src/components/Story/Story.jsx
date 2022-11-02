import styles from './Story.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { getSingleStory } from '../../services/api';
import { mapTime } from '../../services/mapTime';
import { useQuery } from 'react-query';


const Story = ({ storyId }) => {
    const { isLoading, data: story, isError, error } = useQuery(
        [ 'story', storyId ],
        () => getSingleStory(storyId),
    );

    if (isLoading) {
        return <h2 className="mx-16 my-8">Loading...</h2>;
    }

    if (isError) {
        return <h2 className="mx-16 my-8">{error.message}</h2>;
    }

    return story && (
        <Link to={`/post/${storyId}`}>
            <div className={styles.story}>
                <h2>{story.title}</h2>
                <div className={styles.subtitle}>
                    <span className={styles.author}>👤 {story.by}</span>
                    <time dateTime={story.time}>🕑 {mapTime(story.time)}</time>
                    <span className={styles.score}> ♥ {story.score}</span>
                </div>
            </div>
            <hr/>
        </Link>
    );
};

export default Story;
