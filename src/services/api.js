import axios from 'axios';


export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const storyUrl = `${baseUrl}/item`;

export const getSingleComment = () => {

};

export const getSingleStory = async (storyId) => {
    const { data } = await axios.get(`${storyUrl}/${storyId}.json`);

    return data;
};

export const getStoryIds = async () => {
    const { data } = await axios.get(newStoriesUrl);

    return data.slice(0, 100);
};