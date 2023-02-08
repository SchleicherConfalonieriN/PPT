import express from 'express'
import {deleteMensaje, getAllMedico, getAllPaciente} from '../controllers/MensajeriaController.js';
const router = express.Router();

router.get("/",getAllPaciente);
router.get("/",getAllMedico);
router.post("/",)
router.delete("/:id",deleteMensaje);






export default router;