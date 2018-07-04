import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import sourceMapSupport from 'source-map-support';

import itemsRouter from './routes/itemsRouter';
import {DB_ITEM} from './constants/uri';

const app = express();
const port = process.env.PORT || 3030;

sourceMapSupport.install();

mongoose.connect(`mongodb://${DB_ITEM}`);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connection established successfully!');
});

app.use(cors());
app.use(bodyParser.json());

app.use('/items', itemsRouter);

app.listen(port, () => {
   console.log(`Server listening at port ${port}`);
});
