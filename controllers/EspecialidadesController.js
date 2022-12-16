import EspecialidadModel from "../models/EspecialidadesModel.js"



//get all

export const getAll = async (req,res) =>{
    try{
        const especialidades = await EspecialidadModel.findAll({}); 
        res.json(especialidades)
    } catch(error){
        res.json ({message :error.message})
    }
}



//register

export const Register= async (req,res)=>{
    try {
        await EspecialidadModel.create(req.body)
        res.json({"message":"especialidad registrada correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deleteEspecialidad = async (req, res) => {
    try {
        await EspecialidadModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

export const updateEspecialidad = async(req,res)=>{
        try{
            await EspecialidadModel.update(req.body,{ 
                    where:{ id: req.body.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }