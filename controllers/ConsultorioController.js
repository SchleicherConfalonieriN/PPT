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


export const getOne = async (req, res) => {
    try{
     
        const consultorio = await ConsultorioModel.findAll({
            where: {id_medico : req.params.id}
          }); 
        res.json(consultorio[0])
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
            await ConsultorioModel.update(
                {id_medico:req.body.id_medico},
                {where:{id:req.params.id}}
            )
            res.json("intento")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }