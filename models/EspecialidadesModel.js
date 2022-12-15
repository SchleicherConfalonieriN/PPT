import db from "../db/db.js";
import {DataTypes} from "sequelize";



const EspecialidadModel = db.define('especialidades',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    Nombre: {type: DataTypes.STRING,   
        allowNull: false,
    }
}
);
await EspecialidadModel.sync(); // if the table dont exist sync  create  table
export default EspecialidadModel;   