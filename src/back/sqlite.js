import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./db/message.db');

db.run('CREATE TABLE message (content TEXT)', (err) => {
  if (err) 
    console.log(err.message)
  else
    console.log('Created DB successfully!');
});