import CheckToken from './middleware/middlewares.js';
import express from 'express'

const router = express.Router();
import apiUserRouter from './UserRoutes.js';
import apiConsultorioRouter from './ConsultorioRoutes.js';
import apiEspecialidadRouter from './EspecialidadRoutes.js';


// ESTE DE AQUI TENEMOS QUE CMABIARLO POR LOS CONTROLADORES APROPIADOS router.use('/transaction', CheckToken,apiTransactionRouter);
router.use('/user', apiUserRouter);
router.use('/consultorio', apiConsultorioRouter);
router.use('/especialidad', apiEspecialidadRouter)

export default router;