import express from 'express';
import {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
} from "../controller/notes.controller.js";

const router = express.Router()

router.post('/tambahnotes', createNote);
router.get('/tampilkan', getAllNotes);
router.get('/tampilkanbyid/:id', getNoteById);
router.put('/ubah/:id', updateNote);
router.delete('/hapus/:id', deleteNote)

export default router;