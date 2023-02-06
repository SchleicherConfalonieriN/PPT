import CheckToken from './middleware/middlewares.js';
import express from 'express'

const router = express.Router();
import apiUserRouter from './UserRoutes.js';
import apiConsultorioRouter from './ConsultorioRoutes.js';
import apiEspecialidadRouter from './EspecialidadRoutes.js';
import apiTurnoRouter from './TurnoRoutes.js';
import apiMedicoRouter from './MedicoRoutes.js';
import apiServicioRouter from './ServicioRoutes.js';
import apiHorarioRouter from './HorarioRoutes.js';
import apiMedico_EspecialidadRouter from './Medico_EspecialidadRoutes.js';


// ESTE DE AQUI TENEMOS QUE CMABIARLO POR LOS CONTROLADORES APROPIADOS router.use('/transaction', CheckToken,apiTransactionRouter);
router.use('/user', apiUserRouter);
router.use('/consultorio',CheckToken, apiConsultorioRouter);
router.use('/especialidad',CheckToken, apiEspecialidadRouter)
router.use('/turno',CheckToken, apiTurnoRouter)
router.use('/medico',CheckToken, apiMedicoRouter)
router.use('/medico_especialidad',CheckToken, apiMedico_EspecialidadRouter)
router.use('/servicio',CheckToken, apiServicioRouter)
router.use('/horario',CheckToken, apiHorarioRouter)

export default router;