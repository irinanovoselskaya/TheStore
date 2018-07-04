import mongoose from 'mongoose';
import { LETTER_PATTERN, NUMBER_PATTERN} from '../constants/validationPatterns';

const Schema = mongoose.Schema;

let Item = new Schema({
    color: {
        type: String,
        validate: {
            validator: val => LETTER_PATTERN.test(val),
            message: 'invalid'
        },
        required: [true, 'required']
    },
    number: {
        type: Number,
        validate: {
            validator: val => NUMBER_PATTERN.test(val),
            message: 'invalid'
        },
        required: [true, 'required']
    },
});

export default mongoose.model('Item', Item);
