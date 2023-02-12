import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';

const app = express();

const PORT = 8000;

dotenv.config();

app.listen(PORT, () => console.log(`Server is succefully running on PORT ${PORT} `));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);