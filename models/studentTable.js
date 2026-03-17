const{Sequelize,Datatypes}=require('sequelize')
const sequelize=require('../utils/db-connection')
const Students=sequelize.define('Students',{
    id:{
        type:Datatypes.INTEGER,
        PRIMARYKEY:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:Datatypes.STRING,
        allowNull:false
    },
    email:{
        type:Datatypes.STRING,
        allowNull:false
    }
})
module.exports=Students