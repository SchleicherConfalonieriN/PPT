import express from 'express'
import {deleteMensaje, getAllMedico, getAllPaciente} from '../controllers/MensajeriaController.js';
const router = express.Router();

router.get("/paciente",getAllPaciente);
router.get("/medico",getAllMedico);
router.post("/",)
router.delete("/:id",deleteMensaje);






export default router;