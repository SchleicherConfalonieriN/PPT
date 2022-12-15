import db from "../db/db.js";
import {DataTypes} from "sequelize";



const TurnoModel = db.define('turno',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    id_paciente: {
        type: DataTypes.INTEGER
    },
    id_medico: {
    type: DataTypes.INTEGER
    },
    Date: {
        type: DataTypes.DATE
    }
    
}
);
await TurnoModel.sync(); // if the table dont exist sync  create  table
export default TurnoModel