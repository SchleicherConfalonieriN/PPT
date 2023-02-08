import Medico_EspecialidadModel from "../models/Medico_EspecialidadModel.js"
import db from "../db/db.js"


//get all

export const getAll = async (req,res) =>{

    
    try{
        
        const Medico_Especialidad = await db.query(
           "SELECT medico_especialidads.id, especialidades.Nombre,medicos.id as 'medico_id',especialidades.id as 'especialidad_id', medicos.precio, medicos.nombre, medicos.apellido FROM medico_especialidads join medicos on medico_especialidads.id_medico = medicos.id join especialidades on especialidades.id = medico_especialidads.id_especialidad;"); 
        res.json(Medico_Especialidad[0])
    } catch(error){
        res.json ({message :error.message})
    }
}



//register

export const Register= async (req,res)=>{
    try {
        await Medico_EspecialidadModel.create(req.body)
        res.json({"message":"especialidad registrada correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deleteEM = async (req, res) => {
    try {
        await Medico_EspecialidadModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

export const update = async(req,res)=>{
        try{
            await Medico_EspecialidadModel.update(req.body,{ 
                    where:{ id: req.params.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }