import MensajeriaModel from "../models/mensajeriaModel.js"
import db from "../db/db.js"


//get all

export const getAllMedico = async (req,res) =>{
    try{
        const revision  = await db.query("SELECT medicos.id as medicos_id, users.dni from users join medicos on users.dni = medicos.dni where users.id ="+req.userId);
        const resultante = JSON.parse(JSON.stringify(revision[0][0].medicos_id))


        const mensajeria = await MensajeriaModel.findAll({
            where:{ 
                id_generador: resultante,
                Generador:"medico"
            }
        }); 
        res.json(mensajeria)
    } catch(error){
        res.json ({message :error.message})
    }
}

export const getAllPaciente = async (req,res) =>{
    try{
        const mensajeria = await MensajeriaModel.findAll({
            where:{ 
                id_paciente: req.userId}
        }); 
        res.json(mensajeria)
    } catch(error){
        res.json ({message :error.message})
    }
}



export const deleteMensaje = async (req, res) => {
    try {
        await mensajeriaModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

