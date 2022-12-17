import TurnoModel from "../models/TurnoModel.js"
import db from "../db/db.js"


//get all

export const getAllByMedico = async (req,res) =>{
    try{
        const turno = await TurnoModel.findAll({
            where:{ 
                id_medico: req.userId}
        }); 
        res.json(turnos)
    } catch(error){
        res.json ({message :error.message})
    }
}

/*export const getAllByPaciente = async (req,res) =>{
    try{
        const turno = await TurnoModel.findAll({
            where:{ 
                id_paciente: req.userId}
        }); 
        res.json(turnos)
    } catch(error){
        res.json ({message :error.message})
    }
}
*/
export const getAllByPaciente = async (req,res) =>{
    try{
        const turno = await db.query(
            "SELECT * FROM turnos join medicos on turnos.id_medico = medicos.id where turnos.id_paciente = 3"); 
        res.json(turno)
    } catch(error){
        res.json ({message :error.message})
    }
}




//register

export const Register= async (req,res)=>{
    try {
        await TurnoModel.create(req.body)
        res.json({"message":"turno registrado correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deleteTurno = async (req, res) => {
    try {
        await TurnoModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

export const updateTurno = async(req,res)=>{
        try{
            await TurnoModel.update(req.body,{ 
                    where:{ id: req.body.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }