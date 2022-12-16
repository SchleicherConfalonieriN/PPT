import HorarioModel from "../models/HorarioModel.js"



//get all

export const getAllByMedico = async (req,res) =>{
    try{
        const turno = await HorarioModel.findAll({
            where:{ 
                id_medico: req.Id}
        }); 
        res.json(transactions)
    } catch(error){
        res.json ({message :error.message})
    }
}

export const getAllByServicio = async (req,res) =>{
    try{
        const turno = await HorarioModel.findAll({
            where:{ 
                id_paciente: req.userId}
        }); 
        res.json(transactions)
    } catch(error){
        res.json ({message :error.message})
    }
}



//register

export const Register= async (req,res)=>{
    try {
        await TurnoModel.create(req.body)
        res.json({"message": "horario registrado correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deleteHorario = async (req, res) => {
    try {
        await HorarioModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

export const updateHorario = async(req,res)=>{
        try{
            await HorarioModel.update(req.body,{ 
                    where:{ id: req.body.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }