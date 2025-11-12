import { Notes } from '../models/note.js';
import createHttpError from 'http-errors';

export const getNotes = async (req, res) => {
  const notes = await Notes.find();
  res.status(200).json(notes);
};

export const getNoteById = async (req, res, next) => {
  const { noteId } = req.params;
  const notes = await Notes.findById(noteId);

  if (!notes) {
    next(createHttpError(404, 'Student not found'));
    return;
  }

  res.status(200).json(notes);
};

export const createNote = async (req, res) => {
  const notes = await Notes.create(req.body);
  res.status(201).json(notes);
};

export const deleteNote = async (req, res, next) => {
  const { noteId } = req.params;
  const notes = await Notes.findOneAndDelete({
    _id: noteId,
  });

  if (!notes) {
    next(createHttpError(404, "Note not found"));
    return;
  }

  res.status(200).json(notes);
};


export const updateNote = async (req, res, next) => {
  const { noteId } = req.params;

  const notes = await Notes.findOneAndUpdate(
    { _id: noteId },
    req.body,
    { new: true },
  );

  if (!notes) {
    next(createHttpError(404, 'Note not found'));
    return;
  }

  res.status(200).json(notes);
};
