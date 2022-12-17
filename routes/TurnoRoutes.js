import express from 'express'
import {getAllByMedico,getAllByPaciente,Register,updateTurno, deleteTurno} from '../controllers/TurnoController.js';
const router = express.Router();

router.get("/",getAllByMedico);
router.get("/Paciente",getAllByPaciente);
router.post("/register",Register);
router.delete("/:id",deleteTurno);
router.put("/:id",updateTurno);





export default router;