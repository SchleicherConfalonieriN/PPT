import express from 'express'
import {Register,Login, updateUser} from '../controllers/UserController.js';
const router = express.Router();


router.post("/login",Login);
router.post("/register",Register);
router.put("/",updateUser);


export default router;