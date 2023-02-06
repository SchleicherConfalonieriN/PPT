import db from "../db/db.js";
import {DataTypes} from "sequelize";



const Medico_EspecialidadModel = db.define('Medico_Especialidad',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    id_medico: {type: DataTypes.INTEGER,   
        allowNull: false,
    },
    id_especialidad: {type: DataTypes.INTEGER,   
        allowNull: false,
       }
    }
);
await Medico_EspecialidadModel.sync(); // if the table dont exist sync  create  table
export default Medico_EspecialidadModel;   