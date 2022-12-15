import db from "../db/db.js";
import {DataTypes} from "sequelize";



const ConsultorioModel = db.define('consultorio',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    Numero: {type: DataTypes.STRING,   
        allowNull: false,
    }
}
);
await ConsultorioModel.sync(); // if the table dont exist sync  create  table
export default ConsultorioModel;   