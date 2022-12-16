import express from 'express'
import {Register,updateMedico, deleteMedico, getAll} from '../controllers/MedicoController.js';
const router = express.Router();

router.get("/",getAll);
router.post("/register",Register);
router.delete("/:id",deleteMedico);
router.put("/:id",updateMedico);





export default router;