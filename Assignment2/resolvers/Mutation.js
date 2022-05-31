exports.Mutation = {
  createTweet: (_, { body }) => {
    const nextTweetId =
      tweets.reduce((id, tweet) => {
        return Math.max(id, tweet.id);
      }, -1) + 1;
    const newTweet = {
      id: nextTweetId,
      date: new Date(),
      author_id: currentUserId,
      body,
    };
    tweets.push(newTweet);
    return newTweet;
  },
};
