import express from 'express'
import {getAll,Register,updateEspecialidad, deleteEspecialidad, getMedicOptions, getByMedico} from '../controllers/EspecialidadesController.js';
const router = express.Router();

router.get("/",getAll);
router.get("/opciones/:id",getMedicOptions)
router.get("/medico/:id",getByMedico)
router.post("/register",Register);
router.delete("/:id",deleteEspecialidad);
router.put("/:id",updateEspecialidad);





export default router;