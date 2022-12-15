import express from 'express'
import {Register,updateConsultorio, deleteConsultorio} from '../controllers/ConsultorioController.js';
const router = express.Router();


router.post("/register",Register);
router.delete("/:id",deleteConsultorio);
router.put("/:id",updateConsultorio);





export default router;