import express from 'express';
import sqlite3 from 'sqlite3';

import client from './discord-impl.js';
import config from './config.js';
import { fetchLatestTweet } from './twitter-impl.js';

/** Discord  */

client.login(config.DISCORD_TOKEN).then();

/** SQLite */

const db = new sqlite3.Database('./db/message.db');

/** Express App -- Main */

const app = express();

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})

app.get('/api/getDiscord', async (req, res) => {
  let contents = [];
  db.each("SELECT content FROM message", (err, row) => {
    contents.push(`${row.content}`);
  })
  await new Promise(r => setTimeout(r, 100)); // IT HAS TO STAY
  res.send(contents);
})

app.get('/api/getTwitter', async (req, res) => {
  const latestFive = await fetchLatestTweet();
  res.send(latestFive);
})