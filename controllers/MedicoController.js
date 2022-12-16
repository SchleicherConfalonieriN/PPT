import MedicoModel from "../models/MedicoModel.js"



//get all

export const getAll = async (req,res) =>{
    try{
        const Medico = await MedicoModel.findAll({
        }); 
        res.json(Medico)
    } catch(error){
        res.json ({message :error.message})
    }
}


//register

export const Register= async (req,res)=>{
    try {
        await MedicoModel.create(req.body)
        res.json({"message": "Medico registrado correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deleteMedico = async (req, res) => {
    try {
        await MedicoModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

export const updateMedico = async(req,res)=>{
        try{
            await MedicoModel.update(req.body,{ 
                    where:{ id: req.body.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }