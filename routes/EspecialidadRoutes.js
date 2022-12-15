import express from 'express'
import {Register,updateEspecialidad, deleteEspecialidad} from '../controllers/EspecialidadesController.js';
const router = express.Router();


router.post("/register",Register);
router.delete("/:id",deleteEspecialidad);
router.put("/:id",updateEspecialidad);





export default router;