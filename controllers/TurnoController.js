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
export const getDateByMedico = async (req,res) =>{
    try{
        console.log(req.body.id_medico)
        console.log(req.body.date)
        const turno = await TurnoModel.findAll({
            where:{ 
                id_medico: req.body.id_medico,
                Date: req.body.Date    
            }
        }); 
             
        res.json(turno)
    } catch(error){
        res.json ({message :error.message})
    }
}



export const getAllByPaciente = async(req,res) =>{
    try{
        const turno = await db.query(
            "SELECT turnos.id, medicos.id as id_medico, medicos.precio, medicos.nombre, medicos.apellido, medicos.nombre, turnos.Date FROM turnos join medicos on turnos.id_medico = medicos.id where turnos.id_paciente ="+ req.userId); 
        res.json(turno[0])

    }catch(error){
    res.json({message :error.message})
    }    
}









//register

export const Register= async (req,res)=>{
    try {
        await TurnoModel.create({
            id_paciente:req.userId,
            id_medico : req.body.id_medico,
            Date:req.body.Date,
            Hour:req.body.Hour
        })
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