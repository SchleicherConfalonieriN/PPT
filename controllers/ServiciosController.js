import ServicioModel from "../models/ServiciosModel.js"



//get all

export const getAll = async (req,res) =>{
    try{
        const servicio = await ServicioModel.findAll({}); 
        res.json(servicio)
    } catch(error){
        res.json ({message :error.message})
    }
}

export const getOne = async (req,res) =>{

    try{
        const servicio = await ServicioModel.findAll({},
            {where: {id:req.params.id}}
            ); 
   
        res.json(servicio)
    } catch(error){
        res.json ({message :error.message})
    }
}


//register

export const Register= async (req,res)=>{
    try {
        await ServicioModel.create(req.body)
        res.json({"message":"turno registrado correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deleteServicio = async (req, res) => {
    try {
        await ServicioModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

//editar

export const updateServicio = async(req,res)=>{
    console.log("revisando data")
    console.log(req.body.nombre)
    console.log(req.body.descripcion)
        try{
            await ServicioModel.update({
                nombre:req.body.nombre,
                precio:req.body.precio,
                descripcion:req.body.descripcion
            },{ 
                    where:{ id: req.params.id}}
            )
                    res.json("updated")
            } catch (error) {
                    res.json( {message: error.message} )
            }
        }