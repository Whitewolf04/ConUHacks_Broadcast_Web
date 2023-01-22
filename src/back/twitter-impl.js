import twitter from 'twitter-api-sdk';
import config from './config.js';

const twitterClient = new twitter.Client(config.BEARER_TOKEN);

export const fetchLatestTweet = async () => {
  try {
      const response = await twitterClient.tweets.usersIdTweets(config.CLIENT_ID, {
          max_results: 5,
      });
      return response.data.map((tweet) => `https://twitter.com/${config.CLIENT}/status/${tweet.id}`);
  } catch (e) {
      console.log(e);
      return null;
  }
};
