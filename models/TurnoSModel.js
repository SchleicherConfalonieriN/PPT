import db from "../db/db.js";
import {DataTypes} from "sequelize";



const TurnoSModel = db.define('turno_S',{
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
    Date: {
        type: DataTypes.DATEONLY
    },
    Hour: {
        type: DataTypes.INTEGER
    }    
}
);
await TurnoSModel.sync(); // if the table dont exist sync  create  table
export default TurnoSModel