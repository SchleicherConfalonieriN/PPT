import db from "../db/db.js";
import {DataTypes} from "sequelize";



const UserModel = db.define('users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    Name: {type: DataTypes.STRING,   
        allowNull: false,
    },
    LastName: {type: DataTypes.STRING,   
        allowNull: false,
    },

    Type: {type: DataTypes.STRING,   
        allowNull: false,
    },
    Email: {type: DataTypes.STRING,   
        allowNull: false,
        unique: true
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    Password: {type: DataTypes.STRING(500),
        allowNull: false,
    }
}
);
await UserModel.sync(); // if the table dont exist sync  create  table
export default UserModel;   