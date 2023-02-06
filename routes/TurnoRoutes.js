import express from 'express'
import {getAllByMedico,getDateByMedico,getAllByPaciente,Register,updateTurno, deleteTurno} from '../controllers/TurnoController.js';
const router = express.Router();

router.get("/",getAllByMedico);
router.post("/date",getDateByMedico);
router.get("/Paciente",getAllByPaciente);
router.post("/register",Register);
router.delete("/:id",deleteTurno);
router.put("/:id",updateTurno);





export default router;