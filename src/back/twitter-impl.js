import twitter from 'twitter-api-sdk';
import axios from 'axios';
import config from './config.js';

const twitterClient = new twitter.Client(config.BEARER_TOKEN);

export const fetchLatestTweet = async () => {
  try {
      const response = await twitterClient.tweets.usersIdTweets(config.CLIENT_ID, {
          max_results: 5,
      });
      const urls = response.data.map((tweet) => `https://twitter.com/${config.CLIENT}/status/${tweet.id}`);
      let embeds = [];
      for await (const url of urls) {
        const result = await axios.get(`https://publish.twitter.com/oembed?url=${url}`);
        embeds.push(result.data.html);
      }
      return embeds;
  } catch (e) {
      console.log(e);
      return null;
  }
};
