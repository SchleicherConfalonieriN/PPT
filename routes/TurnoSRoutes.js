import express from 'express'
import {getAllByMedico,getOne,getDateByMedico,getAllByPaciente,Register,updateTurno, deleteTurno} from '../controllers/TurnoSController.js';
const router = express.Router();

router.get("/",getAllByMedico);
router.get("/",getOne);
router.post("/date",getDateByMedico);
router.get("/Paciente",getAllByPaciente);
router.post("/register",Register);
router.delete("/:id",deleteTurno);
router.put("/:id",updateTurno);





export default router;