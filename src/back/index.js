import express from 'express';
import sqlite3 from 'sqlite3';

import client from './discord-impl.js';
import config from './config.js';
import calendarMock from '../../mock/calendar.js';
import { fetchLatestTweet } from './twitter-impl.js';

/** Discord  */

client.login(config.DISCORD_TOKEN).then();

/** SQLite */

const db = new sqlite3.Database('./db/message.db');

/** Express App -- Main */

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})

// Fetch all saved Discord announcements
app.get('/api/getDiscord', async (req, res) => {
  let contents = [];
  db.each("SELECT content FROM message", (err, row) => {
    contents.push(`${row.content}`);
  })
  await new Promise(r => setTimeout(r, 100)); // IT HAS TO STAY
  res.send(contents);
})

// Fetch the embeds for the 5 latest tweets 
app.get('/api/getTwitter', async (req, res) => {
  const latestFive = await fetchLatestTweet();
  res.send(latestFive);
})

// Fetch the upcoming events from Google Calendar
// @mocked
app.get('/api/getCalendar', async (req, res) => {
  res.send(calendarMock);
})