import pkg from 'discord.js';
import sqlite3 from 'sqlite3';

const { Client, Intents } = pkg;
const db = new sqlite3.Database('./db/message.db', sqlite3.OPEN_READWRITE);

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

const client = new Client({intents: myIntents});
client.on('messageCreate', async (message) => {
  // Log the message
  // console.log(message.channel.name);

  // Only track message from #announcements
  if (message.channel.name !== 'announcements') return;

  // Insert into the DB
  const stmt = db.prepare('INSERT INTO message(content) VALUES (?)');
  stmt.run(message.toString());
});

export default client;