import express from 'express'
import {getAll,Register,updateServicio, deleteServicio} from '../controllers/ServiciosController.js';
const router = express.Router();

router.get("/",getAll);
router.post("/register",Register);
router.delete("/:id",deleteServicio);
router.put("/:id",updateServicio);





export default router;