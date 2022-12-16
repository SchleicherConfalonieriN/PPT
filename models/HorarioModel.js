import db from "../db/db.js";
import {DataTypes} from "sequelize";



const HorarioModel = db.define('horarios',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    id_medico: {
        type: DataTypes.INTEGER
    },
    id_servicio: {
    type: DataTypes.INTEGER
    },
    dia: {
        type: DataTypes.STRING
    },
    entrada: {type: DataTypes.STRING,   
        allowNull: false,
    },
    entrada: {type: DataTypes.STRING,   
        allowNull: false,
    }
}
);
await HorarioModel.sync(); // if the table dont exist sync  create  table
export default HorarioModel