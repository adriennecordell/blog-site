const { Post } = require('../models');

const postdata = [
    {
        title: 'Is Python the coding language of 2022?',
        post_content: 'Python is a language growing in popularity...',
        user_id: 1
    },
    {
        title: 'Tips to a successful group project using Github!',
        post_content: 'One major tool to a successful group project is collaboration and Github helps with that.',
        user_id: 2
    },
    {
        title: 'How to kill a technical coding interview!',
        post_content: 'Be confident, Think through the problem outloud, Know your stuff!',
        user_id: 3
    },
    {
        title: 'Three great resources to practice code!',
        post_content: 'The app called Sololearn, leetCode.com, Imposters handbook the book!',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
