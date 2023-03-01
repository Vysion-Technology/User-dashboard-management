import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Router from './routes/routes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({exteded: true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', Router)

const PORT = 8000;

dotenv.config();

app.listen(PORT, () => console.log(`Server is succefully running on PORT ${PORT} `));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);