import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    description: {
        type: 'String',
    },
    completed: {
        type: 'Boolean',
    },
    dateAdded: {
        type: 'Date',
        default: Date.now,
        required: true,
    },
});

export default mongoose.model('Todo', todoSchema);
