import db from "../db/db.js";
import {DataTypes} from "sequelize";



const MedicoModel = db.define('medicos',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    nombre: {type: DataTypes.STRING,   
        allowNull: false,
    },
    apellido: {type: DataTypes.STRING,   
        allowNull: false,
    },
    dni: {
        type: DataTypes.INTEGER,
        unique: true
    },
    precio: {
    type: DataTypes.FLOAT
    }
    }
);
await MedicoModel.sync(); // if the table dont exist sync  create  table
export default MedicoModel