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
import apiMensajeriaRouter from './MensajeriaRoutes.js';
import apiMedico_EspecialidadRouter from './Medico_EspecialidadRoutes.js';


// ESTE DE AQUI TENEMOS QUE CMABIARLO POR LOS CONTROLADORES APROPIADOS router.use('/transaction', CheckToken,apiTransactionRouter);
router.use('/user', apiUserRouter);
router.use('/consultorio',CheckToken, apiConsultorioRouter);
router.use('/especialidad', apiEspecialidadRouter)
router.use('/turno',CheckToken, apiTurnoRouter)
router.use('/medico', apiMedicoRouter)
router.use('/medico_especialidad',CheckToken, apiMedico_EspecialidadRouter)
router.use('/servicio', apiServicioRouter)
router.use('/mensajeria',CheckToken, apiMensajeriaRouter)
router.use('/horario',CheckToken, apiHorarioRouter)

export default router;