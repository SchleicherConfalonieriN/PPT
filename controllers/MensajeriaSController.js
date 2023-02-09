import MensajeriaSModel from "../models/MensajeriaSModel.js"
import db from "../db/db.js"


//get all

export const getAllMedico = async (req,res) =>{
    try{
        const mensajeria = await MensajeriaSModel.findAll({
            where:{ 
                id_medico: req.userId}
        }); 
        res.json(mensajeria)
    } catch(error){
        res.json ({message :error.message})
    }
}

export const getAllPaciente = async (req,res) =>{
    try{
        const mensajeria = await MensajeriaSModel.findAll({
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
        await MensajeriaSModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

