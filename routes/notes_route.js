const express = require('express');
const router = express.Router();
const {notesList,newNote,notesById,deleteNote,updateNote} = require('../controllers/notesController');

router.get('/',notesList);
router.post('/',newNote);

router.get('/:userid',notesById)
router.delete('/:userid',deleteNote);
router.patch('/:userid',updateNote);

module.exports = router;