const Sequelize= require('sequelize');

const sequelize= new Sequelize(
    'review', 
    'root', 
    'Kom@l111', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports= sequelize