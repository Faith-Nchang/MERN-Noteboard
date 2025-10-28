import express from "express"
import { addNote, deleteNote, getAllNotes, updateNote } from "../controllers/noteController.js";

const router = express.Router()


router.get("/", getAllNotes);
router.post("/", addNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);


export default router