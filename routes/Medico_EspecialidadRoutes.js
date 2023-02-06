import express from 'express'
import {Register,update, deleteEM, getAll} from '../controllers/Medico_EspecialidadController.js';
const router = express.Router();

router.get("/",getAll);
router.post("/register",Register);
router.delete("/:id",deleteEM);
router.put("/:id",update);





export default router;