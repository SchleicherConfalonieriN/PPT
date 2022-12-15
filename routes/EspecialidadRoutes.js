import express from 'express'
import {getAll,Register,updateEspecialidad, deleteEspecialidad} from '../controllers/EspecialidadesController.js';
const router = express.Router();

router.get("/",getAll);
router.post("/register",Register);
router.delete("/:id",deleteEspecialidad);
router.put("/:id",updateEspecialidad);





export default router;