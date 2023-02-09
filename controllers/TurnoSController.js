import TurnoSModel from "../models/TurnoSModel.js"
import db from "../db/db.js"


//get all

export const getAllByMedico = async (req,res) =>{
    try{
        const turno = await TurnoSModel.findAll({
            where:{ 
                id_medico: req.userId}
        }); 
        res.json(turnos)
    } catch(error){
        res.json ({message :error.message})
    }
}

export const getOne = async (req,res) =>{
    try{
        const turno = await TurnoSModel.findAll({
            where:{ 
                id_medico: req.params.id}
        }); 
        res.json(turnos)
    }catch(error){
        res.json ({message :error.message})
    }
}
export const getDateByMedico = async (req,res) =>{
    try{
        console.log(req.body.id_medico)
        console.log(req.body.date)
        const turno = await TurnoSModel.findAll({
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
            "SELECT turno_S.id, servicios.id as id_servicios, servicios.precio, servicios.nombre, turno_S.Date, turno_S.Hour FROM turno_S join servicios on turno_S.id_servicio = servicios.id where turno_S.id_paciente ="+ req.userId); 
        res.json(turno[0])

    }catch(error){
    res.json({message :error.message})
    }    
}









//register

export const Register= async (req,res)=>{
    try {
        await TurnoSModel.create({
            id_paciente:req.userId,
            id_servicio : req.body.id_servicio,
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
        await TurnoSModel.destroy({ 
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
    console.log("revsion updated")
    console.log(req.params.id)
        try{
            await TurnoSModel.update({
                Date:req.body.Date,
                Hour:req.body.Hour
            },{ 
                    where:{ id: req.params.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }