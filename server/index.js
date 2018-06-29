import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import itemsRouter from './routes/itemsRouter';
import sourceMapSupport from 'source-map-support';

const app = express();
const port = process.env.PORT || 3030;

sourceMapSupport.install();

const connection = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/item');
connection.once('open', () => {
    console.log('Database connection established successfully!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/items', itemsRouter);

app.listen(port, () => {
   console.log(`Server listening at port ${port}`);
});
