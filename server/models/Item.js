import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Item = new Schema({
    color: {
        type: String
    },
    number: {
        type: Number
    },
});

export default mongoose.model('Item', Item);
