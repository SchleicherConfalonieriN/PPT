import EspecialidadModel from "../models/EspecialidadesModel.js"
import db from "../db/db.js"
import Medico_EspecialidadModel from "../models/Medico_EspecialidadModel.js";


//get all

export const getAll = async (req,res) =>{
    try{
        const especialidades = await EspecialidadModel.findAll({}); 
        res.json(especialidades)
    } catch(error){
        res.json ({message :error.message})
    }
}


export const getMedicOptions = async (req,res) =>{
    try{

        const especialidades = await EspecialidadModel.findAll({})
        const relacion = await Medico_EspecialidadModel.findAll({
            where : {
                id_medico :req.params.id
            }
        })
        const lista = []
            especialidades.map( (e) => {
                var bandera = 0
                relacion.forEach((r) => {
                    if(e.id === r.id_especialidad){bandera = bandera + 1}
                        }
                    )
                
                if (bandera === 0 ){
                  lista.push(e);  
                }
                }
            )
        
        
        
                res.json(lista)

/* ESTA ES CON LA QUERY
        const especialidades = await db.query(
    "select especialidades.id, especialidades.Nombre,  medico_especialidads.id_medico from especialidades left join medico_especialidads on medico_especialidads.id_especialidad = especialidades.id where medico_especialidads.id_medico is Null or medico_especialidads.id_medico !="+ req.params.id
        ); 
        res.json(especialidades[0]) */
    } catch(error){
        res.json ({message :error.message})
    }
}


export const getByMedico = async (req,res) =>{
    try{
        
        const especialidades = await db.query(
    "select medico_especialidads.id, especialidades.Nombre, medico_especialidads.id_medico from especialidades left join medico_especialidads on medico_especialidads.id_especialidad = especialidades.id where medico_especialidads.id_medico ="+ req.params.id
   
        ); 

res.json(especialidades[0])
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
                    where:{ id: req.params.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }