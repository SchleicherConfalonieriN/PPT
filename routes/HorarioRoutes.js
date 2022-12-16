import express from 'express'
import {Register,updateHorario, deleteHorario, getAllByMedico, getAllByServicio} from '../controllers/HorarioController.js';
const router = express.Router();

router.get("/",getAllByMedico);
router.get("/",getAllByServicio);
router.post("/register",Register);
router.delete("/:id",deleteHorario);
router.put("/:id",updateHorario);





export default router;