import express from 'express'
import {Register,updateMedico, deleteMedico, getAll, getById} from '../controllers/MedicoController.js';
const router = express.Router();

router.get("/",getAll);
router.get("/info/:id",getById)
router.post("/register",Register);
router.delete("/:id",deleteMedico);
router.put("/:id",updateMedico);





export default router;