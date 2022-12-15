import EspecialidadModel from "../models/EspecialidadesModel.js"






//register

export const Register= async (req,res)=>{
    try {
        await EspecialidadeModel.create(req.body)
        res.json({"message":"consultorio registrado correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deleteEspecialidad = async (req, res) => {
    try {
        await EspecialidadeModel.destroy({ 
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