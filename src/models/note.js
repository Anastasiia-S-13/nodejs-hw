import { Schema } from 'mongoose';
import { model } from 'mongoose';

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    tag: {
      type: String,
      default: 'Todo',
      enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
    },
  },
);

export const Notes = model('Notes', notesSchema);
