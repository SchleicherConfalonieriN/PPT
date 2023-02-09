import db from "../db/db.js";
import {DataTypes} from "sequelize";



const MensajeriaSModel = db.define('mensajerias',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    id_paciente: {
        type: DataTypes.INTEGER
    },
    id_servicio: {
    type: DataTypes.INTEGER
    },
    servicio: {
        type: DataTypes.STRING
    },
    paciente: {
        type: DataTypes.STRING
    },
    DateOld: {
        type: DataTypes.DATEONLY
    },
    DateNew: {
        type: DataTypes.DATEONLY
    },
    HourOld: {
        type: DataTypes.INTEGER
    },
    HourNew: {
        type: DataTypes.INTEGER
    },
    
    Leido: {
        type: DataTypes.STRING
    },
    Tipo: {
        type: DataTypes.STRING
    }    
}
);
await MensajeriaSModel.sync(); // if the table dont exist sync  create  table
export default MensajeriaSModel