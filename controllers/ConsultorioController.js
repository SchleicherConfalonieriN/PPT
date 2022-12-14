import ConsultorioModel from "../models/ConsultorioModel.js"


//get all

export const getAll = async (req,res) =>{
    try{
        const consultorio = await ConsultorioModel.findAll({}); 
        res.json(consultorio)
    } catch(error){
        res.json ({message :error.message})
    }
}



//register

export const Register= async (req,res)=>{
    try {
        console.log(req.body);
        await ConsultorioModel.create(req.body)
        res.json({"message":"consultorio registrado correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deleteConsultorio = async (req, res) => {
    try {
        await ConsultorioModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

export const updateConsultorio = async(req,res)=>{
        try{
            await ConsultorioModel.update(req.body,{ 
                    where:{ id: req.body.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }