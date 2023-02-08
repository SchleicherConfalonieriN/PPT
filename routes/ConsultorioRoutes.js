import express from 'express'
import {getAll,Register,updateConsultorio, deleteConsultorio, getOne} from '../controllers/ConsultorioController.js';
const router = express.Router();

router.get("/",getAll);
router.post("/register",Register);
router.get("/:id",getOne)
router.delete("/:id",deleteConsultorio);
router.put("/:id",updateConsultorio);





export default router;