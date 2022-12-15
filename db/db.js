import {Sequelize} from 'Sequelize';

const db = new Sequelize ('ppt', 'root','',{

    host : 'localhost',
    dialect: 'mysql'
});
export default db;