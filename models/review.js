const Sequelize= require('sequelize');

const sequelize=require('../util/database');

const Review= sequelize.define('company-review',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false   
    },
    pros:Sequelize.STRING,
    cons: Sequelize.STRING,
    starRating: Sequelize.INTEGER
});

module.exports= Review;