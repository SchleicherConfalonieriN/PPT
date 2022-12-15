import db from "../db/db.js";
import {DataTypes} from "sequelize";



const ServicioModel = db.define('servicios',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    nombre: {type: DataTypes.STRING,   
        allowNull: false,
    },
    precio: {
    type: DataTypes.FLOAT
    },
    descripcion: {
        type: DataTypes.STRING(500)
        }
    }
);
await ServicioModel.sync(); // if the table dont exist sync  create  table
export default ServicioModel